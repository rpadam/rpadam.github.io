import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        experience: resolve(__dirname, 'experience/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        developerExperience: resolve(__dirname, 'projects/developer-experience.html'),
        identityAccessManagement: resolve(__dirname, 'projects/identity-access-management.html'),
        publicApis: resolve(__dirname, 'projects/public-apis.html'),
        pathShiftTd: resolve(__dirname, 'projects/path-shift-td.html')
      }
    }
  }
});
