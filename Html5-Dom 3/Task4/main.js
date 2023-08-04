// add global variables
let aNum1 = 0;
let aNum2 = 0;

// multip global varialbles
let mNum1 = 0;
let mNum2 = 0;

// Add Dom Elements
let addFields = document.querySelectorAll("div.add div.fields input");
let multiFields = document.querySelectorAll("div.multi div.fields input");
let addRes = document.getElementById("addRes");
let multiRes = document.getElementById("multiRes");

addFields.forEach((f, i) => {
    i == 0 ?
        f.onchange = () => {
            aNum1 = parseInt(f.value);
            addRes.textContent = aNum1 + aNum2;
        }

    : 
        f.onchange = () => {
            aNum2 = parseInt(f.value);
            addRes.textContent = aNum1 + aNum2;
        }
    ;
});

multiFields.forEach((f, i) => {
    i == 0 ?
        f.onchange = () => {
            mNum1 = parseInt(f.value);
            multiRes.textContent = mNum1 * mNum2;
        }

    : 
        f.onchange = () => {
            mNum2 = parseInt(f.value);
            multiRes.textContent = mNum1 * mNum2;
        }
    ;
});