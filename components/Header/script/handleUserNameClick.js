export function handleUserNameClick(shadowRoot, svgName) {
  svgName.addEventListener("click", (event) => {
    event.stopPropagation();

    const currentName = localStorage.getItem("username");
    const username = window.prompt("Como você se chama?", currentName || "");

    if (username !== null && username.trim() !== "") {
      localStorage.setItem("username", JSON.stringify(username));
      const helloUser = shadowRoot.querySelector(".hello-user p:nth-child(2)");
      if (helloUser) helloUser.textContent = username;
    }
  });
}
