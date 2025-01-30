import { postImage } from './clients/at';
import { getNextImage } from './images';
import * as dotenv from 'dotenv';
dotenv.config();

// EDIT THIS!
function altTextFromFilename(filename: string): string {
  return 'Image is ' + postTextFromFilename(filename);
}

// Shouldn't have to edit this.
async function main() {
  const { LAST_IMAGE_NAME: lastImageName } = process.env;
  const nextImage = await getNextImage({ lastImageName });

  console.log(nextImage.imageName);

  await postImage({
    path: nextImage.absolutePath,
    text: postTextFromFilename(nextImage.imageName),
    altText: altTextFromFilename(nextImage.imageName),
  });
}

main();