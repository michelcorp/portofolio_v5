import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages (uncomment and adjust if deploying to a subdirectory)
  // base: process.env.NODE_ENV === 'production' ? '/Portofolio_V5/' : '/',
  base: '/',
  resolve: {
    alias: {
      // Fix for react-swipeable-views importing Babel runtime helper paths under
      // "@babel/runtime/helpers/builtin/*" which aren't exported by newer
      // @babel/runtime versions. Map them to the supported helper paths.
      '@babel/runtime/helpers/builtin/interopRequireDefault': '@babel/runtime/helpers/interopRequireDefault',
      '@babel/runtime/helpers/builtin/interopRequireWildcard': '@babel/runtime/helpers/interopRequireWildcard',
      '@babel/runtime/helpers/builtin/extends': '@babel/runtime/helpers/extends',
      '@babel/runtime/helpers/builtin/objectSpread': '@babel/runtime/helpers/objectSpread2',
      '@babel/runtime/helpers/builtin/objectWithoutProperties': '@babel/runtime/helpers/objectWithoutProperties',
      '@babel/runtime/helpers/builtin/classCallCheck': '@babel/runtime/helpers/classCallCheck',
      '@babel/runtime/helpers/builtin/createClass': '@babel/runtime/helpers/createClass',
      '@babel/runtime/helpers/builtin/possibleConstructorReturn': '@babel/runtime/helpers/possibleConstructorReturn',
      '@babel/runtime/helpers/builtin/inherits': '@babel/runtime/helpers/inherits',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', '@react-spring/web', 'gsap', 'aos'],
          'ui-vendor': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          'supabase-vendor': ['@supabase/supabase-js'],
          'spline-vendor': ['@splinetool/react-spline', '@splinetool/runtime'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB for large dependencies
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
