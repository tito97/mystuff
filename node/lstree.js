var fs = require("fs");
/**
 * Prints the directory hiearchy
 */
function readdir(currentPath,identation) {
	try{ //Using sync functions 
		var file = fs.statSync(currentPath);
		if( file.isFile() )
			console.log(identation+"\u251C  "+
				currentPath.substring(currentPath.lastIndexOf("/")+1));
		else if( file.isDirectory() ){
			var files = fs.readdirSync(currentPath)
			if(files.length>0)
				console.log(identation+"\u251C\u2500\u2510  "+
						currentPath.substring(currentPath.lastIndexOf("/")+1));
			else
				console.log(identation+"\u2514\u2500\u2510  "+
						currentPath.substring(currentPath.lastIndexOf("/")+1));
			for(var i=0; i<files.length; i++) // repeat for each directory
				readdir(currentPath+"/"+files[i],identation+"\u254E ");
			//End of a directory
			console.log(identation+"\u250C\u2500\u2518")
		}
	}catch(e){
		// Something might go wrong reading some directory
		// Let's ignore those cases
	}
}

readdir(".","");
