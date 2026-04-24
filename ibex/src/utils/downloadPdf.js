export function downloadBase64Pdf(base64, filename) {
  if (!base64) {
    return false;
  }

  const link = document.createElement("a");
  link.href = `data:application/pdf;base64,${base64}`;
  link.download = filename;
  link.click();
  return true;
}