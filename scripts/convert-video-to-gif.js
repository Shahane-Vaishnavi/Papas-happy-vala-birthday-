import sharp from 'sharp';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const inputVideo = join(rootDir, 'public', 'Preview video of websit.mp4');
const outputGif = join(rootDir, 'public', 'preview-demo.gif');

async function convertVideoToGif() {
  try {
    console.log('Converting video to GIF...');
    console.log('This may take a few minutes depending on video length...\n');

    // Check if ffmpeg is available
    try {
      await execAsync('ffmpeg -version');
      console.log('✓ FFmpeg found\n');
    } catch (error) {
      console.error('❌ FFmpeg not found!');
      console.error('Please install FFmpeg to convert video to GIF:');
      console.error('  Windows: choco install ffmpeg');
      console.error('  Mac: brew install ffmpeg');
      console.error('  Linux: sudo apt install ffmpeg');
      console.error('\nAlternatively, you can use an online tool like:');
      console.error('  - https://ezgif.com/video-to-gif');
      console.error('  - https://cloudconvert.com/mp4-to-gif');
      process.exit(1);
    }

    if (!existsSync(inputVideo)) {
      console.error(`❌ Video file not found: ${inputVideo}`);
      process.exit(1);
    }

    // Convert video to GIF with optimization
    // Scale down to reduce file size, limit to 30 seconds, optimize colors
    const command = `ffmpeg -i "${inputVideo}" -vf "fps=10,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 -t 30 "${outputGif}"`;

    console.log('Processing video...');
    const { stdout, stderr } = await execAsync(command);
    
    if (stderr && !stderr.includes('frame=')) {
      console.warn('FFmpeg warnings:', stderr);
    }

    console.log('\n✅ GIF created successfully!');
    console.log(`📁 Location: ${outputGif}`);
    console.log('\nYou can now use this GIF in your README.md');
    
  } catch (error) {
    console.error('❌ Error converting video:', error.message);
    if (error.stderr) {
      console.error('FFmpeg error:', error.stderr);
    }
    process.exit(1);
  }
}

convertVideoToGif();

