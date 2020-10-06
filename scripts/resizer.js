const fs = require('fs');
const sharp = require('sharp');
const filetype = require('file-type');

const source = './source';
const target = './target';
const width = 400;

function resize(source, target, width, height) {
  fs.readdir(source, async (err, files) => {
    console.log(`found ${files.length} files`);
    if (err) {
      console.log('err', err);
      return;
    }

    for await (const file of files) {
      console.log('resizing:', file);
      const imageType = await filetype.fromFile(`${source}/${file}`);
      if (!imageType.mime.startsWith('image')) {
        continue;
      }
      const name = file.split('.').slice(0, -1).join('.');
      await sharp(`${source}/${file}`)
        .resize(width, height)
        .toFile(`${target}/${name}-${width}w.${imageType.ext}`);
    }
    console.log('done resize');
  });
}

resize(source, target, width);
