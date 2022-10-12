const {add, substract, multiplicate, divide, addMultiple} = require("./Calculator")

describe("Test additon", ()=>{
    test("adding 2 and 4 should return 6", ()=>{
        expect(add(2,4)).toBe(6);
    });
})

describe("Test additon multiple", ()=>{
    test("multiple numbers should add all", ()=>{
        expect(addMultiple(2,4,9,10,25)).toBe(50);
    });
})

describe("Test substraction", ()=>{
    test("substracting 5 and 9 should return -4", ()=>{
        expect(substract(5,9)).toBe(-4);
    });
})

describe("Test multiplicate", ()=>{
    test("multiplicating 4 and 8 should return 32", ()=>{
        expect(multiplicate(4,8)).toBe(32);
    });
})

describe("Test divide", ()=>{
    test("division 9 and 3 should return 3", ()=>{
        expect(divide(9,3)).toBe(3);
    });
})

//edge error sum
describe("String or one argument error", ()=>{
    test("It should throw error if called with non number or 1 argument", ()=>{
        expect(() =>add(9)).toThrowError('You must put 2 numbers!');
    });
})

describe("String or one argument error", ()=>{
    test("It should throw error if called with non number or 0 or 1 argument", ()=>{
        expect(() =>addMultiple(91)).toThrowError('You must put at least 2 numbers.');
        expect(() =>addMultiple(91, 52, 'Andjelija')).toThrowError('You can only sum numbers not strings!');
    });
})

describe("Second argument is 0", ()=>{
    test("It should throw error if trying to divide by 0", ()=>{
        expect(() =>divide(91,0)).toThrowError('You cannot divide by 0!');
    });
})