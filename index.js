/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(timeString){
  if(timeString=="8:40"){
    return Good Morning;
  }
else(timeString=="14:21"){
    return Good Afternoon;
  }
if(timeString=="19:00"){
    return 'Good Evening';
  }

}
/* Write your implementation of displayMessage() */
