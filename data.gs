/* 
  データの格納と配列操作 
  storeData()       変数
  storeArrayData()  配列
  storeObjectData() オブジェクト
*/

// 変数(variable): 単一のデータ要素を格納するためのコンテナ
function storeData() {
  // 変数を使用してデータを格納
  let name = "John";
  let age = 30;
  
  console.log("変数(variable):");
  console.log("名前: ",name);
  console.log("年齢: ",age);

  // TODO 変数movieを作成し、好きな映画の名前を入力しなさい
}

// 配列(Array): 複数のデータ要素をリストとして格納するためのコンテナ
function storeArrayData() {
  // 配列を使用して複数のデータを格納
  let fruits = ["apple", "banana", "cherry"];
  
  console.log("配列(array):");
  console.log("果物リスト: ",fruits);

  // 配列要素へのアクセス
  // ※配列の要素番号は0から数え上げ
  console.log("2番目の要素: ",fruits[1]);

  // 配列の長さの取得
  console.log("配列の長さ: " ,fruits.length);

  // TODO 配列numbersを作成し、好きな整数三つで初期化しなさい

  //TODO 配列numbersのすべての要素の和を出力しなさい
}

// オブジェクト(Object): 関連データをキーと値のペアとして格納するためのコンテナ
function storeObjectData() {
  // オブジェクトを使用して関連データを格納
  let person = {
    name: "Alice",
    age: 25,
    city: "New York"
  };
  
  // 変数名.キー名でデータにアクセス
  console.log("オブジェクト(object):");
  console.log("名前: ",person.name);
  console.log("年齢: ",person.age);
  console.log("都市: ",person.city);
}
