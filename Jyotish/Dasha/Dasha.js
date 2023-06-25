class Dasha {
    static TYPE_VIMSHOTTARI = 'vimshottari';
    static TYPE_ASHTOTTARI = 'ashtottari';
  
    static NESTING_1 = 'mahadasha';
    static NESTING_2 = 'antardasha';
    static NESTING_3 = 'pratyantardasha';
    static NESTING_4 = 'sookshmantardasha';
    static NESTING_5 = 'pranantardasha';
    static NESTING_6 = 'dehantardasha';
  
    static dasha = [
      Dasha.TYPE_VIMSHOTTARI,
      Dasha.TYPE_ASHTOTTARI,
    ];
  
    static getInstance(type, options = null) {
      const typeLower = type.toLowerCase();
  
      if (!Dasha.dasha.includes(typeLower)) {
        throw new Error(`Dasha '${typeLower}' does not exist.`);
      }
  
      const dashaClass = `Jyotish/Dasha/Object/${typeLower.charAt(0).toUpperCase() + typeLower.slice(1)}`;
      const dashaObject = new dashaClass(options);
  
      return dashaObject;
    }
  }
  