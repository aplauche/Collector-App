# Virtual Curator

A basic demo SPA using React.js and the Art Institute of Chicago public API

## Installation

Download the repo and run the following to load all the dependencies:

```npm install```

To start the development server with Vite, run:

```npm run dev```

To generate a production build run:

```npm run build```

## About the app

Using the app you can browse artwork from the API and filter by category. You can select artwork you like to add to your personal 'collection'. 

On the collection page you can arrange your favorited artwork however you like dragging and dropping into position. 

Gallery view enables a popover to allow a distraction free view of your favorite pieces.

Collections are stored in local storage so it will persist and be unique based on browser.

## Packages used & why

 - **axios** - Lightweight and nicer dev experience than using vanilla fetch.
 - **react-easy-sort** - A lightweight drag and drop interface that plays well with css grid
 - **react-responsive-masonry** - A solution for a nice masonry style grid display when using "gallery" view
 - **react-hot-toast** - Minimal way to add some interactive confirmation and error messages quickly
 - **react-icons** - Just a basic icon package
 - react-loader-spinner - Basic loader, for a production project would likely make a custom branded loader instead
 - **zustand** - Minimal state management that plays nice with local storage - picked for ease of implementation, particularly with the persist plugin.

## Dev tools

 - **Vite** - preferred over legacy CRA
 - **Tailwind.css** - my preferred approach to css in React for quick prototyping