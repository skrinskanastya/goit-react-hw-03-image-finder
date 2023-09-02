import { Component } from 'react';
// import { createPortal } from 'react-dom';
import { StyledOverlay, StyledModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { img } = this.props;

    // if (!isOpen) {
    //   return null;
    // }
    return (
      <StyledOverlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <img src={img} alt="" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
