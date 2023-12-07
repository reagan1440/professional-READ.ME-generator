// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "none":
            return "";
        case "MIT License":
            return "![License: MIT](https://img.sheilds.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            case "Apache License 2.0":
              return  "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
              case "LGPL 3.0":
                return "[![License: LGPL 3.0](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)](https://opensource.org/licenses/LGPL-3.0)";
            case "GPL 3.0":
                return "[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)";
            default:
                return "";
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "none":
            return "";
            case "MIT License":
                return "https://img.sheilds.io/badge/License-MIT-yellow.svg";
                case "Apache License 2.0":
                    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
                    case "LGPL 3.0":
                    return "https://img.shields.io/badge/License-LGPL%203.0-blue.svg";
                    case "GPL 3.0":
                        return "https://img.shields.io/badge/License-GPL%203.0-blue.svg";
                        default: 
                        return "";
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === undefined) {
      return '';
    } else if (license === 'none') {
      return '';
    } else {
      return `This project currently uses ${license}.
        ${renderLicenseLink(license)}`;
    }
  }
  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
