var guest = ["Kashif", "Rafay", "Hammad", "Abdul Rehman" ];
var guestnotcoming = ["Hammad","Abdul Rehman"]

guest.forEach(function(item){
    console.log("Hello " + item + "! You're invited to dinner.")

});



guest.splice(2, 1,"Zunair")
guest.splice(3, 1,"Romesa")


guest.forEach(function(item){
    console.log("Hello " + item + "! You're invited to dinner.")
});

guestnotcoming.forEach(function(item){
    console.log(item + " is not coming!")
});

console.log("I have arranged a bigger table");


guest.unshift("Ali");
guest.push("Laiba");
guest.splice(2,0,"Khan");

guest.forEach(function(item){
    console.log("Hello " + item + "! You're invited to dinner");
});


console.log("I can invite only 2 members");

guest.forEach(()=>{
    
})