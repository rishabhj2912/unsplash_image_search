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
## Codesandbox Link
https://codesandbox.io/p/github/rishabhj2912/unsplash_image_search/main?layout=%257B%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clo8lf0el0007356kfhqxs09r%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clo8lf0el0003356kuy7gv1uc%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clo8lf0el0005356kyq11oioy%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clo8lf0el0006356km0cb5vpj%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B60%252C40%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clo8lf0el0003356kuy7gv1uc%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo8lf0el0002356k06ct2zvh%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clo8lf0el0003356kuy7gv1uc%2522%252C%2522activeTabId%2522%253A%2522clo8lf0el0002356k06ct2zvh%2522%257D%252C%2522clo8lf0el0006356km0cb5vpj%2522%253A%257B%2522id%2522%253A%2522clo8lf0el0006356km0cb5vpj%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clo8lfpw300f4356kxyiztcj0%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clo8lfpw300f4356kxyiztcj0%2522%257D%252C%2522clo8lf0el0005356kyq11oioy%2522%253A%257B%2522id%2522%253A%2522clo8lf0el0005356kyq11oioy%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo8lf0el0004356k4lqikj9j%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clo8lezwr000ieef6d9flejbo%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522CSB_RUN_OUTSIDE_CONTAINER%253D1%2520devcontainer%2520templates%2520apply%2520--template-id%2520%255C%2522ghcr.io%252Fdevcontainers%252Ftemplates%252Fjavascript-node%255C%2522%2520--template-args%2520%27%257B%257D%27%2520--features%2520%27%255B%255D%27%2522%252C%2522id%2522%253A%2522clo8lsw2k00cj356kbvvmtedm%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clo8lwedz00rb356klhbcmt4n%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clo8lwedz00rb356klhbcmt4n%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D
