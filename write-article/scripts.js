// Gets the current date:
function getfullDate() {
    const date = new Date();
    const formattedTime = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
    document.getElementById("meta").textContent = "Geschrieben von kayadd am " + formattedTime;
}
// Saves the values in the text-submits
function save() {
    var textarea = document.getElementById("text-main");
    textarea.textContent = textarea.value;


    var textTitle = document.getElementById("article-title");
}

// Adds titles or pictures to the value
function add_title() {
    var title = document.getElementById("subtitle_submit").value;
    var picture = document.getElementById("button-picture").value;
    var textarea = document.getElementById("text-main");

    if (title != ""){
        textarea.value = textarea.value + " \r\n <t> " + title + " <t> \r\n";
    }

    if (picture != ""){
        textarea.value = textarea.value + " \r\n <pic> " + picture + " <pic> \r\n";
    }


}
