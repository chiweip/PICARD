var GPIO = require('onoff').Gpio;
var button = new GPIO(4, 'in','both');

button.watch(function(err,state){
   if(state==1){
    console.log("connected")    
}
if(state==0){
   console.log("disconnected")
}
}
);
