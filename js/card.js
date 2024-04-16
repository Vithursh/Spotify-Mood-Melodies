let count = 0;
let tagGroup = [];

function showByTagFilter() {
    const cardGroup = document.getElementsByClassName("cardgroup")[0];
    const cards = cardGroup.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        let tagExists = false
        let tagTexts = []
        const tagList = cards[i].getElementsByClassName("tag")
        for (let j = 0; j < tagList.length; j++) {
            tagTexts.push(tagList[j].textContent)
            tagList[j].style.backgroundColor = "rgba(71, 48, 152, 0.37)"
        }
        for (let k = 0; k < tagGroup.length; k++) {
            if (tagTexts.includes(tagGroup[k])) {
                let index = tagTexts.indexOf(tagGroup[k])
                tagExists = true
                tagList[index].style.backgroundColor = "black"
            }
            else {
                tagExists = false
            }
        }
        if (tagGroup.length == 0 || tagExists) {
            cards[i].style.display = "flex";
        }
        else {
            cards[i].style.display = "none"
        }
    }
}

function filterTag(tag) {
    if (tagGroup.includes(tag)) {
        let index = tagGroup.indexOf(tag);
        tagGroup.splice(index, 1);
    }
    else {
        tagGroup.push(tag)
    }
}

function colorByMood(card) {
    let mood = document.getElementById("moods").value
    let colorDict =
    {
        'Happy': 'yellow',
        'Sad': 'lightskyblue',
        'Surprised': 'lightsalmon',
        'Calm': 'lightgreen',
        'Nervous': 'aquamarine',
        'Focused': 'lightpink'
    }
    card.style.backgroundColor = colorDict[mood]
}

export function newMusicCard(img, song, artist, tags, link) {
    count++;

    const cardGroup = document.getElementsByClassName("cardgroup")[0];

    for (let i = 1; i <= count; i *= 2) {
        if (count == i) {
            cardGroup.innerHTML = '';
        }
    }

    let card = document.createElement("div");
    card.className = "card";
    colorByMood(card)
    let cardImage = document.createElement("img");
    cardImage.className = "cardimage"
    cardImage.src = img;
    let cardInfo = document.createElement("div");
    cardInfo.className = "info"
    let songName = document.createElement("p");
    songName.className = "name";
    songName.textContent = song;
    let artistName = document.createElement("p");
    artistName.className = "desc";
    artistName.textContent = artist
    let tagList = document.createElement("div");
    tagList.className = "taglist";
    let playButton = document.createElement("div");
    playButton.className = "playbutton"
    let playIcon = document.createElement("div");
    playIcon.className = "playicon"
    let playText = document.createElement("div");
    playText.className = "playtext";
    playText.textContent = "PLAY";

    playButton.appendChild(playIcon)
    playButton.appendChild(playText)

    // Add an event listener to the play button
    playButton.addEventListener('click', function () {
        // Open the Spotify URL in a new tab
        window.open(link, '_blank');
    });

    for (let i = 0; i < tags.length; i++) {
        let tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = tags[i];
        tag.addEventListener("click", () => {
            filterTag(tags[i])
            showByTagFilter()
        })
        tagList.appendChild(tag);
    }

    cardInfo.appendChild(songName)
    cardInfo.appendChild(artistName)
    cardInfo.appendChild(tagList)

    card.appendChild(cardImage);
    card.appendChild(cardInfo);
    card.appendChild(playButton);

    cardGroup.appendChild(card);
}

function testCard() {
    const img = ""
    const songName = "A Song"
    const artistName = "An Artist"
    const tags = ["1", "2", "3"]
    //newMusicCard(img, songName, artistName, tags);
}

document.getElementById("submit").addEventListener("click", testCard);