const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  webServer: {
    command: 'PORT=5001 npm run start-prod',
    url: 'http://localhost:5001',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  use: {
    baseURL: 'http://localhost:5001',
  },
  expect: {
    timeout: 15000,
  },
})
