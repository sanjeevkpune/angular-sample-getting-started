# angular-sample-getting-started
## Angular application deployment 
  - https://angular.io/start/start-deployment
  - Deployment steps to deploy on firebase
  - Also hosted on https://angular-sample-getting-started.stackblitz.io/shipping
  - Stackblitz is a very nice way to practice online, doing POC
  
## using firebase
  - build your project locally
    - ng build
    - this will create a dist/<project-name> folder. This can be deployed to any web-server
  - install firebase CLI
  - To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).
  - Run the following npm command to install the CLI or update to the latest CLI version.
    - npm install -g firebase-tools
  - Initialize your project
    - firebase login
  - Run this command from your app’s root directory
    - firebase init
      - for public directoy give path to your dist/angular-sample-getting-started
    - firebase deploy
   - access the project on below urls
        - https://angular-sample-getting-started.web.app/
        - https://angular-sample-getting-started.firebaseapp.com/
  
