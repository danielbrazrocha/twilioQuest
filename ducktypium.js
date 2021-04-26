class Ducktypium {
    constructor(color){
        if (color == 'red' || color == 'blue' || color == 'yellow') {
            this.color = color
            this.calibrationSequence = []
        } else {
            throw new Error("Color must be Red, Blue or Yellow.");
        }
    }

    refract(color) {
        if (color == 'red' || color == 'blue' || color == 'yellow') {
            if (this.color == color) {
                return color
            }
            if (this.color == 'red' &&  color == 'blue') {
                return 'purple'
            } 
            if (this.color == 'red' &&  color == 'yellow') {
                return 'orange'
            } 
            if (this.color == 'blue' &&  color == 'red') {
                return 'purple'
            } 
            if (this.color == 'blue' &&  color == 'yellow') {
                return 'green'
            } 
            if (this.color == 'yellow' &&  color == 'red') {
                return 'orange'
            } 
            if (this.color == 'yellow' &&  color == 'blue') {
                return 'green'
            } 
        } else {
            throw new Error("Color must be Red, Blue or Yellow.");
            }  
    }

    calibrate(numArr) {
        let newArr = numArr
        .sort()
        .map(element => element * 3);
        this.calibrationSequence = newArr;       

    }
}