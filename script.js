'use strict';

/*const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2022 - birthYear;

console.log();
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
/*
const calcTempAmplitude = function (temps) {
    let max = temps[0];    
    let min = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
/*
const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];    
    let min = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        //value: Number(prompt('Degrees celsius:'))
        value: 10,
    }

    console.table(measurement);

    //console.log(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;    
    let min = 0;

    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

//CODING CHALLENGE 1

const maxTemp1 = [17, 21, 23];
const maxTemp2 = [12, 5, -5, 0, 4];

const tempResult = function(temp) {
    let str = '';
    for(let i = 0; i < temp.length; i++) {
        str = str + ` ${temp[i]}C in ${i + 1} days ...`;
    }
    console.log('...' + str);
}

tempResult(maxTemp1);
tempResult(maxTemp2);




