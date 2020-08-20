import * as Pixi from "pixi.js";
import "@/style/index.scss";

const htmlContainer = document.createElement("div");
htmlContainer.classList.add("app-container");
htmlContainer.style.display = "flex";
htmlContainer.style.alignItems = "center";
htmlContainer.style.justifyContent = "center";
document.body.appendChild(htmlContainer);

const app = new Pixi.Application({
  width: 640,
  height: 480,
  backgroundColor: 0xE5E5E5
});

htmlContainer.appendChild(app.view);

export {}