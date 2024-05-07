export default {
  preset: "ts-jest",
  // match only files with .test.ts or .spec.ts extension
  testRegex: "\.(test|spec)\.ts$",
  testPathIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "/^components\/(.*)$/": "<rootDir>/src/components/$1" 
  },
};
