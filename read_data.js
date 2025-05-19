fetch("data.json")
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    const list = document.getElementById("extensions-list");
    data.forEach(pkg => {
      //Div
      const extensionDiv = document.createElement("div");
      extensionDiv.classList.add("extension-item");
      
      //Extension image
      const imageElement = document.createElement("img");
      imageElement.src = pkg.logo;
      extensionDiv.appendChild(imageElement);

      //Extension name
      const nameElement = document.createElement("h3");
      nameElement.textContent = pkg.name;
      extensionDiv.appendChild(nameElement);

      //Extension Subtitle
      const subtitleElement = document.createElement("p");
      subtitleElement.textContent = pkg.description;
      extensionDiv.appendChild(subtitleElement);

      //Extension Subtitle
      const checkBoxElement = document.createElement("input");
      checkBoxElement.type = "checkbox";
      checkBoxElement.checked = pkg.isActive;
      extensionDiv.appendChild(checkBoxElement);

      list.appendChild(extensionDiv);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));