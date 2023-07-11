import * as path from 'path'
import { type ConfigEnv,type UserConfigExport ,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv): UserConfigExport => {

  const viteEnv = loadEnv(configEnv.mode, process.cwd())
  
  const { VITE_PUBLIC_PATH } = viteEnv

  return {
    base:VITE_PUBLIC_PATH,
    plugins: [
      react(),
      stylelint({
        fix: true,
        lintInWorker: true
      })
    ],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
        { find: '@components', replacement: path.resolve(__dirname, './src/components') },
        { find: '@utils', replacement: path.resolve(__dirname, './src/utils') }
      ]
    }
  }
}


