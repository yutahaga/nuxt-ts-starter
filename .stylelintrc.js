module.exports = {
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-no-unsupported-browser-features'
  ],
  extends: ['stylelint-config-recommended', 'stylelint-config-recess-order'],
  rules: {
    'scale-unlimited/declaration-strict-value': [
      ['/color/', 'font-family', 'font-size', 'z-index', 'fill', 'stroke'],
      {
        ignoreKeywords: [
          'currentColor',
          'transparent',
          'inherit',
          'unset',
          'initial'
        ],
        disableFix: true
      }
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        ignore: ["flexbox", "viewport-units", "text-size-adjust"]
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ]
  }
}
