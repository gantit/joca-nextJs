const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": RULES.OFF,
    "react/prop-types": RULES.OFF,
  },
}
