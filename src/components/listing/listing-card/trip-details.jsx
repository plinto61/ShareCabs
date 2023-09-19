import { Image, View, Text, StyleSheet } from 'react-native';

export default function TripDetails() {
	const locationDetails = {
		dropLocation: 'BTM Layout, Bengaluru',
		dropTime: '4:30 PM, Today',
	};
	return (
		<View style={styles.root}>
			<View style={styles.row}>
				<Image
					style={{ width: 18, height: 21 }}
					source={require('@assets/location-to-icon.png')}
				/>
				<Text style={styles.text}>{locationDetails.dropLocation}</Text>
			</View>
			<View style={styles.row}>
				<Image
					style={{ width: 18, height: 18 }}
					source={require('@assets/clock-icon.png')}
				/>
				<Text style={styles.text}>{locationDetails.dropTime}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		display: 'flex',
		gap: 8,
		marginLeft: 10,
		justifyContent: 'center',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		gap: 8,
	},
	text: {
		fontWeight: '600',
	},
});
