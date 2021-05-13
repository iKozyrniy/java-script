const number = 11;

for (let i = 1; i < number; i += 1) {
  if (i % 2 === 0) {
      console.log('Число ', i, ' парное')
    continue;
  } else {
      console.log('Число ', i, ' не парное')
    }
}