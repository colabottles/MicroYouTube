# MicroYouTube

A lightweight YouTube search and video player built with Vite, React, and the YouTube Data API v3.

## Features

- Search YouTube videos by keyword, genre, or topic
- Main video player with full description, formatted chapters, and clickable links
- Sidebar of related video thumbnails
- Default video loaded on page visit
- Fully responsive mobile layout
- Accessible — semantic HTML, ARIA, keyboard navigable
- Dark slate theme with green accents

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- Vanilla CSS
- Deployed on [Netlify](https://netlify.com)

## Getting Started

### Prerequisites

- Node.js
- A YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com)

### Installation

```bash
git clone https://github.com/colabottles/MicroYouTube.git
cd MicroYouTube
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:
VITE_YOUTUBE_API_KEY=your_api_key_here

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Live Demo

[micro-youtube.netlify.app](https://micro-youtube.netlify.app)

## Author

Todd Libby

- [toddl.dev](https://toddl.dev)
- [GitHub](https://github.com/colabottles)
- [Twitch](https://twitch.tv/toddcodes)

## License

ISC
