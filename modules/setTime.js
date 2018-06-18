function newFormat(time) {
    var h = Math.floor(time / 3600);
    var m = Math.floor((time - (h * 3600)) / 60);
    var s = Math.floor(time - (h * 3600) - (m * 60));
    
    return h + 'H:' + m + 'M:' + s + 'S';
}
exports.print = newFormat;