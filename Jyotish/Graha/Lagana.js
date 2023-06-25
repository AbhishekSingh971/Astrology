// namespace Jyotish\Graha;
const Math = require('Jyotish/Ganita/Math');
const Graha = require('Jyotish/Graha/Graha');
const Rashi = require('Jyotish/Rashi/Rashi');

class Lagna {
  static KEY_LG = 'Lg';
  static KEY_PLG = 'PLg';
  static KEY_ALG = 'ALg';
  static KEY_MLG = 'MLg';

  static KEY_IL = 'IL';
  static KEY_SL = 'SL';

  static NAME_LG = 'Lagna';

  static lagna = {
    [Lagna.KEY_IL]: 'Indu Lagna',
    [Lagna.KEY_SL]: 'Shree Lagna',
  };

  constructor(Data) {
    this.setDataInstance(Data);
  }

  getIL() {
    this.checkData('getIL');

    const kala = {
      [Graha.KEY_SY]: 30,
      [Graha.KEY_CH]: 16,
      [Graha.KEY_MA]: 6,
      [Graha.KEY_BU]: 8,
      [Graha.KEY_GU]: 10,
      [Graha.KEY_SK]: 12,
      [Graha.KEY_SA]: 1,
    };

    const rashiRuler = (rashi) => {
      const Rashi = Rashi.getInstance(rashi);
      return Rashi.rashiRuler;
    };

    const ruler9FromLg = rashiRuler(this.getData().bhava[9].rashi);
    const ruler9FromCh = rashiRuler(
      Math.numberInCycle(this.getData().graha[Graha.KEY_CH].rashi, 9)
    );

    let distance = (kala[ruler9FromLg] + kala[ruler9FromCh]) % 12;
    if (distance === 0) distance = 12;

    const rashiIL = Math.numberInCycle(
      this.getData().graha[Graha.KEY_CH].rashi,
      distance
    );
    const degreeIL = this.getData().graha[Graha.KEY_CH].degree;
    const lngIL = (rashiIL - 1) * 30 + degreeIL;

    return {
      longitude: lngIL,
      rashi: rashiIL,
      degree: degreeIL,
    };
  }

  getSL() {
    this.checkData('getSL');

    const nakshatra = this.getData().panchanga.nakshatra;

    const result1 = (1 - nakshatra.left / 100) * 360;
    const result2 =
      result1 + this.getData().lagna[Graha.KEY_LG].longitude;
    const lngSL = result2 > 360 ? result2 - 360 : result2;
    const unitSL = Math.partsToUnits(lngSL);

    return {
      longitude: lngSL,
      rashi: unitSL.units,
      degree: unitSL.parts,
    };
  }

  *generateLagna(lagnaKeys = null) {
    if (!lagnaKeys) {
      lagnaKeys = Object.keys(Lagna.lagna);
    }

    for (const key of lagnaKeys) {
      if (!(key in Lagna.lagna)) {
        throw new Error(`Lagna with the key '${key}' does not exist.`);
      }

      const getLagna = 'get' + key;
      yield [key, this[getLagna]()];
    }
  }

  checkData(functionName = null) {
    if (!this.getData().graha) {
      this.Data.calcParams();
    }

    if (
      functionName === 'getSL' &&
      !this.getData().panchanga.nakshatra
    ) {
      this.Data.calcPanchanga(['nakshatra']);
    }
  }
}
