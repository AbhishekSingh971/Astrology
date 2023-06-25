/**
 * Graha names and attributes.
 */
const Biblio = require('../Base/Biblio');
const Lagna = require('./Lagna');
const Deva = require('../Tattva/Jiva/Nara/Deva');

class Graha {
    static KEY_SY = 'Sy';
    static KEY_CH = 'Ch';
    static KEY_MA = 'Ma';
    static KEY_BU = 'Bu';
    static KEY_GU = 'Gu';
    static KEY_SK = 'Sk';
    static KEY_SA = 'Sa';
    static KEY_RA = 'Ra';
    static KEY_KE = 'Ke';
    static KEY_LG = Lagna.KEY_LG;

    static NAME_RA = 'Rahu';
    static NAME_KE = 'Ketu';

    static CHARACTER_SHUBHA = 'shubha';
    static CHARACTER_PAPA = 'papa';
    static CHARACTER_MISHRA = 'mishra';
    static CHARACTER_YOGAKARAKA = 'yogakaraka';
    static CHARACTER_KENDRADHI = 'kendradhi';

    static AMSHA_PARAMATMA = 'paramatma';
    static AMSHA_JIVATMA = 'jivatma';

    static CHESHTA_VAKRA = 'vakra';
    static CHESHTA_ANUVAKRA = 'anuvakra';
    static CHESHTA_VIKALA = 'vikala';
    static CHESHTA_MANDA = 'manda';
    static CHESHTA_MANDATARA = 'mandatara';
    static CHESHTA_SAMA = 'sama';
    static CHESHTA_CHARA = 'chara';
    static CHESHTA_ATICHARA = 'atichara';

    static RISING_NOREFRAC = 'norefrac';
    static RISING_DISCCENTER = 'disccenter';
    static RISING_HINDU = 'hindu';

    static LIST_NAVA = 'nava';
    static LIST_SAPTA = 'sapta';
    static LIST_PANCHA = 'pancha';
    static LIST_CHAYA = 'chaya';
    static LIST_CHESHTA = 'cheshta';

    static PUSHKARA_BHAGA = 'bhaga';
    static PUSHKARA_NAVAMSHA = 'navamsha';

    static graha = {
        [Graha.KEY_SY]: Deva.DEVA_SURYA,
        [Graha.KEY_CH]: Deva.DEVA_CHANDRA,
        [Graha.KEY_MA]: Deva.DEVA_MANGAL,
        [Graha.KEY_BU]: Deva.DEVA_BUDHA,
        [Graha.KEY_GU]: Deva.DEVA_GURU,
        [Graha.KEY_SK]: Deva.DEVA_SHUKRA,
        [Graha.KEY_SA]: Deva.DEVA_SHANI,
        [Graha.KEY_RA]: Graha.NAME_RA,
        [Graha.KEY_KE]: Graha.NAME_KE,
    };

    static balaCheshta = {
        [Graha.CHESHTA_VAKRA]: 60,
        [Graha.CHESHTA_ANUVAKRA]: 30,
        [Graha.CHESHTA_VIKALA]: 15,
        [Graha.CHESHTA_MANDA]: 15,
        [Graha.CHESHTA_MANDATARA]: 7.5,
        [Graha.CHESHTA_SAMA]: 30,
        [Graha.CHESHTA_CHARA]: 45,
        [Graha.CHESHTA_ATICHARA]: 30,
    };

    static bhagaAstangata = {
        [Biblio.BOOK_SS]: {
            [Graha.LIST_NAVA]: 15,
            [Graha.LIST_SAPTA]: 30,
            [Graha.LIST_PANCHA]: 45,
            [Graha.LIST_CHAYA]: 60,
            [Graha.LIST_CHESHTA]: 75,
        },
        [Biblio.BOOK_SSP]: {
            [Graha.LIST_NAVA]: 22.5,
            [Graha.LIST_SAPTA]: 45,
            [Graha.LIST_PANCHA]: 67.5,
            [Graha.LIST_CHAYA]: 90,
            [Graha.LIST_CHESHTA]: 112.5,
        },
        [Biblio.BOOK_LS]: {
            [Graha.LIST_NAVA]: 30,
            [Graha.LIST_SAPTA]: 60,
            [Graha.LIST_PANCHA]: 90,
            [Graha.LIST_CHAYA]: 120,
            [Graha.LIST_CHESHTA]: 150,
        },
    };

    static getGraha(key) {
        return Graha.graha[key];
    }

    static getGrahaBalaCheshta(key) {
        return Graha.balaCheshta[key];
    }

    static getGrahaBhagaAstangata(book, list) {
        return Graha.bhagaAstangata[book][list];
    }
}

module.exports = Graha;
