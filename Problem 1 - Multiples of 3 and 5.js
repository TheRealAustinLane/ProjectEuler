//Find the sum of all the multiples of 3 or 5 below 1000

function multiples(){
    var totalSum = 0;
    for (var i = 0; i < 1000; i++){
        if (i % 3 === 0){
            totalSum += i;
        }
        else if (i % 5 === 0){
            totalSum += i;
        };
    }
    console.log(totalSum);
}

multiples();