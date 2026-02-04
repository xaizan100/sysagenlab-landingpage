
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Global error logger for mobile debugging
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Global Error Caught:", message, "at", source, ":", lineno);
};

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("React Mounting Error:", err);
    rootElement.innerHTML = `<div style="color: white; padding: 20px; text-align: center;">
      <p>Unable to load the application.</p>
      <button onclick="window.location.reload()" style="background: white; color: black; padding: 8px 16px; border-radius: 8px; margin-top: 10px;">Retry</button>
    </div>`;
  }
} else {
  console.error("Critical: Could not find root element 'root'");
}
