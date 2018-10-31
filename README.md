### autohybrid-cli
这是基于Cordova.js的移动App混合开发部署脚本，它可以自动帮你构建一个测试环境下的Cordova应用到你的手机上。这个测试环境和使用VueCli构建的测试环境一模一样。目前只完成了android，ios 马上就好

The following content is from Google Translate
>This is a mobile app hybrid development deployment script based on Cordova.js that automatically builds a Cordova app from your test environment to your phone. This test environment is exactly the same as the one built using VueCli. Currently only android, ios is ready
## Install
for npm:
``` js
npm i autohybrid-cli --save-dev
```
for yarn:
``` js
yarn add autohybrid-cli --dev
```
## Usage
1. Configure the **vue.config.js** file in the root directory, if not configured by default
    ``` js
    module.exports = {
    
        devServer: {
            port: //your port. If not, it will be set to 8080
        },
        
        // autohybrid config
        
        autoHybrid: {
            name: // your app name. If not, it will be set to the current project name.
        }
    }
    ```
2. For global installation environment

    ``` js
    cd [your project dirname]
    hybrid create
    ```
    
   For local installation environment
    ``` js
    cd [your project dirname]
    ./node_modules/.bin/hybrid create
    ```

3. If you change the **autoHybrid** configuration item during development, you don’t need to rebuild the project, you just need to execute: 
  
      ``` js
      hybrid dev
      ```
  
4. Install JDK, download Android Studio, then install the Android SDK

5. Open Android Studio , select **Import project (Gradle, Eclipse ADT, etc.)**

6. Import directory **src_cordova/platforms/android**

7. Compile apps to your phone using Android Studio

8. Open Chrome and enter **chrome://inspect/#devices** in the address bar

9. Find the device and click on **inspect**


