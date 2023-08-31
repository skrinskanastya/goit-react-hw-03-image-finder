import { StyledItem } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ image }) => {
  return (
    <StyledItem class="gallery-item">
      <img src={image.webformatURL} alt="" />
    </StyledItem>
  );
};
