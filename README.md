# Wasilewski Holdings Website

A modern, interactive website showcasing Wasilewski Holdings' projects and investments. Built with React.js, Vite, and Three.js.

## Features

- Modern, responsive design
- Interactive 3D elements using Three.js
- Smooth animations with Framer Motion
- Modular component structure
- Easy to update content
- Client-side routing with React Router

## Tech Stack

- React 18
- Vite (Build tool)
- Tailwind CSS
- Three.js
- Framer Motion
- React Three Fiber
- React Router DOM

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wasilewski-holdings-website.git
cd wasilewski-holdings-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:2000](http://localhost:2000) in your browser.

## Project Structure

```
src/
├── components/       # Reusable components
├── pages/           # Page components
├── data/            # Content and configuration
└── main.jsx         # App entry point
```

## Adding New Content

1. Projects and investments can be added in `src/data/content.js`
2. Images should be placed in the `public/images` directory
3. New components can be added to `src/components`
4. New pages can be added to `src/pages` and routed in `src/App.jsx`

## Building for Production

```bash
npm run build
npm run preview
```

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. The GitHub Actions workflow will automatically build and deploy to GitHub Pages
3. Make sure to set up the `WEB3FORMKEY` secret in your repository settings

### Manual Deployment

```bash
npm run deploy
```

### Setting up GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Add the `WEB3FORMKEY` secret in Settings > Secrets and variables > Actions

### Environment Variables

Create a `.env` file in the root directory for local development:

```env
REACT_APP_WEB3FORM_KEY=your_web3forms_key_here
```

## License

MIT License - feel free to use this project as a template for your own website. 