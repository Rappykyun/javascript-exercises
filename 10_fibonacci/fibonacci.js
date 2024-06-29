const fibonacci = function(num) {
 let nums = parseInt(num)
 if(nums < 0) return "OOPS";
    if (nums <= 1) return nums;
   
    let a = 0;
    let b = 1;

    for (let i = 2; i <= nums; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
