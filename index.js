var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSInfo');

var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction) {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        switch (instruction){
            case '/exit':
                process.stdout.write('Quitting app!\n'.red);
                process.exit();
                break;
            case '/language':
                process.stdout.write(process.env.LANG.green + '\n');
                break;
            case '/version':
                process.stdout.write(process.versions.node.green + '\n');
                break;
            case '/getOSinfo':
            OSinfo.print();
                break;
            default:
            process.stderr.write('Wrong instruction!\n');       
        }
        emitter.emit('afterCommand');
    }
});
