let $ = (query) => {
  var res = document.querySelectorAll(query);

  if (res.length === 1) {
    return res[0];
  }

  return res;
};

let hue = jsHue();
let bridge = hue.bridge('192.168.1.142');
let username = "xV5U8C2oBX5swYoNe8NLSRc4u6wHp2X-n-9z4pLf";
let user;

const mavTC = tinycolor('#FF3800').toRgb();
const conTC = tinycolor('#0DFF47').toRgb();
const menTC = tinycolor('#0C1BE8').toRgb();
const dynTC = tinycolor('#31152B').toRgb();
const navTC = tinycolor('#E8D90C').toRgb();

const mav = rgb_to_cie(mavTC.r, mavTC.g, mavTC.b).map((x) => { return parseFloat(x); });
const con = rgb_to_cie(conTC.r, conTC.g, conTC.b).map((x) => { return parseFloat(x); });
const men = rgb_to_cie(menTC.r, menTC.g, menTC.b).map((x) => { return parseFloat(x); });
const dyn = rgb_to_cie(dynTC.r, dynTC.g, dynTC.b).map((x) => { return parseFloat(x); });
const nav = rgb_to_cie(navTC.r, navTC.g, navTC.b).map((x) => { return parseFloat(x); });

const get = (url, callback) => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
    }
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

const samples = [
                  {"connector":30,"maverick":30,"mentor":30,"navigator":10,"dynamo":0},
                  {"connector":40,"maverick":30,"mentor":30,"navigator":10,"dynamo":0},
                  {"connector":20,"maverick":10,"mentor":30,"navigator":10,"dynamo":0},
                  {"connector":30,"maverick":30,"mentor":30,"navigator":10,"dynamo":100},
                  {"connector":30,"maverick":30,"mentor":30,"navigator":60,"dynamo":0}
                ];

const hitEndpoint = () => {
  let endpoint = 'http://personalitee-api.mybluemix.net/personality-percentage';
  let updateLights = (data) => {
    let getLargestDemographic = (demographics) => {
      let largest = 'mentor';

      for (let d in demographics) {
        if (demographics[largest] < demographics[d]) {
          largest = d;
        }
      }

      console.log(largest);
      return largest;
    };

    let sample = samples[Math.floor(5*Math.random())];
    console.log(sample);
    let demographic = getLargestDemographic(sample);
    // let demographic = getLargestDemographic(data);
    switch(demographic) {
      // TODO change this!!!
      let numLights = 10;
      case 'connector':
        // Change the lights in all Groups
        for (let i=0; i<numLights; i++){
          // user.setLightState(i, {xy: con}, (data) => { console.log(data); }, (err) => { console.log(err);});
        }
        user.setLightState(2, {xy: con}, (data) => { console.log(data); }, (err) => { console.log(err);});
        break;

      case 'maverick':
        // Change the lights in all Groups
        for (let i=0; i<numLights; i++){
          // user.setLightState(i, {xy: mav}, (data) => { console.log(data); }, (err) => { console.log(err);});
        }
        user.setLightState(2, {xy: mav}, (data) => { console.log(data); }, (err) => { console.log(err);});
        break;

      case 'navigator':
        // Change the lights in all Groups
        for (let i=0; i<numLights; i++){
          // user.setLightState(i, {xy: nav}, (data) => { console.log(data); }, (err) => { console.log(err);});
        }
        user.setLightState(2, {xy: nav}, (data) => { console.log(data); }, (err) => { console.log(err);});
        break;

      case 'dynamo':
        // Change the lights in all Groups
        for (let i=0; i<numLights; i++){
          // user.setLightState(i, {xy: dyn}, (data) => { console.log(data); }, (err) => { console.log(err);});
        }
        user.setLightState(2, {xy: dyn}, (data) => { console.log(data); }, (err) => { console.log(err);});
        break;

      case 'mentor':
        // Change the lights in all Groups
        for (let i=0; i<numLights; i++){
          // user.setLightState(i, {xy: men}, (data) => { console.log(data); }, (err) => { console.log(err);});
        }
        user.setLightState(2, {xy: men}, (data) => { console.log(data); }, (err) => { console.log(err);});
        break;

      default:
        console.log('Oh shit');
    }
  };

  get(endpoint, updateLights);
};

// create user account (requires link button to be pressed)
bridge.createUser('sxsw', function(data) {
  user = bridge.user(username);
  user.setLightState(2, { on: true }, function(data) { console.log(data); });
});

$('.btns').addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'BUTTON') {
    if (e.target.dataset.personality == 'maverick') {
      let red = rgb_to_cie(255, 0, 0);
      console.log(mav);
      user.setLightState(2, {xy: mav}, (data) => { console.log(data); }, (err) => { console.log(err);});
    }

    else if (e.target.dataset.personality == 'connector') {
      let green = rgb_to_cie(0, 255, 0);
      console.log(con);
      user.setLightState(2, {xy: con}, (data) => { console.log(data); }, (err) => { console.log(err);});
    }

    else if (e.target.dataset.personality == 'mentor') {
      let blue = rgb_to_cie(0, 0, 255);
      console.log(men);
      user.setLightState(2, {xy: men}, (data) => { console.log(data); }, (err) => { console.log(err);});
    }

    else if (e.target.dataset.personality == 'dynamo') {
      let blue = rgb_to_cie(0, 0, 255);
      console.log(dyn);
      user.setLightState(2, {xy: dyn}, (data) => { console.log(data); }, (err) => { console.log(err);});
    }

    else {
      console.log(nav);
      user.setLightState(2, {xy: nav}, (data) => { console.log(data); }, (err) => { console.log(err);});
    }
  }
});

window.setInterval(hitEndpoint, 3000);

/*
  wait some time
  hit the endpoint
  see which demographic has the largest ratio
  change the color accordingly
*/
