var assert = require('assert');

function square(a){
    return a*a;
}

function mine(a){
    return a-1;
}



assert.equal(square(4),6);
assert.equal(mine(4),5);
assert.equal(square(4),16);
