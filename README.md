# Arnis Boilerplate

A modern, clean boilerplate for building web apps with Next.js 15, React 19, and shadcn/ui components.

## Overview

This boilerplate gives you a solid starting point for modern web development. It's built with the latest tech and focuses on clean code, good design, and a smooth developer experience.

## Tech Stack

| Category | Technology | Version | Status | Notes |
|----------|-----------|---------|--------|-------|
| **Framework** | Next.js | 15.5.6 | ✅ | App Router + Turbopack |
| **UI Library** | React | 19.1.0 | ✅ | Concurrent features |
| **UI Rendering** | React DOM | 19.1.0 | ✅ | Web rendering |
| **Runtime** | Node.js | 18.17+ | ✅ | Required minimum |
| **Language** | TypeScript | 5.x | ✅ | Type safety |
| **Linting** | ESLint | 9.x | ✅ | Code quality |
| **Formatting** | Prettier | 3.6.2 | ✅ | Code formatter |
| **Styling** | Tailwind CSS | 4.x | ✅ | Utility-first CSS |
| **CSS Processing** | PostCSS | Latest | ✅ | With Tailwind |
| **Components** | shadcn/ui | Latest | ✅ | New York style |
| **UI Primitives** | Radix UI | Various | ✅ | Label, Slot, Tooltip |
| **Class Utils** | clsx | 2.1.1 | ✅ | Conditional classes |
| **Class Utils** | tailwind-merge | 3.3.1 | ✅ | Merge Tailwind classes |
| **Variants** | CVA | 0.7.1 | ✅ | Component variants |
| **Icons** | Lucide React | 0.546.0 | ✅ | Icon components |
| **Icons** | Remix Icon | 4.7.0 | ✅ | Complete SVG set |
| **Theme** | next-themes | 0.4.6 | ✅ | Dark/light mode |
| **Animations** | tw-animate-css | 1.4.0 | ✅ | Tailwind animations |
| **Package Manager** | pnpm | Latest | ✅ | Fast & efficient |
| **Database ORM** | Drizzle ORM | 0.44.6 | ✅ | Type-safe SQL |
| **Database Kit** | Drizzle Kit | 0.31.5 | ✅ | Database toolkit |
| **Database** | PostgreSQL | 3.4.7 | ✅ | Postgres driver |
| **HTTP Client** | Axios | 1.12.2 | ✅ | API requests |
| **Validation** | Zod | 4.1.12 | ✅ | Schema validation |
| **Git Hooks** | Husky | 9.1.7 | ✅ | Pre-commit hooks |
| **Lint Staged** | lint-staged | 16.2.4 | ✅ | Stage file linting |
| **Backend** | Go Fiber | - | ❌ | Planned |

### Key Features
- ✅ Custom scrollbar styling (Webkit & Firefox)
- ✅ Professional text selection colors (theme-aware)
- ✅ Responsive design
- ✅ Dark/light theme support
- ✅ Modern component architecture
- ✅ Complete Remix Icon set (4.7.0) - all icon styles included
- ✅ Lucide React icons for UI components
- ✅ Turbopack for lightning-fast dev builds
- ✅ Monorepo workspace with pnpm
- ✅ ESLint and Prettier configuration
- ✅ Husky pre-commit hooks with lint-staged
- ✅ Database integration with Drizzle ORM
- ✅ Type-safe API validation with Zod
- ❌ Authentication system
- ❌ Go backend API
- ❌ State management

## Icons

This boilerplate uses **Remix Icon v4.7.0** - a complete set of SVG icons organized in folders. Unlike other boilerplates that stick to just outline icons from Lucide, we've included the full Remix Icon library so you have access to:

- **Filled icons** - Solid, bold icons for emphasis
- **Line icons** - Clean outlines for everyday use  
- **Editor icons** - Special icons for text editing
- **System icons** - UI and system controls
- **And more** - Logos, devices, weather, and tons more

All icons are organized in the `src/icons/` folder by category, making them easy to find and use in your components.

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/arnis-boilerplate.git
cd arnis-boilerplate
```

2. Install dependencies:
```bash
cd frontend
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
arnis-boilerplate/
├── frontend/
│   ├── src/
│   │   ├── app/                 # Next.js App Router pages
│   │   ├── components/
│   │   │   └── ui/             # shadcn/ui components
│   │   ├── layouts/            # Layout components
│   │   ├── lib/                # Utility functions
│   │   └── icons/              # Icon components
│   ├── public/                 # Static assets
│   └── package.json
├── backend/                    # (Planned) Go backend
└── README.md
```

## Environment Variables

Create a `.env.local` file in the frontend directory:

```env
# Application
NEXT_PUBLIC_APP_NAME="Arnis Boilerplate"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database (when implemented)
DATABASE_URL="your-database-url"

# API Configuration (when implemented)
NEXT_PUBLIC_API_URL="http://localhost:8080"
API_SECRET="your-api-secret"

# API Keys (if needed)
NEXT_PUBLIC_API_KEY="your-api-key"
```

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm prepare` - Set up Husky hooks

## Customization

### Themes
The boilerplate comes with a dark/light theme system using next-themes. You can customize the colors in `src/app/globals.css`.

### Components
All UI components are built with shadcn/ui. You can customize them by editing the files in `src/components/ui/`.

### Icons
The complete Remix Icon library is in `src/icons/`. Just import the SVG you need. All icons are organized by category so they're easy to find.

### Styling
- Custom scrollbar that looks good
- Nice text selection colors
- Works great on mobile and desktop
- Consistent spacing throughout

## Roadmap & Future Enhancements

Here's what we're planning to add. Check off items as they get done!

### Backend & Database
- [ ] **Go Backend with Fiber** - Fast web framework that feels like Express
- [ ] **PostgreSQL Database** - Solid, reliable database
- [ ] **Drizzle ORM** - Type-safe way to work with the database
- [ ] **Database Migrations** - Keep track of database changes
- [ ] **Docker Compose** - Easy setup for local development

### Authentication & Security
- [ ] **JWT Authentication** - Secure login system
- [ ] **User Registration/Login** - Complete signup and login flow
- [ ] **Password Hashing** - Keep passwords safe with bcrypt
- [ ] **Protected Routes** - Lock down pages that need auth
- [ ] **Session Management** - Keep users logged in safely
- [ ] **Role-Based Access** - Different permissions for different users

### API & Data Management
- [ ] **RESTful API** - Clean, organized API endpoints
- [ ] **API Documentation** - Easy-to-read API docs
- [ ] **Request Validation** - Check data with Zod before processing
- [ ] **Error Handling** - Consistent, helpful error messages
- [ ] **API Rate Limiting** - Stop abuse and spam
- [ ] **CORS Configuration** - Allow requests from your frontend

### State Management & Data Fetching
- [ ] **React Query** - Better way to fetch and cache data
- [ ] **Zustand** - Simple state management for client data
- [ ] **SWR** - Another option for data fetching
- [ ] **Optimistic Updates** - Make the UI feel instant

### Testing
- [ ] **Jest** - Test your code
- [ ] **React Testing Library** - Test your components
- [ ] **Playwright or Cypress** - Test the full user flow
- [ ] **Test Coverage** - See how much is tested

### Developer Experience
- [ ] **Storybook** - View and test components in isolation
- [ ] **VSCode Settings** - Shared editor settings for the team
- [ ] **Git Commit Format** - Consistent commit messages
- [ ] **Changelog** - Auto-generate release notes
- [ ] **Pre-push Hooks** - Run tests before pushing code

### Performance & Speed
- [ ] **Image Optimization** - Use Next.js Image component
- [ ] **Code Splitting** - Load only what's needed
- [ ] **Bundle Analysis** - See what's making your app big
- [ ] **Lighthouse Checks** - Automated performance testing
- [ ] **Redis Caching** - Speed up API responses

### Monitoring & Analytics
- [ ] **Error Tracking** - Catch bugs with Sentry
- [ ] **Analytics** - Track how users use your app
- [ ] **Logging System** - Better error logs
- [ ] **Health Checks** - Monitor if everything's running

### DevOps & Deployment
- [ ] **CI/CD Pipeline** - Auto-deploy with GitHub Actions
- [ ] **Deployment Scripts** - One-click deploys
- [ ] **Multiple Environments** - Dev, staging, production
- [ ] **Database Backups** - Don't lose your data

### UI/UX Improvements
- [ ] **Loading States** - Show skeleton screens while loading
- [ ] **Error Boundaries** - Handle errors gracefully
- [ ] **Toast Notifications** - Quick feedback messages
- [ ] **Form Handling** - React Hook Form for better forms
- [ ] **Accessibility Check** - Make sure everyone can use it
- [ ] **Multiple Languages** - Support different languages
- [ ] **PWA Support** - Make it work offline

### Extra Features
- [ ] **File Upload** - Upload files with progress bars
- [ ] **Email Service** - Send emails from your app
- [ ] **PDF Generation** - Create PDFs on the server
- [ ] **WebSocket** - Real-time updates
- [ ] **Search** - Full-text search functionality
- [ ] **Export Data** - Let users download CSV/Excel
- [ ] **Admin Dashboard** - Basic admin panel

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`pnpm lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on GitHub.

---

<div align="center">
  
Built with ❤️ by [Arnis](https://github.com/arnislvdev)

<a href="https://github.com/arnislvdev">
  <img src="https://d80v5j6hit.ufs.sh/f/IztGFCcXa7Pnmgp0DUld2c9jqawLMl7TobFPIJsW5VnQei81" alt="Arnis Logo" width="120"/>
</a>

</div>
