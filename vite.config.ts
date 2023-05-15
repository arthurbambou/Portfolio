import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  ExternalFluentPlugin,
  SFCFluentPlugin,
} from 'unplugin-fluent-vue/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // define messages in SFCs
    SFCFluentPlugin({
      blockType: 'fluent', // default 'fluent' - name of the block in SFCs
      checkSyntax: true, // default true - whether to check syntax of the messages
    }),
    // define messages in external ftl files
    ExternalFluentPlugin({
      locales: ['en', 'fr'], // required - list of locales
      checkSyntax: true, // default true - whether to check syntax of the messages

      baseDir: path.resolve('src'), // base directory for Vue files
      ftlDir: path.resolve('src/assets/lang'), // directory with ftl files
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  assetsInclude: ['**/*.jxl']
})
