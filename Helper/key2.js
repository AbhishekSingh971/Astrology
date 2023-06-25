//This is for the practice purpose
const swe = require('swisseph');


const calculateDasha = async (date, month, year, hour, minutes, lat, lng, dasha) => {

// Set the path to the Swiss Ephemeris data files
swe.set_ephe_path(__dir,'.././eph');

// Set the birth date and time for which you want to calculate the dashas
const birthYear = 1990;
const birthMonth = 1;
const birthDay = 1;
const birthHour = 0;
const birthMinute = 0;
const birthSecond = 0;

// Calculate the Julian Day for the birth date and time
const birthJulianDayUT = swe.utc_to_jd(
  birthYear,
  birthMonth,
  birthDay,
  birthHour,
  birthMinute,
  birthSecond,
  1
)[0];

// Calculate the Vishmotri Mahadasha (Ayanamsha)
const vishmotriMahadasha = swe.get_ayanamsa_ut(birthJulianDayUT);

// Calculate the Antardashas for a duration of 120 years (in months)
const antardashasCount = 120 * 12;
const antardashas = [];
for (let i = 0; i < antardashasCount; i++) {
  const antardashaStartJD = birthJulianDayUT + (i * 30);
  const antardashaEndJD = antardashaStartJD + 30;
  const antardashaStartYear = swe.jd_to_utc(antardashaStartJD)[0];
  const antardashaEndYear = swe.jd_to_utc(antardashaEndJD)[0];
  const antardashaAyanamshaStart = swe.get_ayanamsa_ut(antardashaStartJD);
  const antardashaAyanamshaEnd = swe.get_ayanamsa_ut(antardashaEndJD);
  antardashas.push({
    startYear: antardashaStartYear,
    endYear: antardashaEndYear,
    startAyanamsha: antardashaAyanamshaStart,
    endAyanamsha: antardashaAyanamshaEnd,
  });
}

// Calculate the Prayatnadashas for a duration of 120 years (in months)
const prayatnadashasCount = 120 * 12;
const prayatnadashas = [];
for (let i = 0; i < prayatnadashasCount; i++) {
  const prayatnadashaStartJD = birthJulianDayUT + (i * 30);
  const prayatnadashaEndJD = prayatnadashaStartJD + 30;
  const prayatnadashaStartYear = swe.jd_to_utc(prayatnadashaStartJD)[0];
  const prayatnadashaEndYear = swe.jd_to_utc(prayatnadashaEndJD)[0];
  const prayatnadashaAyanamshaStart = swe.get_ayanamsa_ut(prayatnadashaStartJD);
  const prayatnadashaAyanamshaEnd = swe.get_ayanamsa_ut(prayatnadashaEndJD);
  prayatnadashas.push({
    startYear: prayatnadashaStartYear,
    endYear: prayatnadashaEndYear,
    startAyanamsha: prayatnadashaAyanamshaStart,
    endAyanamsha: prayatnadashaAyanamshaEnd,
  });
}

// Print the results
console.log('Vishmotri Mahadasha (Ayanamsha):');
}
  

module.exports = {calculateDasha}
