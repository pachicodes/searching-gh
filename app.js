const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
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

    const nickElement = document.createElement("h3");
    const userLogin = document.createTextNode(nick);
    res.append(picture);
    nickElement.append(userLogin);
    res.append(nickElement);
  });
});
