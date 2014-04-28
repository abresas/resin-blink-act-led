var fs   = require('fs');
var LED_FILE = '/sys/class/leds/led0/brightness'

fs.writeFileSync('/sys/class/leds/led0/trigger', 'none');

var blinkInterval = setInterval(function(){
  fs.writeFileSync(LED_FILE, '1');
  setTimeout(function() { fs.writeFileSync(LED_FILE, '0') }, 500);
}, 1000)

process.on('exit', function(){
  fs.writeFileSync('/sys/class/leds/led0/trigger', 'mmc0');
})
