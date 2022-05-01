class VigenereCipheringMachine {
  constructor(direct) {
    if (direct === "true" || direct === undefined) this.isDirect = true;
    if (direct === false) this.isDirect = false;
  }
  get(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    } else this.checkParam(message, key);
  }
  checkParam(message, key) {
    this.message = message.toUpperCase().split('');
    if (this.isDirect === false) {
      this.message.reverse();
    }
    this.keyArray = key.toUpperCase().split('');
    this.keyLength = this.keyArray.length;
    this.keyCounter = 0;
    this.result = [];
    return this;
  }
  editCharacter(item, status) {
    if (item.codePointAt(0) > 'Z'.codePointAt(0) || item.codePointAt(0) < 'A'.codePointAt(0)) {
      this.result.push(item);
    } else if (status === "encrypt") {
      item = String.fromCodePoint(item.codePointAt(0) + this.keyArray[this.keyCounter].codePointAt(0) - 'A'.codePointAt(0));
      if (item.codePointAt(0) > 'Z'.codePointAt(0)) item = String.fromCodePoint(item.codePointAt(0) - 26);
      this.keyCounter ++;
      if (this.keyCounter === this.keyLength) this.keyCounter = 0;
      this.result.push(item);
    } else if (status === "decrypt") {
      item = String.fromCodePoint(item.codePointAt(0) - this.keyArray[this.keyCounter].codePointAt(0) + 'A'.codePointAt(0));
      if (item.codePointAt(0) < 'A'.codePointAt(0)) item = String.fromCodePoint(item.codePointAt(0) + 26);
      this.keyCounter ++;
      if (this.keyCounter === this.keyLength) this.keyCounter = 0;
      this.result.push(item);
    }
  }
  encrypt(message, key) {
    this.get(message, key);
    this.status = "encrypt";
    this.message.map(item => this.editCharacter(item, this.status));
    return this.result.join('');
  }
  decrypt(message, key) {
    this.get(message, key);
    this.status = "decrypt";
    this.message.map(item => this.editCharacter(item, this.status));
    return this.result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};