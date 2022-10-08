let show_magicians = (magicians) => {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}
const make_great = (magicians) => {
    
    let great_magicians = [];
    magicians.forEach(magician => {
        great_magicians.push(`Great ${magician}`);
    }
    );
    return great_magicians;
}
const magicians = ["Hammad Choti", "Ghayour", "Rafay"];

const new_array = make_great(magicians);

show_magicians(magicians);

show_magicians(new_array);
