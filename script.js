"use strict";

function printRepoList() {
  let responseObj = JSON.parse(this.responseText);
  console.log(responseObj);
  for (let i = 0; i < responseObj.length; i++) {
    console.log(
      `${responseObj[i].name} has ${responseObj[i].stargazers_count} stars`
    );
  }
}

let repoList = new XMLHttpRequest();
const username = "allegro";
repoList.onload = printRepoList;
repoList.open("get", `https://api.github.com/users/${username}/repos`, true);
repoList.send();
