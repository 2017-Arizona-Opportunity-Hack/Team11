/*
  getNewList():
    - grab data from IN
    - format for queries
    - run query/queries
    - return JSON list

  onload = refresh.click = getNewList()
*/

function getNewList() {
  // grab data from IN
  var county = document.getElementById().value;
  var schoolDistrict = document.getElementById().value;
  var schoolName = document.getElementById().value;
  var gradeLevel = document.getElementById().value;
  var k12Model = document.getElementById().value;
  var eventType = document.getElementById().value;
  var title1 = document.getElementById().value;
  var address = document.getElementById().value;
  var city = document.getElementById().value;
  var zipCode = document.getElementById().value;

  // format for queries


  // run query/queries


  // return JSON list


}

window.onload = function() {
  // get the firebase DB
  var config = {
      apiKey: "AIzaSyDgrTSFXKVJSLIWgwLJlWbTXftjb-89fr8",
      authDomain: "ja-arizona-26ebd.firebaseapp.com",
      databaseURL: "https://ja-arizona-26ebd.firebaseio.com",
      projectId: "ja-arizona-26ebd",
      storageBucket: "ja-arizona-26ebd.appspot.com",
      messagingSenderId: "209276924145"
  };
  firebase.initializeApp(config);

  newList = getNewList();
  document.getElementById("refresh_button").onclick = function() {
    newList = getNewList();
  };
  // RUN FUNCTION TO CONVERT TO HTML AND UPDATE ACTUAL LIST
};
