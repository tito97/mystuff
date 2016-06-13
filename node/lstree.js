var fs = require("fs");

function readdir(currentPath,identation) {
	try{
	var file = fs.statSync(currentPath);
	if( file.isFile() )
		console.log(identation+"\u251C  "+currentPath.substring(currentPath.lastIndexOf("/")+1));
	else if( file.isDirectory() ){
		var files = fs.readdirSync(currentPath)
		if(files.length>0)
			console.log(identation+"\u251C\u2500\u2510  "+currentPath.substring(currentPath.lastIndexOf("/")+1));
		else
			console.log(identation+"\u2514\u2500\u2510  "+currentPath.substring(currentPath.lastIndexOf("/")+1));
		for(var i=0; i<files.length; i++)
			readdir(currentPath+"/"+files[i],identation+"\u254E ");
		console.log(identation+"\u250C\u2500\u2518")
	}
	}catch(e){}
}

readdir(".","");
