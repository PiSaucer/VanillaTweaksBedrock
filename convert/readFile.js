function onMyfileChange(fileInput) {
    if (fileInput.files[0] == undefined) {
        return;
    }
    var filename = fileInput.files[0].name;
    var reader = new FileReader();
    reader.onload = function(ev) {
        JSZip.loadAsync(ev.target.result).then(function(zip) {
            var i = 1;
            zip.forEach(function(relativePath, zipEntry) {
                console.log(zipEntry.name);
                var chars = zipEntry.name.split('/');
                var folderPathForItem;
                for (var j = 0; j < chars.length - 1; j++) {
                    if (j < chars.length - 2) {
                        folderPathForItem += chars[j] + "/"
                    } else {
                        folderPathForItem += chars[j]
                    }
                }
                document.getElementById("convertedPath").value += "data-url" + i + "=\"" + "/mcpack/" + document.getElementById("dir").value + "/" + zipEntry.name + "\"\n" + "data-folder" + i + "=\"" + folderPathForItem + "\"\n";
                i++;
            });
            document.getElementById("convertedPath").value = document.getElementById("convertedPath").value.replaceAll(/undefined/g, "");
            document.getElementById("convertedAmount").value = "data-modulename=\"" + document.getElementById("modulename").value + "\"\ndata-amount=" + i;
        }).catch(function(err) {
            console.error("Failed to open", filename, " as ZIP file:", err);
        })
    };
    reader.onerror = function(err) {
        console.error("Failed to read file", err);
    }
    reader.readAsArrayBuffer(fileInput.files[0]);
}