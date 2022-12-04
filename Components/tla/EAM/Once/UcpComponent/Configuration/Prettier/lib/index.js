module.exports = {
  plugins: [
    require('@trivago/prettier-plugin-sort-imports'),
  ],
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  endOfLine: 'lf',
  arrowParens: 'always'
}
