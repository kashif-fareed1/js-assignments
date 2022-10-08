let users = ["admin", "Hammad", "Uzair", "Miran", "Hashir"];

for (let i = 0; i < users.length; i++) {

    if (users[i] === "admin") {
        console.log("Hello admin, would you like to see status report?");
    } else {
        console.log("Hello " + users[i] + "Thank for your logging in again");
    }
}

users.length = 0;

if (users.length === 0) {
    console.log("We need to find some users!");
}