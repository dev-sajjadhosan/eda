import chokidar from 'chokidar';
import { handleFileAutoExport } from './core.js';
export function edaPlugin() {
    return {
        name: 'vite-plugin-eda',
        apply: 'serve',
        configureServer() {
            const watcher = chokidar.watch('src/**/*.{ts,tsx,js,jsx}', {
                ignoreInitial: false,
            });
            watcher.on('add', handleFileAutoExport);
            watcher.on('change', handleFileAutoExport);
            console.log('✅ [EDA] Watching files in src/** for auto-export');
        },
    };
}
