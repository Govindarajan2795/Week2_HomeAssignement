import { test, chromium, webkit } from "playwright/test" 
import { cursorTo } from "readline";

test("launch the Redbus Website using Edge browser",async()=>{

    const browser= await chromium.launch({channel :"msedge",headless:false}) //Launch Microsoft Edge browser
    const context=await browser.newContext();//Create a new browser page
    const page =await context.newPage(); //Create a new page
    await page.goto("https://www.redbus.in/") //Navigate to RedBus home page
     const Page_Title=  await page.title(); //get the title of the page and store them in a variable
  console.log(`Current Page Title is ${Page_Title}`); //print the title of the page
const CurentURL= await page.url(); //get the URL and store it in a variable
  console.log(`The Url is ${CurentURL}`);  //Print the URL
  
})

test("launch the Flipkart Website using Webkit browser",async()=>{

    const browser= await webkit.launch({headless:false}); //Launch Webkit browser
    const context=await browser.newContext();  //Create a new browser page
    const page =await context.newPage(); //Create a new page
    await page.goto("https://www.flipkart.com/") //Navigate to Flipkart home page
     const Flipkart_Page_Title=  await page.title(); //get the title of the page and store them in a variable
  console.log(`Current Page Title is ${Flipkart_Page_Title}`);  //print the title of the page
const flipkartURL= await page.url(); //get the URL and store it in a variable
  console.log(`The Url is ${flipkartURL}`); // //Print the URL
  
})