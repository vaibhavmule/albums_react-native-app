import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

	state = { albums: []};

	componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
	}

	renderAlbums() {
		return this.state.albums.map(albums => <Text>{albums.title}</Text>);
	}

	render() {
		return (
			<View>
				{this.renderAlbums()}
			</View>
		)
	}

}

export default AlbumList;