import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  verbose: true,
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
  collectCoverageFrom: [
    "src/**",
    "!src/@types/**",
    "!src/**/atoms/**",
    "!src/testUtils/**",
    "!src/main.tsx",
    "!src/App/globalStyles.ts",
    "!src/contexts/*"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  roots: [
    "<rootDir>/src/"
    //    "<rootDir>/cypress"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/__mocks__/file-mock.ts",
    "\\.(css|less)$": "<rootDir>/jest/__mocks__/css-mock.ts",
    "~(.*)$": "<rootDir>/src/$1"
  },
  globals: {
    "ts-jest": {
      useESM: true,
      babelConfig: {
        plugins: ["babel-plugin-transform-vite-meta-env"],
        presets: ["@babel/preset-env"]
      }
    }
  }
};
export default config;
