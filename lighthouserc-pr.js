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
        // Minimun score for the report to be considered valid
        'categories:performance': ['error', { minScore: 0.7 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.8 }],

        // Blocking Assertions
        'dom-size': ['error', { maxNumericValue: 3000 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'first-meaningful-paint': ['error', { maxNumericValue: 1500 }],
        'max-potential-fid': ['error', { maxNumericValue: 1500 }],

        // Ignored Assertions

        // Disabled Assertions
        'csp-xss': 'off',
        'legacy-javascript': 'off',
        'unused-javascript': 'off',
        'is-crawlable': 'off',
        'uses-rel-preconnect': 'off',
      },
    },
  },
};
