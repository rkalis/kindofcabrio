function showResult(choice) {
    document.getElementById(choice).style.height = "100%";
}

function hideResult() {
    var x = document.getElementsByClassName("overlay");
    for (var i = 0; i < x.length; i++) {
        x[i].style.height = "0%";
    }
}

function getRandomImage(max, path, result) {
    path = path;
    var num = Math.floor( Math.random() * max );
    var imgStr = '<img onclick="showResult(\'' + result + '\')" src="' + path + num + '.jpg" />';
    document.write(imgStr);
    document.close();
}