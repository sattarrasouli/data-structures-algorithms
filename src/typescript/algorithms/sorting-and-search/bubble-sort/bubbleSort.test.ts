import { bubbleSort } from "./bubbleSort";

describe("Bubble sort",()=> {

    it("should sort array of numbers",()=> {
        expect(bubbleSort([4,5,2,3,7,8])).toEqual([2,3,4,5,7,8])
    })

    it("should handle already sorted array", ()=> {
        expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4])
      });

    it("should handle reverse sorted array", () => {
        expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    });
    
    it("should handle empty array", () => {
        expect(bubbleSort([])).toEqual([]);
    });
    
})