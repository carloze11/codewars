var getConcatenation = function(nums) {
    return nums.concat(nums.slice())
};

//input: an array of integers
//output: an array of original integers plus a copy
//parameters: an array of nums