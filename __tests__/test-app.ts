import fs from "node:fs";
const _ = require("lodash");

const getFileContent = (path: string): string => {
  const fileContent = fs.readFileSync(path, "utf8");
  return fileContent;
};

const getJson = (path: string): { [k: string]: any } => {
  let content = getFileContent(path);
  return JSON.parse(content);
};

const getAngularOption = (path: string, key: string): any => {
  const options = getJson(path);
  return _.get(options, key);
};

describe("first-app-exists", () => {
    test('first-app should be created correctly', () => {
      const isFolderExists = fs.existsSync("./solution/create-app/first-app");
      const isAngularExists = fs.existsSync("./solution/create-app/first-app/angular.json");
    
      expect(isFolderExists && isAngularExists).toBe(true);
    });
});

describe('first-app-style', () => {
  test("first-app style should be scss", () => {
    const option = getAngularOption(
      "./solution/create-app/first-app/angular.json",
      "projects.first-app.architect.build.options.inlineStyleLanguage"
    );
  
    expect(option).toBe("scss");
  });
});

describe('first-app-routing', () => {
  test("first-app should have routing", () => {
    const isRouting = fs.existsSync("./solution/create-app/first-app/src/app/app.routes.ts");
  
    expect(isRouting).toBeTruthy();
  });
});

describe("second-app-exists", () => {
    test('airport-app should be created correctly', () => {
      const isFolderExists = fs.existsSync("./solution/create-app/airport-app");
      const isAngularExists = fs.existsSync("./solution/create-app/airport-app/angular.json");
    
      expect(isFolderExists && isAngularExists).toBe(true);
    });
});

describe('second-app-style', () => {
  test("airport-app style should be scss", () => {
    const option = getAngularOption(
      "./solution/create-app/airport-app/angular.json",
      "projects.second-app.architect.build.options.styles[0]"
    );
  
    expect(option).toBe("src/styles.css");
  });
});

describe('second-app-routing', () => {
  test("airport-app should have routing", () => {
    const isRouting = fs.existsSync("./solution/create-app/airport-app/src/app/app.routes.ts");
  
    expect(isRouting).toBeFalsy();
  });
});

describe('bootstrap-download', () => {
  test("bootstrap package should be downloaded", () => {
    const isBootstrap = fs.existsSync(
      "./solution/create-app/first-app/node_modules/bootstrap"
    );
  
    expect(isBootstrap).toBeTruthy();
  });
});

describe('bootstrap-set', () => {
  test("bootstrap should be set in the styles array", () => {
    const styles = getAngularOption(
      "./solution/create-app/first-app/angular.json",
      "projects.first-app.architect.build.options.styles"
    );

    const isBootstrap = styles.find( (style: string) => style.includes('bootstrap.') );
  
    expect(isBootstrap).toBeTruthy();
  });
});

describe('font-download', () => {
  test("font-awesome package should be downloaded", () => {
    const isBootstrap = fs.existsSync(
      "./solution/create-app/first-app/node_modules/font-awesome"
    );
  
    expect(isBootstrap).toBeTruthy();
  });
});

describe('font-set', () => {
  test("font-awesome should be set in the styles array", () => {
    const styles = getAngularOption(
      "./solution/create-app/first-app/angular.json",
      "projects.first-app.architect.build.options.styles"
    );

    const isBootstrap = styles.find( (style: string) => style.includes('font-awesome.') );
  
    expect(isBootstrap).toBeTruthy();
  });
});
