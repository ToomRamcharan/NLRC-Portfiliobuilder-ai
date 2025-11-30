
// Download ZIP functionality
const btnDownloadZip = document.getElementById('btn-download-zip');

if (btnDownloadZip) {
    btnDownloadZip.addEventListener('click', async () => {
        if (!currentGeneratedCode) {
            alert('Please generate a portfolio first!');
            return;
        }

        try {
            const zip = new JSZip();

            // Add the HTML file
            zip.file('index.html', currentGeneratedCode);

            // Add README
            const readme = `# Portfolio Website

This portfolio was generated using NLRC Portfolio Builder AI.

## How to Use

1. Open index.html in any modern web browser
2. The portfolio is a single-file HTML with embedded CSS
3. You can host this on GitHub Pages, Netlify, or any static hosting service

## Customization

The HTML file contains all styles inline. You can:
- Edit the HTML directly to change content
- Modify the <style> section to adjust colors and layout
- Add your own images by replacing the base64 encoded ones

Generated with ❤️ by NLRC Portfolio Builder AI
`;
            zip.file('README.md', readme);

            // Generate the ZIP file
            const blob = await zip.generateAsync({ type: 'blob' });

            // Download using FileSaver.js
            saveAs(blob, 'portfolio.zip');

        } catch (error) {
            console.error('Error creating ZIP:', error);
            alert('Failed to create ZIP file. Please try again.');
        }
    });
}
