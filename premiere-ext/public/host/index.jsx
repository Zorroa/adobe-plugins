try {
    var xLib = new ExternalObject("lib:PlugPlugExternalObject");
} catch (e) {
    alert(e);
}

function openDocument(location){
  var fileRef = new File(location);
  var docRef = app.open(fileRef);
}

function importFile(filePath) {
    app.project.importFiles([filePath],
      true, // suppress warnings 
      app.project.getInsertionBin(),
      false); // import as numbered stills
}