const waterVolumeInput = document.getElementById("waterVolume");
const outputSpan = document.getElementById("output");
const indicatorDiv = document.getElementById("indicator");

const DAILY_LIMIT = 2000;
const storageVal = localStorage.getItem("water_database");
const database = (storageVal)?JSON.parse(storageVal):[];
calculatePercent();

function isNumber(x){
    if(x === ''){
        return false;
    }
    const numX = +x;
    if(isNaN(numX)){
        return false;
    } else {
        return true;
    }
}

function calculatePercent() {
    let sum = 0;
    for (const databaseElement of database) {
        if (databaseElement){
            sum += databaseElement;
        }
    }
    console.log(database);
    console.log(sum);

    const percentDailyLimit = (sum/DAILY_LIMIT)*100;
    console.log(percentDailyLimit);

    indicatorDiv.innerHTML =
        `<div style="width: 100%; height: ${percentDailyLimit}%; background:aqua"><h4>${percentDailyLimit}%</h4></div>`;
}

function addRecord(){
    //outputSpan.textContent = waterVolumeInput.value
    const volume = waterVolumeInput.value;
    if(isNumber(volume)){
        database.push(+volume);
    } else {
        alert("Not a number");
    }
    calculatePercent();
    localStorage.setItem("water_database",
        JSON.stringify(database));
}