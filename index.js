module.exports = {
  extends: [
    "plugin:you-dont-need-lodash-underscore/compatible",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:security/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "security",
    "node",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        printWidth: 120,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/semi": "warn",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-namespace": "warn",
    "security/detect-object-injection": "warn",
    "no-var": "error",
    "no-console": "warn",
    camelcase: "off",
    curly: "warn",
    eqeqeq: "warn",
    "no-throw-literal": "warn",
    semi: "off",
    "no-empty": "warn",
    "no-unused-expressions": [
      "error",
      {
        allowTernary: true,
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variableLike",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        prefix: ["T"],
      },
    ],
  },
  ignorePatterns: ["./package.json", "./package-lock.json"],
};