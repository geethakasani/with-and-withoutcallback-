const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies

  // Progression 2: using setTimeout() 

//Progression 3: Create a function to creat cookies

// Progression 5: calling function

function getCookies(cookies) {
  setTimeout(() => {
   let output="";
   for(let i=0;i<cookies.length;i++){
     output+=cookies[i].name+" ";
   }
   document.body.textContent=output;
  },1000);
}

function createCookies(newCookie,callback){
  setTimeout(()=>{
    cookies.push(newCookie);
    callback(cookies);
  },2000);
}
getCookies(cookies);
createCookies(newCookie,getCookies);





