function enablePacks() {
    let packsString = document.getElementById("convertedPath").value;
    let packsArray = packsString.split("\n");
    packsArray.forEach(element => {
        if (document.getElementById(element)) {
            document.getElementById(element).checked = true;
        } else {
            console.error("Unable to find \"" + element + "\" id in DOM");
        }
    });
}