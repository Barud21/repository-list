"use strict";

let repositoryList = [];

function parseAPIObject() {
  const responseObj = JSON.parse(this.responseText);
  console.log(responseObj);
  for (let i = 0; i < responseObj.length; i++) {
    const repo = {
      name: responseObj[i].name,
      stars: responseObj[i].stargazers_count,
    };
    repositoryList.push(repo);
  }
  return responseObj;
}

function getAPIObject(username) {
  let repoList = new XMLHttpRequest();
  repoList.open("get", `https://api.github.com/users/${username}/repos`, true);
  repoList.onload = parseAPIObject;
  repoList.send();
}

function mapObjectToDTO(externalDTO) {
  for (let i = 0; i < externalDTO.length; i++) {
    internalDTO.push(externalDTO[i]);
  }
}

const getObject = getAPIObject("allegro");
console.log("API object:");
console.log(repositoryList);
console.log(repositoryList[2]); // returns undefined
const internalDTO = mapObjectToDTO(repositoryList);
console.log("internal DTO:");
console.log(internalDTO);
