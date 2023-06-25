class Deva extends Nara {
    static get DEVA_ADITI() { return 'Aditi'; }
    static get DEVA_AGNI() { return 'Agni'; }
    static get DEVA_AHIRBUDHYANA() { return 'Ahirbudhyana'; }
    static get DEVA_AJIKAPADA() { return 'Ajikapada'; }
    static get DEVA_APAH() { return 'Apah'; }
    static get DEVA_ARYAMA() { return 'Aryama'; }
    static get DEVA_ASHWINI() { return 'Ashwini'; }
    static get DEVA_BHAGA() { return 'Bhaga'; }
    static get DEVA_BRAHMA() { return 'Brahma'; }
    static get DEVA_BRAHMA_PRAJAPATI() { return 'Prajapati'; }
    static get DEVA_BUDHA() { return 'Budha'; }
    static get DEVA_BUDHA_KUMAR() { return 'Kumar'; }
    static get DEVA_GURU() { return 'Guru'; }
    static get DEVA_GURU_BRIHASPATI() { return 'Brihaspati'; }
    static get DEVA_CHANDRA() { return 'Chandra'; }
    static get DEVA_CHANDRA_SOMA() { return 'Soma'; }
    static get DEVA_GANAPATHI() { return 'Ganapathi'; }
    static get DEVA_HIRANYAGARBHA() { return 'Hiranyagarbha'; }
    static get DEVA_INDRA() { return 'Indra'; }
    static get DEVA_KAMADEV() { return 'Kamadev'; }
    static get DEVA_KAMADEV_MANMATHA() { return 'Manmatha'; }
    static get DEVA_KARTTIKEYA() { return 'Karttikeya'; }
    static get DEVA_KARTTIKEYA_MURUGAN() { return 'Murugan'; }
    static get DEVA_KARTTIKEYA_SENAPATI() { return 'Senapati'; }
    static get DEVA_KARTTIKEYA_SKANDA() { return 'Skanda'; }
    static get DEVA_KARTTIKEYA_SUBRAMANYA() { return 'Subramanya'; }
    static get DEVA_KUBER() { return 'Kuber'; }
    static get DEVA_MANGAL() { return 'Mangal'; }
    static get DEVA_MANGAL_KUJA() { return 'Kuja'; }
    static get DEVA_MARUTH() { return 'Maruth'; }
    static get DEVA_NIRRITI() { return 'Nirriti'; }
    static get DEVA_PARVATI() { return 'Parvati'; }
    static get DEVA_PARVATI_GAURI() { return 'Gauri'; }
    static get DEVA_PARVATI_DUGRA() { return 'Durga'; }
    static get DEVA_PARVATI_KALI() { return 'Kali'; }
    static get DEVA_PAVAMANA() { return 'Pavamana'; }
    static get DEVA_PUSHA() { return 'Pusha'; }
    static get DEVA_PITRU() { return 'Pitru'; }
    static get DEVA_PRITHVI() { return 'Prithvi'; }
    static get DEVA_SARPA() { return 'Sarpa'; }
    static get DEVA_RATRI() { return 'Ratri'; }
    static get DEVA_SHACHI() { return 'Shachi'; }
    static get DEVA_SHANI() { return 'Shani'; }
    static get DEVA_SHANI_SHANAISHCHARA() { return 'Shanaishchara'; }
    static get DEVA_SHIVA() { return 'Shiva'; }
    static get DEVA_SHIVA_RUDRA() { return 'Rudra'; }
    static get DEVA_SHUKRA() { return 'Shukra'; }
    static get DEVA_SHUKRA_USHANAS() { return 'Ushanas'; }
    static get DEVA_SURYA() { return 'Surya'; }
    static get DEVA_SURYA_MITRA() { return 'Mitra'; }
    static get DEVA_SURYA_RAVI() { return 'Ravi'; }
    static get DEVA_SURYA_SAVITRI() { return 'Savitri'; }
    static get DEVA_SURYA_VIVASVAN() { return 'Vivasvan'; }
    static get DEVA_TWASHTR() { return 'Twashtr'; }
    static get DEVA_VARUNA() { return 'Varuna'; }
    static get DEVA_VARUNA_AMBU() { return 'Ambu'; }
    static get DEVA_VASU() { return 'Vasu'; }
    static get DEVA_VAYU() { return 'Vayu'; }
    static get DEVA_VIDHATA() { return 'Vidhata'; }
    static get DEVA_VISHNU() { return 'Vishnu'; }
    static get DEVA_VISHNU_ISHVARA() { return 'Ishvara'; }
    static get DEVA_VISHNU_HARI() { return 'Hari'; }
    static get DEVA_VISHNU_KESHAVA() { return 'Keshava'; }
    static get DEVA_VISHNU_MAHA() { return 'Maha Vishnu'; }
    static get DEVA_VISHNU_YAJNESHVARA() { return 'Yajneshvara'; }
    static get DEVA_VISHVADEVA() { return 'Vishvadeva'; }
    static get DEVA_YAMA() { return 'Yama'; }
    static get DEVA_YAMA_DHARMA() { return 'Dharmaraja'; }
    
    static get triMurti() {
        return [
            Deva.DEVA_BRAHMA,
            Deva.DEVA_VISHNU,
            Deva.DEVA_SHIVA
        ];
    }

    static get nameVishnu() {
        return [
            Deva.DEVA_VISHNU,
            Deva.DEVA_VISHNU_ISHVARA,
            Deva.DEVA_VISHNU_HARI,
            Deva.DEVA_VISHNU_KESHAVA,
            Deva.DEVA_VISHNU_MAHA,
            Deva.DEVA_VISHNU_YAJNESHVARA,
        ];
    }

    static get nameShiva() {
        return [
            Deva.DEVA_SHIVA,
            Deva.DEVA_SHIVA_RUDRA,
        ];
    }

    static get nameBrahma() {
        return [
            Deva.DEVA_BRAHMA,
            Deva.DEVA_BRAHMA_PRAJAPATI,
        ];
    }

    static get nameSurya() {
        return [
            Deva.DEVA_SURYA,
            Deva.DEVA_SURYA_MITRA,
            Deva.DEVA_SURYA_RAVI,
            Deva.DEVA_SURYA_SAVITRI,
            Deva.DEVA_SURYA_VIVASVAN,
        ];
    }

    static get nameChandra() {
        return [
            Deva.DEVA_CHANDRA,
            Deva.DEVA_CHANDRA_SOMA,
        ];
    }

    static get nameGuru() {
        return [
            Deva.DEVA_GURU,
            Deva.DEVA_GURU_BRIHASPATI,
        ];
    }

    static get nameMangal() {
        return [
            Deva.DEVA_MANGAL,
            Deva.DEVA_MANGAL_KUJA,
        ];
    }

    static get nameBudha() {
        return [
            Deva.DEVA_BUDHA,
            Deva.DEVA_BUDHA_KUMAR,
        ];
    }

    static get nameShukra() {
        return [
            Deva.DEVA_SHUKRA,
            Deva.DEVA_SHUKRA_USHANAS,
        ];
    }

    static get nameShani() {
        return [
            Deva.DEVA_SHANI,
            Deva.DEVA_SHANI_SHANAISHCHARA,
        ];
    }

    static get nameKarttikeya() {
        return [
            Deva.DEVA_KARTTIKEYA,
            Deva.DEVA_KARTTIKEYA_MURUGAN,
            Deva.DEVA_KARTTIKEYA_SENAPATI,
            Deva.DEVA_KARTTIKEYA_SKANDA,
            Deva.DEVA_KARTTIKEYA_SUBRAMANYA,
        ];
    }

    static get nameParvati() {
        return [
            Deva.DEVA_PARVATI,
            Deva.DEVA_PARVATI_DUGRA,
            Deva.DEVA_PARVATI_GAURI,
            Deva.DEVA_PARVATI_KALI,
        ];
    }

    static get nameYama() {
        return [
            Deva.DEVA_YAMA,
            Deva.DEVA_YAMA_DHARMA,
        ];
    }
}

module.exports = Deva;
