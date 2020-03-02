


function showText1(q) {
    var data;
    $.get('http://www.omdbapi.com/?t='+q+'&apikey=69c63807',function(rawdata){
        var rawstring=JSON.stringify(rawdata);
        data=JSON.parse(rawstring);
        document.getElementById('hoverText1').innerHTML=data.imdbRating;
    });
}

function hideText1() {
    document.getElementById("hoverText1").innerText="";
}





















function showText2(q) {
    var data;
    $.get('http://www.omdbapi.com/?t='+q+'&apikey=69c63807',function(rawdata){
        var rawstring=JSON.stringify(rawdata);
        data=JSON.parse(rawstring);
        document.getElementById('hoverText2').innerHTML=data.imdbRating;
    });
}

function hideText2() {
    document.getElementById("hoverText2").innerText="";
}

function showText3(q) {
    var data;
    $.get('http://www.omdbapi.com/?t='+q+'&apikey=69c63807',function(rawdata){
        var rawstring=JSON.stringify(rawdata);
        data=JSON.parse(rawstring);
        document.getElementById('hoverText3').innerHTML=data.imdbRating;
    });

}
function hideText3() {
    document.getElementById("hoverText3").innerText="";
}