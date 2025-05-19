# Gemini Clone

A modern web application that replicates the core functionality of Google's Gemini AI interface, built with React and Vite.

## 🚀 Features

- Interactive chat interface with Gemini AI
- Real-time responses
- Modern and responsive UI
- Environment-based configuration
- Type-safe development

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **AI Integration:** Google Generative AI SDK
- **Environment Management:** dotenv
- **Code Quality:** ESLint
- **Type Safety:** TypeScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm or yarn
- Google AI API key

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gemini-clone.git
   cd gemini-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `config` directory:
   ```bash
   cp config/.env.example config/.env
   ```

4. Add your Google AI API key to `config/.env`:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔒 Environment Variables

The following environment variables are required:

- `VITE_GEMINI_API_KEY`: Your Google AI API key

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👥 Authors

- Aman kumar - Made with ❤️
- 

## 🙏 Acknowledgments

- Google Gemini AI for the inspiration
