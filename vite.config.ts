import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pagesBase = '/INOV3001-Negotiation-Lab-Group5A/';

export default defineConfig(({ command }) => ({
	plugins: [react()],
	// Keep the dev server at / while producing repository-path assets for Pages.
	base: command === 'serve' ? '/' : pagesBase,
}));
