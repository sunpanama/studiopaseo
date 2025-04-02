
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize Tally if script has loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if Tally script has loaded
  const tallyScript = document.querySelector('script[src*="tally.so/widgets/embed.js"]');
  
  if (!tallyScript) {
    console.warn('Tally Forms script not found. Adding it dynamically.');
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);
  }
});

createRoot(document.getElementById("root")!).render(<App />);
