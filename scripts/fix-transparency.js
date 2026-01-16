const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function fixTransparency() {
  const inputPath = path.join(__dirname, '../public/icon-transparent.png');
  const img = await loadImage(inputPath);

  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');

  // Draw the image
  ctx.drawImage(img, 0, 0);

  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Sample corner pixel to see background color
  console.log('Top-left pixel RGBA:', data[0], data[1], data[2], data[3]);
  console.log('Top-right pixel RGBA:', data[(img.width - 1) * 4], data[(img.width - 1) * 4 + 1], data[(img.width - 1) * 4 + 2], data[(img.width - 1) * 4 + 3]);

  // Process each pixel - remove background
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    // Skip already transparent pixels
    if (a === 0) continue;

    // Calculate if pixel is grayish/whitish (all channels similar)
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    const brightness = (r + g + b) / 3;

    // Remove white, near-white, and gray backgrounds
    // Be aggressive - anything that's bright and neutral colored
    if (maxDiff < 30 && brightness > 170) {
      data[i + 3] = 0; // Make transparent
    }
  }

  // Put the modified data back
  ctx.putImageData(imageData, 0, 0);

  // Save the result
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(inputPath, buffer);

  console.log('Fixed transparency for icon-transparent.png');
}

fixTransparency().catch(console.error);
