(function() {
    console.log("disable-debugger.js script injected successfully.");
    // 备份原始的Function构造函数
    const originalFunction = Function;

    // 重写Function构造函数
    Function = function(...args) {
        // 检查传入的参数中是否包含'debugger'字符串
        const code = args[args.length - 1]; // 最后一个参数通常是函数体
        if (code.includes('debugger')) {
            console.error("Attempt to create function with 'debugger' statement blocked.");
            return function() { return null; }; // 返回一个空函数，阻止执行
        }
        return new originalFunction(...args); // 否则，正常创建函数
    };

    // 测试重写效果
    const safeFunction = new Function("return 'This is safe';");
    console.log(safeFunction()); // 正常执行

    const debuggerFunction = new Function("debugger; return 'This is not safe';");
    console.log(debuggerFunction()); // 不会执行

})();
