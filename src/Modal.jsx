// Modal.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ selectedImage, onClose }) => {
  console.log('selectedImage', selectedImage);
  if (!selectedImage) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="image-details">
          <div className="column">
            <img
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description}
              className="modal-image"
            />
          </div>
          <div className="column">
            <div className="user-details">
              <img
                src={selectedImage.user.profile_image.medium}
                alt={`Profile image of ${selectedImage.user.username}`}
                className="user-profile-image"
              />
              <div className="user-info">
              <p>{selectedImage.user.username}</p>
                <p className="bold">
                  <FontAwesomeIcon icon={faHeart} /> Likes
                </p>
                <p className="bold">User</p>
              </div>
              <p>{selectedImage.likes}</p>
              
              <p>Views: {selectedImage.views}</p>
              <p>Downloads: {selectedImage.downloads}</p>
              <p>Description: {selectedImage.alt_description}</p>
              {/* Add more image details here as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
