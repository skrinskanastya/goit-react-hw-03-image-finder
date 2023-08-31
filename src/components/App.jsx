import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

const API_KEY = '38369214-2131a54870ec208cdae419196';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1 });
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

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .catch(error => console.error('Error fetching images:', error));
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onLoad={this.handleLoadMore} />
        <Loader loading={this.state.loading} />
        <Modal />
      </div>
    );
  }
}
