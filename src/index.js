module.exports = function getZerosCount(number) {
    let count5 = count2 = 0;
    //let number = 8;
    for (let i = 5; i <= number; i += 5) {
        let temp = i;
    
        while (temp % 5 === 0) {
            temp = temp / 5;
            count5++;
        }
    } 
    return count5;
/*
    for (let i = 2; i <= number; i += 2) {
      let temp = i;
  
      while (temp % 2 === 0) {
          temp = temp / 2;
          count2++;
      }
  }
    if (count2 >= count5){
      return count5;
    } else {
      return count2;
    }*/
}