module.exports={
    src_folders : ["test"],
    page_objects_path : ['Pages'],
    custom_commands_path: '',
    custom_assertions_path: '',
    globals_path: '',

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}