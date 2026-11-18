import { defineConfig } from 'eslint/config';
import scality from '@scality/eslint-config-scality';

export default defineConfig(...scality, {
    files: ['**/*.js'],
    languageOptions: {
        sourceType: 'commonjs',
    },
});
