const Math = require('Jyotish/Ganita/Math');
const Graha = require('Jyotish/Graha/Graha');
const Dasha = require('Jyotish/Dasha/Dasha');
const Astro = require('Jyotish/Ganita/Astro');
const Nakshatra = require('Jyotish/Panchanga/Nakshatra/Nakshatra');

class Vimshottari extends AbstractDasha {
  dashaType = Dasha.TYPE_VIMSHOTTARI;
  durationTotal = 120;
  durationGraha = {
    [Graha.KEY_SY]: 6,
    [Graha.KEY_CH]: 10,
    [Graha.KEY_MA]: 7,
    [Graha.KEY_RA]: 18,
    [Graha.KEY_GU]: 16,
    [Graha.KEY_SA]: 19,
    [Graha.KEY_BU]: 17,
    [Graha.KEY_KE]: 7,
    [Graha.KEY_SK]: 20,
  };

  constructor(options = null) {
    super(options);

    const nakshatras = Nakshatra.listNakshatra();
    this.orderNakshatra = Math.shiftArray(nakshatras, 3);
  }

  getStartPeriod() {
    const nakshatra = this.getData().panchanga.nakshatra;
    const N = Nakshatra.getInstance(nakshatra.key);

    const result = {
      graha: N.nakshatraRuler,
      total: this.durationTotal * Astro.DURATION_YEAR_GREGORIAN * 86400,
    };

    const duration =
      this.durationGraha[result.graha] *
      Astro.DURATION_YEAR_GREGORIAN *
      86400;
    result.start = Math.round((duration * (100 - nakshatra.left)) / 100);

    return result;
  }
}

module.exports = Vimshottari;