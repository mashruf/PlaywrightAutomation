// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',  
  timeout: 40000,
  expect: {
    timeout: 40000
  },

  reporter: 'html',
  use: {
    browserName: 'chromium'
    
  },

});

//exporting the configuration accross the project
module.exports = config; 

