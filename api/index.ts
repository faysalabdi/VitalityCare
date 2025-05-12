import express from 'express';
import { registerRoutes } from '../server/routes';
import { serveStatic } from '../server/vite';

// Initialize the Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
(async () => {
  const server = await registerRoutes(app);
  
  // Error handler
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });
  
  // Serve static files
  serveStatic(app);
})();

// Export the Express app as a serverless function
export default async (req, res) => {
  return app(req, res);
} 