const {Country} = require("../db")
const axios = require ("axios");
const {Activity }= require("../db")


 const crearPaisesEnDb = async () => {
   const prueba = await Country.findAll();
   console.log (prueba, "hello")
  if(prueba.length === 0){
    const apiCountries =  await axios.get("https://restcountries.com/v3/all")
    const apiCountriesClean = apiCountries.data.map(coun =>({
        id: coun.cca3,
        image: coun.flags[1],
        continent: coun.continents? coun.continents[0] : "This country has not Continent",
        capital: coun.capital? coun.capital[0] : "This country has not Capital",
        subregion: coun.subregion,
        area: coun.area,
        population: coun.population,
        name: coun.name.common
    }))
    Country.bulkCreate(apiCountriesClean);
  }
}

const getAllCountries =  async () => {
    const dbCountries = await Country.findAll();
    const listadoCountry = dbCountries.map(coun => ({
      name:coun.name,
      image:coun.image,
      continent: coun.continent,
      population: coun.population,
      id: coun.id
    }))
    return [...listadoCountry]
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------//

const findCountryId = async (id) => {
    const country = await Country.findAll({
      where: { id },
      include: [
        {
          model:Activity,
          attributes: ["id", "name", "difficulty", "duration", "season"],
        },
      ],
    });
    return country;
  };

module.exports = {
    getAllCountries,
    crearPaisesEnDb,
    findCountryId,
  }