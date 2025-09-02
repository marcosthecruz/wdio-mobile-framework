const path = require('path');
const shared = require('./wdio.shared.conf');

exports.config = {
  ...shared.config,
  capabilities: [{
    path: '/wd/hub',
    platformName: 'Android',
    'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'Android Emulator',
    'appium:platformVersion': process.env.ANDROID_PLATFORM_VERSION || '15',
    'appium:automationName': 'UiAutomator2',
    'appium:app': process.env.ANDROID_APP || path.resolve('./apps/android/NativeDemoApp.apk'),
    'appium:autoGrantPermissions': true
  }]
};
