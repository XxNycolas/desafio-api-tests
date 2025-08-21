module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    ["jest-html-reporter", {
      pageTitle: "Relatório de Testes API",
      outputPath: "./reports/test-report.html",
      includeFailureMsg: true,
      includeConsoleLog: true
    }]
  ]
};
