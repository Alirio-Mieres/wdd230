function doInputOputout(){
    let tempF = parseFloat(document.getElementById("temperature").textContent);
    let speed = parseFloat(document.getElementById("windspeed").textContent);
    let calculateChild = windChill(tempF, speed);
    document.querySelector('#windchill').innerHTML = ` ${calculateChild}</strong> °F`;
}

function windChill(t, s) {
    if (t < 50 && s > 3) {
        let chill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        chill = chill.toFixed(0);
        return chill;
    }

    else{
        chill= "N/A"
        return chill;
    }
}

doInputOputout()