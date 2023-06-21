const swisseph = require('swisseph');
const swissephData = require('swisseph-data');
const moment = require('moment');


const durationGraha = [
    SY = 6,
    CH = 10,
    MA = 7,
    RA = 18,
    GU = 16,
    SA = 19,
    BU = 17,
    KE = 7,
    SK = 20,
];


swissephData.path = './path/to/ephemeris/data/files';

swisseph.swe_init(swissephData.path);

const calculateDasha = async (date, month, year, hour, minutes, lat, lng, dasha) => {
    // Convert the date and time to a UTC timestamp
    const timestamp = await moment.utc(`${year}-${month}-${date} ${hour}:${minutes}`, 'YYYY-M-D HH:mm').unix();
  
    // Set the geographic location
    swisseph.swe_set_topo(lat, lng, 0);
  
    // Calculate the Antardash, Mahadash, and Prayantardash
    const planet =await swisseph.SE_MOON; // Use the Moon for the example, replace with desired planet
    const planetName = swisseph.swe_get_planet_name(planet);
    
    // Calculate the current Mahadash
    const mahadash = swisseph.swe_dated_mahadasa_ut(timestamp, planet);
    
    // Calculate the Antardash within the current Mahadash
    const antardash = swisseph.swe_dated_mahadasa_antardasa_ut(timestamp, planet);
    
    // Calculate the Prayantardash within the current Antardash
    const prayantardash = swisseph.swe_dated_mahadasa_pratyantaradasa_ut(timestamp, planet);
    
    return {
      planet: planetName,
      mahadash,
      antardash,
      prayantardash
    };
  }
  

module.exports = {calculateDasha, durationGraha}