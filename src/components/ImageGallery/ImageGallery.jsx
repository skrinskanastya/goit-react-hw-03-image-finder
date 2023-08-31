import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  if (images.length > 0) {
    return (
      <StyledList className="gallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </StyledList>
    );
  }
};
