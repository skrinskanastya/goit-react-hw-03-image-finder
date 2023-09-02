import { StyledItem } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ image, onImageClick }) => {
  const handleClick = () => {
    onImageClick(image.largeImageURL);
  };
  return (
    <StyledItem onClick={handleClick}>
      <img src={image.webformatURL} alt="" />
    </StyledItem>
  );
};
