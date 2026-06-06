# GitHub Connector Website

A modern, interactive website showcasing the capabilities and features of the GitHub connector. This project demonstrates how to build a professional developer-focused web application with a sleek, contemporary design.

## 🌐 Live Demo

Visit the live website: **[ghubconn-honudjxa.manus.space](https://ghubconn-honudjxa.manus.space)**

## 📋 About This Project

This website serves as a comprehensive introduction to the GitHub connector—a powerful command-line tool that provides seamless access to GitHub's API. The site showcases:

- **User Management** - Retrieve authenticated user details and profile information
- **Repository Management** - List, view, and interact with repositories including private ones
- **Issue Tracking** - List and manage issues within repositories
- **Pull Request Management** - List and manage pull requests with comprehensive filtering
- **Activity Monitoring** - Access public events and activity feeds for users and repositories
- **API Access** - Directly interact with the GitHub API for advanced operations

## 🎨 Design & Technology

### Design Philosophy

The website follows a **Modern Developer Experience** aesthetic with:

- **Dark Navy Background** - Comfortable viewing experience optimized for technical users
- **Purple-to-Blue Gradient Accents** - Vibrant, modern visual hierarchy
- **Glassmorphism Effects** - Layered UI with frosted glass appearance
- **Smooth Animations** - Purposeful motion that enhances user experience without distraction
- **Interactive Cards** - Feature cards with hover lift effects and gradient borders

### Technology Stack

- **Frontend Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4 with custom design tokens
- **UI Components:** shadcn/ui component library
- **Icons:** Lucide React
- **Routing:** Wouter for client-side navigation
- **Build Tool:** Vite
- **Typography:** Sora (display) and JetBrains Mono (code)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/l1mitss/github-connector-website.git
cd github-connector-website

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the project
pnpm build

# Preview the production build
pnpm preview
```

## 📁 Project Structure

```
client/
├── public/              # Static files (favicon, robots.txt)
├── src/
│   ├── pages/          # Page components
│   │   ├── Home.tsx    # Main landing page
│   │   └── NotFound.tsx # 404 page
│   ├── components/     # Reusable UI components
│   │   └── ui/         # shadcn/ui components
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Root component with routing
│   ├── main.tsx        # React entry point
│   └── index.css       # Global styles and design tokens
└── index.html          # HTML template
```

## 🎯 Key Features

### Hero Section
An engaging hero section with animated gradient backgrounds and floating visual elements that immediately communicate the site's purpose.

### Capability Cards
Six interactive cards showcasing the GitHub connector's core capabilities. Each card features:
- Gradient-colored icons
- Descriptive text
- Hover animations with lift effects
- Glassmorphism styling

### Live Demo Data
Real data fetched from the GitHub API displayed in an organized format, showing:
- User information
- Repository count
- Follower/following statistics
- Code examples with syntax highlighting

### Responsive Design
Fully responsive layout that adapts seamlessly from mobile to desktop viewports.

## 🎨 Customization

### Colors & Theme

Edit `client/src/index.css` to customize the color palette. The design uses OKLCH color format for better color consistency:

```css
:root {
  --accent: oklch(0.6 0.2 280);  /* Purple-to-blue gradient */
  --background: oklch(0.141 0.005 285.823);  /* Dark navy */
  --foreground: oklch(0.95 0.005 65);  /* Light text */
}
```

### Typography

Fonts are configured in `client/index.html` and `client/src/index.css`:
- **Display Font:** Sora (bold, 700) for headings
- **Body Font:** Sora (regular, 400) for descriptions
- **Code Font:** JetBrains Mono for code snippets

### Adding New Sections

1. Create a new component in `client/src/pages/` or `client/src/components/`
2. Import shadcn/ui components as needed
3. Use Tailwind utilities for styling
4. Add routing in `client/src/App.tsx` if it's a new page

## 📦 Dependencies

### Core Dependencies
- **react** (19.2.1) - UI library
- **react-dom** (19.2.1) - React DOM rendering
- **wouter** (3.3.5) - Lightweight routing
- **tailwindcss** (4.1.14) - Utility-first CSS
- **@radix-ui/** - Accessible component primitives

### Development Dependencies
- **vite** (7.1.7) - Build tool
- **typescript** (5.6.3) - Type safety
- **prettier** (3.6.2) - Code formatting
- **esbuild** (0.25.0) - JavaScript bundler

## 🔧 Development Tips

### Hot Module Replacement (HMR)

The development server supports HMR. Changes to React components will automatically reload in the browser without losing state.

### Component Development

When building new components:
1. Use shadcn/ui components for consistency
2. Leverage Tailwind utilities instead of custom CSS
3. Keep components modular and reusable
4. Follow the existing naming conventions

### Performance Optimization

- Images are optimized and served from CDN
- CSS is tree-shaken during build
- JavaScript is minified and code-split
- Use `pnpm` for faster dependency resolution

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm check` - Type-check with TypeScript
- `pnpm format` - Format code with Prettier

## 🌟 Highlights

- **Modern Design** - Contemporary aesthetics with glassmorphism and gradient accents
- **Smooth Animations** - Purposeful motion that enhances UX
- **Developer-Focused** - Built with developers in mind, showcasing real GitHub data
- **Responsive** - Works beautifully on all devices
- **Accessible** - Semantic HTML and keyboard navigation support
- **Performance** - Optimized for fast loading and smooth interactions

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests with improvements.

## 📞 Support

For questions or issues, please open an issue on the GitHub repository.

---

**Built with modern web technologies and a focus on developer experience.**
