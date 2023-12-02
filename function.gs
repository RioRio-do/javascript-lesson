/* 
  関数の定義と呼び出し
  functionDefAndCall()    関数の宣言と呼び出し
  functionParameter()     関数にデータを渡す
  functionReturn()        関数からデータを受け取る
  // TODO method
*/

// 宣言と呼び出し
function functionDefAndCall(){
  console.log("10! = ",factorial(10));
}

function calc2() {
  console.log("1 + 1 = ",1 + 1)
}

// TODO 「こんにちは」と出力する関数を作成しなさい
function say_hello(){
  console.log("こんにちは");
}

// パラメータ: 関数にデータを渡す
function functionParameter(){
  out1ToN(n)
}

function out1ToN(n){
  for(let i = 1;i<=n;i++){
    console.log(i)
  }
}

// TODO 正の整数nを受け取り、nから1まで数え下げる関数を作成しなさい
function countDown(n) {
  for(let i = n; i>=1; i--){
    console.log(i);
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

// TODO 正の整数nを受け取り、nの階乗を返す関数を作成しなさい
function factorial(n) {
  if(n != 1){
    return n * factorial(n - 1)
  }else{
    return 1
  }
}