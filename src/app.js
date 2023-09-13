// Entry point for project
import "./style.scss";
import { Room } from "./modules/roomConstructor";
import { Form } from "./modules/formConstructor";
import dataPreson from "../data/rooms.json";
import dataForms from "../data/consent-forms.json";
import { createRoomWrapper } from "./modules/createRoomWrapper";
import { renderRooms } from "./modules/renderRooms";
import { renderForm } from "./modules/rederForm";
import { removeAllChild } from "./modules/removeAllChild";

export default (function () {
  const app = document.getElementById("app");
  const appArea = document.createElement("div");
  appArea.classList.add("app-area");
  app.innerHTML = "<h1>Hello from Docapp</h1>";
  app.append(appArea);

  //create wrapper for room elements
  const roomWrapper = createRoomWrapper();
  appArea.appendChild(roomWrapper);

  //create close-botton
  const closeButton = document.createElement("botton");
  closeButton.classList.add("close-button");
  closeButton.textContent = "close";
  appArea.append(closeButton);

  //Render
  renderRooms(dataPreson, Room, roomWrapper);

  //Get all rooms
  const roomsArray = document.querySelectorAll(".room");

  //Adding for in room
  roomsArray.forEach((room) => {
    renderForm(dataForms, Form, room);
  });

  closeButton.addEventListener("click", (event) => {
    removeAllChild(roomWrapper);
    renderRooms(dataPreson, Room, roomWrapper);

    closeButton.style.display = "none";
  });
})();
