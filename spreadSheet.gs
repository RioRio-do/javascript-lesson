/*
  google spread sheetを扱う
  createAndAccessSheet()    シートを作成、取得
  writeDataToSheet()        シートにデータを書き込む
  readDataFromSheet()       シートからデータを読み取る
  getAllRecords()           全てのレコードを取得
*/

function createAndAccessSheet(){
  const sheetApp = SpreadsheetApp.getActiveSpreadsheet();
  sheetApp.insertSheet("test sheet")
  const sheet = sheetApp.getSheetByName("test sheet")
}

function writeDataToSheet(){
  const sheetApp = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = sheetApp.getSheetByName("test sheet"); // 作成したシートを取得

  // データをセルに書き込む
  sheet.getRange("A1").setValue("データ1");
  sheet.getRange("B1").setValue("データ2");
}

function readDataFromSheet(){
  const sheetApp = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = sheetApp.getSheetByName("test sheet"); // シートを取得

  // セルからデータを読み取る
  const data1 = sheet.getRange("A1").getValue();
  const data2 = sheet.getRange("B1").getValue();

  console.log("データ1: " + data1);
  console.log("データ2: " + data2);
}

function getAllRecords(){
  const sheetApp = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = sheetApp.getSheetByName("test sheet"); // シートを取得

  // シート内のデータを取得
  const data = sheet.getDataRange().getValues();

  for (var i = 0; i < data.length; i++) {
    console.log("レコード " + (i + 1) + ": " + data[i].join(", "));
  }
}