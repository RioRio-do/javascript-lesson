/* 
  条件分岐とループのサンプルプログラム 
  controlIf()     if文
  controlSwitch   switch文
  controlForCount for文(要素番号の数え上げ)
  controlForOf    for文(配列要素の順次取得)
  controlForNest  for文(二重ループ)
*/

// if文: 条件分岐
function controlIf() {
  console.log("if文の例:");

  let age = 20;

  if (age >= 18) {
    console.log("成人です。");
  } else {
    console.log("未成年です。");
  }
}

// switch文: 複数の条件分岐
function controlSwitch() {
  console.log("switch文の例:");

  let day = "月";

  switch (day) {
    case "月":
      console.log("月曜日です。");
      break;
    case "水":
      console.log("水曜日です。");
      break;
    default:
      console.log("その他の曜日です。");
  }
}

// forループ: 指定回数の繰り返し
function controlForCount() {
  console.log("forループの例:");

  for (let i = 1; i <= 5; i++) {
    console.log("繰り返し回数: " + i);
  }
}

// for...ofループ: 配列要素のイテレーション
function controlForOf() {
  console.log("for...ofループの例:");

  const colors = ["赤", "青", "緑", "黄", "紫"];

  for (const color of colors) {
    console.log("色: " + color);
  }
}


// 二重forループ: パターン生成
function controlForNest() {
  console.log("二重forループの例:");

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log("i: " + i + ", j: " + j);
    }
  }
}