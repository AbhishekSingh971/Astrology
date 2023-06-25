// namespace Jyotish\Base;

class Biblio {
    static BOOK_BPHS = 'bphs';
    static BOOK_US = 'us';
    static BOOK_BJ = 'bj';
    static BOOK_BS = 'bs';
    static BOOK_SA = 'sa';
    static BOOK_SJ = 'sj';
    static BOOK_UK = 'uk';
    static BOOK_SC = 'sc';
    static BOOK_PH = 'ph';
    static BOOK_JP = 'jp';
    static BOOK_SB = 'sb';
    static BOOK_BP = 'bp';
    static BOOK_SS = 'ss';
    static BOOK_MS = 'ms';
  
    static AUTHOR_PARASHARA = 'parashara';
    static AUTHOR_JAIMINI = 'jaimini';
    static AUTHOR_VARAHAMIHIRA = 'varahamihira';
    static AUTHOR_KVARMA = 'kvarma';
    static AUTHOR_SATYACHARYA = 'satyacharya';
    static AUTHOR_KALIDAS = 'kalidas';
    static AUTHOR_VSHARMA = 'vsharma';
    static AUTHOR_MANTRESWARA = 'mantreswara';
    static AUTHOR_VDIKSHITA = 'vdikshita';
  
    static COMMON = 'common';
  
    static book = {
      [Biblio.BOOK_BPHS]: 'Brihat Parashara Hora Shastra',
      [Biblio.BOOK_US]: 'Upadesha Sutras',
      [Biblio.BOOK_BJ]: 'Brihat Jataka',
      [Biblio.BOOK_BS]: 'Brihat Samhita',
      [Biblio.BOOK_SA]: 'Saravali',
      [Biblio.BOOK_SJ]: 'Satya Jatakam',
      [Biblio.BOOK_UK]: 'Uttara Kalamritam',
      [Biblio.BOOK_SC]: 'Sarvarth Chintamani',
      [Biblio.BOOK_PH]: 'Phaladeepika',
      [Biblio.BOOK_JP]: 'Jataka Parijata',
      [Biblio.BOOK_SB]: 'Srimad-Bhagavatam',
      [Biblio.BOOK_BP]: 'Bhavishya Purana',
      [Biblio.BOOK_SS]: 'Surya Siddhanta',
      [Biblio.BOOK_MS]: 'Manu-samhita',
    };
  
    static author = {
      [Biblio.AUTHOR_PARASHARA]: {
        name: 'Parashara',
        books: [Biblio.BOOK_BPHS],
      },
      [Biblio.AUTHOR_JAIMINI]: {
        name: 'Jaimini',
        books: [Biblio.BOOK_US],
      },
      [Biblio.AUTHOR_VARAHAMIHIRA]: {
        name: 'Varahamihira',
        books: [Biblio.BOOK_BJ, Biblio.BOOK_BS],
      },
      [Biblio.AUTHOR_KVARMA]: {
        name: 'Kalyana Varma',
        books: [Biblio.BOOK_SA],
      },
      [Biblio.AUTHOR_SATYACHARYA]: {
        name: 'Satyacharya',
        books: [Biblio.BOOK_SJ],
      },
      [Biblio.AUTHOR_KALIDAS]: {
        name: 'Kalidas',
        books: [Biblio.BOOK_UK],
      },
      [Biblio.AUTHOR_VSHARMA]: {
        name: 'Venkatesh Sharma',
        books: [Biblio.BOOK_SC],
      },
      [Biblio.AUTHOR_MANTRESWARA]: {
        name: 'Mantreswara',
        books: [Biblio.BOOK_PH],
      },
      [Biblio.AUTHOR_VDIKSHITA]: {
        name: 'Vaidyanatha Dikshita',
        books: [Biblio.BOOK_JP],
      },
    };
  }

module.exports = Biblio;