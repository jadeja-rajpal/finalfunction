module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request hello2.');
    
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = "hello2";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {responseMessage}
    };
}