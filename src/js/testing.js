const baseURL = "https://swapi.dev/api/";
const fetch = require("node-fetch");

async function SWAPITest(URLAdittion) {
    let testVariable = await fetch(`${baseURL}${URLAdittion}`);
    let toPrint = await testVariable.json();
    console.log(toPrint.results);
}

SWAPITest("people/");