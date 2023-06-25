class Math {
    static get M_RAD() {
      return Math.PI / 180;
    }
  
    static dmsToDecimal(dms) {
      const { d, m, s = 0 } = dms;
      const sign = (d < 0 || m < 0 || s < 0) ? -1 : 1;
      return sign * (Math.abs(d) + Math.abs(m) / 60 + Math.abs(s) / 3600);
    }
  
    static decimalToDms(decimal) {
      const x = Math.abs(decimal);
      const result = {
        d: Math.floor(x),
        m: Math.floor((x - Math.floor(x)) * 60),
        s: parseFloat(((x - Math.floor(x)) * 60 - Math.floor((x - Math.floor(x)) * 60)) * 60 .toFixed(10))
      };
  
      if (result.s === 0) {
        delete result.s;
      } else if (result.s === 60) {
        result.m += 1;
        delete result.s;
      }
  
      if (decimal < 0) {
        if (result.d !== 0) result.d *= -1;
        else if (result.m !== 0) result.m *= -1;
        else result.s *= -1;
      }
  
      return result;
    }
  
    static partsToUnits(totalParts, partsInUnit = 30, flagRound = 'ceil') {
      if (partsInUnit <= 0) {
        throw new Error("Parts in unit must be greater than zero.");
      }
  
      let totalUnits;
      switch (flagRound) {
        case 'floor':
          totalUnits = Math.floor(totalParts / partsInUnit);
          break;
        case 'ceil':
        default:
          totalUnits = Math.ceil(totalParts / partsInUnit);
          break;
      }
  
      const restParts = totalParts % partsInUnit;
  
      return { units: totalUnits, parts: restParts };
    }
  
    static distanceInCycle(n1, n2, cycle = 12) {
      if (n1 > cycle || n2 > cycle) {
        throw new Error(`Number in cycle should not be greater than size of the cycle ${cycle}.`);
      }
      let distance;
      if (n1 <= n2) {
        distance = n2 - n1 + 1;
      } else {
        distance = cycle - (n1 - n2) + 1;
      }
      return distance;
    }
  
    static numberInCycle(n, distance = 1, cycle = 12) {
      if (distance === 0) {
        throw new Error("Distance should not be zero.");
      }
  
      let distanceCycle;
      if (distance > 0) {
        distanceCycle = distance - 1;
      } else {
        distanceCycle = distance + 1;
      }
  
      let number = n + distanceCycle;
  
      if (number > 0) {
        if (number < cycle) {
          return number;
        } else {
          const numberCycle = number % cycle;
          return numberCycle === 0 ? cycle : numberCycle;
        }
      } else {
        if (Math.abs(number) < cycle) {
          return cycle - Math.abs(number);
        } else {
          return cycle - Math.floor(Math.abs(number) % cycle);
        }
      }
    }
  
    static numberNext(n, cycle = 12) {
      const nNext = n + 1;
      return Math.numberInCycle(nNext, 1, cycle);
    }
  
    static numberPrev(n, cycle = 12) {
      const nPrev = n - 1;
      return Math.numberInCycle(nPrev, -1, cycle);
    }
  
    static sign(number) {
      if (number < 0) {
        return -1;
      } else if (number > 0) {
        return 1;
      } else {
        return 0;
      }
    }
  
    static arraySum(...arrays) {
      const result = [];
      const maxLength = Math.max(...arrays.map((arr) => arr.length));
  
      for (let i = 0; i < maxLength; i++) {
        result[i] = arrays.reduce((sum, arr) => sum + (arr[i] || 0), 0);
      }
  
      return result;
    }
  
    static arrayInArray(arr1, arr2) {
      return arr1.every((val) => arr2.includes(val));
    }
  
    static shiftArray(array, start) {
      const shiftedArray = [];
      for (let i = 0; i < array.length; i++) {
        const newIndex = i + start;
        shiftedArray[newIndex >= array.length ? newIndex - array.length : newIndex] = array[i];
      }
      return shiftedArray;
    }
  
    static dmsSum(dms1, dms2) {
      const decimal1 = Math.dmsToDecimal(dms1);
      const decimal2 = Math.dmsToDecimal(dms2);
      const sumDecimal = decimal1 + decimal2;
      return Math.decimalToDms(sumDecimal);
    }
  
    static dmsMulti(dms, factor) {
      const decimal = Math.dmsToDecimal(dms);
      const multiDecimal = decimal * factor;
      return Math.decimalToDms(multiDecimal);
    }
  
    static inRange(value, min, max) {
      return value >= min && value <= max;
    }
  
    static oppositeValue(n, cycle = 12) {
      const opposite = Math.numberInCycle(n, cycle / 2, cycle);
      return opposite === 0 ? cycle : opposite;
    }
  
    static simplifyNumber(number) {
      let sum = number;
      while (sum > 9) {
        sum = Math.floor(sum / 10) + (sum % 10);
      }
      return sum;
    }
  }
  
  module.exports = Math;
  