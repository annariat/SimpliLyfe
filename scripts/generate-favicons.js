const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  // Load the source icon
  const sourceIcon = await loadImage(path.join(__dirname, '../public/icon-transparent.png'));

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

  // Generate multiple sizes for ICO file
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

  // Create ICO file (simplified - just use 32x32 PNG as ico)
  // For a proper ICO, we'll create a simple one with the PNG data
  const ico = createIco(icoBuffers);
  fs.writeFileSync(
    path.join(__dirname, '../app/favicon.ico'),
    ico
  );
  console.log('Generated app/favicon.ico');
}

function createIco(images) {
  // ICO file format:
  // Header: 6 bytes
  // Directory entries: 16 bytes each
  // Image data: PNG data for each image

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

  // Write header
  buffer.writeUInt16LE(0, 0);      // Reserved
  buffer.writeUInt16LE(1, 2);      // Type: 1 = ICO
  buffer.writeUInt16LE(numImages, 4); // Number of images

  // Write directory entries
  let offset = headerSize;
  for (const entry of entries) {
    buffer.writeUInt8(entry.width, offset);      // Width
    buffer.writeUInt8(entry.height, offset + 1); // Height
    buffer.writeUInt8(0, offset + 2);            // Color palette
    buffer.writeUInt8(0, offset + 3);            // Reserved
    buffer.writeUInt16LE(1, offset + 4);         // Color planes
    buffer.writeUInt16LE(32, offset + 6);        // Bits per pixel
    buffer.writeUInt32LE(entry.size, offset + 8);   // Size of image data
    buffer.writeUInt32LE(entry.offset, offset + 12); // Offset to image data
    offset += dirEntrySize;
  }

  // Write image data
  for (const entry of entries) {
    entry.buffer.copy(buffer, entry.offset);
  }

  return buffer;
}

generateFavicons().catch(console.error);
