import { Component } from 'react';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: evt.target.elements.query.value,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      //http request
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onLoad={this.handleLoadMore} />
        <Loader />
        <Modal />
      </div>
    );
  }
}
