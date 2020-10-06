const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

const source = './source';
const target = './target';
const quality = 70;

async function toWebP(source, target, quality) {
  await imagemin([`${source}/*.{jpg,png}`], {
    destination: target,
    plugins: [imageminWebp({ quality: quality })]
  });
  console.log('done toWebP');
}

toWebP(source, target, quality);
