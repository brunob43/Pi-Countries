const { Country, Activity, activities_countries } = require("../db");
const { getAllCountries } = require("../utils/index");
/* const {findCountry} = require ("../utils/index") */
const axios = require("axios");
// const Activity = require("../models/Activity");
const { findCountryId } = require("../utils/index");
// const Activity = require("../models/Activity");

const getCountry = async (req, res) => {
  const { name } = req.query;
  const findCountries = async () => {
    try {
      apiResults = await axios.get(`https://restcountries.com/v3/name/${name}`);
      const apiCountries = apiResults.data.map((country) => {
        return {
          id: country.cca3,
          name: country.name.common,
          official_name: country.name.official,
          image: country.flags[0],
          continent: country.continents ? country.continents[0] : "This country has not Continent",
          capital: country.capital ? country.capital[0] : "This country has not Capital",
          subregion: country.subregion,
          area: country.area,
          population: country.population,
          origin: "api",
        };
      });
      return apiCountries;
    } catch (err) {
      return "this country does not exist";
    }
  };

  let results = name ? await findCountries() : await getAllCountries();
  res.status(200).json(results);
};

const findCountry = async (req, res) => {
  const { id } = req.params
  const findCountryId = async (id) => {

    // console.log(conn.models);

    try {
      const country = await Country.findByPk(id, 
        { 
          include: [
            { 
              model: Activity, 
              through: { attributes: [ ] }
            }
          ] 
        }
      );

      if(country) return country
      throw new Error("El id ingresado no existe")
    } catch ({message}) {
      return message;
    }
  };
  let results = await findCountryId(id);
  res.status(200).json(results);
};


module.exports = {
  getCountry,
  findCountry,
}