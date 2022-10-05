var fav_transport = ["Honda 150", "Yamaha ybr"];
var arr = [
    "I would like to own a ",
    "The Cheapest comfortable bike is "
];

// console.log(arr[0] + fav_transport[0]);
// console.log(arr[1] + fav_transport[1]);
// console.log(arr[2] + fav_transport[2]);

fav_transport.forEach(function(item,ind){
    console.log(arr[ind] + item)
})