// namespace Jyotish\Base;

class BaseObject {
    constructor(options) {
      this.setOptions(options);
      this.setObjectName();
      this.setObjectNames();
    }
  
    setObjectName() {
      const objectName = this.objectType.charAt(0).toUpperCase() + this.objectType.slice(1);
      const className = `Jyotish.${objectName}.${objectName}`;
      const list = className.prototype[this.objectType];
      this.objectName = list[this.objectKey];
    }
  
    setObjectNames() {
      this.objectNames = [this.objectName, ...this.objectNames];
    }
  }

module.exports = BaseObject