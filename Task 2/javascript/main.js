
range = document.querySelectorAll("input[type='range']");

range.forEach(element => {
   element.oninput = () => {
    console.log(element.value)
    if (parseInt(element.value) > 50) {
        element.style.backgroundColor = "green";
    
    }else if(element.value == 50) {
        element.style.backgroundColor = "silver";

    } else if (element.value < 50) {
        element.style.backgroundColor = "red";
        
    }
   }
});