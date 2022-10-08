let magicians = ["Hammad Choti", "Ghayour", "Rafay"];

const show_magicians = (magicians) => {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}

const make_great = (magicians) => {
    
    magicians.forEach((magician, index) => {
        magicians[index] = `Great ${magician}`;
    });
}

make_great(magicians);
show_magicians(magicians);