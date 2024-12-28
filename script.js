const containerEl = document.querySelector(".container");

for (let i = 0; i < 50; i++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");

    const colorEl = document.createElement("span");
    colorEl.classList.add("color-code");
    colorContainerEl.appendChild(colorEl);

    const copyBtn = document.createElement("button");
    copyBtn.innerText = "Copy";
    copyBtn.classList.add("copy-button");
    colorContainerEl.appendChild(copyBtn);

    containerEl.appendChild(colorContainerEl);
}

function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randNum = Math.floor(Math.random() * chars.length);
        colorCode += chars[randNum];
    }
    return colorCode;
}

function generateColor() {
    const mainColorContainers = document.querySelectorAll(".color-container");
    mainColorContainers.forEach((colorContainer) => {
        const mainColorCode = randomColor();
        const colorCodeEl = colorContainer.querySelector(".color-code");

        colorContainer.style.backgroundColor = "#" + mainColorCode;
        colorCodeEl.innerText = "#" + mainColorCode;
    });
}


generateColor();


const mainColorContainers = document.querySelectorAll(".color-container");
mainColorContainers.forEach((colorContainer) => {
    const copyButton = colorContainer.querySelector(".copy-button");
    const colorCodeEl = colorContainer.querySelector(".color-code");

    copyButton.addEventListener("click", () => {
        const colorCode = colorCodeEl.innerText;
        copyToClipboard(colorCode);
    });
});

function copyToClipboard(colorCode) {
    navigator.clipboard.writeText(colorCode)
        .then(() => {
            alert("Copied to Clipboard: " + colorCode);
        })
        .catch((error) => {
            console.log("Failed to Copy", error);
        });
}
