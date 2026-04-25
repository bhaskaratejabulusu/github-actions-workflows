const core = require("@actions/core");

async function run() {
    try {
        const city = core.getInput("name");

        const res = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await res.json();

        const temp = data.current_condition[0].temp_C;

        const message = `Temperature in ${city} is ${temp}`;

        console.log(message);

        core.setOutput("weather", message);
    } catch (err) {
        core.setFailed(err.message);
    }
}


run();