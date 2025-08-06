const fs = require('fs');
const path = require('path');

const jsFile = path.join(__dirname, '..', 'dist', 'sound-mixer.js');
const cjsFile = path.join(__dirname, '..', 'dist', 'sound-mixer.cjs');

if (fs.existsSync(jsFile)) {
	fs.renameSync(jsFile, cjsFile);
	console.log('✅ Renamed sound-mixer.js → sound-mixer.cjs');
} else {
	console.warn('⚠️ dist/sound-mixer.js not found.');
}
