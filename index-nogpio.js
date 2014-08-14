var fs   = require('fs');
var LED_TRIGGER    = '/sys/class/leds/led0/trigger';
var LED_BRIGHTNESS = '/sys/class/leds/led0/brightness';

fs.writeFileSync(LED_TRIGGER, 'none');

var blinkInterval = setInterval(function(){
  fs.writeFileSync(LED_BRIGHTNESS, '1');
  setTimeout(function() { fs.writeFileSync(LED_BRIGHTNESS, '0') }, 500);
}, 1000)

process.on('exit', function(){
  fs.writeFileSync(LED_TRIGGER, 'mmc0');
})
