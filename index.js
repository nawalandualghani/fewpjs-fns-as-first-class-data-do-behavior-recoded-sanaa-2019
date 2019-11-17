/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(timeString){
  if(timeString<"12pm"){
    return Good Morning;
  }
else(timeString<"12pm" && timeString>"5pm"){
    return Good Afternoon;
  }
if(timeString>"5pm"){
    return 'Good Evening';
  }

}
greet();
/* Write your implementation of displayMessage() */
 displayMessage();
