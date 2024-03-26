class Builder {
  static report() {
    return "🏠";
  }
}

class Manager {
  static report() {
    return null;
  }
}

class Employer {
  static beat(employee) {
    console.log(`I beat ${employee} very badly`);
  }

  static paySalary(employee) {
    console.log(`${employee} you're deserved 1$`);
  }

  static decision() {
    const report = this.generateReport();

    for (const employee of Object.keys(report)) {
      if (report[employee] === null) this.beat(employee);
      else this.paySalary(employee);
    }
  }

  static generateReport() {
    const report = {
      Builder: Builder.report(),
      Manager: Manager.report(),
    };

    return report;
  }
}

Employer.decision();
