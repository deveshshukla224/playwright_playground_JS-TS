const {test,expect} = require("@playwright/test");
const ExcelJS = require('exceljs');
const fs = require("fs");
const path = require("path");


const workbook = new ExcelJS.Workbook();
//create object of ExcelJS to access all the methods

async function writeExcelFile(filePath,searchValue,updateValue,sheetName){
    
    //create an empty object to store the row and column number
    await workbook.xlsx.readFile(filePath);
    //read the file
    const worksheet = workbook.getWorksheet(sheetName);
    //get the worksheet
    const output_return = await readExcelFile(worksheet,searchValue);
    
    for (let i = 0; i < output_return.length; i++) {
        const cell = worksheet.getCell(output_return[i].row,output_return[i].col);  
        //get the cell
        cell.value = updateValue;
        //update the cell value
    }
    await workbook.xlsx.writeFile(filePath);
    //save the file
}


async function readExcelFile(worksheet,searchValue){
    let output = [];
    worksheet.eachRow((row,rowNumber)=>{
        //iterate over each row
        row.eachCell((cell,colNumber)=>{
            //iterate over each cell
            if (cell.value === searchValue){
                //if the cell value is Apple, store the row and column number in the object
                output.push({row:rowNumber,col:colNumber});
            }
        });
    });
    return output;
}






test("Download and Upload File",async({page})=>{
    //visit the page
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    //wait for the download event
    const downloadPromise= page.waitForEvent("download");
    //click the download button
    await page.getByRole("button",{name:"Download"}).click();
    // wait for the download to complete
    const download = await downloadPromise;
    // Get the suggested filename
    //const fileName = download.suggestedFilename();
    const fileName = `${Date.now()}_${download.suggestedFilename()}`;
    console.log("Downloaded file name:", fileName);
    // Get the file name
    // Define the path to save the file
    //path.join is used to join the path of the file 
    //it takes two arguments, the first is the path of the directory and the second is the name of the file
    
    
    //go back to the root directory
    //__dirname is the path of the current directory
    //adjust the number of ../ based on the depth of the directory
    const rootDir = path.resolve(__dirname, "../");
    console.log("Project Root Directory:", rootDir);


    //join the root directory with the downloaded_files directory and the file name
    const downloadPath = path.join(rootDir,"downloaded_files", fileName);
    console.log("Downloaded file path:", downloadPath);



     // Save the file as a new file to defined path
     await download.saveAs(downloadPath);



     // Check if file exists
    if (!fs.existsSync(downloadPath)) {
        throw new Error("File download failed: " + downloadPath);
    }
    //update the value of the cell according to the search value and update value according to the update value
    writeExcelFile(downloadPath,"Mango","OK","Sheet1");
    //click the upload button
    await page.locator("input[id='fileinput']").click();
    //set the file path
    await page.locator("input[id='fileinput']").setInputFiles(downloadPath);


    //wait for the upload to complete
    await page.waitForTimeout(5000);
    
    
})