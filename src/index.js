module.exports = function getZerosCount(number, base) {
  // your implementation
  
  let trailing_zeros = 0;
  

   while (number % base == 0){
    trailing_zeros++;
    number = number / base;      
  }
 
  return trailing_zeros;
}
