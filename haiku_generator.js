var haiku = require('./haiku');

var arr = [
    [ 'FS', 'THS' ],
    ['WARN',"WAX","YAM","ZAP"],
    ["ADDRESS","BABY","BACKBOARD","CHEESY", "CHECKERS"],
    ["DIGITAL", "DILATED","FURIOUS","FUZZIER","GALACTIC"],
    // ......and more
]

console.log(haiku.createHaiku([
  [2,3],
  [1,3,3],
  [3,2]
], arr));