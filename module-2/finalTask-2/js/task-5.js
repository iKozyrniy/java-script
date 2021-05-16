
const checkForSpam = function (message) {
    let array = message.toLowerCase();
    if (array.includes('spam')) {
        return true;
    } else if (array.includes('sale')) {
        return true;
    } else {
        return false;
    };
};
  

  console.log(checkForSpam('Latest technology news')); 
  
  console.log(checkForSpam('JavaScript weekly newsletter')); 
  
  console.log(checkForSpam('Get best sale offers now!')); 
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); 