![](https://github.com/Vithursh/Spotify-Mood-Melodies/blob/1547f69a2c2277e2313423dd2cad924da5acb19c/Mood%20Melodies%20Image.png)

---

## Description
Spotify Mood Melodies is a web application that generates personalized Spotify playlists based on a user's current mood. By connecting to the Spotify API and using simple mood input (text selection or slider), the app curates a sequence of tracks that match the chosen emotional tone, energy, and tempo to create a cohesive listening experience.

---

## Inspiration

---
This project was inspired by how powerful music can be at shaping and reflecting mood. I wanted a lightweight, intuitive app that lets users instantly generate playlists tailored to how they feel — whether they need focus, relaxation, motivation, or nostalgia — using Spotify's vast catalog and audio features.

---

## Table of Contents

- Components
- Features
- Installation

---

## Components

- #### Frontend (web client)
  - Built with a modern JavaScript framework (React, Vue, or similar)
  - UI to select or describe mood (e.g., mood selector, sliders for energy/tempo)
  - Spotify OAuth sign-in to access user’s account and to create/save playlists
  - Playlist preview and playback controls (via Spotify Web Playback SDK or embedded player)

- #### Backend (API / integration layer)
  - Handles Spotify OAuth token exchange and refresh
  - Calls Spotify Web API to search for tracks, get audio features, and create playlists
  - Implements playlist generation logic that filters and sorts tracks to match mood parameters
  - Rate-limits and caches requests as needed

- #### Recommendation / Matching Engine
  - Maps mood inputs to Spotify audio features (valence, energy, tempo, danceability, etc.)
  - Uses simple heuristics or a lightweight model to score and rank candidate tracks
  - Optionally supports user preferences and history to refine suggestions

---

## Features

---
- Sign in with Spotify (OAuth)
- Mood-based playlist generation (e.g., Happy, Chill, Energetic, Melancholic)
- Uses Spotify audio features (valence, energy, tempo) to match mood
- Create and save playlists directly to the user’s Spotify account
- Preview tracks and view playlist metadata
- Responsive design for desktop and mobile

---

## Installation

---
#### Running locally

##### Prerequisites
- Node.js >= 16 and npm (or yarn)
- A Spotify Developer account and a registered application (Client ID, Client Secret, Redirect URI)
- (Optional) A backend runtime such as Node.js

##### 1. Clone the repository:
```bash
git clone https://github.com/Vithursh/Spotify-Mood-Melodies.git
```

##### 2. Navigate to the project directory:
```bash
cd Spotify-Mood-Melodies
```

##### 3. Frontend
```bash
# Install dependencies
npm install express
npm install -S spotify-web-api-js
# Run JavaScript code using Live Server in VScode
```
