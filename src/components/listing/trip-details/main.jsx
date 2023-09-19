import { View, Text, Image, StyleSheet } from 'react-native';

export default function Main({ hideMain }) {
	if (hideMain) {
		return null;
	}
	return (
		<View style={styles.root}>
			<View style={styles.row}>
				<Image
					style={{ width: 22, height: 22, resizeMode: 'contain' }}
					source={require('@assets/location-from-icon.png')}
				/>
				<View>
					<Text>From</Text>
					<Text style={styles.highlight}>Bengaluru Airport</Text>
				</View>
			</View>
			<View style={styles.row}>
				<Image
					style={{ width: 22, height: 22, resizeMode: 'contain' }}
					source={require('@assets/location-to-icon.png')}
				/>
				<View>
					<Text>To</Text>
					<Text style={styles.highlight}>BTM Layout, Bengaluru</Text>
				</View>
			</View>
			<View style={styles.row}>
				<Image
					style={{ width: 22, height: 22, resizeMode: 'contain' }}
					source={require('@assets/calendar-icon.png')}
				/>
				<View>
					<Text style={styles.highlight}>4:30PM, Today</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		gap: 16,
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	highlight: {
		fontSize: 16,
		fontWeight: '600',
	},
});
