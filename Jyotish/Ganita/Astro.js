const Math = require('./Math'); // Assuming the Math module is defined in a separate file
const Time = require('./Time'); // Assuming the Time module is defined in a separate file
const Ayanamsha = require('./Ayanamsha'); // Assuming the Ayanamsha module is defined in a separate file
const { DateTime } = require('luxon'); // Assuming you have installed the Luxon package for date/time operations

class Astro {
  static DURATION_PRECESSION = 25880;
  static DURATION_YEAR_GREGORIAN = 365.2425;
  static DURATION_YEAR_JULIAN = 365.25;
  static DURATION_YEAR_SIDEREAL = 365.2564;
  static DURATION_MONTH_SIDEREAL = 27.3216610;
  static DURATION_MONTH_SYNODIC = 29.5305882;

  static getSunRise(userData, sunData) {
    const hourAngle = Math.acos((Math.cos(Math.dmsToDecimal({ d: 90, m: 51 })) - Math.sin(userData.latitude) * Math.sin(sunData.declination)) / (Math.cos(userData.latitude) * Math.cos(sunData.declination)));
    const eot = Astro.getEot(userData.date);

    const time = 12 - hourAngle + eot;

    return time;
  }

  static getEot(date) {
    const dateObject = DateTime.fromISO(date);
    const day = dateObject.ordinal;

    const B = (2 * Math.PI * (day - 81)) / 365;
    const e = 7.53 * Math.cos(B) + 1.5 * Math.sin(B) - 9.87 * Math.sin(2 * B);

    return e;
  }

  static getTithiByHarvey(day, month, year) {
    let monthH, yearH;
    if (month <= 2) {
      monthH = month + 12;
      yearH = year - 1;
    } else {
      monthH = month;
      yearH = year;
    }

    const eq = Math.floor(yearH / 100);
    const eq1 = Math.floor(eq / 3) + Math.floor(eq / 4) + 6 - eq;
    const eq2 = (Math.round(((yearH / eq - Math.floor(yearH / eq)) * 209) + monthH + eq1 + day) / 30);

    const tithi = Math.round(((eq2 - Math.floor(eq2)) * 30) + 1);

    return tithi;
  }

  static getSign(day, month) {
    const signs = [10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const signStart = {
      1: 21, 2: 20, 3: 21,
      4: 21, 5: 22, 6: 22,
      7: 23, 8: 22, 9: 24,
      10: 24, 11: 23, 12: 23
    };

    return day < signStart[month] ? signs[month - 1] : signs[month];
  }

  static getPrecessionSpeed(duration = Astro.DURATION_PRECESSION) {
    return 360 * 60 * 60 * 1000 / (duration * 365.2425 * 24 * 60 * 60 * 1000);
  }

  static getLST(date, locality) {
    const dateObject = DateTime.fromISO(date);
    const year = dateObject.year;
    const month = dateObject.month;
    const day = dateObject.day;

    const jd = Time.getJulianDay(year, month, day);
    const jc = Time.getJulianCentury(jd);

    const gst = Time.getGreenwichSiderealTime(jd, jc);
    const lst = Time.getLSTFromGST(gst, locality.longitude);

    return lst;
  }

  static getRAMC(date, locality) {
    const lst = Astro.getLST(date, locality);
    const ramc = Math.dmsToDecimal({ d: lst.hours, m: lst.minutes, s: lst.seconds }) * 15;

    return ramc;
  }

  static getEclipticObliquity(jc) {
    const e0 = 23.452294 - (0.0130125 * jc) - (0.00000164 * jc * jc) + (0.000000503 * jc * jc * jc);

    return e0;
  }

  static getAsc(date, locality, considerAyanamsha = false) {
    const ramc = Astro.getRAMC(date, locality);
    const latitude = Math.dmsToDecimal(locality.latitude);

    const e0 = Astro.getEclipticObliquity(Time.getJulianCentury(date));
    const asc = Ayanamsha.getAyanamsha(date) * (considerAyanamsha ? 1 : 0) + Math.atan2(Math.sin(ramc * Math.PI / 180), (Math.cos(ramc * Math.PI / 180) * Math.sin(latitude * Math.PI / 180) - Math.tan(e0 * Math.PI / 180) * Math.cos(latitude * Math.PI / 180))) * 180 / Math.PI;

    return asc;
  }

  static getMC(date, locality, considerAyanamsha = false) {
    const ramc = Astro.getRAMC(date, locality);
    const e0 = Astro.getEclipticObliquity(Time.getJulianCentury(date));
    const mc = Ayanamsha.getAyanamsha(date) * (considerAyanamsha ? 1 : 0) + Math.atan2(Math.tan(ramc * Math.PI / 180), Math.cos(e0 * Math.PI / 180)) * 180 / Math.PI;

    return mc;
  }
}

module.exports = Astro;
