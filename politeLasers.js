function getLaserSetting(string) {
    if (string === "please") {
        return "OFF";

    } else {
        return "ON";
    }
};

const currentSetting = getLaserSetting('right now!');
console.log('The current laser setting is: ' + currentSetting);

