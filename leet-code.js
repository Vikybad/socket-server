function merge(nums1, m, nums2, n) {
    // Last index of the merged array
    let i = m + n - 1;
    // Indexes for nums1 and nums2
    let i1 = m - 1;
    let i2 = n - 1;

    // While there are elements in nums2
    while (i1 >= 0 && i2 >= 0) {
        if (nums1[i1] > nums2[i2]) {
            nums1[i] = nums1[i1];
            i1--;
        } else {
            nums1[i] = nums2[i2];
            i2--;
        }
        i--;
    }

    // If there are remaining elements in nums2, copy them
    while (i2 >= 0) {
        nums1[i] = nums2[i2];
        i--;
        i2--;
    }
}

let nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);


// // You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.


// // Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// // The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



// // Example 1:
// // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// // Output: [1,2,2,3,5,6]
// // Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// // The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// // Example 2:
// // Input: nums1 = [1], m = 1, nums2 = [], n = 0
// // Output: [1]
// // Explanation: The arrays we are merging are [1] and [].
// // The result of the merge is [1].

// // Example 3:
// // Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// // Output: [1]
// // Explanation: The arrays we are merging are [] and [1].
// // The result of the merge is [1].
// // Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


// // Constraints:
// // nums1.length == m + n
// // nums2.length == n
// // 0 <= m, n <= 200
// // 1 <= m + n <= 200
// // -109 <= nums1[i], nums2[j] <= 109


// // Follow up: Can you come up with an algorithm that runs in O(m + n) time?

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// function merge(nums1, m, nums2, n) {

//     for (let n2 of nums2) {
//         let index = -1
//         for (let n1 of nums1) {
//             index++
//             if (n2 && (n2 <= n1)) {
//                 nums1 = [...nums1.slice(0, index), n2, ...nums1.slice(index - 1, nums1.length)]
//                 break
//             } else if (n2 && !n1) {
//                 nums1[index] = n2
//                 break
//             } else if (index == (nums1.length - 1)) {
//                 nums1.push(n2)
//                 break
//             }
//         }
//     }

//     let outputArr = JSON.parse(JSON.stringify(nums1))

//     nums1 = outputArr.slice(0, m + n)
//     console.log(nums1)
// };

// let nums1 = [1, 2, 3, 0, 0, 0]
// merge(nums1, 3, [2, 5, 6], 3)

// // let nums1 = [1]
// // merge(nums1, 1, [], 0)
// console.log(nums1)
