
   // leetcode Problem no 189
  // Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
  void rotateArray(vector<int>& nums, int k) {

        int n = nums.size();

        k = k % n;

        reverse(nums.begin(),nums.end()); // rotating the whole array including k places

        reverse(nums.begin(),nums.begin()+k); // rotating left portion of the array before k

        reverse(nums.begin() + k,nums.end()); // rotating right portion of the array after k 
    }

    // Intuition
        // Original array nums -> [1,2,3,4,5,6,7] with k = 3
        // Reverse the first k: [3,2,1,4,5,6,7]
       //Reverse the rest: [3,2,1,7,6,5,4]
       //Reverse all: [4,5,6,7,1,2,3], which is a left rotation.

      // Simple idea is to reverse the whole array first, then reverse the other two parts