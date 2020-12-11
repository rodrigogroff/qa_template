var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name: 'nanoJS',
  description: 'NanoJS Website',
  script: 'C:\\Users\\Administrator\\source\\repos\\qa_template\\front\\nano_v1\\dist\\server.js',
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  svc.start();
});

svc.install();