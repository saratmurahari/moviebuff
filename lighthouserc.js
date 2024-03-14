const getReportGeneratedTime = () => {
  const now = new Date()
  const date = now.getDate()
  const month = now.getMonth()
  const year = now.getFullYear()
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()
  return `${date}_${month}_${year}_${hour}_${min}_${sec}`
}
//testing changes
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      startServerCommand: 'npm run start',
      url: [
        'http://localhost:8080/people/popular' /* , 'http://localhost:8080/detail/1' */
      ],
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo'
        ],
        skipAudits: ['uses-http2'],
        chromeFlags: '--no-sandbox'
        /*  extraHeaders: JSON.stringify({
          Cookie: 'customCookie=1;foo=bar'
        }) */
      }
    },
    assert: {
      assertions: {
        'categories:performance': [
          'error',
          { minScore: 0.9, aggregationMethod: 'median-run' }
        ],
        'categories:accessibility': [
          'error',
          { minScore: 1, aggregationMethod: 'pessimistic' }
        ],
        'categories:best-practices': [
          'error',
          { minScore: 1, aggregationMethod: 'pessimistic' }
        ],
        'categories:seo': [
          'error',
          { minScore: 1, aggregationMethod: 'pessimistic' }
        ]
      }
    },
    upload: {
      outputDir: `./lhci/lhci_reports_${getReportGeneratedTime()}`,
      target: 'filesystem'
    }
  }
}
