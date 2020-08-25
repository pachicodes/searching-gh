const btn = document.getElementById("search-btn");
const res = document.getElementById("result-container");

btn.addEventListener("click", function () {
  res.innerHTML = "";
  const user = fetch("https://api.github.com/users/pachicodes").then((user) =>
    user.json()
  );

  user.then((user) => {
    const avatar = user.avatar_url;
    const nick = user.login;
    const description = user.bio;
    const userPage = user.html_url;

    const picture = document.createElement("img");
    picture.setAttribute("src", avatar);
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
