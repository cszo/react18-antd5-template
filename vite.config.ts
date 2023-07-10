import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupReplace from '@rollup/plugin-replace'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		rollupReplace({
			preventAssignment: true,
			values: {
				__DEV__: JSON.stringify(true),
				'process.env.NODE_ENV': JSON.stringify('development'),
			},
		}),
		react(),
	],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{ find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
			{ find: '@components', replacement: path.resolve(__dirname, './src/components') },
			{ find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
		],
	},
})
