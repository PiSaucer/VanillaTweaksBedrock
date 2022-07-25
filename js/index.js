console.log(`
$$$$$$$\\  $$\\  $$$$$$\\
$$  __$$\\ \\__|$$  __$$\\
$$ |  $$ |$$\\ $$ /  \\__| $$$$$$\\  $$\\   $$\\  $$$$$$$\\  $$$$$$\\   $$$$$$\\
$$$$$$$  |$$ |\\$$$$$$\\   \\____$$\\ $$ |  $$ |$$  _____|$$  __$$\\ $$  __$$\\
$$  ____/ $$ | \\____$$\\  $$$$$$$ |$$ |  $$ |$$ /      $$$$$$$$ |$$ |  \\__|
$$ |      $$ |$$\\   $$ |$$  __$$ |$$ |  $$ |$$ |      $$   ____|$$ |
$$ |      $$ |\\$$$$$$  |\\$$$$$$$ |\\$$$$$$  |\\$$$$$$$\\ \\$$$$$$$\\ $$ |
\\__|      \\__| \\______/  \\_______| \\______/  \\_______| \\_______|\\__|
                                                                    ⠀`);
console.log("Interested in this website? Check the github for the source code");

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

jQuery(function($) {

    var Promise = window.Promise;
    if (!Promise) {
        Promise = JSZip.external.Promise;
    }

    /**
     * Fetch the content and return the associated promise.
     * @param {String} url the url of the content to fetch.
     * @return {Promise} the promise containing the data.
     */
    function urlToPromise(url) {
        return new Promise(function(resolve, reject) {
            JSZipUtils.getBinaryContent(url, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    $(document).ready(function() {
        $('#select-all').click(function() {
            var checked = this.checked;
            $('input[type="checkbox"]').each(function() {
                if (this.id !== "open-all") {
                    this.checked = checked;
                }
            });
        });

        let openAllBool = false;
        $('#open-all').click(function() {
            openAllBool = !openAllBool;
            if (openAllBool) {
                $('.collapse').addClass("show");
                document.getElementById("open-all-text").innerHTML = "Close All Categories";
            } else {
                $('.collapse').removeClass("show");
                document.getElementById("open-all-text").innerHTML = "Open All Categories";
            }
        })
    });

    $(".btn").on('click', function(e) {

        let fileType = $(this).attr("value");
        var $form = $("#download_form").click("submit", function(e) {
            resetMessage();
            var zip = new JSZip();
            var packNameArray = [];
            var packNamesString;

            // find every checked item
            $(this).find(":checked").each(function() {
                var $this = $(this);

                function filePerPack(length) {
                    for (var i = 1; i < length; i++) {
                        var url = $this.data("url" + [i]);
                        var dataFolder = $this.data("folder" + [i]);
                        var folder = zip.folder(dataFolder);
                        var filename = url.replace(/.*\//g, "");
                        var result = folder.file(filename, urlToPromise(url), {
                            binary: true
                        });
                    }
                    return result;
                }

                var amount = $this.data("amount");
                filePerPack(amount + 1);
            });

            $(':checked').each(function() {
                if (this.id !== "select-all" && this.id !== "open-all") {
                    packNamesString += $(this).data("modulename") + "\n";
                    packNameArray.push($(this).data("modulename"));
                }
            });
            packNamesString = packNamesString.replaceAll(/undefined/ig, "").replaceAll(/ /ig, "");
            packNameArray = packNameArray.filter(function(x) {
                return x !== undefined;
            });
            packNamesString = packNamesString.substring(0, packNamesString.length - 1);

            // master files here
            zip.file("CREDITS.txt", urlToPromise("/credits.md"), { binary: true });
            zip.file("LICENSE.txt", urlToPromise("/LICENSE"), { binary: true });
            zip.file("LEGAL_DISCLAIMER.txt", urlToPromise("/LEGAL_DISCLAIMER.md"), { binary: true });
            zip.file("README.txt", urlToPromise("/mcpack/master/readme.txt"), { binary: true });
            zip.file("PACKS.txt", packNamesString, { binary: true });
            zip.file("pack_icon.png", urlToPromise("/mcpack/master/pack_icon.png"), { binary: true });

            var uuid1 = uuidv4();
            var uuid2 = uuidv4();

            console.log("uuid1: " + uuid1 + "\nuuid2: " + uuid2);

            var description = "§evanillatweaksbedrock.ml - " + packNameArray.toString().replaceAll(/,/ig, ", ");

            var manifestInfoOBJ = {
                "format_version": 2,
                "header": {
                    "description": description,
                    "name": "§6Vanilla Tweaks Bedrock",
                    "uuid": uuid1,
                    "version": [0, 0, 1],
                    "min_engine_version": [1, 14, 0]
                },
                "modules": [{
                    "description": "§evanillatweaksbedrock.ml",
                    "type": "resources",
                    "uuid": uuid2,
                    "version": [1, 0, 0]
                }]
            };
            var manifestInfo = JSON.stringify(manifestInfoOBJ);

            zip.file("manifest.json", manifestInfo);

            // when everything has been downloaded, we can trigger the download
            zip.generateAsync({
                    type: "blob"
                }, function updateCallback(metadata) {
                    var msg = "progress: " + metadata.percent.toFixed(2) + "%";
                    if (metadata.currentFile) {
                        msg += " | adding: " + metadata.currentFile;
                    }
                    showMessage(msg);
                    updatePercent(metadata.percent | 0);
                })
                .then(function callback(blob) {

                        // see FileSaver.js

                        function makeid(length) {
                            var result = '';
                            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                            var charactersLength = characters.length;
                            for (var i = 0; i < length; i++) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                            }
                            return result;
                        }

                        var packID = makeid(5);

                        console.log("Filename: tweaks_" + packID + "." + fileType);

                        saveAs(blob, "tweaks_" + packID + "." + fileType);

                        showMessage("Thank you for downloading 😊");

                        $("#download_form").off();
                    },
                    function(e) {
                        showError(e);
                    });

            return false;
        });
    });

    /**
     * Reset the message.
     */
    function resetMessage() {
        $("#result")
            .removeClass()
            .text("");
    }
    /**
     * show a successful message.
     * @param {String} text the text to show.
     */
    function showMessage(text) {
        resetMessage();
        $("#result")
            .addClass("alert alert-success")
            .text(text);
    }
    /**
     * show an error message.
     * @param {String} text the text to show.
     */
    function showError(text) {
        resetMessage();
        $("#result")
            .addClass("alert alert-danger")
            .text(text);
    }
    /**
     * Update the progress bar.
     * @param {Integer} percent the current percent
     */
    function updatePercent(percent) {
        $("#progress_bar").removeClass("hide")
            .find(".progress-bar")
            .attr("aria-valuenow", percent)
            .css({
                width: percent + "%"
            });
    }

    if (!JSZip.support.blob) {
        showError("This works only with a modern browser !");
        return;
    }

});