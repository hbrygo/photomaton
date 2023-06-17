# Photohooth-19-deep-dive 📸
Photobooth Phygital app in React

Steps to follow : 

1. Clone the repo.
2. Install React through Node.js. Follow the guidelines here : https://react.dev/learn/start-a-new-react-project
3. Open your terminal and go to the root of the repo.
4. Type the commmand : `npm install`
5. Type the command : `npm start`
6. Congrats the Photoboot should be up and running ! 🥳


# Firebase configuration

If you wish to link the Photobooth to Firebase (storage) you will need to : 

1. Create a Firebase project : https://firebase.google.com/ .
2. Find your project config object and copy/past it into the file : src/firebase.js, line 11. You can follow this guidelines to find your own config obj "Get config object for your web app" : https://support.google.com/firebase/answer/7015592?hl=en#web&zippy=%2Cin-this-article 
3. 🚨 IMPORTANT 🚨 Once you have a Firebase project make sure to activate the Anonyme Authentification
   ![Screenshot 2023-06-15 at 20 05 35](https://github.com/lvanbei/photohooth-19-deep-dive/assets/38706595/5a5f0984-ca62-422d-a755-22e70a535d7d)
4. Restart the React App.


# Tip

1. Don't forget to put your Browser into developer mode and edit the window dimensions with the follow offset : 1080 by 1920

![Screenshot 2023-06-15 at 19 53 18](https://github.com/lvanbei/photohooth-19-deep-dive/assets/38706595/b4082f2a-6216-44d4-a2f9-277e08a752a6)
