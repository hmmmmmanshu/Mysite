const fs = require('fs');
const path = require('path');

console.log('Current directory:', __dirname);
console.log('Checking for src/app directory...');

// Copy src/app to app in root
const srcAppPath = path.join(__dirname, 'src', 'app');
const rootAppPath = path.join(__dirname, 'app');

console.log('Source path:', srcAppPath);
console.log('Destination path:', rootAppPath);

if (fs.existsSync(srcAppPath)) {
  console.log('Source directory exists');
  
  // Remove existing app directory if it exists
  if (fs.existsSync(rootAppPath)) {
    console.log('Removing existing app directory');
    fs.rmSync(rootAppPath, { recursive: true, force: true });
  }
  
  // Copy src/app to app
  try {
    fs.cpSync(srcAppPath, rootAppPath, { recursive: true });
    console.log('Successfully copied src/app to app directory');
    
    // Verify the copy worked
    if (fs.existsSync(rootAppPath)) {
      const files = fs.readdirSync(rootAppPath);
      console.log('Files in app directory:', files);
    } else {
      console.log('ERROR: app directory was not created');
    }
  } catch (error) {
    console.error('Error copying directory:', error);
    process.exit(1);
  }
} else {
  console.log('ERROR: src/app directory does not exist');
  console.log('Available directories in src:', fs.readdirSync(path.join(__dirname, 'src')));
  process.exit(1);
}

console.log('Build preparation complete');
