
// exit-tool @ npm, an exit tool with ppid-exit and timeout.

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
module.exports = function (options) {
	var { killParent, delay, exitCode, debug } = { ...options };

	setTimeout(() => {
		//kill parent process, like supervisor.
		if (killParent && process.ppid) {
			if (debug) console.log("killing ppid...")
			process.kill(process.ppid);
		}

		if (debug) console.log("exiting...")
		process.exit(exitCode || 0);
	}, delay || 0);
}
