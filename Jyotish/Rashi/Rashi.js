// namespace Jyotish\Rashi;
const Graha = require('Jyotish/Graha/Graha');

class Rashi {
    static BHAVA_CHARA = 'chara';
    static BHAVA_STHIRA = 'sthira';
    static BHAVA_DVISVA = 'dvisva';
  
    static BALA_RATRI = 'ratri';
    static BALA_DINA = 'dina';
  
    static DAYA_SIRSHA = 'sirsha';
    static DAYA_PRUSHTA = 'prushta';
    static DAYA_UBHAYA = 'ubhaya';
  
    static GRAHA_UCHA = 'ucha';
    static GRAHA_MOOL = 'mool';
    static GRAHA_SWA = 'swa';
    static GRAHA_FRIEND = 'friend';
    static GRAHA_NEUTRAL = 'neutral';
    static GRAHA_ENEMY = 'enemy';
    static GRAHA_NEECHA = 'neecha';
  
    static NAME_1 = 'Mesha';
    static NAME_2 = 'Vrishabha';
    static NAME_3 = 'Mithuna';
    static NAME_4 = 'Karka';
    static NAME_5 = 'Simha';
    static NAME_6 = 'Kanya';
    static NAME_7 = 'Tula';
    static NAME_8 = 'Vrishchika';
    static NAME_9 = 'Dhanu';
    static NAME_10 = 'Makara';
    static NAME_11 = 'Kumbha';
    static NAME_12 = 'Meena';
  
    static rashi = {
      1: Rashi.NAME_1,
      2: Rashi.NAME_2,
      3: Rashi.NAME_3,
      4: Rashi.NAME_4,
      5: Rashi.NAME_5,
      6: Rashi.NAME_6,
      7: Rashi.NAME_7,
      8: Rashi.NAME_8,
      9: Rashi.NAME_9,
      10: Rashi.NAME_10,
      11: Rashi.NAME_11,
      12: Rashi.NAME_12,
    };
  
    static grahaAvastha = [
      Rashi.GRAHA_UCHA,
      Rashi.GRAHA_MOOL,
      Rashi.GRAHA_SWA,
      Rashi.GRAHA_FRIEND,
      Rashi.GRAHA_NEUTRAL,
      Rashi.GRAHA_ENEMY,
      Rashi.GRAHA_NEECHA,
    ];
  
    static pushkaraBhaga = {
      1: 21,
      2: 14,
      3: 18,
      4: 8,
      5: 19,
      6: 9,
      7: 24,
      8: 11,
      9: 23,
      10: 14,
      11: 19,
      12: 9,
    };
  
    static pushkaraNavamsha = {
      1: [7, 9],
      2: [3, 5],
      3: [6, 8],
      4: [1, 3],
      5: [7, 9],
      6: [3, 5],
      7: [6, 8],
      8: [1, 3],
      9: [7, 9],
      10: [3, 5],
      11: [6, 8],
      12: [1, 3],
    };
  
    static trimshamshaRuler = {
      MA: 5,
      SA: 5,
      GU: 8,
      BU: 7,
      SK: 5,
    };
  
    static translit = ['ra', 'aa', 'sha', 'i'];
  
    static getInstance(key, options = null) {
      if (!Object.prototype.hasOwnProperty.call(Rashi.rashi, key)) {
        throw new Error(`Rashi with the key '${key}' does not exist.`);
      }
  
      const rashiClass = `R${key}`;
      const rashiObject = new rashiClasses[rashiClass](options);
  
      return rashiObject;
    }
  
    static listRashiByFeature(feature, value) {
      const result = {};
  
      Object.entries(Rashi.rashi).forEach(([key, name]) => {
        const Rashi = Rashi.getInstance(key);
  
        const rashiFeature = `rashi${feature.charAt(0).toUpperCase()}${feature.slice(1)}`;
  
        if (!Rashi.hasOwnProperty(rashiFeature)) {
          throw new Error(`Rashi feature '${rashiFeature}' does not exist.`);
        }
  
        if (Rashi[rashiFeature] === value) {
          result[key] = name;
        }
      });
  
      return result;
    }
  
    static listTrimshamshaRuler(key) {
      const rulers = key % 2 ? Rashi.trimshamshaRuler : Object.values(Rashi.trimshamshaRuler).reverse();
  
      return rulers;
    }
  }
  
module.exports = Rashi;  