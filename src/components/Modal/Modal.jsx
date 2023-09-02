import { Component } from 'react';
import { createPortal } from 'react-dom';
import { StyledOverlay, StyledModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { isOpen, imageUrl, onClose } = this.props;

    if (!isOpen) {
      return null;
    }
    return createPortal(
      <StyledOverlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <img src={imageUrl} alt="" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
