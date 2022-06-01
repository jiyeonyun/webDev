let promptObj = prompt('수를 입력해주세요');
let num = Number(promptObj);


for(let i = 0; i<num; i++){
  let floor = '';
  for(let j = 1; j<num ; j++){
      if(num-i<j){
          floor += '**';
      }
      else{
          floor += ' ';
      }
  }
  floor += '*';
  console.log(floor);
}


console.log('hi');