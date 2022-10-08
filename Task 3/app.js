let personName = "Kashif Fareed";

// Printing name in UpperCase

console.log(personName.toUpperCase());

// Printing name in LowerCase

console.log(personName.toLowerCase());

// Printing Name in TitleCase


let temp = personName.split("Kashif")
personName = "Kashif Fareed"
temp.forEach((item)=>{
    let letters = item.split("Fareed")
    letters.forEach((ltr,ind)=>{
        if(ind == 0){
            name += item[0].toUpperCase()
        }
        else{
            personName += item[ind]
        }
    })
    personName += " "
})

console.log(temp);

