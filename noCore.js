const os = require('os');

// Retrieve an array of objects, each representing a CPU core
const cpuCores = os.cpus();

// Get the length of the array to determine the number of CPU cores
const numberOfCores = cpuCores.length;

console.log('Number of CPU cores:', numberOfCores);