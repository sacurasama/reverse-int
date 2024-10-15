module.exports = function reverse (n) {
  const arrNumber = [...String(n)];
   arrNumber.reverse();
    let newNumber = " ";
    for(let i = 0; i < arrNumber.length; i++ ){
        newNumber += arrNumber[i];
    }
    return  Number(newNumber);
}
