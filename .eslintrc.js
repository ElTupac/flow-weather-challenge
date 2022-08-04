module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  plugins: ["react"],
  rules: {
    "react/destructuring-assignment": "off",
    "react/jsx-fragments": "off",
    "no-plusplus": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": ["error", { allow: ["error", "info"] }],
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/label-has-associated-control": "off",
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
