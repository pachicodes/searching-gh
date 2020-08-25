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
    //console.log(user);

    const totalCount = user.total_count;
    const countElement = document.createElement("h4");
    const countResult = document.createTextNode(
      `We found ${totalCount} users in this search`
    );

    countElement.append(countResult);
    resNumber.append(countElement);
    console.log(resNumber.value);

    const avatar = user.avatar_url;
    const nick = user.login;
    const description = user.bio;
    const userPage = user.html_url;

    const picture = document.createElement("img");
    picture.setAttribute("src", avatar);
    picture.setAttribute("href", userPage);
    picture.setAttribute("class", "avatar");

    const nickElement = document.createElement("h3");
    const userLogin = document.createTextNode(nick);

    const descriptionElement = document.createElement("p");
    const userBio = document.createTextNode(description);

    res.append(picture);
    nickElement.append(userLogin);
    res.append(nickElement);
    descriptionElement.append(userBio);
    res.append(descriptionElement);
  });
});
