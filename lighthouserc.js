module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'dom-size': ['error', { maxNumericValue: 3000 }],
        'legacy-javascript': off,
      },
    },
  },
};
