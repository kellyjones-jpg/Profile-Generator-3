const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "color",
      message: "Enter a color (Green, Blue, Pink, or Red)"
    }
  ]);
}

function generateHTML(answers) {
  return `
  <!DOCTYPE html>
<html lang="en">
   <head>
  <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
  `
}

// function generateHTML(answers) {
//   return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
//     <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
//     <title>Profile Generator</title>
//     <style>
//         @page {
//           margin: 0;
//         }
//        *,
//        *::after,
//        *::before {
//        box-sizing: border-box;
//        }
//        html, body {
//        padding: 0;
//        margin: 0;
//        }
//        html, body, .wrapper {
//        height: 100%;
//        }
//        .wrapper {
//        padding-top: 100px;
//        }
//        body {
//        background-color: white;
//        -webkit-print-color-adjust: exact !important;
//        font-family: 'Cabin', sans-serif;
//        }
//        main {
//        background-color: #E9EDEE;
//        height: auto;
//        padding-top: 30px;
//        }
//        h1, h2, h3, h4, h5, h6 {
//        font-family: 'BioRhyme', serif;
//        margin: 0;
//        }
//        h1 {
//        font-size: 3em;
//        }
//        h2 {
//        font-size: 2.5em;
//        }
//        h3 {
//        font-size: 2em;
//        }
//        h4 {
//        font-size: 1.5em;
//        }
//        h5 {
//        font-size: 1.3em;
//        }
//        h6 {
//        font-size: 1.2em;
//        }
//        .photo-header {
//        position: relative;
//        margin: 0 auto;
//        margin-bottom: -50px;
//        display: flex;
//        justify-content: center;
//        flex-wrap: wrap;
//        padding: 10px;
//        width: 95%;
//        border-radius: 6px;
//        }
//        .photo-header img {
//        width: 250px;
//        height: 250px;
//        border-radius: 50%;
//        object-fit: cover;
//        margin-top: -75px;
//        border: 6px solid;
//        box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
//        }
//        .photo-header h1, .photo-header h2 {
//        width: 100%;
//        text-align: center;
//        }
//        .photo-header h1 {
//        margin-top: 10px;
//        }
//        .links-nav {
//        width: 100%;
//        text-align: center;
//        padding: 20px 0;
//        font-size: 1.1em;
//        }
//        .nav-link {
//        display: inline-block;
//        margin: 5px 10px;
//        }
//        .workExp-date {
//        font-style: italic;
//        font-size: .7em;
//        text-align: right;
//        margin-top: 10px;
//        }
//        .container {
//        padding: 50px;
//        padding-left: 100px;
//        padding-right: 100px;
//        }

//        .row {
//          display: flex;
//          flex-wrap: wrap;
//          justify-content: space-between;
//          margin-top: 20px;
//          margin-bottom: 20px;
//        }

//        .card {
//          padding: 20px;
//          border-radius: 6px;
//          margin: 20px;
//        }
       
//        .col {
//        flex: 1;
//        text-align: center;
//        }

//        a, a:hover {
//        text-decoration: none;
//        color: inherit;
//        font-weight: bold;
//        }

//        @media print { 
//         body { 
//           zoom: .75; 
//         } 
//        }
//     </style>
// </head>
// <body>
//     <header>
//         <div class="wrapper">
//         <img src="https://avatars1.githubusercontent.com/u/54192972?v=4" alt="Profile Image">
//         </div>
//         <h2>My name is Kelly Jones</h2>
//         <h5>Currently @ Leidos ASC</h5>
//         <h6>Location: <a href="https://www.gogle.com/maps/place/Denver">Denver, CO</a></h6>
//         <h6>GitHub: <a href="https://github.com/kellyjones-jpg">kellyjones-jpg</a></h6>
//         <h6>Blog: <a href="https://kellyjones-jpg.github.io/Professional-Materials">Professional-Materials</a>/</h6>
//     </header>
//     <main>
//         <h2>I am a Web Editor for Leidos ASC, and am enrolled in the University of Denver’s 24-week Coding Boot Camp with an expected graduation date of March 14, 2020.</h2>
//         <div class="card">
//         <div class="card">
//             <h3>Public Repositories</h3>
//             <h4>18</h4>
//         </div>

//         <div class="card">
//                 <h3>Followers</h3>
//                 <h4>0</h4>
//         </div>

//         <div class="card">
//                 <h3>GitHub Stars</h3>
//                 <h4>0</h4>
//         </div>

//         <div class="card">
//                 <h3>Following</h3>
//                 <h4>0</h4>
//         </div>

//     </main>
    
// </body>
// </html>`;
// }

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
