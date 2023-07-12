let screen = document.getElementById('screen');             //taking input from html
let buttons = document.querySelectorAll('button');

let string = "";
let arr= Array.from(buttons);
arr.forEach(button =>{                              //for each array is easy way of forloop
    button.addEventListener('click',(e) =>{         //eventlistener is for action
        if(e.target.innerHTML == "="){
            string=  eval(string);              //predefined eval function
            screen.value=string;
        }
        else if(e.target.innerHTML== "S"){          //square
            string=string * string;
            screen.value=string;
        }
        else if(e.target.innerHTML== "R"){        // squareroot
            string=Math.sqrt(string)
            screen.value=string;
        }
        else if(e.target.innerHTML== "A"){          //Allclear
            string=" ";
            screen.value=string;
        }
        else if(e.target.innerHTML== "D"){             //Delete one by one
            string=string.substring(0,string.length-1);
            screen.value=string;
        }
        else{
            string += e.target.innerHTML;           // exectued after click on number value
            screen.value=string;
        }
    })
})
 