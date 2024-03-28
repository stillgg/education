bad: {
  class Server {
    constructor(mode) {
      this.mode = mode;
    }
    init() {
      if (this.mode === 1) {
        this.loadResources();
        this.loadStatic();
        this.loadCert();
      } else if (this.mode === 2) {
        this.loadStatic();
        this.loadCert();
      } else if (this.mode === 3) {
        this.loadCert();
      } else {
      }
    }
    loadResources() {}
    loadStatic() {}
    loadCert() {}
  }
}

good: {
  const interface = {
    1: Mode1,
    2: Mode2,
    3: Mode3,
  };

  class BaseMode {
    static loadResources() {}
    static loadStatic() {}
    static loadCert() {}
  }

  class Mode1 {
    init() {
      BaseMode.loadResources();
      BaseMode.loadStatic();
      BaseMode.loadCert();
    }
  }

  class Mode2 {
    init() {
      BaseMode.loadStatic();
      BaseMode.loadCert();
    }
  }

  class Mode3 {
    init() {
      BaseMode.loadCert();
    }
  }

  class Controller {
    constructor(mode) {
      this.mode = mode;
    }
    init() {
      const Server = interface[this.mode];

      new Server().init();
    }
  }
}
