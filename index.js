function copyToClipboard() {
    var copyText = document.getElementById("copyCode");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    var button = document.querySelector("button");
    button.innerText = "Скопировано!";
  }