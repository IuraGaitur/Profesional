## SystemPro Project

Added FastLine https://fastlane.tools/ for build automation
 - Android 
    - Integrated with Crashlitics Beta
 - iOS 
    - Integrated with Crashlitics Beta

### Instructions
Install dependencies: - npm install 
Run package manager: - npm start
Run ios: - Build application from ios/ directory and run it on device (Package manager should running)
Run android: - Build application from android/ directory and run it on device (Package manager should running)

### Code style


### Errors related to packager

 - Stop XDE/exp, which should also stop the packager. Check your list of running processes to ensure these processes are not running.
 - Delete node_modules in your project
 - If your project depends on other local projects (e.g. has a file: URI in its dependencies), clear those local project’s node_modules directories too for good measure even though it’s probably unnecessary.
 - Clear your Yarn or npm cache, depending on which you’re using, with yarn cache clean or npm cache clean
 - Run yarn or npm i to install your dependencies again
 - Run watchman watch-del-all to clear Watchman’s state
 - Kill the watchman daemon process

