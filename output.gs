/* 
  様々な形式の出力 
  outString()   文字列
  outNumber()   数字
  outBool()     真偽値
  outObject()   オブジェクト
  outArray()    配列
*/

// 文字列(string)
function outString() {
  console.log("文字列(string): Hello, World");

  // TODO 「こんにちは」と出力するプログラムを作成してください
  console.log("こんにちは");
}

// 数字(number)
function outNumber(){
  // 加算、減算
  console.log("数字(number): 1 + 2 - 3 =", 1 + 2 - 3);
  
  // 乗算
  console.log("数字(number): 3 x 5 =", 3 * 5);

  // 除算
  console.log("数字(number): 1 ÷ 2 =", 1 / 2);

  // 剰余, 指数, など...

  // TODO 1から5までの整数の和を計算するプログラムを作成してください
  console.log("1 + 2 + 3 + 4 + 5 = ", 1 + 2 + 3 + 4 + 5);

  // TODO 5の階乗を計算するプログラムを作成してください
  console.log("5! = ", 5 * 4 * 3 * 2 * 1);
}

// 真偽(bool)
function outBool(){
  const num = 1;
  const str = "apple";

  // 数値の真偽
  console.log("真偽(bool): numは1ですか？", num === 1);
  
  // 数値の偽
  console.log("真偽(bool): numは1ではないですか？", num !== 1);

  // 文字列の真偽
  console.log("真偽(bool): strは 'apple' ですか？", str === "apple");

  // 文字列の偽
  console.log("真偽(bool): strは 'apple' ではないですか？", str !== "apple");
}

// オブジェクト
function outObject(){
  const todo = {
    user: "Ayumu",
    deadline: "2023-01-02",
    createdAt: "2023-01-01",
    isCompleted: false
  };
  console.log("オブジェクト(object):", todo);
}

// 配列(Array)
function outArray(){
  // 文字列配列
  const fruits = ["apple", "orange", "grape"];
  console.log("配列(array):", fruits);
 
  // オブジェクト配列
  const todos = [
    {
      user: "Ayumu1",
      deadline: "2023-01-02",
      createdAt: "2023-01-01",
      isCompleted: false
    },
    {
      user: "Ayumu2",
      deadline: "2023-01-02",
      createdAt: "2023-01-01",
      isCompleted: false
    },
    {
      user: "Ayumu3",
      deadline: "2023-01-02",
      createdAt: "2023-01-01",
      isCompleted: true
    }
  ];
  console.log("配列(array) of オブジェクト(object):", todos);
}
