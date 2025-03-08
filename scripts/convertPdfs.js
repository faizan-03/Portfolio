import { fromPath } from 'pdf2pic';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory paths
const certificatesDir = path.join(__dirname, '../src/assets/certificates');
const outputDir = path.join(__dirname, '../public/certificates');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Options for pdf2pic
const options = {
  density: 300,
  saveFilename: "certificate",
  savePath: outputDir,
  format: "jpg",
  width: 800,
  height: 600
};

// Process each PDF file
fs.readdir(certificatesDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter PDF files
  const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'));
  
  console.log(`Found ${pdfFiles.length} PDF files to convert`);

  // Convert each PDF
  pdfFiles.forEach(file => {
    const pdfPath = path.join(certificatesDir, file);
    const outputFilename = file.replace('.pdf', '').replace(/\s+/g, '_');
    
    console.log(`Converting ${file} to image...`);
    
    const convert = fromPath(pdfPath, {
      ...options,
      saveFilename: outputFilename
    });

    // Convert only the first page
    convert(1, { responseType: "buffer" })
      .then(result => {
        console.log(`Successfully converted ${file}`);
      })
      .catch(error => {
        console.error(`Error converting ${file}:`, error);
      });
  });
});

console.log('PDF conversion process started. Check the public/certificates directory for output images.'); 