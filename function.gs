/* 
  関数の定義と呼び出し
  functionDefAndCall()    関数の宣言と呼び出し
  functionParameter()     関数にデータを渡す
  functionReturn()        関数からデータを受け取る
  // TODO method
*/

// 宣言と呼び出し
function functionDefAndCall(){
  calc2()
}

function calc2() {
  console.log("1 + 1 = ",1 + 1)
}


// パラメータ: 関数にデータを渡す
function functionParameter(){
  out1ToN()
}

function out1ToN(n){
  for(let i = 1;i<=n;i++){
    console.log(i)
  }
}


// 戻り値: 関数からデータを受け取る
function functionReturn(){
  const ans = sum1ToN(10)
  console.log(ans)
  // console.log(sum1ToN(10))
}

function sum1ToN(n){
  let sum = 0;
  for(let i = 1;i<=n;i++){
    sum = sum + i;
  }
  return sum
}