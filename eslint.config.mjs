module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Melhores práticas gerais
    'no-unused-vars': 'error', 
    'no-console': 'warn', 
    'eqeqeq': 'error',
    'curly': 'error', 
    'quotes': ['error', 'single'], 
    'semi': ['error', 'always'], 

    // Legibilidade
    'indent': ['error', 2], 
    'max-len': ['warn', { code: 120 }], 
    'camelcase': 'error',
    'object-curly-spacing': ['error', 'always'], 

    // TypeScript específico
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn', 
    '@typescript-eslint/no-unused-vars': 'error', 
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // React específico
    'react/jsx-uses-react': 'error', 
    'react/jsx-uses-vars': 'error', 
    'react/react-in-jsx-scope': 'off', 

    // Next.js específico (opcional)
    '@next/next/no-html-link-for-pages': 'warn', 
  },

  // Configurações adicionais para compatibilidade com pnpm e Next.js
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', '@next/next'],
};