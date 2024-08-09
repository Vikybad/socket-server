const fs = require('fs');
const path = require('path');

const downloadsFolder = path.join(__dirname, "../../Downloads");
const desktopFolder = path.join(__dirname, "../../Desktop");

const fileName = 'Munjya 2024 Hindi HDTS 1080p x264 AAC CineVood.mkv';

const sourcePath = path.join(downloadsFolder, fileName);
const destPath = path.join(desktopFolder, fileName);

if (fs.existsSync(destPath)) {
    fs.unlinkSync(destPath)
}

// Get the size of the source file
const fileSizeInBytes = fs.statSync(sourcePath).size;


// Create a readable stream from the source file
const readStream = fs.createReadStream(sourcePath);

// Create a writable stream to the destination file
const writeStream = fs.createWriteStream(destPath);


// Pipe the read stream to the write stream to copy the file
let bytesTransferred = 0;
readStream.on('data', chunk => {
    bytesTransferred += chunk.length;
    const percentage = ((bytesTransferred / fileSizeInBytes) * 100).toFixed(2);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Progress: ${percentage}%`);

    // Pipe the read stream to the write stream to copy the file
    readStream.pipe(writeStream);
});


// Handle errors
readStream.on('error', err => {
    console.error('Error reading the file:', err);
});

writeStream.on('error', err => {
    console.error('Error writing the file:', err);
});

// Handle finish event (successful copy)
writeStream.on('finish', () => {
    console.log(`File ${fileName} has been copied successfully to ${desktopFolder}`);
});
