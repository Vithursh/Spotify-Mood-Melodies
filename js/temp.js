import { changeWrapColor } from './home.js';
import { newMusicCard } from './card.js';

let mood = "Calm";

const APIController = (function () {

    // Now you can use the variables in .env    
    const clientId = "2dc57514d3674305b7e6273557134c06";
    const clientSecret = "f4b2719aa19b4083a8ecb00db7c2b976";

    // private methods
    const _getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    // Retrieves the recommendations from Spotify 
    const _getRecommendations = async (token, genre) => {
        const url = `https://api.spotify.com/v1/recommendations?seed_genres=${genre}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        }).catch(e => console.log("An error has occurred."));

        const data = await response.json();
        return data.tracks;
    }

    return {
        getToken: _getToken,
        getRecommendations: _getRecommendations
    };
})();

// UI Module
const UIController = (function () {
    // Get the user's mood from the input field
    const getMood = function (strMood) {
        // Implement this function based on your application's logic
        if (strMood == null) {
            console.log("(getMood) - 'mood' is empty");
        } else {
            console.log("(getMood) - The mood the user picked is", strMood);
        }

        mood = strMood;
    };

    // Change the wrapper color
    const changeWrapColor = function () {
        // Implement this function based on your application's logic
    };

    const addGenres = (track) => {
        let genreList = []
        if (track.artists[0].genres != undefined) {
            for (let i = 0; i < track.artists[0].genres.length || i < 5; i++) {
                genreList.push(track.artists[0].genres[i])
            }
        }
        return genreList;
    }

    // Create the music card
    const createMusicCard = function (track) {
        //console.log("The track is: ", track);
        // Implement this function based on your application's logic
        //console.log(`Artist: ${track.artists[0].name}, Song: ${track.name}, Genre: ${track.genres[0]}`);
        console.log(`Artist: ${track.artists[0].name}, Song: ${track.name} \n`);
        console.log(track.external_urls.spotify);
        newMusicCard(track.album.images[2].url, track.name, track.artists[0].name, addGenres(track), track.external_urls.spotify);
    };

    return {
        getMood,
        //mapMoodToGenre,
        changeWrapColor,
        createMusicCard
    };
})();

export default UIController;

// Ties all of the functions together
const APPController = (function (UICtrl, APICtrl) {
    // Map the mood to a genre
    const mapMoodToGenre = function (mood) {
        const moodGenreMap = {
            'Happy': 'pop',
            'Sad': 'blues',
            'Surprised': 'experimental',
            'Calm': 'ambient',
            'Nervous': 'techno',
            'Focused': 'classical'
        };

        if (moodGenreMap[mood] == null) {
            console.log("(mapMoodToGenre) - 'mood' is empty");
        } else {
            console.log("(mapMoodToGenre) - The mood that corrilated with is", moodGenreMap[mood]);
        }

        console.log('\n');

        return moodGenreMap[mood];
    };

    // Get a reference to the submit button
    const submitButton = document.querySelector('#submit');
    // Get a reference to the card group
    const cardGroup = document.getElementsByClassName("cardgroup")[0];

    // Event listener for the submit button
    submitButton.addEventListener('click', async function (event) {
        console.log("SUBMIT button was clicked!!!");

        // Prevent the form from being submitted
        event.preventDefault();

        // Change the wrapper color
        UICtrl.changeWrapColor();

        // Get the access token
        const token = await APICtrl.getToken();

        //console.log(UICtrl.getMood());
        console.log("Final check, the mood is: ", mood);
        // Get the recommended tracks
        const genre = mapMoodToGenre(mood);
        const tracks = await APICtrl.getRecommendations(token, genre);

        // reset contents of group
        cardGroup.innerHTML = ""

        if (tracks == null | undefined || tracks.length == 0) {
            const errorMsg = document.createElement("p");
            errorMsg.className = "title"
            errorMsg.textContent = "No songs found!"
            document.getElementsByClassName('cardgroup')[0].appendChild(errorMsg);
        }
        // Display the recommended tracks
        tracks.forEach(track => {
            UICtrl.createMusicCard(track);
        });
    });

    return {
        init() {
            console.log('App is starting...');
            // Add event listener to the form
            document.getElementById('moodForm').addEventListener('submit', function (event) {
                // Prevent the form from being submitted
                event.preventDefault();
            });
        }
    };
})(UIController, APIController);

// Starts the entire module
APPController.init();