function duosmiumCount() {
    var req = new XMLHttpRequest();

    req.open('GET', 'https://www.duosmium.org/results', false);
    req.send(null);

    if (req.status == 200) {
        let i = req.responseText.search("<dt>\\d+<\/dt>\\s*<dd>Total<\/dd>");
        let j = req.responseText.search("<\/dt>\\s*<dd>Total<\/dd>");
        if (i === -1) {
            return "206";
        } else {
            return req.responseText.substring(i + 4, j);
        }
    } else {
        return "206";
    }
}

function duosmiumOnLoad() {
    let duosmiumData = Array.prototype.slice.call(document.getElementById("projects").getElementsByClassName("card-body")).filter(x => x.getElementsByClassName("card-title")[0].innerText === "Duosmium Results");
    if (duosmiumData.length > 0) {
        let currentText = duosmiumData[0].getElementsByClassName("card-text")[0].innerText;
        let newText = currentText.replace("206", duosmiumCount());
        duosmiumData[0].getElementsByClassName("card-text")[0].innerText = newText;
    }
}

window.addEventListener("load", (event) => {
    duosmiumOnLoad();
  });