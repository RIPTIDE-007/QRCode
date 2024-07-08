import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"Enter your URL",
        name:"URL"
    }

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('qrimage.png'));
 fs.writeFile('URL.txt',url,(error)=>{
    if(error)
        throw error;
        console.log('File saved');
    })
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.log("error");    }
  });