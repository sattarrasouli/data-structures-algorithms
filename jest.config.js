/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "js", "json", "node"],
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { useESM: true }]
    },
    extensionsToTreatAsEsm: [".ts"]
  };
  