# fed-build

### A tool to help you develop a bit quicker 

## Dependencies

* Node
* NPM

## Setup

1. Clone repo into your project as illustrated below

PROJECT DIRECTORY
        |
         - hybris/
        |
         - THIS REPO/

2. `cd` into `THIS REPO/`

3. Run `npm install` - this will download all dependencies from the `package.json`.

4. Copy any CSS file you need to work on into the `SCSS` folder and rename with the file extension `.scss`.

5. Change the `devUrl` variable in the `gulpfile.js` to your local url that you're working on.

5. Run `gulp watch` this will read the `gulpfile.js` which does the following:

    * Launches a proxy server of your dev environement running on port 3000.

    * Watches the source folder `SCSS/` for any changes. If changes are made process the SCSS into CSS and place in the destination folders. `/Library/WebServer/Documents/style/ars` & `../hybris/bin/aramark/arsmvcstore/web/webroot/style/ars`.

    * Auto reloads the browser injecting your new styles 








