import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const inputImage = join(rootDir, 'public', '480ed213-9a8b-47ea-b5f4-bff7ea51e7f0.jpg');
const outputDir = join(rootDir, 'public');

// Ensure output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const sizes = [16, 32, 48, 64, 128, 256];

async function generateFavicon() {
  try {
    console.log('Generating favicon from image...');
    
    // Generate favicon.ico (multi-size ICO file)
    const icoSizes = [16, 32, 48];
    const icoImages = await Promise.all(
      icoSizes.map(size =>
        sharp(inputImage)
          .resize(size, size, { fit: 'cover' })
          .png()
          .toBuffer()
      )
    );

    // For simplicity, we'll create PNG favicons
    // Most modern browsers support PNG favicons
    for (const size of sizes) {
      await sharp(inputImage)
        .resize(size, size, { fit: 'cover' })
        .png()
        .toFile(join(outputDir, `favicon-${size}x${size}.png`));
      console.log(`Generated favicon-${size}x${size}.png`);
    }

    // Create the main favicon.ico (using 32x32 as default)
    await sharp(inputImage)
      .resize(32, 32, { fit: 'cover' })
      .png()
      .toFile(join(outputDir, 'favicon.png'));
    
    console.log('Generated favicon.png');
    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();

