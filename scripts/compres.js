const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

const source = './source';
const target = './target';
const quality = 70;

async function compress(source, target, quality) {
  console.log('jpg compression');
  await imagemin([`${source}/*.jpg`], {
    destination: target,
    plugins: [imageminMozjpeg({ quality: quality })]
  });

  console.log('png compression');
  await imagemin([`${source}/*.png`], {
    destination: target,
    plugins: [imageminPngquant()]
  });

  console.log('svg compression');
  await imagemin([`${source}/*.svg`], {
    destination: target,
    use: [imageminSvgo()]
  });
  console.log('done compress');
}

compress(source, target, quality);
