function moveZeroesToEnd(nums){
    let count = 0;

    for(let index in nums){
        if(nums[index] != 0){
            let temp = nums[count];
            nums[count] = nums[index];
            nums[index] = temp;
            count += 1;
        }
    }

    return nums;
}

console.log(moveZeroesToEnd([0,1,0,3,12]))

// function moveZeroesToStart(nums){
//     let count = nums.length - 1;

//     for(let index = nums.length - 1; index >=0; index--){
//         if(nums[index] != 0){
//             let temp = nums[count];
//             nums[count] = nums[index];
//             nums[index] = temp;
//             count -= 1;
//         }
//     }
//     return nums;
// }

// console.log(moveZeroesToStart([0,1,0,3,12]))
