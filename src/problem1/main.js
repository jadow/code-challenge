var sum_to_n_a = function(n) {
    // your code here
    total = 1;
    for(i=2; i<=n; i++) {
        total = total + i
    }
    return total;
};

var sum_to_n_b = function(n) {
    if(n ==1 ) {
        return 1;
    }
    pair = n + 1;
    total = pair * ~~(n/2);
    if (n % 2) {
        total = total + pair/2
    }
    return total
};
   
var sum_to_n_c = function(n) {
    //https://cseweb.ucsd.edu/groups/tatami/kumo/exs/sum/
     return n * ( n + 1) /2 
};


console.log("sum_to_n_a ", sum_to_n_a(2));
console.log("sum_to_n_b ", sum_to_n_b(2));
console.log("sum_to_n_c ", sum_to_n_c(2));
