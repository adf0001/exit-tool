
//global variable, for html page, refer tpsvr @ npm.
exit_tool = require("../exit-tool.js");

module.exports = {

	"exit_tool": function (done) {
		if (typeof window !== "undefined") throw "disable for browser";

		console.log("NOTE: This test program and its parent process will exit, after 3 seconds ...");
		exit_tool({ killParent: true, debug: true, delay: 3000, exitCode: 0 });

		// done(!(
		// 	exit_tool
		// ));
	},

	"check exports": function (done) {
		var m = exit_tool;
		for (var i in m) {
			if (typeof m[i] === "undefined") { done("undefined: " + i); return; }
		}
		done(false);

		console.log(m);
		var list = "export list: " + Object.keys(m).join(", ");
		console.log(list);
		return list;
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('exit_tool', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
