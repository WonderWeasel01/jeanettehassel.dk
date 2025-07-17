import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import AppServer from '../src/AppServer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routes = [
  '/',
  '/indblik',
];

async function prerender() {
  const distPath = path.resolve(__dirname, '../dist');
  
  // Create dist directory if it doesn't exist
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  for (const route of routes) {
    console.log(`Pre-rendering: ${route}`);
    
    try {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
          },
        },
      });

      const helmetContext = {};

      const html = renderToString(
        <HelmetProvider context={helmetContext}>
          <QueryClientProvider client={queryClient}>
            <StaticRouter location={route}>
              <AppServer />
            </StaticRouter>
          </QueryClientProvider>
        </HelmetProvider>
      );

      const { helmet } = helmetContext as FilledContext;

      // Read the template
      const template = fs.readFileSync(
        path.resolve(__dirname, '../index.html'),
        'utf-8'
      );

      // Replace the root div with the rendered HTML
      const finalHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Create the file path
      const filePath = route === '/' 
        ? path.resolve(distPath, 'index.html')
        : path.resolve(distPath, `${route.slice(1)}/index.html`);

      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Write the file
      fs.writeFileSync(filePath, finalHtml);
      console.log(`✓ Pre-rendered: ${route}`);
    } catch (error) {
      console.error(`✗ Failed to pre-render ${route}:`, error);
    }
  }
}

prerender().catch(console.error); 