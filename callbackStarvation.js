function callbackStarvationExample() {
    // This function will simulate a CPU-intensive task
    function busyWait(duration) {
      const end = Date.now() + duration;
      while (Date.now() < end);
    }
  
    // An asynchronous function that uses setImmediate to simulate a task
    function asyncTask(taskNumber) {
      setImmediate(() => {
        console.log(`Executing task ${taskNumber}`);
        busyWait(100); // Simulate a task taking 100ms
        if (taskNumber < 5) {
          asyncTask(taskNumber + 1); // Schedule the next task
        }
      });
    }
  
    // Start a continuous loop of tasks that starves other callbacks
    asyncTask(1);
  
    // A callback that is likely to be starved
    setTimeout(() => {
      console.log('This callback is likely to be starved');
    }, 0);
  
    // Another callback that is likely to be starved
    setTimeout(() => {
      console.log('This is another starved callback');
    }, 0);
  }
  
  callbackStarvationExample();
  