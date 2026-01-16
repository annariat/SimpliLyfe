const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const size = 512;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Clear with transparency
ctx.clearRect(0, 0, size, size);

// Create main gradient (green to cyan to purple)
const mainGradient = ctx.createLinearGradient(80, 400, 420, 80);
mainGradient.addColorStop(0, '#10B981');   // Emerald
mainGradient.addColorStop(0.5, '#06B6D4'); // Cyan
mainGradient.addColorStop(1, '#6366F1');   // Indigo

// Create secondary gradient
const secondaryGradient = ctx.createLinearGradient(100, 100, 400, 400);
secondaryGradient.addColorStop(0, '#34D399'); // Light emerald
secondaryGradient.addColorStop(1, '#818CF8'); // Light indigo

// Draw main S swoosh shape
ctx.beginPath();
ctx.moveTo(340, 100);
ctx.bezierCurveTo(280, 80, 200, 100, 160, 160);
ctx.bezierCurveTo(120, 220, 120, 300, 160, 360);
ctx.bezierCurveTo(200, 420, 280, 440, 360, 420);
ctx.bezierCurveTo(420, 400, 450, 340, 440, 280);
ctx.lineTo(380, 290);
ctx.bezierCurveTo(385, 330, 360, 370, 320, 375);
ctx.bezierCurveTo(260, 380, 210, 350, 200, 300);
ctx.bezierCurveTo(190, 250, 210, 200, 260, 170);
ctx.bezierCurveTo(310, 140, 360, 150, 380, 180);
ctx.lineTo(340, 100);
ctx.closePath();
ctx.fillStyle = mainGradient;
ctx.fill();

// Draw inner detail swoosh
ctx.beginPath();
ctx.moveTo(360, 160);
ctx.bezierCurveTo(320, 145, 260, 160, 230, 200);
ctx.bezierCurveTo(200, 240, 195, 290, 215, 340);
ctx.bezierCurveTo(235, 380, 290, 400, 350, 390);
ctx.bezierCurveTo(390, 383, 420, 350, 425, 310);
ctx.lineTo(380, 300);
ctx.bezierCurveTo(378, 330, 355, 355, 320, 358);
ctx.bezierCurveTo(280, 361, 245, 340, 235, 305);
ctx.bezierCurveTo(225, 270, 235, 235, 265, 205);
ctx.bezierCurveTo(295, 175, 340, 168, 370, 180);
ctx.lineTo(360, 160);
ctx.closePath();
ctx.fillStyle = secondaryGradient;
ctx.globalAlpha = 0.5;
ctx.fill();
ctx.globalAlpha = 1;

// Draw flowing accent line at bottom
ctx.beginPath();
ctx.moveTo(100, 420);
ctx.quadraticCurveTo(160, 380, 220, 410);
ctx.quadraticCurveTo(280, 440, 340, 410);
ctx.quadraticCurveTo(400, 380, 440, 420);
ctx.strokeStyle = mainGradient;
ctx.lineWidth = 14;
ctx.lineCap = 'round';
ctx.stroke();

// Star gradient
const starGradient = ctx.createLinearGradient(340, 120, 460, 40);
starGradient.addColorStop(0, '#06B6D4');
starGradient.addColorStop(1, '#6366F1');

// Draw 4-point star - positioned with proper padding from edge
const starCenterX = 420;
const starCenterY = 75;
const starOuterRadius = 45;
const starInnerRadius = 18;

ctx.beginPath();
for (let i = 0; i < 8; i++) {
  const radius = i % 2 === 0 ? starOuterRadius : starInnerRadius;
  const angle = (i * Math.PI / 4) - Math.PI / 2;
  const x = starCenterX + radius * Math.cos(angle);
  const y = starCenterY + radius * Math.sin(angle);
  if (i === 0) {
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
  }
}
ctx.closePath();
ctx.fillStyle = starGradient;
ctx.fill();

// Small sparkle dots around the star
ctx.beginPath();
ctx.arc(365, 50, 8, 0, Math.PI * 2);
ctx.fillStyle = '#6366F1';
ctx.fill();

ctx.beginPath();
ctx.arc(470, 100, 6, 0, Math.PI * 2);
ctx.fillStyle = '#06B6D4';
ctx.fill();

ctx.beginPath();
ctx.arc(455, 140, 5, 0, Math.PI * 2);
ctx.fillStyle = '#34D399';
ctx.fill();

// Additional small sparkles for visual interest
ctx.beginPath();
ctx.arc(95, 130, 7, 0, Math.PI * 2);
ctx.fillStyle = '#10B981';
ctx.globalAlpha = 0.8;
ctx.fill();
ctx.globalAlpha = 1;

ctx.beginPath();
ctx.arc(480, 460, 6, 0, Math.PI * 2);
ctx.fillStyle = '#6366F1';
ctx.globalAlpha = 0.7;
ctx.fill();
ctx.globalAlpha = 1;

// Save as PNG
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '../public/icon-transparent.png');
fs.writeFileSync(outputPath, buffer);

console.log('Icon generated successfully at:', outputPath);

// Also generate smaller sizes for app icons
const sizes = [192, 180, 128, 64, 32];
sizes.forEach(s => {
  const smallCanvas = createCanvas(s, s);
  const smallCtx = smallCanvas.getContext('2d');
  smallCtx.drawImage(canvas, 0, 0, s, s);
  const smallBuffer = smallCanvas.toBuffer('image/png');
  const smallPath = path.join(__dirname, `../public/icon-${s}.png`);
  fs.writeFileSync(smallPath, smallBuffer);
  console.log(`Generated ${s}x${s} icon`);
});
