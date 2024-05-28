console.log(arguments)
// function.js
function exampleFunction() {
    console.log('Number of arguments:', arguments.length);
    console.log('First argument:', arguments[0]);
    console.log('Second argument (require function):', arguments[1]);
    console.log('Third argument (Module object):', arguments[2]);
    console.log('Fourth argument (filename):', arguments[3]);
    console.log('Fifth argument (directory path):', arguments[4]);

    // Accessing properties of the Module object
    console.log('Module ID:', arguments[2].id);
    console.log('Module Path:', arguments[2].path);
}

// Call the function with arguments
exampleFunction({}, require, module, __filename, __dirname);
