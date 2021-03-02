console.log('and a{gain...');

let xhttps = new XMLHttpRequest();

xhttps.onreadystatechange = function () {
    if (this.readyState == 4 && this.state == 200)  {
        document.get ElementById("shake").innerHTML = this.responseText;
    }
}

xhttps.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/shakespeare.txt", true)
