module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
    // 'plugin:vue/vue3-recommended'
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "vue/multi-word-component-names": "off",
    // enable additional rules
    "indent": [2, 2],
    "semi": 2,
    "no-trailing-spaces": 2,

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],
  }
};
