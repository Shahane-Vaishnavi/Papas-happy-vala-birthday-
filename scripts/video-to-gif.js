import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputVideo = join(rootDir, 'public', 'Preview video of websit.mp4');
const outputGif = join(rootDir, 'public', 'preview-demo.gif');

if (!existsSync(inputVideo)) {
  console.error(`Video file not found: ${inputVideo}`);
  process.exit(1);
}

console.log('Converting video to GIF...');
console.log('This may take a few minutes...');

ffmpeg(inputVideo)
  .outputOptions([
    '-vf', 'fps=10,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse',
    '-loop', '0'
  ])
  .output(outputGif)
  .on('start', (commandLine) => {
    console.log('FFmpeg command: ' + commandLine);
  })
  .on('progress', (progress) => {
    if (progress.percent) {
      console.log(`Processing: ${Math.round(progress.percent)}% done`);
    }
  })
  .on('end', () => {
    console.log('✅ GIF conversion complete!');
    console.log(`Output: ${outputGif}`);
    console.log('\nYou can now use this GIF in your README.md');
  })
  .on('error', (err) => {
    console.error('Error converting video:', err.message);
    process.exit(1);
  })
  .run();

