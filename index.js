const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project? '
  },
  {
    type: 'input',
    name: 'fullName',
    message: 'Enter your full name:'
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?'
  },
  {
    type: 'input',
    name: 'purpose',
    message: 'Why did you build this project?'
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?'
  },
  {
    type: 'input',
    name: 'learnings',
    message: 'What did you learn?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the URL for the github deployment?'
  },
  {
    type: 'list',
    choices: ["Yes", "No"],
    name: 'license',
    message: 'Is this under an MIT License?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to the project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Describe the tests for the project:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'screenshotPath',
    message: 'Enter the relative path to the screenshot image (e.g., ./assets/images/Screenshot.png):'
  },
  {
    type: 'list',
    choices: ["Yes", "No"],
    name: 'ascii',
    message: 'Do you want ascii art?',
  }
]

inquirer.prompt(questions)
  .then((answers) => {
    let asciiArt = `<pre>
8888888b.  888888888 Y88b   d88P  .d8888b.   .d8888b.       8888888b.  8888888b.   .d8888b.         d8888 888b     d888  .d8888b.  8888888b.  
888   Y88b 888        Y88b d88P  d88P  Y88b d88P  Y88b      888  "Y88b 888   Y88b d88P  Y88b       d88888 8888b   d8888 d88P  Y88b 888   Y88b 
888    888 888         Y88o88P   888    888 888    888      888    888 888    888      .d88P      d88P888 88888b.d88888      .d88P 888    888 
888   d88P 8888888b.    Y888P    888        888    888      888    888 888   d88P     8888"      d88P 888 888Y88888P888     8888"  888   d88P 
8888888P"       "Y88b    888     888        888    888      888    888 8888888P"       "Y8b.    d88P  888 888 Y888P 888      "Y8b. 8888888P"  
888               888    888     888    888 888    888      888    888 888 T88b   888    888   d88P   888 888  Y8P  888 888    888 888 T88b   
888        Y88b  d88P    888     Y88b  d88P Y88b  d88P      888  .d88P 888  T88b  Y88b  d88P  d8888888888 888   "   888 Y88b  d88P 888  T88b  
888         "Y8888P"     888      "Y8888P"   "Y8888P"       8888888P"  888   T88b  "Y8888P"  d88P     888 888       888  "Y8888P"  888   T88b 
</pre>`;

    let license = `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

MIT License

Copyright (c) 2024 Micah Read

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

    let markDown = `# ${answers.title}

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Visual Studio](https://badgen.net/badge/icon/visualstudio?icon=visualstudio&label)](https://visualstudio.microsoft.com)

## Below is a short description:

### What was your motivation?
${answers.motivation}

### Why did you build this project?
${answers.purpose}

### What problem does it solve?
${answers.problem}

### What did you learn?
${answers.learnings}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Email](#email)

## Installation
${answers.installation}

## Usage

[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com)

${answers.usage}

![Screenshot of the project](${answers.screenshotPath})

## License
${answers.license === "Yes" ? license : ''}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}).

---

### Created by
${answers.fullName}

${answers.ascii === "Yes" ? asciiArt : ''}`;

    fs.writeFileSync("README.md", markDown);
    console.log("README generated successfully.");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.error("An error occurred:", error);
    }
  });
