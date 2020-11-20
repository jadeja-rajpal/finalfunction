const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request hello.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = "hello";

    const result = await fetch('https://jasleen-func.azurewebsites.net/api/Example2')

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {responseMessage, result: await result.json()}
    };
}