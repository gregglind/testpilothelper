"use strict";
const tabs=require('tabs');
const preferences = require('preferences-service');

[
 ["general.warnOnAboutConfig", false],
 ["browser.dom.window.dump.enabled",true],
 ["extensions.testpilot.indexFileName","index-my.json"],
 ["extensions.testpilot.indexBaseURL","http://localhost:8000/testcases/"],
 ["extensions.testpilot.popup.delayAfterStartup",500],
 ["extensions.testpilot.ssldownloadrequired",false],
 ["extensions.testpilot.runStudies",true],
 ["extensions.testpilot.popup.timeBetweenChecks",60000], //used to be one day
 ["extensions.testpilot.popup.showOnNewStudy",true],
 ["extensions.testpilot.popup.showOnStudyFinished",true]
].forEach(function(x){
  console.log('setting:', x[0], '=>', x[1]);
  preferences.set(x[0],x[1]);
});


/*
soon, plumb in links to original tp prefs here,
so we can use the prefs pane as a control panel?

function onPrefChange(prefName) {
    console.log("The " + prefName + " preference changed.");
}
require("simple-prefs").on("somePreference", onPrefChange);
require("simple-prefs").on("someOtherPreference", onPrefChange);
*/


// open some useful tabs
["about:config", "chrome://testpilot/content/debug.html", "about:addons",
    preferences.get("extensions.testpilot.indexBaseURL"),"chrome://global/content/console.xul"].forEach(
    function(x){tabs.open(x)});


var setprefs = function (prefs,prefix) {
    prefix = prefix || "+";
    if (! prefs) {return};
    var n = prefix.length;
    Object.keys(prefs).forEach(
        function(k){
            let v = prefs[k];
            if (k.indexOf(prefix) == 0) { //
                myprefs[k.slice(n)] = v
            } else {  // regular pref
                preferences.set(k,v);
            }
        }
    );
};


exports.main = function(options,callback) {
    let staticargs = options.staticArgs;
    // debug mode
    console.log("static args:",JSON.stringify(staticargs));
    setprefs(staticargs.prefs);
};



