const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function updateFavicons() {
  // Load the updated icon from public folder
  const sourceIcon = await loadImage(path.join(__dirname, '../public/icon.png'));

  // Generate icon.png (32x32 for browser tabs)
  const icon32 = createCanvas(32, 32);
  const ctx32 = icon32.getContext('2d');
  ctx32.drawImage(sourceIcon, 0, 0, 32, 32);
  fs.writeFileSync(
    path.join(__dirname, '../app/icon.png'),
    icon32.toBuffer('image/png')
  );
  console.log('Generated app/icon.png (32x32)');

  // Generate apple-icon.png (180x180 for Apple devices)
  const icon180 = createCanvas(180, 180);
  const ctx180 = icon180.getContext('2d');
  ctx180.drawImage(sourceIcon, 0, 0, 180, 180);
  fs.writeFileSync(
    path.join(__dirname, '../app/apple-icon.png'),
    icon180.toBuffer('image/png')
  );
  console.log('Generated app/apple-icon.png (180x180)');

  // Generate favicon.ico with multiple sizes
  const sizes = [16, 32, 48];
  const icoBuffers = [];

  for (const size of sizes) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(sourceIcon, 0, 0, size, size);
    icoBuffers.push({
      size,
      buffer: canvas.toBuffer('image/png')
    });
  }

  const ico = createIco(icoBuffers);
  fs.writeFileSync(
    path.join(__dirname, '../app/favicon.ico'),
    ico
  );
  console.log('Generated app/favicon.ico');
}

function createIco(images) {
  const numImages = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;

  let dataOffset = headerSize + dirSize;
  const entries = [];

  for (const img of images) {
    entries.push({
      width: img.size === 256 ? 0 : img.size,
      height: img.size === 256 ? 0 : img.size,
      offset: dataOffset,
      size: img.buffer.length,
      buffer: img.buffer
    });
    dataOffset += img.buffer.length;
  }

  const totalSize = dataOffset;
  const buffer = Buffer.alloc(totalSize);

  buffer.writeUInt16LE(0, 0);
  buffer.writeUInt16LE(1, 2);
  buffer.writeUInt16LE(numImages, 4);

  let offset = headerSize;
  for (const entry of entries) {
    buffer.writeUInt8(entry.width, offset);
    buffer.writeUInt8(entry.height, offset + 1);
    buffer.writeUInt8(0, offset + 2);
    buffer.writeUInt8(0, offset + 3);
    buffer.writeUInt16LE(1, offset + 4);
    buffer.writeUInt16LE(32, offset + 6);
    buffer.writeUInt32LE(entry.size, offset + 8);
    buffer.writeUInt32LE(entry.offset, offset + 12);
    offset += dirEntrySize;
  }

  for (const entry of entries) {
    entry.buffer.copy(buffer, entry.offset);
  }

  return buffer;
}

updateFavicons().catch(console.error);
