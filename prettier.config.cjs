/** @type {import("prettier").Config} */
module.exports = {
  // i am just using the standard config, change if you need something else
  ...require('prettier-config-standard'),

  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,

  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        printWidth: 150,
        tabWidth: 4
      }
    }
  ]
}
