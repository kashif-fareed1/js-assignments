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
    console.log(item + " are not coming!")
});
