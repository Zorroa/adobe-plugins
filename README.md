## Requirements

- Premiere Pro version 14.3.0
- CEP 9

This extension was built for Adobe's version of the Chrome Embedded Framework (CEF) and uses a React frontend and GraphQL middleware which brokers data from the ZMLP API.

You’ll need to set an Adobe preference to prevent your host application (Photoshop, Premiere, etc.) from throwing alerts about unsigned extensions.

> Windows: Openregedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.8, then add a new entry PlayerDebugMode of type "string" with the value of "1".

> Mac: In the Terminal, type: defaults write com.adobe.CSXS.8 PlayerDebugMode 1

Installing extension. Create a symlink to local instance of this project.  
`ln -s <FULL PATH TO LOCAL REPO> /Users/{USERNAME}/Library/Application \Support/Adobe/CEP/extensions/zmlpext`
Note\* Create the CEP directory if it's missing from the Adobe folder.

Navigate to project and run `npm install` at it's root. This will install module dependencies for both graphql & premiere-ext, then build their distribution files.

You can then open Adobe Premiere, start a new project, and then navigate to Window > Extensions > Zorroa Visual Intelligence. Navigate to Settings and enter your credentials to begin.

## Contents of project

- premiere-ext, a reactjs adobe extension
- graphql, middleware for making network requests to ZMLP API
- csxs, adobe extension manifest. this boots up the extension in the adobe host environment.
- .debug, allows you to use Chrome to debug the extension. After opening the ZVI extension, open Chrome and navigate to 'chrome://inspect/#devices'. Click Configure and add localhost:8088 and localhost:8089 to view console messages for the frontend app and graphql logs respectively.

- build: `npm run build` - this builds both projects
- install: `npm run install` - install dependencies for both projects
- test: `npm run test` - test

- From project root, run `npm run install` to install dependencies.
