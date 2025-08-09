const fs = require('fs');
const path = require('path');

// Copy src/app to app in root
const srcAppPath = path.join(__dirname, 'src', 'app');
const rootAppPath = path.join(__dirname, 'app');

if (fs.existsSync(srcAppPath)) {
  // Remove existing app directory if it exists
  if (fs.existsSync(rootAppPath)) {
    fs.rmSync(rootAppPath, { recursive: true, force: true });
  }
  
  // Copy src/app to app
  fs.cpSync(srcAppPath, rootAppPath, { recursive: true });
  console.log('Copied src/app to app directory');
}

console.log('Build preparation complete');
