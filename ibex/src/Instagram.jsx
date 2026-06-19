import { useEffect, useState, useRef } from 'react';
import styles from './Instagram.module.css';

const Instagram = () => {
  const [instagramData, setInstagramData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const instagramUsername = 'ibex.iceaxe';
  const instagramLink = 'https://www.instagram.com/ibex.iceaxe?igsh=MW42MjhicnNtaThoYw%3D%3D';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Set default Instagram data
    setInstagramData({
      username: instagramUsername,
      followers: '30.6K',
      posts: '1.1K',
      following: '1.4K',
    });

    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    // Check periodically since the script loads asynchronously
    const addTitleToIframe = () => {
      const iframes = document.querySelectorAll('.instagram-media iframe');
      iframes.forEach(iframe => {
        if (!iframe.title) {
          iframe.title = 'Instagram Embed';
        }
      });
    };
    const intervalId = setInterval(addTitleToIframe, 1000);

    return () => clearInterval(intervalId);
  }, [isVisible]);

  return (
    <div className={styles.section} ref={containerRef}>
      <div className={styles.sectionIntro}>
        <p className={styles.sectionKicker}>Follow Our Journey</p>
        <h2 className={styles.sectionTitle}>
          Our <span>Instagram</span>
        </h2>
        <span className={styles.sectionDivider}></span>
      </div>

      <div className={styles.container}>
        {/* Profile Card */}
        {instagramData && (
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <div className={styles.profilePicPlaceholder}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                </svg>
              </div>
              <div className={styles.profileInfo}>
                <h3 className={styles.username}>
                  <a href={instagramLink} target="_blank" rel="noreferrer">
                    @{instagramData.username}
                    <svg className={styles.verifyBadge} viewBox="0 0 24 24" fill="#0095F6">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm-2 17l-5-5 1.4-1.4L10 14.2l7.6-7.6L19 8l-9 9z" />
                    </svg>
                  </a>
                </h3>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{instagramData.posts}</span>
                    <span className={styles.statLabel}>Posts</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{instagramData.followers}</span>
                    <span className={styles.statLabel}>Followers</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>{instagramData.following}</span>
                    <span className={styles.statLabel}>Following</span>
                  </div>
                </div>
              </div>
            </div>
            <a 
              href={instagramLink}
              target="_blank" 
              rel="noreferrer"
              className={styles.followBtn}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.6 2.1l-5.5 5.5m5.5-5.5h-4.5v4.5m0 9.8C12.8 16.8 8 20.5 2.3 20.5" />
              </svg>
              Follow
            </a>
          </div>
        )}

        {/* Instagram Grid Posts */}
        {isVisible && (
          <div className={styles.embedWrapper}>
            <div className={styles.instagramGrid}>
              <blockquote className="instagram-media" data-instgrm-permalink={instagramLink} data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'16px', boxShadow:'0 4px 20px rgba(0, 0, 0, 0.08)', margin:'0 40px', maxWidth:'none', minWidth:'auto', padding:0, width:'calc(100vw - 80px)'}}>
                <div style={{padding:'16px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div style={{flex:1}}>
                    <a href={instagramLink} target="_blank" rel="noreferrer" style={{background:'#FFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}}>
                      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div style={{backgroundColor:'#FFF', borderRadius:'50%', height:'40px', marginRight:'14px', width:'40px'}}></div>
                        <div style={{display:'flex', flexDirection:'column', flexGrow:1, justifyContent:'center'}}>
                          <div style={{backgroundColor:'#f4f4f4', borderRadius:'4px', flexGrow:0, height:'14px', marginBottom:'6px', width:'100px'}}></div>
                          <div style={{backgroundColor:'#f4f4f4', borderRadius:'4px', flexGrow:0, height:'14px', width:'60px'}}></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a 
                    href={instagramLink}
                    target="_blank" 
                    rel="noreferrer"
                    className={styles.inlineFollowBtn}
                  >
                    Follow
                  </a>
                </div>
                <div style={{padding:'0 16px 16px 16px'}}>
                  <p style={{color:'#c9c8cd', fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px', marginBottom:'0', marginTop:'8px', overflow:'hidden', padding:'8px 0 7px', textAlign:'center', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                    <a href={instagramLink} target="_blank" rel="noreferrer" style={{color:'#c9c8cd', fontFamily:'Arial,sans-serif', fontSize:'14px', fontStyle:'normal', fontWeight:'normal', lineHeight:'17px', textDecoration:'none'}}>Visit our Instagram</a>
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Instagram;
