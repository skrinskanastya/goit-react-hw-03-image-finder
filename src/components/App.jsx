import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Layout } from './Layout.styled';
import { fetchImages } from 'helpers/api';

const API_KEY = '38369214-2131a54870ec208cdae419196';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showLoadMoreButton: false,
    modalImg: '',
    showModal: false,
  };

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1, showLoadMoreButton: false });
  };
  handleOpenModal = evt => {
    this.setState({ showModal: true, modalImg: evt.target.dataset.src });
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetchImages(this.state.query, this.state.page)
        .then(data => {
          const { hits, totalHits } = data;
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showLoadMoreButton: prevState.page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => console.error('Error fetching images:', error))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <Layout>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.handleOpenModal}
        />
        {this.state.showLoadMoreButton && (
          <Button onLoad={this.handleLoadMore} />
        )}
        <Loader loading={this.state.loading} />
        {this.state.showModal && (
          <Modal img={this.state.modalImg} onClose={this.handleCloseModal} />
        )}
      </Layout>
    );
  }
}
