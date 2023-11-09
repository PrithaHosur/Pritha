var comp = "HUL"
var term = "Short Term"



const FMCGCompaniesList = document.getElementById("FMCGCompanies")

cList = ["HUL","Nestle","Varun Beverages","Britannia","Godrej Consumers","Dabur India","Marico","P&G","Colgate Palmolive","Hatsun Agro","Emami","Gillette India","Jyothy Labs","Hindustan Foods","Mrs Bectors","Tasty Bites","Dodla Diary","Bajaj Consumer","ADF Foods","Parag Milk Foods","Heritage Foods","Agro Tech Foods","Prataap Snacks","HMA Agro Industries","Vadilal Industries","GRM Overseas","AVT Natural Products","SKM Engg Products","Galaxy Surfacant","Wardwizard Foods","Tata Consumer","ITC","Jubilant Foodworks"]
cList.forEach(item => { 
    const option = document.createElement("option");
    option.value = item; // The value for the option
    option.text = item;  // The text displayed in the dropdown
    FMCGCompaniesList.appendChild(option);    
});

FMCGCompaniesList.addEventListener("change", function(){
    comp = FMCGCompaniesList.options[FMCGCompaniesList.selectedIndex].value;
})





const PredictionTerm = document.getElementById("Prediction Period")

pList = ["Short Term","Medium Term"]
pList.forEach(item => { 
    const option = document.createElement("option");
    option.value = item; // The value for the option
    option.text = item;  // The text displayed in the dropdown
    PredictionTerm.appendChild(option);    
});

PredictionTerm.addEventListener("change", function(){
    term = PredictionTerm.options[PredictionTerm.selectedIndex].value;
})






const myButton = document.getElementById("Get Prediction");
myButton.addEventListener("click", handleClick);

function handleClick() {
    
    const inputdata = {
        cName: comp,
        dTerm: term
    };

    fetch("/process_data", {
        method: "POST",
        body: JSON.stringify(inputdata),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json())
    .then(outputdata => {
        document.getElementById("predOutcome").textContent = "Result from Backend: " + outputdata.result;
        //document.getElementById("predOutcome").innerHTML = "Result from Backend: " + outputdata.result + "  inner result";
        
    });
}

 



      
            

   
