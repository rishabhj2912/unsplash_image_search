# React Image Search App

This is a simple React application that allows users to search for images using the Unsplash API and view them in a modal. It also displays additional image details, including likes, views, downloads, and the user's profile image.

## Features

- Search for images by keyword.
- Filter images by predefined categories.
- View images in a modal with detailed information.
- Display user profile images and additional image details.
- Light mode And dark mode toggle switch.
  
## Technologies Used

- React
- Axios for making API requests
- React Bootstrap for styling
- FontAwesome for icons

## Hooks Used

This project utilizes several React hooks:

- `useState` is used to manage the state of variables such as `images`, `totalPages`, and `selectedImage`.

- `useEffect` is used to fetch initial random images when the component mounts and to manage the side effects of API calls.

- `useRef` is used to create a ref for the search input field.

- `onClick` event handlers are used with hooks like `openModal` and `closeModal` to open and close the image details modal.

- `useContext` is used when importing your Modal component.

- `onSubmit` is used with `handleSearch` to trigger the search when the user submits the search form.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-image-search-app.git
   cd react-image-search-app
