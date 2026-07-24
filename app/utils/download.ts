export async function downloadFile(url: string, filename: string) {
  try {
    // Fetch the data and convert to blob to bypass mobile browser restrictions on large data URLs
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the object URL
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Download failed, falling back to direct link:", error);
    // Fallback for CORS issues or other fetch failures
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}