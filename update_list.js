/*
  getNewList():
    - grab data from IN
    - format for queries
    - run query/queries
    - return list

  onload = refresh.click = getNewList()
*/

var noOpinion = "Any";
var check = "x";

function getNewList() {
  // grab data from IN
  // checkboxes
  // for select boxes
  var countyAny = document.getElementById("county_any");
  var schoolDistrictAny = document.getElementById("school_district_any");
  var schoolNameAny = document.getElementById("school_name_any");
  var eventsAny = document.getElementById("events_any");

  // grade level
  var es = document.getElementById("es");
  var ms = document.getElementById("ms");
  var hs = document.getElementById("hs");

  // k12 model
  var blank = document.getElementById("blank");
  var trad = document.getElementById("trad");
  var jaDay = document.getElementById("jaday");

  // title1
  var title1 = document.getElementById("title1");

  // run query/queries
  var filteredList = [];
  var db = firebase.database().ref("positions");
  db.once("value", function(data) {
    var entries = data.val();
    var keys = Object.keys(entries);
    for (var i = 0; i < keys.length; ++i) {
      var k = keys[i];
      var entry = entries[k];

      // filter
      if (!countyAny.checked) {
        var county = document.getElementById("county");
        for (var i = 0; i < county.options.length; ++i) {

        }
      }

      if (!schoolDistrictAny.checked) {
        var schoolDistrict = document.getElementById("school_district");
      }

      if (!schoolNameAny.checked) {
        var schoolName = document.getElementById("school_name");
        for (var i = 0; i < name.options.length)
      }

      if (eventsAny.checked) {
        var events = document.getElementById("events");
      }

      if (es.checked && entry.es != check) continue;
      if (ms.checked && entry.ms != check) continue;
      if (hs.checked && entry.hs != check) continue;
      if (blank.checked && entry.model != "") continue;
      if (jaDay.checked && entry.model == "JA Day") continue;
      if (trad.checked && (entry.model == "" || entry.model == "JA Day")) continue;

      // if we are here, the entry is approved
      filteredList.push(entry);
    }
  });

  // return list
  return filteredList;
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
