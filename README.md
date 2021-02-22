# Team Builder

![GitHub License](https://img.shields.io/badge/License-MIT-blue.svg)

A command-line application to generate a contact page for the members of your team.


## Description

A command-line application that allows the user to follow a series of prompts to generate an HTML page with the necessary contact details for your current project team. Specifically for the roles of manager, engineer, and intern.

## Table of Contents

* [Reference](#reference)
* [Details](#details)
* [Installation](#installation)
* [Testing](#testing)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
  
## Reference

  Click [here](https://drive.google.com/file/d/1SV9HBSmVx6q58Hfse78RVVTHPHBE1uwb/view) to view a walkthrough of the application.
  
  Sample of a generated README
 ![SampleREADME](Reference/sampleREADME.gif)

  Screenshot of a completed use.
  ![Terminal Shot](Reference/Terminal.png)


## Details
  * Open your terminal or command line and make sure you are in the Develop file of Team Builder.
  * Type "node app" to launch the app.
  * Answer the series of following prompts.
        * You will start with filling out information for your manager.
        * Note that if you do not input a valid e-mail address, you will be asked to re enter it.
        * You can then choose if you would like to add engineers, interns, or another manager to your team.
        * If you choose no on adding more memebers, the prompts will be complete.
  * If successful, the console will read 'Success! Building your team...', and a new team.html file will appear in the output folder.

## Installation

To install all necessary materials for this project, run the following command:

```
npm install
```


## Testing

To run tests at any time for this project, run the following command:

```
npm run test
```

## Usage

This application uses the inquirer package to create a series of prompts. Generated files will be saved in the output folder to team.html and will write over previous files with that name. Be sure to rename and save files before you generate new team.html files.

## License

This application is protected under the MIT license.

For more information, visit this link: [MIT Info](https://opensource.org/licenses/MIT)

## Contributing
Prompts from inquirer and design on markdown can be updated and modified to fit all the needs of your specific project.

## Questions

If you have any questions, please reach out.
* GitHub: [AHFotis](https://github.com/AHFotis)
* Email: annahickey2@gmail.com



