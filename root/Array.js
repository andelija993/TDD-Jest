/*Using TDD implement function (you can use more private functions to separate logic) 
for analyze an array of numbers.Function takes an array of numbers,
 analyze it, and return object that has information about number of elements,
  average value of elements, maximum and minimum value. Implement handling error that
   function throw if one of elements is string, or undefined.*/

//   let numberArray =[5,7,8,9,"Andjelija",34,55,66]

   function analyzeArray(numbers){
    numbers.forEach(number => {
        if (typeof number === 'string' || number === undefined ) {
            throw new Error('Array must only contain numbers')
        }})
            let noOfElements = numbers.length;
            let averageElements = numbers.reduce((a,b)=>a+b,0)/numbers.length;
            let minNumber = Math.min(...numbers);
            let maxNumber =Math.max(...numbers);
            let newObject = {
                numberOfElements:noOfElements,
                averageValue:averageElements,
                minimumNumber:minNumber,
                maximumNumber:maxNumber}
                return newObject;  
            }
        
    
    //console.log(analyzeArray(numberArray));

module.exports = analyzeArray;