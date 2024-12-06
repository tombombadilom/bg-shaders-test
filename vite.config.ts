import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Fractionnement des chunks par répertoire
          if (id.includes('node_modules')) {
            return 'vendor'; // Regrouper les dépendances dans un chunk "vendor"
          }
          if (id.includes('src/components')) {
            return 'components'; // Regrouper les composants dans un chunk "components"
          }
          // Ajoutez d'autres règles de fractionnement ici
        }
      }
    },
    chunkSizeWarningLimit: 500 // Ajuster la limite d'avertissement de taille de chunk
  }
})
