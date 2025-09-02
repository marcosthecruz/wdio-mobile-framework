const path = require('path');
const shared = require('./wdio.shared.conf');

exports.config = {
  ...shared.config,
  capabilities: [{
    path: '/wd/hub',
    platformName: 'iOS',
    'appium:deviceName': process.env.IOS_DEVICE_NAME || 'iPhone 15 Pro Max',
    'appium:platformVersion': process.env.IOS_PLATFORM_VERSION || '17.5',
    'appium:automationName': 'XCUITest',
    'appium:app': process.env.IOS_APP || path.resolve('./apps/ios/NativeDemoApp.app'),
    'appium:newCommandTimeout': 240
  }]
};
