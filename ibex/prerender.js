import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import puppeteerCore from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;
const DIST_DIR = path.resolve(__dirname, 'dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');

// 1. Start a local server to serve the build
const app = express();
app.use(express.static(DIST_DIR));
// Fallback for SPA routing
app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
});

const server = app.listen(PORT, async () => {
    console.log(`[Prerender] Local server running on http://localhost:${PORT}`);
    
    let browser;
    try {
        // 2. Parse sitemap.xml to get routes
        if (!fs.existsSync(SITEMAP_PATH)) {
            console.error('[Prerender] sitemap.xml not found in dist/. Skipping prerender.');
            process.exit(1);
        }
        
        const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
        const matches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
        let routes = matches.map(m => {
            const urlObj = new URL(m[1]);
            return urlObj.pathname + urlObj.search;
        });

        // Add 404
        routes.push('/404');

        // 3. Launch Puppeteer
        if (process.env.VERCEL || process.env.CI) {
            browser = await puppeteerCore.launch({
                args: chromium.args,
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: chromium.headless,
            });
        } else {
            browser = await puppeteer.launch({ headless: "new" });
        }
        const page = await browser.newPage();
        
        // Log page errors
        page.on('console', msg => console.log('[Browser Console]', msg.text()));
        page.on('pageerror', err => console.error('[Browser Error]', err));

        // 4. Visit each route and save HTML
        for (const route of routes) {
            console.log(`[Prerender] Processing ${route}...`);
            const targetUrl = `http://localhost:${PORT}${route}`;
            
            // Wait until network is idle so React mounts and Helmet updates tags
            await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });
            
            // Extract full HTML
            let html = await page.content();
            
            // Prepare file path
            const cleanRoute = route.split('?')[0]; // Handle query params if any
            let filePath = path.join(DIST_DIR, cleanRoute);
            
            if (cleanRoute === '/' || cleanRoute === '') {
                filePath = path.join(DIST_DIR, 'index.html');
            } else {
                // e.g. /trekking -> /trekking/index.html
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath, { recursive: true });
                }
                filePath = path.join(filePath, 'index.html');
            }
            
            fs.writeFileSync(filePath, html);
            console.log(`[Prerender] Saved ${filePath}`);
        }
        
    } catch (err) {
        console.error('[Prerender] Error during prerendering:', err);
        process.exit(1);
    } finally {
        if (browser) await browser.close();
        server.close();
        console.log('[Prerender] Complete.');
        process.exit(0);
    }
});
