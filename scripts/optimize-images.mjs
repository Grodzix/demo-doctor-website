import sharp from "sharp";
import { readdir, stat, readFile, writeFile } from "fs/promises";
import { join } from "path";

const PHOTOS_DIR = "public/photos";
const MAX_WIDTH = 1200;
const QUALITY = 75;

async function optimize() {
  const files = await readdir(PHOTOS_DIR);
  const jpgs = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${jpgs.length} images to optimize\n`);

  for (const file of jpgs) {
    const filePath = join(PHOTOS_DIR, file);
    const before = (await stat(filePath)).size;

    // Read into memory first to release file handle
    const input = await readFile(filePath);

    const buffer = await sharp(input)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();

    await writeFile(filePath, buffer);

    const after = buffer.length;
    const saved = ((1 - after / before) * 100).toFixed(0);
    console.log(
      `${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saved}% smaller)`
    );
  }

  console.log("\nDone!");
}

optimize();
