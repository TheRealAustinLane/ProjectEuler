//The sum of even terms in the Fibonacci sequence whose values do not exceed four million.

function fibonacci(){
    var x = 0;
    var y = 1;
    var z = 0;
    var sumFib = 0;
    while (y < 4000000){
        z = y;
        y += x;
        x = z;
        if (z % 2 === 0){
            sumFib += z;
        }
    console.log(sumFib);
    }
}

fibonacci();