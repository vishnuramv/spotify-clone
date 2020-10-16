import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './Components/DataLayer';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useDataLayerValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type : "SET_TOKEN",
				token : _token
			});
			spotify.setAccessToken(_token);
			spotify.getMe().then(user => {
				dispatch({
					type : "SET_USER",
					user
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type : "SET_PLAYLISTS",
					playlists : playlists,
				});
			});
			spotify.getPlaylist('37i9dQZEVXcFE47t2JfBld').then(response => {
				dispatch({
					type : "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				})
			});
		}
	}, []);

	return (
		<div className="app">
			{
				token ? ( <Player spotify={spotify} /> ) : (<Login />)
			}
			
		</div>
	);
}

export default App;
