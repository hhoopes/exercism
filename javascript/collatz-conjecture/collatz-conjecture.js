export const steps = (num) => {
  if(num < 1) {
    throw new Error('Only positive numbers are allowed')
  }

  for(var steps = 0; 1 < num; steps++) {
    num = 
      num % 2 === 0 ? num/2 : num * 3 + 1;
  }
  
  return steps
};