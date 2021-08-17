module.exports = {
  ci: {
    collect: {
      settings: { skipAudits: ['canonical', 'uses-http2', 'uses-long-cache-ttl'] },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'dom-size': ['error', { maxNumericValue: 3000 }],
      },
    },
  },
};
