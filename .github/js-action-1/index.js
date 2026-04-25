const core = require("@actions/core");

try{
    const name = core.getInput("name");

    const message = `Hello ${name}!`;

    console.log(message);


    core.setOutput("message", message);
}catch(error){
    core.setFailed(error.message);
}