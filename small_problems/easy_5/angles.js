const MINUTES = 60;
const SECONDS = 3600;


function dms(degree) {
    let onlyDegree = Math.floor(degree);
    let minutes = Math.floor((degree - onlyDegree) * MINUTES);
    let seconds = Math.floor((degree - onlyDegree - (minutes / 60)) * SECONDS);

    return String(onlyDegree) + "˚" + zeroPads(minutes) + "'" + zeroPads(seconds) + '"';
}

function zeroPads(number) {
    let numString = String(number);
    return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(254.6));