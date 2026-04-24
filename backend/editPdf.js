const PDFDocument = require("pdfkit");
const fs = require("fs");

function generateInvoice(booking) {
  const doc = new PDFDocument();
  const filePath = `./invoices/Invoice-${booking.invoice}.pdf`;

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).text("IBEXICEAXE", { align: "center" });
  doc.moveDown();

  Object.entries(booking).forEach(([key, value]) => {
    doc.fontSize(12).text(`${key}: ${value}`);
  });

  doc.end();

  return filePath;
}

module.exports = generateInvoice;
