require("module-alias/register");
const mongoose = require("mongoose");
const path = require("path");
const { globSync } = require("glob");

// Make sure we are running node 7.6+
const [major] = process.versions.node.split('.').map(parseFloat);
if (major < 20) {
    console.log('Please upgrade your node.js version at least 20 or greater. \n');
    process.exit();
}


// import environmental variables from our variables.env file
require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', (error) => {
    console.log('error > ', error);
});

const modelsFiles = globSync("./src/models/**/*.js");

for (const filePath of modelsFiles) {
    require(path.resolve(filePath));
}

const app = require("./app");
app.set("port", process.env.PORT || 8080);

const server = app.listen(
    app.get('port'),
    () => console.log(`server is running on http://localhost:${app.get('port')}`)
);