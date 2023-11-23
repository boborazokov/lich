
function call() {
    var text = document.getElementById("textarea").value;
    var number = document.getElementById("number").value;
    var lenghth = text.length;
    var char = text.charAt(number);
    var upper = char === char.toUpperCase();
    document.getElementById("lenghth").innerHTML = "Text lenghth: " + lenghth
    document.getElementById("char").innerHTML = "Char code: " + char
    document.getElementById("upper").innerHTML = "Letter is Upper case: " + upper
    
}
function replaceText() {
    var text = document.getElementById("textarea").value;
    var replace1Value = document.getElementById("replace1").value;
    var replace2Value = document.getElementById("replace2").value;
    
    document.getElementById("result").innerHTML = text.replace(replace1Value,replace2Value);    
}

function end() {
    var text = document.getElementById("textarea").value;
    var end = document.getElementById("end").value;
    document.getElementById("res1").innerHTML = text.endsWith(end);

    var start = document.getElementById("start").value;
    document.getElementById("res2").innerHTML = text.startsWith(start);

    var search =document.getElementById("search").value;
    document.getElementById("res3").innerHTML = text.includes(search);

    var index =document.getElementById("index").value;
    document.getElementById("res4").innerHTML = text.indexOf(index);
}












    





// var text = document.getElementById("text")

// function call() {
    
//     if (text.value == text.value.charCodeAt(0)) {
//         document.write("OK");
//     } else {
//         document.write("Xato")
//     }
// }