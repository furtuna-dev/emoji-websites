var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var mainText = document.getElementById("mainText");
var secondaryText = document.getElementById("secondaryText");

var mainTextParam = urlParams.get('mainText');
var secondaryTextParam = urlParams.get('secondaryText');

if (urlParams.has('mainText')) {
    mainText.innerHTML = mainTextParam;
}

if (urlParams.has('secondaryText')) {
    secondaryText.innerHTML = secondaryTextParam;
}