(function() {
    console.log("Injecting disable-debugger.js script.");
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('disable-debugger.js');
    script.onload = function() {
        console.log("disable-debugger.js script loaded successfully.");
    };
    script.onerror = function() {
        console.error("Failed to load disable-debugger.js script.");
    };
    document.documentElement.appendChild(script);
})();
