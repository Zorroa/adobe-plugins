## Requirements

- Premiere Pro version 14.3.0
- CEP 9

You’ll need to set an Adobe preference to prevent your host application (Photoshop, Premiere, etc.) from throwing alerts about unsigned extensions.

> Windows: Openregedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.8, then add a new entry PlayerDebugMode of type "string" with the value of "1".

> Mac: In the Terminal, type: defaults write com.adobe.CSXS.8 PlayerDebugMode 1
> Mac: In the Terminal, type: defaults write com.adobe.CSXS.9 PlayerDebugMode 1
> Mac: In the Terminal, type: defaults write com.adobe.CSXS.10 PlayerDebugMode 1

Installing extension. Create a symlink to local instance of this project.  
Note\* Create the CEP directory if it's missing from the "Adobe" folder.
`ln -s <FULL PATH TO LOCAL REPO> /Users/{USERNAME}/Library/Application \Support/Adobe/CEP/extensions/zmlpext`

Navigate to project and run `npm install` at it's root. This will install module dependencies for both graphql & premiere-ext, then build their distribution files.

You can then open Adobe Premiere, start a new project, and then navigate to Window > Extensions > Zorroa Visual Intelligence. Navigate to Settings and enter your credentials to begin.

## Contents of project

- premiere-ext, a reactjs adobe extension
- graphql, middleware for making network requests to ZMLP API
- csxs, adobe extension manifest. this boots up the extension in the adobe host environment.
- .debug, allows you to use Chrome to debug the extension. After opening the ZVI extension, open Chrome and navigate to 'chrome://inspect'. Click Configure and add localhost:8088 and localhost:8089 to view console messages for the frontend app and graphql logs respectively.

- build: `npm run build` - this builds both projects
- install: `npm run install` - install dependencies for both projects
- test: `npm run test` - test

- From project root, run `npm run install` to install dependencies.

## Development

- Development can be done outside of running an extension inside Adobe Premiere. This also means there's no access to Premiere's API.
- Start both the frontend and middleware. `cd graphql ; npm run dev`, `cd premiere-ext ; yarn start`

## Tests

- GraphQL - cd graphql ; npm run tdd
- Premiere-Ext - cd premiere-ext ; yarn test

## Build Entire Application

- This builds the distribution files that Adobe Premiere will load. `cd adobe-plugins ; npm run build`

## References

- Adobe's github repo for all things CEP related, including samples: https://github.com/Adobe-CEP
- Adobe Premiere API : https://premiere-plugin-sdk-guide.readthedocs.io
- Article for running NodeJS server alongside frontend extension : https://medium.com/adobetech/how-to-build-a-node-js-server-in-a-panel-ba1d63ea67e2

## Known issues

- Once on the search screen and after searching for assets, users have to navigate to another view (such as settings) before being able to search again.
- Files are cached until cache is cleared from the settings menu.
