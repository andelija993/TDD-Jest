const analyzeArray = require("./Array")

describe("Returns object", ()=>{
    test("Function returns analized array in object", ()=>{
        expect(analyzeArray([1,2,3,4,56])).toBeExact({});
    });
})