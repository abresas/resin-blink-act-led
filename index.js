var fs   = require('fs'),
    gpio = require('gpio');

fs.writeFileSync('/sys/class/leds/led0/trigger', 'none');


var gpio16 = gpio.export(16,{
  ready: function() {
    inervalTimer = setInterval(function() {
      gpio16.set();
      setTimeout(function() { gpio16.reset(); }, 500);
    }, 1000);
  }
});

process.on('exit', function(){
  fs.writeFileSync('/sys/class/leds/led0/trigger', 'mmc0');
})
