const Sharp = require('sharp');
const fs = require('fs');

function resizeImage(image, width, height, outputPath) {
  return new Sharp(image).resize(width, height).toFile(outputPath);
}

const source = fs.readFileSync('./src/icon.jpeg');

resizeImage(source, 128, 128, './dist/icon-128.png');
resizeImage(source, 64, 64, './dist/icon-64.png');
resizeImage(source, 48, 48, './dist/icon-48.png');
resizeImage(source, 32, 32, './dist/icon-32.png');
resizeImage(source, 16, 16, './dist/icon-16.png');
