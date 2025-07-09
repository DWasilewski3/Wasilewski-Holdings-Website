# Wasilewski Holdings Website

A modern, interactive website showcasing Wasilewski Holdings' projects and investments. Built with Next.js, TypeScript, and Three.js.

## Features

- Modern, responsive design
- Interactive 3D elements using Three.js
- Smooth animations with Framer Motion
- Modular component structure
- Easy to update content

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Three.js
- Framer Motion
- React Three Fiber

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
├── data/            # Content and configuration
└── styles/          # Global styles
```

## Adding New Content

1. Projects and investments can be added in `src/data/content.ts`
2. Images should be placed in the `public/images` directory
3. New components can be added to `src/components`

## Building for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this project as a template for your own website. 