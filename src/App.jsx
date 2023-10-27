import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './index.css';
import Modal from './Modal'; 

const API_URL = 'https://api.unsplash.com/search/photos';
const random_API_URL = 'https://api.unsplash.com/photos/random';
const IMAGES_PER_PAGE = 16;

const App = () => {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBackgroundBlack, setIsBackgroundBlack] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  useEffect(() => {
    const fetchInitialRandomImages = async () => {
      try {
        const { data } = await axios.get(
          `${random_API_URL}?count=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
        );
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInitialRandomImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${
          searchInput.current.value
        }&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log('data', data);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
    fetchImages();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    fetchImages();
  };
  const toggleBackground = () => {
    setIsBackgroundBlack((prevIsBackgroundBlack) => !prevIsBackgroundBlack);
  };
  return (
    <div className={`container ${isBackgroundBlack ? 'black-background' : 'white-background'}`}>
      <div className="switch">
        <label className="switch-label">Toggle Background</label>
        <div className={`switch-slider ${isBackgroundBlack ? 'on' : 'off'}`} onClick={toggleBackground}></div>
      </div>
      
      <h1 className='title'>Image Search</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Type something to search...'
            className='search-input'
            ref={searchInput}
          />
        </Form>
      </div>
      <div className='filters'>
        <div onClick={() => handleSelection('nature')}>Nature</div>
        <div onClick={() => handleSelection('birds')}>Birds</div>
        <div onClick={() => handleSelection('cats')}>Cats</div>
        <div onClick={() => handleSelection('shoes')}>Shoes</div>
      </div>
      <div className='images'>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className='image'
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      <Modal selectedImage={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default App;
