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
        isValid = false;
        var county = document.getElementById("county");
        for (var i = 0; i < county.options.length; ++i) {
          var item = county.options[i];
          if (item.selected && entry.county == item.value) {
            isValid = true;
            break;
          }
        }

        if (!isValid) continue;
      }

      if (!schoolDistrictAny.checked) {
        isValid = false;
        var schoolDistrict = document.getElementById("school_district");
        for (var i = 0; i < schoolDistrict.options.length; ++i) {
          var item = schoolDistrict.options[i];
          if (item.selected && entry.district == item.value) {
            isValid = true;
            break;
          }
        }

        if (!isValid) continue;
      }

      if (!schoolNameAny.checked) {
        isValid = false;
        var schoolName = document.getElementById("school_name");
        for (var i = 0; i < schoolName.options.length; ++i) {
          var item = schoolName.options[i];
          if (item.selected && entry.name == item.value) {
            isValid = true;
            break;
          }
        }

        if (!isValid) continue;
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
