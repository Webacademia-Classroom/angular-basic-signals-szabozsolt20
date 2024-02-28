const fs = require('fs');
const _ = require("lodash");

export const getFileContent = (path: string): string => {
  const fileContent = fs.readFileSync(path, "utf8");
  return fileContent;
};

export const getJson = (path: string): { [k: string]: any } => {
  let content = getFileContent(path);
  return JSON.parse(content);
};

export const getAngularOption = (path: string, key: string): any => {
  const options = getJson(path);
  return _.get(options, key);
};
