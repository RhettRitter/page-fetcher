const args = process.argv.slice(2)
const fs = require('fs')
const request = require("request");
const site = args[0]
const url = args[1]
const content = request(site, (error, response, body) => {
    console.log(`'Downloaded and saved ${body.length} bytes to ./index.html'`)
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(url, body, err => {
        if (err) {
            console.error(err)
            return
            //file written successfully
        }
    })  
});



//console.log(content);