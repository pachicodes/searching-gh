const btn = document.getElementById("search-btn");
const res = document.getElementById("result-container");
const resNumber = document.getElementById("result-number");

btn.addEventListener("click", function () {
  res.innerHTML = "";
  resNumber.innerHTML = "";

  const userSearch = document.getElementById("enter-user");
  const wantedUser = userSearch.value;

  const user = fetch(
    `https://api.github.com/search/users?q=${wantedUser}+repos:%3E0`
  ).then((user) => user.json());

  user.then((user) => {
    const totalCount = user.total_count;
    const countElement = document.createElement("h4");
    const countResult = document.createTextNode(
      `We found ${totalCount} users in this search`
    );

    countElement.append(countResult);
    resNumber.append(countElement);
    console.log(resNumber.value);

    const usersList = user.items;
    console.log(usersList);

    usersList.map((item) => {
      const avatar = item.avatar_url;
      const nick = item.login;
      const userPage = item.html_url;

      const picture = document.createElement("img");
      picture.setAttribute("src", avatar);
      picture.setAttribute("href", userPage);
      picture.setAttribute("class", "avatar");

      const nickElement = document.createElement("a");
      const userLogin = document.createTextNode(nick);
      nickElement.setAttribute = ("href", userPage);
      nickElement.append(userLogin);

      const card = document.createElement("div");

      card.setAttribute("class", "Box Box-row--hover-blue mb-3 p-2");
      card.append(picture);
      card.append(nickElement);

      res.append(card);
    });
  });
});
