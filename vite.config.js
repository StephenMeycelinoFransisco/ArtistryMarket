import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      'process.env.REACT_APP_FIREBASE_KEY': JSON.stringify(env.REACT_APP_FIREBASE_KEY),
      'process.env.REACT_APP_OPEN_AI_KEY': JSON.stringify(env.REACT_APP_OPEN_AI_KEY),
    }
  }
})
