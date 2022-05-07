module.exports = class Worker {
  constructor(id = 0, lname = '', name = '', oname = '', position = 9, gelb = 1, pvnrless1000 = false, pvnrmore1000 = false, mngrless1000 = false, mngrmore1000 = false, allowless1000 = false, allowmore1000 = false, supervisor = false, sw = false, member = false, testing = false, onhate = false, sling = false, load = false) {
    this.id = id;
    this.name = name;
    this.lname = lname;
    this.oname = oname;
    this.position = position;
    this.gelb = gelb;
    this.pvnr = pvnrless1000;
    this.pvnr = pvnrmore1000;
    this.mngrless1000 = mngrless1000;
    this.mngrmore1000 = mngrmore1000;
    this.allowmore1000 = allowmore1000;
    this.allowless1000 = allowless1000;
    this.supervisor = supervisor;
    this.switch = sw;
    this.member = member;
    this.testing = testing;
    this.onhate = onhate;
    this.sling = sling;
    this.load = load
  }
};