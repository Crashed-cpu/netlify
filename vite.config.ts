import { defineConfig, loadEnv, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  loadEnv(mode, process.cwd(), '');
  const isProduction = mode === 'production';

  const plugins: PluginOption[] = [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          ['react-refresh/babel', {}, 'react-refresh']
        ],
      },
    }),
    tsconfigPaths(),
  ];

  if (mode === 'analyze') {
    plugins.push(
      visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }) as PluginOption
    );
  }

  if (isProduction) {
    plugins.push(
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'Ayush Saini - Portfolio',
          short_name: 'Ayush',
          description: 'Portfolio of Ayush Saini - Full Stack Developer',
          theme_color: '#0ea5e9',
          background_color: '#0f172a',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https?:\/\/.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|ttf|eot)$/i,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'assets-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      })
    );
  }

  const config = {
    plugins,
    base: '/',
    publicDir: 'public',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
      strictPort: true,
      host: true,
      proxy: {
        // Add any API proxies here if needed
      },
    },
    preview: {
      port: 3000,
      strictPort: true,
      host: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: isProduction ? ('hidden' as const) : false,
      minify: isProduction ? ('esbuild' as const) : false,
      cssCodeSplit: true,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'vendor_react';
              }
              if (id.includes('lucide-react')) {
                return 'vendor_icons';
              }
              return 'vendor';
            }
            return undefined;
          },
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    define: {
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(process.env.VITE_APP_VERSION || '1.0.0'),
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['lucide-react'],
      esbuildOptions: {
        target: 'es2020',
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly' as const,
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables";`,
        },
      },
    },
  };

  return config;
});
