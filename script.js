"use strict";

const btnSearch = document.querySelector(".btn");

async function fetchAPIObject(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        method: "GET",
      }
    );
    const APIObject = await response.json();
    return APIObject;
  } catch (error) {
    console.log(error);
  }
}

function mapObjectToDTO(externalDTO) {
  const repositoryList = [];
  for (let i = 0; i < externalDTO.length; i++) {
    const repo = {
      name: externalDTO[i].name,
      stars: externalDTO[i].stargazers_count,
    };
    repositoryList.push(repo);
  }
  return repositoryList;
}

function sortArray(array) {
  array.sort(function (a, b) {
    return b.stars - a.stars;
  });
}

function displayList(array) {
  let list = document.getElementById("repository-list");

  array.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - ${item.stars} stars`;
    list.appendChild(li);
  });
}

function clearList() {
  let list = document.getElementById("repository-list");
  list.innerHTML = "";
}

btnSearch.addEventListener("click", () => loadData());

async function loadData() {
  const user = document.querySelector(".form-input").value;
  const externalAPIObject = await fetchAPIObject(user);

  const repositoryList = mapObjectToDTO(externalAPIObject);
  sortArray(repositoryList);
  clearList();
  displayList(repositoryList);
}
