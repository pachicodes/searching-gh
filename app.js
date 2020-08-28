const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("result-container");
const resultsNumber = document.getElementById("result-number");

searchButton.addEventListener("click", function () {
  resultsContainer.innerHTML = "";
  resultsNumber.innerHTML = "";

  const userSearch = document.getElementById("enter-user");
  const wantedUser = userSearch.value;

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");

  let pageNumber = 1;

  previousButton.addEventListener("click", function () {
    pageNumber--;
    console.log(pageNumber);
    resultsContainer.innerHTML = "";
    resultsNumber.innerHTML = "";
    searching(wantedUser, pageNumber);
  });

  nextButton.addEventListener("click", function () {
    pageNumber++;
    resultsContainer.innerHTML = "";
    resultsNumber.innerHTML = "";
    searching(wantedUser, pageNumber);
  });

  function searching(wantedUser, pageNumber) {
    fetch(
      `https://api.github.com/search/users?q=${wantedUser}&per_page=10&page=${pageNumber}`
    )
      .then((user) => user.json())
      .then((user) => {
        const totalCount = user.total_count;
        const countElement = document.createElement("h4");
        const countResult = document.createTextNode(
          `We found ${totalCount} users in this search`
        );

        countElement.append(countResult);
        resultsNumber.append(countElement);

        const usersList = user.items;
        usersList.map((item) => {
          const avatar = item.avatar_url;
          const nick = item.login;
          const userPage = item.html_url;

          const picture = document.createElement("img");
          picture.setAttribute("src", avatar);
          picture.setAttribute("href", userPage);
          picture.setAttribute("class", "avatar");

          const nickElement = document.createElement("h3");
          const userLogin = document.createTextNode(nick);
          nickElement.append(userLogin);

          const card = document.createElement("div");

          card.setAttribute("class", "Box Box-row--hover-blue mb-3 p-2");
          card.append(picture);
          card.append(nickElement);

          const pageLink = document.createElement("a");
          pageLink.href = userPage;
          pageLink.target = "blank";
          pageLink.append(card);

          resultsContainer.append(pageLink);
        });
      });
  }
  searching(wantedUser, pageNumber);
});
