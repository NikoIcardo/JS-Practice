/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let nums3 = new Array(nums1.length + nums2.length); 
    
    let count = 0; 
    nums1.forEach(num => {
        nums3[count] = num;  
        count += 1; 
    });  
    
    nums2.forEach(num => {
        for(let i = 0; i !== nums3.length; i++){
            if(num === nums3[i]){
                continue;
            }
            if(num < nums3[i] || nums3[i] === undefined){
                let temp = new Array(nums3.length - i); 
                temp = nums3.slice(i); 
                nums3[i] = num; 
                for(let j = 0; j < temp.length; j++){
                    if(temp[j]){
                        nums3[i+1+j] = temp[j]; 
                    }
                }
                break; 
            } 
        }
    }); 
    
    while(nums3.length > 2) {
        nums3.splice(0, 1); 
        nums3.splice(nums3.length - 1, 1); 
    }
    
    let median = 0; 
    
    nums3.forEach(item => median += item); 
    
    median = median / nums3.length; 
    
    
    return median; 
};