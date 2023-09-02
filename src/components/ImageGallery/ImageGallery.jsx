import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  if (images.length > 0) {
    return (
      <StyledList>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onImageClick={onImageClick}
          />
        ))}
      </StyledList>
    );
  }
};
