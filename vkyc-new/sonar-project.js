const sonarqubeScanner = require('sonarqube-scanner')
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    token: '69a126ac4f0d2e991e7c41480004a2c7e6334300',
    options: {
      'sonar.sources': './src',
      'sonar.exclusions': '**/__tests__/**',
      'sonar.tests': './src/__tests__',
      'sonar.test.inclusions':
        './src/__tests__/**/*.test.tsx,./src/__tests__/**/*.test.ts',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'reports/test-report.xml',
    },
  },
  () => {}
)
