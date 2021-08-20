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
        'categories:performance': ['error', { minScore: 0.5 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],

        // Blocking Assertions
        'dom-size': ['error', { maxNumericValue: 3000 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1000 }],
        'first-meaningful-paint': ['error', { maxNumericValue: 1000 }],
        'max-potential-fid': ['error', { maxNumericValue: 1500 }],

        // Ignored Assertions
        'categories:seo': ['warn', { minScore: 0.8 }],

        // Disabled Assertions
        'csp-xss': 'off',
        'legacy-javascript': 'off',
        'unused-javascript': 'off',
      },
    },
  },
};
