import { binarySearch } from "./binarySearch";

describe("Binary Search", ()=> {
    const numbers = [1,3,5,6,7,8,13]

    it("should return correct index when target exists",()=> {
        expect(binarySearch(numbers,5)).toBe(2)
    })

    it("should return -1 when target does not exist",()=> {
        expect(binarySearch(numbers, 4)).toBe(-1)
    })

    it("should handle first element",()=> {
        expect(binarySearch(numbers, 1)).toBe(0)
    })

    it("should handle last element",()=> {
        expect(binarySearch(numbers, 13)).toBe(6)
    })

    it("should return -1 for empty array", () => {
        expect(binarySearch([], 10)).toBe(-1);
    });
})