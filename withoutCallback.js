const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies


  // Progression 2: using setTimeout() - use 1000 units for time parameter
  
//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter
 
// Progression 4: calling functions
function getCookies(cookies) {
  setTimeout(() => {
   let output="";
   for(let i=0;i<cookies.length;i++){
     output+=cookies[i].name+" ";
   }
   document.body.textContent=output;
  },1000);
}

function createCookies(){
  setTimeout(()=>{
    cookies.push(newCookie);
    getCookies(cookies);
  },2000);
}
getCookies(cookies);
createCookies();

