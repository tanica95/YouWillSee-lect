const OSC = require('osc-js');

const config = { udpClient: { port: 9999 } };
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) });

osc.open();

console.log('Bridge started');
