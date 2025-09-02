const shared = require('./wdio.shared.conf');

const buildName = process.env.BS_BUILD || `wdio-native-demo-${Date.now()}`;

exports.config = {
  ...shared.config,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: [
    ['browserstack', { app: process.env.BS_APP_ID_ANDROID || process.env.BS_APP_ID_IOS }]
  ],
  specs: ['./test/specs/**/*.spec.js'],
  suites: {
    android: ['./test/specs/**/*.spec.js'],
    ios: ['./test/specs/**/*.spec.js']
  },
  capabilities: [
    // Preencha apenas UM dos blocos abaixo ao executar com --suite android ou --suite ios
    {
      'platformName': 'Android',
      'appium:automationName': 'UiAutomator2',
      'bstack:options': {
        deviceName: process.env.BS_ANDROID_DEVICE || 'Google Pixel 7',
        osVersion: process.env.BS_ANDROID_OS || '13.0',
        projectName: 'WDIO Native Demo',
        buildName,
        sessionName: 'Android suite'
      },
      'appium:app': process.env.BS_APP_ID_ANDROID // ex: bs://<id>
    },
    {
      'platformName': 'iOS',
      'appium:automationName': 'XCUITest',
      'bstack:options': {
        deviceName: process.env.BS_IOS_DEVICE || 'iPhone 14',
        osVersion: process.env.BS_IOS_OS || '16',
        projectName: 'WDIO Native Demo',
        buildName,
        sessionName: 'iOS suite'
      },
      'appium:app': process.env.BS_APP_ID_IOS // ex: bs://<id>
    }
  ]
};
