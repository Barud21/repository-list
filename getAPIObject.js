"use strict";

let repositoryList = [];

function parseAPIObject() {
  let responseObj = JSON.parse(this.responseText);
  for (let i = 0; i < responseObj.length; i++) {
    repositoryList.push(responseObj[i]);
  }
}

function getAPIObject(username) {
  let repoList = new XMLHttpRequest();
  repoList.onload = parseAPIObject;
  repoList.open("get", `https://api.github.com/users/${username}/repos`, true);
  repoList.send();
}

export { getAPIObject, repositoryList };
