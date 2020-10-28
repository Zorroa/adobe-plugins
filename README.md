You’ll need to set an Adobe preference to prevent your host application (Photoshop, Premiere, etc.) from throwing alerts about unsigned extensions. 
> Windows: Openregedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.8, then add a new entry PlayerDebugMode of type "string" with the value of "1".

> Mac: In the Terminal, type: defaults write com.adobe.CSXS.8 PlayerDebugMode 1

- premiere-ext, a reactjs adobe extension
- graphql, middleware for making network requests to ZMLP API
- csxs, adobe extension manifest. this boots up the extension in the adobe host environment.
- .debug, allows you to use Chrome to debug the extension. After opening the ZVI extension, open Chrome and navigate to 'chrome://inspect/#devices'

- build: `npm run build` - this builds both projects
- install: `npm run install` - install dependencies for both projects
- test: `npm run test` - test

- From project root, run `npm run install` to install dependencies.

