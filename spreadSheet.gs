/*
  google spread sheetを扱う
  createAndAccessSheet()    シートを作成、取得
  writeDataToSheet()        シートにデータを書き込む
  getAllRecords()           全てのレコードを取得
  readDataFromSheet()       シートからデータを読み取る
*/

//const spreadSheetID = "1goKlICYi7ZINZ3cdfkPke2IHGCRR8LS2sxCh9oh20v4"
//const sheetName = "task"

function createAndAccessSheet(){
  // おまじない
  let sheetApp = SpreadsheetApp.openById(spreadSheetID);
  // 新規シートを作成
  sheetApp.insertSheet(sheetName)
  let sheet = sheetApp.getSheetByName(sheetName)
}

function writeDataToSheet(){
  let sheetApp = SpreadsheetApp.openById(spreadSheetID);
  let sheet = sheetApp.getSheetByName(sheetName); // 作成したシートを取得

  // データをセルに書き込む
  sheet.getRange(1,1).setValue("データ1");
  sheet.getRange(1,2).setValue("データ2");
}

function getAllRecords(){
  let sheetApp = SpreadsheetApp.openById(spreadSheetID);
  let sheet = sheetApp.getSheetByName(sheetName); // シートを取得

  // シート内のデータを取得
  const data = sheet.getDataRange().getValues();

  for (var i = 0; i < data.length; i++) {
    console.log("レコード " + (i + 1) + ": " + data[i]);
  }
}

function readDataFromSheet(){
  let sheetApp = SpreadsheetApp.openById(spreadSheetID);
  let sheet = sheetApp.getSheetByName(sheetName); // シートを取得

  // セルからデータを読み取る
  let data1 = sheet.getRange(1,1).getValue();
  let data2 = sheet.getRange(1,2).getValue();

  console.log("データ1: " ,data1);
  console.log("データ2: " ,data2);
}