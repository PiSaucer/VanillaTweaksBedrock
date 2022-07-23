function detectPacks(fileInput) {
    document.getElementById("convertedPath").value = "";
    if (fileInput.files[0] == undefined) {
        return;
    }
    var filename = fileInput.files[0].name;
    var reader = new FileReader();
    reader.onload = function(ev) {
        JSZip.loadAsync(ev.target.result).then(function(zip) {
            zip.forEach(function(relativePath, zipEntry) {
                if (zipEntry.name == "PACKS.txt") {
                    zip.file(zipEntry.name).async("string").then(function(result) {
                        document.getElementById("convertedPath").value = result + "\n";
                    });
                }
            });
            document.getElementById("convertedPath").value = document.getElementById("convertedPath").value.replaceAll(/undefined/g, "");
        }).catch(function(err) {
            console.error("Failed to open", filename, " as ZIP file:", err);
        })
    };
    reader.onerror = function(err) {
        console.error("Failed to read file", err);
    }
    reader.readAsArrayBuffer(fileInput.files[0]);
    setTimeout(function() {
        document.getElementById("convertedPath").value = document.getElementById("convertedPath").value.substring(0, document.getElementById("convertedPath").value.length - 1);
        enablePacks();
    }, 150);
}