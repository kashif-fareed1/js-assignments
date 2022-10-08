let make_sanwich = (fillings) => {
    console.log(`The sanwich has the following fillings:`);
    fillings.forEach(filling => {
        console.log(`${filling}`);
    });
}

make_sanwich(["meat", "sauce", "tomoto", "lettuce"]);
make_sanwich("cheese", "tomato", "onion");
make_sanwich("cheese", "tomato");
make_sanwich("cheese");