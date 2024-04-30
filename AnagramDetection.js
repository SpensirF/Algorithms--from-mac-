var isAnagram = function(test, original) {

    const Ltest = test.toLowerCase(); 
    const Loriginal = original.toLowerCase();

    const sortTest = Ltest.split('').sort().join('').toLowerCase();
    const sortOriginal = Loriginal.split('').sort().join('').toLowerCase();

    return sortTest === sortOriginal; 
};

console.log(isAnagram("Wolf", "flwo"));
console.log(isAnagram("foxx", "xof")); 
