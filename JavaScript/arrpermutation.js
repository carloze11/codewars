var buildArray = function(nums) {
    result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[nums[i]])
    }
    return result
};

//input: an array of ints
//output: an array of same length as input, with ans[i] = nums[nums[i]]
// create a new list
    //for each element in new list, element will be num[num[i]]
    // return new list