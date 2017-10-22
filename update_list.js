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


  // format for queries


  // run query/queries


  // return JSON list


}

window.onload = function() {
  // get the firebase DB
  var config = {
      apiKey: "AIzaSyAgd55aG5L_fMmY_RWfSPIFEyKGSu9-_TY",
      authDomain: "ja-arizona.firebaseapp.com",
      databaseURL: "https://ja-arizona.firebaseio.com",
      projectId: "ja-arizona",
      storageBucket: "ja-arizona.appspot.com",
      messagingSenderId: "295885839216"
  };
  firebase.initializeApp(config);

  newList = getNewList();
  document.getElementById("refresh_button").onclick = function() {
    newList = getNewList();
  };
  // RUN FUNCTION TO CONVERT TO HTML AND UPDATE ACTUAL LIST
};
