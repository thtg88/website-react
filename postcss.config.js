module.exports = {
  plugins: [
    // 'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './pages/**/*.{js,jsx,ts,tsx}',
                './components/**/*.{js,jsx,ts,tsx}'
              ],
              whitelist: [
                'btn',
                'btn-primary',
                'button',
                'close',
                'fa-3x',
                'fa-fw',
                'fa-w-12',
                'fade',
                'h5',
                'help-block',
                'modal',
                'modal-backdrop',
                'modal-body',
                'modal-content',
                'modal-dialog',
                'modal-footer',
                'modal-header',
                'modal-open',
                'modal-title',
                'show',
                'svg-inline--fa',
              ],
              defaultExtractor: content =>
                content.match(/[\w-/:]+(?<!:)/g) || []
            }
          ]
        ]
      : []),
    'postcss-preset-env'
  ]
}
