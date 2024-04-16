import UIController from './temp.js';

const moods = document.getElementById("moods");

export function changeWrapColor() {
    const wrapper = document.getElementById("wrapper");
    const menu = document.getElementById("menu");

    switch (moods.value) {
        case "Happy":
            wrapper.style.backgroundColor = "yellow";
            menu.style.backgroundColor = "gold"
            UIController.getMood("Happy");
            break;

        case "Sad":
            wrapper.style.backgroundColor = "lightskyblue";
            menu.style.backgroundColor = "deepskyblue"
            UIController.getMood("Sad");
            break;
        case "Surprised":
            wrapper.style.backgroundColor = "lightsalmon";
            menu.style.backgroundColor = "darksalmon"
            UIController.getMood("Surprised");
            break;
        case "Calm":
            wrapper.style.backgroundColor = "lightgreen";
            menu.style.backgroundColor = "limegreen";
            UIController.getMood("Calm");
            break;
        case "Nervous":
            wrapper.style.backgroundColor = "aquamarine";
            menu.style.backgroundColor = "mediumaquamarine";
            UIController.getMood("Nervous");
            break;
        case "Focused":
            wrapper.style.backgroundColor = "lightpink"
            menu.style.backgroundColor = "lightcoral"
            UIController.getMood("Focused");
            break
    }
}

moods.addEventListener("change", changeWrapColor);