// function getUser(username) {
//   const apiUrl = 'https://api.github.com/users/' + username;
//   let user = '';
//   let url = '';
  
//   fetch(apiUrl)
//   .then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         user = data.login;
//         console.log('user', user);
//         url = data.url;
//         console.log('url', url);
//         let userSection = `

//         GitHub: ${user} ${url}
//         `
//         return userSection;
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   })
//   .catch(function (error) {
//     alert('Unable to connect to GitHub');
//   });
//   }

// TODO: Create a function that returns a license badge based on which license is passed i
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
    if (license === 'GNU AGPLv3') {
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
    } if (license === 'GNU GPLv3') {
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    } if (license === 'GNU LGPLv3') {
      licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
    } if (license === 'Mozilla Public License 2.0') {
      licenseBadge =`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    } if (license === 'Apache License 2.0') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    } if (license === 'MIT License') {
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    } if (license === 'Boost Software License 1.0') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    } if (license === 'The Unlicense') {
      licenseBadge =`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
    }
    return licenseBadge;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = ``;
    if (license === 'GNU AGPLv3') {
      licenseLink += `https://opensource.org/licenses/agpl-3.0`;
    } if (license === 'GNU GPLv3') {
      licenseLink += `https://opensource.org/licenses/gpl-3.0)`;
    } if (license === 'GNU LGPLv3') {
      licenseLink += `https://opensource.org/licenses/lgpl-3.0`;
    } if (license === 'Mozilla Public License 2.0') {
      licenseLink += `https://opensource.org/licenses/MPL-2.0`;
    } if (license === 'Apache License 2.0') {
      licenseLink += `https://opensource.org/licenses/Apache-2.0`;
    } if (license === 'MIT License') {
      licenseLink += `https://opensource.org/licenses/MIT`;
    } if (license === 'Boost Software License 1.0') {
      licenseLink += `https://www.boost.org/LICENSE_1_0.txt`;
    } if (license === 'The Unlicense') {
      licenseLink += `http://unlicense.org/`;
    }
    return licenseLink;
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = `## License
    
  ${license}
    
  ${renderLicenseLink(license)}
  `
    return licenseSection;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contents = `## Table of Contents`;
  if (data.installation) {
    contents += `
  * [Installation](#installation)`
  } if (data.usage) { 
    contents += `
  * [Usage](#usage)`
  } contents += `
  * [License](#license)`
    if (data.contributing) {
    contents += `
  * [Contributing](#contributing)`
  } if (data.tests) {
    contents += `
  * [Tests](#tests)`
  } contents += `
  * [Questions](#questions)`

  let readme =
  
  `# ${data.title}

  ${renderLicenseBadge(data.license)}
    
  ## Description 
  
  ${data.description}

  ${contents}`

  if (data.installation) {

  readme += `

  ## Installation 
  
  ${data.installation}`

  } if (data.usage) {
    readme += `

  ## Usage 

  ${data.usage}
  `
  } 

  readme += `

  ${renderLicenseSection(data.license)}
  `

  if (data.contributing) {
    readme += `

  ## Contributing 

  ${data.contributing}
    `
  } if (data.tests) {
    readme += `

  ## Tests

  ${data.tests}
  `
  } 
  readme += `

  ## Questions

  For any questions, please contact me with the information below:

  GitHub: ${data.username} ${data.url}

  email: ${data.email}
  `

  return readme;
  ;
}

module.exports = generateMarkdown;
