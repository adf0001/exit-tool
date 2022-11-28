# exit-tool
an exit tool with ppid-exit and timeout

# Install
```
npm install exit-tool
```

# Usage & Api
```javascript
var exit_tool = require("exit-tool");

console.log("NOTE: This test program and its parent process will exit, after 3 seconds ...");

/*
exit_tool( [options] ) 

options
	.killParent
		set true to kill the parent process
	.delay
		the delay milliseconds
	.exitCode
		the exit code
	.debug
		show debug message
*/
exit_tool({ killParent: true, debug: true, delay: 3000, exitCode: 0 });

```
