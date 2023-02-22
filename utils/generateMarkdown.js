// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
    if (license === 'GNU AGPLv3') {
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
    } if (license === 'GNU GPLv3') {
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    } if (license === 'GNU LGPLv3') {
      licenseBadge === `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
    } if (license === 'Mozilla Public License 2.0') {
      licenseBadge === `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    } if (license === 'Apache License 2.0') {
      licenseBadge === `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    } if (license === 'MIT License') {
      licenseBadge === `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    } if (license === 'Boost Software License 1.0') {
      licenseBadge === `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    } if (license === 'The Unlicense') {
      licenseBadge === `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
    }
    return licenseBadge;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = `https://opensource.org/licenses/`;
    licenseLink += `${license}`;
    return licenseLink;
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = `# License`;
    licenseSection += renderLicenseLink(license);
    return licenseSection;
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contents = `## Table of Contents`;
  if (data.installation != '') {
    contents += `
    * Installation (#installation)`
  } if (data.usage != '') { 
    contents += `
    * Usage (#usage)`
  } if (data.license != '') {
    contents += `
    * License (#license)`
  } if (data.contributing != '') {
    contents += `
    * Contributing (#contributing)`
  } if (data.tests != '') {
    contents += `
    * Tests (#tests)`
  }
  
  let readme =
  
  `# ${data.title}

  ${renderLicenseBadge(data.license)}
    
  ## Description 
  
  ${data.description}

  ${contents}

  ## Installation 

  ${data.installation}

  ## Usage 

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing 

  ${data.contributing}

  ## Tests

  ${data.tests}
  `

  return readme;
  ;
}


module.exports = generateMarkdown;
