let describe_city = (city_name, country_name = "Pakistan") => {
    console.log(`${city_name} is in ${country_name}`);
}
describe_city("Karachi");
describe_city("Quetta");
describe_city("Islamabad");
describe_city("New York", "USA");