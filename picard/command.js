var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ 
        console.log(stdout); 
        console.log(error);
    });
};

function command_test(){
    execute('node example', function(output) {
    console.log(output);
});}

command_test();
