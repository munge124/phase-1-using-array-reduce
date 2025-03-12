const batteryBatches = [4, 5, 3, 4, 4, 6, 5];



const totalBatteries = batteryBatches.reduce((accum, batch) => accum + batch, 0);

console.log(totalBatteries); // Outputs the total number of batteries


// Code your solution here
