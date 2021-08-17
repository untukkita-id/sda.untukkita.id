module.exports = {
  ci: {
    collect: {
      settings: {
        skipAudits: [],
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'dom-size': ['error', { maxNumericValue: 3000 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1000 }],
        'first-cpu-idle': ['error', { maxNumericValue: 1000 }],
        'first-meaningful-paint': ['error', { maxNumericValue: 1000 }],
        'csp-xss': 'off',
        'legacy-javascript': 'off',
        'max-potential-fid': ['error', { maxNumericValue: 1500 }],
      },
    },
  },
};
