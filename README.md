# Media Matrix

An AI-powered photo generation and manipulation platform built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### AI Image Generation

- **Chat-based Modifications**: Upload images and describe changes using natural language
- **Background**: Combine foreground images with custom backgrounds
- **Background Color**: Automatically apply a background color to images

### Image Gallery

- **Search Functionality**: Search images from Unsplash with 3-second debounce
- **Smart Navigation**: Quick access to AI tools with pre-loaded images
- **Persistent Search**: Search queries persist across navigation

### User Experience

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode Support**: Full dark/light theme compatibility
- **Drag & Drop**: Intuitive image upload interfaces
- **Real-time Feedback**: Loading states and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd media-matrix
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Add your Unsplash API key and other environment variables
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
media-matrix/
├── app/
│   ├── api/
│   │   └── actions.ts          # API utilities
│   ├── chat/
│   │   └── page.tsx            # AI chat interface
│   ├── background/
│   │   └── page.tsx            # Background setting tool
│   ├── background-color/
│   │   └── page.tsx            # Background color tool
│   ├── gallery/
│   │   └── page.tsx            # Image gallery with search
│   ├── layout.tsx               # Root layout
│   └── page.tsx                # Home page
├── public/
│   └── images/                 # Static images
├── .env                         # Environment variables
├── .gitignore
├── README.md
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🎯 Pages & Features

### Home Page (`/`)

- Feature overview with interactive selection
- Visual demonstration of AI capabilities
- Responsive grid layout for feature steps

### AI Chat (`/chat`)

- Upload images via drag & drop or file selection
- Text input for describing modifications
- AI result preview area
- Pre-loaded images from gallery navigation

### Background (`/background`)

- Dual upload areas for foreground and background images
- Visual preview of blended result
- Separate handling for foreground and background uploads
- Smart navigation from gallery

### Background Color (`/background-color`)

- Single image upload interface
- Automatic background processing
- Result preview with "Background Removed" indicator
- Clean, focused workflow

### Image Gallery (`/gallery`)

- Unsplash image search with 3-second debounce
- Four action buttons per image:
  - 🤖 **ChatBot**: Send to AI chat
  - 👤 **Foreground**: Set as foreground in background tool
  - 🖼️ **Background**: Set as background in background tool
  - ✂️ **Remove**: Send to background color tool
- Persistent search across navigation
- Clear search functionality

## 🔧 Technical Implementation

### Image Navigation

Images are passed between pages using URL parameters:

- `/chat?imageUrl=...&imageTitle=...&imageThumbnail=...`
- `/background?foregroundUrl=...&backgroundUrl=...`
- `/background-color?imageUrl=...`

### State Management

- **Session Storage**: Persists gallery search queries and results
- **URL Parameters**: Passes image data between pages
- **React State**: Manages component-level state

### Performance Optimizations

- **Next.js Image Component**: Optimized image loading
- **Debounced Search**: Reduces API calls during typing
- **Lazy Loading**: Images load as needed
- **Responsive Images**: Proper sizing for different devices

## 🎨 Design System

### Color Scheme

- **Primary**: Blue (`bg-blue-600`)
- **Success**: Green (`bg-green-600`)
- **Warning**: Purple (`bg-purple-600`)
- **Danger**: Red (`bg-red-600`)

### Components

- Consistent button styling with hover states
- Rounded corners and shadow effects
- Smooth transitions and micro-interactions
- Accessible tooltips and labels

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Key Dependencies

- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **Unsplash API**: Image search functionality

## 📱 Responsive Design

- **Mobile**: Single column layouts, stacked elements
- **Tablet**: Two-column grids, adapted spacing
- **Desktop**: Multi-column layouts, full feature set

## 🔒 Environment Variables

Create a `.env` file with:

```env
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
GEMINI_API_KEY=your_gemini_access_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for providing the image search API
- **Next.js** team for the excellent framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
