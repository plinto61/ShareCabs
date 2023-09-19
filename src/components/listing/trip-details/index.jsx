import { StyleSheet, View } from 'react-native';
import Footer from './footer';
import Header from './header';
import Main from './main';
import { useState } from 'react';

export default function TripDetails() {
	const [hideMain, setHideMain] = useState(true);
	return (
		<View style={styles.root}>
			<Header />
			<Main hideMain={hideMain} />
			<Footer hideMain={hideMain} setHideMain={setHideMain} />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		display: 'flex',
		gap: 16,
		margin: 10,
		padding: 20,
		borderRadius: 18,
		backgroundColor: '#fff',
		elevation: 10,
		shadowColor: '#444',
		shadowOpacity: 0.2,
		shadowRadius: 5,
		shadowOffset: {
			height: 5,
		},
	},
});
