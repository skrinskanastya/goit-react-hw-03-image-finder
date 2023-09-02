import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  if (images.length > 0) {
    return (
      <StyledList>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            dataSrc={largeImageURL}
            onImageClick={onImageClick}
          />
        ))}
      </StyledList>
    );
  }
};
