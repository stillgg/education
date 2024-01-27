// short identifiers
{
  const n = "Marcus";
}

// long identifiers
{
  const romanEmperorAndOutstandingThinker = "Marcus";
}

// Same name but different meaning
{
  const name = "Marcus";
  if (name) {
    const name = "./config.js";
    console.log(name);
  }
}

// Same meaning but different naming
{
  const fileName = "./config.js";
  if (!fileName) {
    const file = "./backup/config.js";
    if (!file) {
      const filePath = "../config.js";
      console.log(filePath);
    }
  }
}

// Inconsistent names
{
  const api = {
    setPort: () => {},
    assignAddress: () => {},
    definePath: () => {},
  };
  console.log(api);
}

// Non descriptive names
{
  class ApplicationController {
    constructor(link) {
      this.link = link;
    }

    execute(handler) {
      this.link(handler);
    }
  }
}
