import react from '@woohm402/eslint-config-react';

export default [
  { ignores: ['eslint.config.js', '.yarn', 'dist'] },
  ...react({
    tsconfigRootDir: import.meta.dirname,
  }),
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
    },
  },
];
