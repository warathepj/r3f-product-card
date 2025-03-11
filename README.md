# เลี้ยงกาแฟผู้พัฒนา

!["Alt text"](https://warathepj.github.io/js-ai-gallery/public/image/promptpay-20.png)

# React Three Fiber Product Card

An interactive 3D product showcase built with React Three Fiber, featuring a Game Boy model with dynamic lighting and controls.

## Features

- 3D Game Boy model display with interactive rotation
- Grid layout of multiple product cards
- Detailed product view page
- Orbit controls for model interaction
- Responsive design
- Dynamic lighting effects
- Retro-styled UI elements

## Tech Stack

- React
- React Three Fiber (@react-three/fiber)
- React Three Drei (@react-three/drei)
- React Router DOM
- Three.js
- Vite

## Getting Started

### Prerequisites

- Node.js (v18.18.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/warathepj/r3f-product-card.git
```

2. Navigate to the project directory:

```bash
cd r3f-product-card
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
r3f-product-card/
├── src/
│   ├── components/
│   │   ├── Game.jsx         # 3D Game Boy model component
│   │   └── ProductCard.jsx  # Product card wrapper component
│   ├── pages/
│   │   └── GamePage.jsx     # Detailed product view page
│   ├── App.jsx             # Main application component
│   └── main.jsx           # Application entry point
├── public/
└── package.json
```

## Usage

The application displays a grid of interactive 3D product cards. Users can:

- Rotate the models by dragging
- Click on a product to view detailed information
- Interact with the 3D model using orbit controls
- Navigate between the grid view and detailed product view

## Credits

3D Model: "Game Boy | 3D Model Low-Poly" by ItsKevin (https://sketchfab.com/ItsKevin) licensed under CC-BY-4.0

## License

This project is licensed under the MIT License

TODO:
