fetch("data.json")
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    const list = document.getElementById("extensions-list");
    data.forEach(pkg => {
      // Outer container
      const extensionDiv = document.createElement("div");
      extensionDiv.classList.add("extension-item");

      // Info container: img, h3, p
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("extension-info");

      const imageElement = document.createElement("img");
      imageElement.src = pkg.logo;
      infoDiv.appendChild(imageElement);

      const textDiv = document.createElement("div");
      textDiv.classList.add("extension-text");

      const nameElement = document.createElement("h3");
      nameElement.textContent = pkg.name;
      textDiv.appendChild(nameElement);

      const subtitleElement = document.createElement("p");
      subtitleElement.textContent = pkg.description;
      textDiv.appendChild(subtitleElement);

      infoDiv.appendChild(textDiv);

      // Checkbox container
      const checkboxDiv = document.createElement("div");
      checkboxDiv.classList.add("extension-checkbox");

      const buttonElement = document.createElement("button");
      buttonElement.textContent = "Remove";
      checkboxDiv.appendChild(buttonElement);

      const label = document.createElement("label");
      label.classList.add("switch");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = pkg.isActive;

      const span = document.createElement("span");
      span.classList.add("slider", "round");

      label.appendChild(input);
      label.appendChild(span);
      checkboxDiv.appendChild(label);

      // Append child divs to the main extension div
      extensionDiv.appendChild(infoDiv);
      extensionDiv.appendChild(checkboxDiv);

      list.appendChild(extensionDiv);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
