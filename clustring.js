// main.js

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

if (isMainThread) {
  // Main thread logic
  
  // Create a worker for each CPU core
  const numCores = os.cpus().length;
  console.log(`Number of CPU cores: ${numCores}`);
  
  const tasks = [35, 35, 35, 35]; // Example tasks (calculating the 35th Fibonacci number)
  
  for (let i = 0; i < numCores; i++) {
    const worker = new Worker(__filename, {
      workerData: tasks[i] // Each worker is assigned a task (e.g., calculating Fibonacci number)
    });
    
    // Listen for messages from worker threads
    worker.on('message', (result) => {
      console.log(`Result from worker thread ${worker.threadId}: ${result}`);
    });
    
    // Handle errors from worker threads
    worker.on('error', (err) => {
      console.error(`Error in worker thread ${worker.threadId}:`, err);
    });
    
    // Handle termination of worker threads
    worker.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Worker thread ${worker.threadId} exited with code ${code}`);
      }
    });
  }
} else {
  // Worker thread logic
  
  // Sample CPU-intensive task (calculating the Fibonacci sequence)
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Perform the CPU-intensive task using the provided data
  const result = fibonacci(workerData);
  
  // Send the result back to the main thread
  parentPort.postMessage(result);
}
