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
  var db = firebase.firestore();
  alert("before");

  db.collection("positions").get().then((data) => {
    if (data.exists()) { alert("data does not exist"); }
    data.forEach((entryItem) => {
      var isValid = true;
      var entry = doc.data();

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
      }

      if (!eventsAny.checked) {
        isValid = false;
        var events = document.getElementById("events");
        var schoolName = document.getElementById("school_name");
        for (var i = 0; i < events.options.length; ++i) {
          var item = events.options[i];
          if (item.selected && entry.name == item.value) {
            isValid = true;
            break;
          }
        }
      }

      if (es.checked && entry.es != check) isValid = false;
      if (ms.checked && entry.ms != check) isValid = false;
      if (hs.checked && entry.hs != check) isValid = false;
      if (blank.checked && entry.model != "") isValid = false;
      if (jaDay.checked && entry.model == "JA Day") isValid = false;
      if (trad.checked && (entry.model == "" || entry.model == "JA Day")) isValid = false;

      // if we are here, the entry is approved
      if (isValid) filteredList.push(entry);
    });
  });
  alert("after");

  // return list
  return filteredList;
}

window.onload = function() {
  // get the firebase DB
  let config = {
      apiKey: "AIzaSyDgrTSFXKVJSLIWgwLJlWbTXftjb-89fr8",
      authDomain: "ja-arizona-26ebd.firebaseapp.com",
      databaseURL: "https://ja-arizona-26ebd.firebaseio.com",
      projectId: "ja-arizona-26ebd",
      storageBucket: "ja-arizona-26ebd.appspot.com",
      messagingSenderId: "209276924145"
  };
  firebase.initializeApp(config);

  //newList = getNewList();
  document.getElementById("list_form").onsubmit = function() {
    newList = getNewList();
  };
  // RUN FUNCTION TO CONVERT TO HTML AND UPDATE ACTUAL LIST
};
