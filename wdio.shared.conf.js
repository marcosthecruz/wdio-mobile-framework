exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.spec.js'],
  maxInstances: 1,
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]
  ],
  services: [['appium', {
    command: 'appium',
    args: { address: '127.0.0.1', port: 4723 }
  }]],
  mochaOpts: { ui: 'bdd', timeout: 180000 },
  before: function () {
    const chai = require('chai');
    global.expect = chai.expect;
  },
  afterTest: async function (test, context, { error, result, duration, passed }) {
    if (!passed) {
      const fs = require('fs');
      const file = `./errorShots/${Date.now()}_${test.title.replace(/\\s+/g, '_')}.png`;
      await browser.saveScreenshot(file);
      try {
        const allure = require('@wdio/allure-reporter').default;
        const b64 = await browser.takeScreenshot();
        allure.addAttachment('Screenshot (falha)', Buffer.from(b64, 'base64'), 'image/png');
        const src = await browser.getPageSource();
        allure.addAttachment('Page Source', src, 'text/xml');
      } catch (e) { /* ignore */ }
    }
  },
  onPrepare: function () {
    const fs = require('fs');
    if (!fs.existsSync('./allure-results')) fs.mkdirSync('./allure-results', { recursive: true });
  }
};
