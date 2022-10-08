let current_users = ["admin", "hammad", "uzair", "miran", "hashir"];

let new_users = ["hammad", "uzair", "taha", "emmad", "faraz"];

for (let i = 0; i < new_users.length; i++) {
    if (current_users[i] === new_users[i]) {
        console.log("Username already taken");
    } else {
        console.log("Username available");
    }
}