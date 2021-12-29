"use strict";

const btnSearch = document.querySelector(".btn");
const listView = document.querySelector(".repo-list");
const listLabel = document.querySelector(".list-label");
const textInput = document.querySelector(".form-input");
const noRepository = document.querySelector(".no-repository");

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
      url: externalDTO[i].html_url,
    };
    repositoryList.push(repo);
  }
  return repositoryList;
}

function sortRepositoryList(array) {
  array.sort(function (a, b) {
    return b.stars - a.stars;
  });
}

function displayList(array) {
  let list = document.getElementById("repository-list");

  array.forEach((item) => {
    let li = document.createElement("li");
    list.appendChild(li);
    let a = document.createElement("a");
    a.href = item.url;
    a.textContent = `${item.name} - ${item.stars} stars`;
    li.appendChild(a);
  });
}

function clearDisplayedList() {
  let list = document.getElementById("repository-list");
  list.innerHTML = "";
}

async function loadData() {
  const user = document.querySelector(".form-input").value;
  const externalAPIObject = await fetchAPIObject(user);
  const repositoryList = mapObjectToDTO(externalAPIObject);

  if (repositoryList.length > 0) {
    listView.classList.remove("hidden");
    listLabel.classList.remove("hidden");
    noRepository.classList.add("hidden");
    sortRepositoryList(repositoryList);
    clearDisplayedList();
    displayList(repositoryList);
  } else {
    listView.classList.add("hidden");
    listLabel.classList.add("hidden");
    noRepository.classList.remove("hidden");
    console.log("There is no such repository, try another username");
  }
}

btnSearch.addEventListener("click", () => loadData());
textInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("searchBtn").click();
  }
});
