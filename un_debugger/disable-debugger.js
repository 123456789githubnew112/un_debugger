(function() {
    console.log("disable-debugger.js script injected successfully.");
    window.debugger = function() {};
})();
