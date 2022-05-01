const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(Value) {
    this.chain.push(String(Value));
    return this;
  },
  removeLink(Position) {
    if (Position <= 0 || Position > this.chain.length || isNaN(Position)) {
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(Position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(e => `( ${e} )`).join('~~');
    this.chain.length = 0;
    return result;
  }
};
module.exports = {
  chainMaker
};