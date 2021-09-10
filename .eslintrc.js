const WARN = 1;
const UNSET = 0;

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'react/react-in-jsx-scope': UNSET,
    'react/jsx-filename-extension': [WARN, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      UNSET, { packageDir: './' },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
