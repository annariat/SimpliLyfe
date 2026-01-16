const { createCanvas, loadImage } = require('canvas');
const path = require('path');

async function checkTransparency() {
  const inputPath = path.join(__dirname, '../public/icon-transparent.png');
  const img = await loadImage(inputPath);

  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Check corners
  console.log('Top-left pixel RGBA:', data[0], data[1], data[2], data[3]);
  console.log('Top-right pixel RGBA:', data[(img.width - 1) * 4], data[(img.width - 1) * 4 + 1], data[(img.width - 1) * 4 + 2], data[(img.width - 1) * 4 + 3]);

  // Count transparent pixels
  let transparentCount = 0;
  let opaqueCount = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) transparentCount++;
    else opaqueCount++;
  }

  console.log('Transparent pixels:', transparentCount);
  console.log('Opaque pixels:', opaqueCount);
  console.log('Total pixels:', (transparentCount + opaqueCount));
}

checkTransparency().catch(console.error);
