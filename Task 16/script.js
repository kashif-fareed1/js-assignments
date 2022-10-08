let dinnerInviteList = ["Hammad", "Uzair", "Miran"];

console.log(dinnerInviteList[0] + ": You are invited to attend dinner tonight.");
console.log(dinnerInviteList[1] + ": You are invited to attend dinner tonight.");
console.log(dinnerInviteList[2] + ": You are invited to attend dinner tonight.");

console.log("\n");


console.log(dinnerInviteList[2] + " won't be able to make it to the dinner tonight.");

dinnerInviteList.pop();
dinnerInviteList.push("Ghayour");

console.log("\n");

console.log(dinnerInviteList[0] + ": You are invited to attend dinner tonight.");
console.log(dinnerInviteList[1] + ": You are invited to attend dinner tonight.");
console.log(dinnerInviteList[2] + ": You are invited to attend dinner tonight.");

console.log("\n");

console.log("I have found a bigger dinner table and will be inviting more guests to join me for dinner.");

dinnerInviteList.unshift("Hashir");

dinnerInviteList.splice(2, 0, "Emmad");

console.log(dinnerInviteList[0] + ", You are invited to attend dinner tonight.");
console.log(dinnerInviteList[1] + ", You are invited to attend dinner tonight.");
console.log(dinnerInviteList[2] + ", You are invited to attend dinner tonight.");
console.log(dinnerInviteList[3] + ", You are invited to attend dinner tonight.");

console.log("\n");
dinnerInviteList.push("Rehman");


console.log(dinnerInviteList[0] + ", You are invited to attend dinner at my place tonight.");
console.log(dinnerInviteList[1] + ", You are invited to attend dinner at my place tonight.");
console.log(dinnerInviteList[2] + ", You are invited to attend dinner at my place tonight.");
console.log(dinnerInviteList[3] + ", You are invited to attend dinner at my place tonight.");
console.log(dinnerInviteList[4] + ", You are invited to attend dinner at my place tonight.");
console.log(dinnerInviteList[5] + ", You are invited to attend dinner at my place tonight.");
