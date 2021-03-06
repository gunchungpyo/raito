# Raito aka Sumōru Raito

Image optimization and resizer tool

## Pre req

- nodejs v12

## Image Guidelines

Example img html tag

```html
<img
  src="flower-large.jpg"
  srcset="flower-small.jpg 480w, flower-large.jpg 1080w"
  sizes="50vw"
/>
<img
  src="images/flower1.jpg"
  srcset="images/flower1-480.jpg 480w, images/flower1-1080.jpg 1080w"
  sizes="(max-width: 480px) 100vw, (max-width: 1024px) 480px, 1024px"
/>
```

Example img html with webp

```html
<picture>
  <source type="image/webp" srcset="flower.webp" />
  <source type="image/jpeg" srcset="flower.jpg" />
  <img src="flower.jpg" alt="" />
</picture>
```

it's common to serve 3-5 different sizes of an image

Use the w unit (instead of px) to write width descriptors. For example, a 1024px wide image would be written as 1024w.

## Usage

```bash
# to resize
node scripts/resizer.js

# convert to webp
node scripts/webp.js

# to compress
node scripts/compress.js
```
