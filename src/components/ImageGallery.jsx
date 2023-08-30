import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = images => {
  if (images.length > 0) {
    return (
      <ul class="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
};
