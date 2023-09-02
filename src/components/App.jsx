import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Layout } from './Layout.styled';

const API_KEY = '38369214-2131a54870ec208cdae419196';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showLoadMoreButton: false,
    selectedImage: null,
  };

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1, showLoadMoreButton: false });
  };
  handleOpenModal = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };
  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
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
  };

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
        {this.selectedImage && (
          <Modal
            isOpen={true}
            imageUrl={this.state.selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </Layout>
    );
  }
}
