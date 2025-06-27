# cpywrt - AI Copy Generation Tool

An intelligent copy generation application built with React and TypeScript that helps create compelling marketing copy for products and services.

## Overview

cpywrt is a modern web application that streamlines the copywriting process through AI-powered generation with intelligent feedback loops. Users can input product details and receive professionally crafted copy in various styles, with the ability to refine and iterate through an intuitive feedback system.

## Features

### ✨ Core Functionality
- **Intelligent Copy Generation**: Creates compelling copy based on product details, personality, and target audience
- **Multiple Copy Styles**: Professional, Creative, Conversational, and Direct writing styles
- **Personality Options**: Witty & Clever, Bold & Confident, Playful & Fun, Professional & Trustworthy, Warm & Friendly, Edgy & Provocative
- **Industry-Specific**: Tailored for Fintech, SaaS, E-commerce, Food, Fashion, Healthcare, Education
- **Price Segment Targeting**: Budget, Mid-range, Premium, Luxury positioning

### 🔄 Advanced Feedback Loop
- **Post-Generation Refinement**: Seamless transition from generation to feedback system
- **Personality Switching**: Quick personality changes without re-entering product details
- **Energy Boosting**: Make copy shorter, more energetic, or action-focused
- **Message Refocusing**: Clarify and adjust core messaging
- **Multi-Selection Interface**: Clean, checkbox-free selection system

### 🎨 Enhanced User Experience
- **Claude Design System**: Professional interface with consistent color palette and typography
- **Card-Based Results**: Modern card layout with 3D hover effects
- **Enhanced Loading States**: Witty copy with animated sparkles and lyric-style text transitions
- **Proper Form Validation**: All fields required with real-time validation
- **Custom Dropdowns**: Descriptions panel with empty state placeholders

## Technology Stack

- **React 18** with TypeScript for type-safe development
- **Vite** for fast development and optimized builds
- **CSS Custom Properties** implementing Claude design tokens
- **Lucide React** for consistent iconography
- **Modern ESLint/TypeScript** configuration for code quality

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173` (or the next available port).

## Project Structure

```
src/
├── components/
│   ├── Layout/              # Main application layout
│   ├── Sidebar/             # Navigation with icons
│   ├── CopyGeneratorForm/   # Input form with validation
│   ├── FeedbackPanel/       # Post-generation refinement
│   ├── ResultsPanel/        # Copy results display
│   └── common/              # Shared dropdown components
├── hooks/
│   └── useAppState.ts       # Centralized state management
├── types/
│   └── index.ts             # TypeScript interfaces
└── App.tsx                  # Main application component
```

## Key Components

### State Management
- **useAppState Hook**: Manages form data, results, UI state, and feedback flow
- **Form Validation**: Comprehensive validation with disabled states
- **Panel State Management**: Smooth transitions between input and feedback modes

### Design System
- **Claude Color Palette**: Ivory, cloud, slate, and UI accent colors
- **Typography**: DM Sans headings, Inter body text, Fira Code monospace
- **Component Architecture**: Scoped CSS with BEM-like naming conventions

## Development Guidelines

### Code Style
- **TypeScript Strict Mode**: Enabled with verbatimModuleSyntax
- **Component Pattern**: Functional components with hooks
- **CSS Organization**: Component-scoped styles with global design tokens
- **Import Strategy**: Type-only imports for interfaces

### Form Handling
- **Required Fields**: All inputs mandatory for generation
- **Empty Defaults**: No pre-selected values to encourage user input
- **Real-time Validation**: Immediate feedback on form completion
- **Non-resizable Elements**: Consistent form layout

## Contributing

1. Follow the existing code style and component patterns
2. Use TypeScript interfaces for all data structures
3. Implement proper error handling and loading states
4. Test all form validation scenarios
5. Ensure responsive design compatibility

## License

This project is part of the cpywrt suite of copywriting tools.