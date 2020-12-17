#!/bin/bash

## eslint config
cat > .eslintrc.json << EOF
{
  "env": {
    "commonjs": true,
    "es2020": true,
    "node": true
  },
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 11
  },
  "rules": { "prettier/prettier": "error" }
}
EOF

## prettier config
cat > prettier.config.js << EOF
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 120,
};
EOF

## vscode config
mkdir -p .vscode
cat > .vscode/settings.json << EOF
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true
}
EOF