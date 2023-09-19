import { View, StyleSheet } from 'react-native';
import UserDetails from './user-details';
import TripDetails from './trip-details';
import Communications from './communications';

export default function ListingCard() {
	return (
		<View style={styles.root}>
			<UserDetails />
			<TripDetails />
			<Communications />
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
