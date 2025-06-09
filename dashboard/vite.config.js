// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [react()],
//   base: '/dashboard/',
//   server: {
//     proxy: {
//       '/api': {
//         target: process.env.VITE_API_BASE_URL,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   },
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true
//   }
// })

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    base: '/web/',
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL, // ← Esto sí funcionará ahora
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true
    }
  }
})
