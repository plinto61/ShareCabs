import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
	return (
		<View>
			<Text style={styles.salutation}>Hi Harsh!</Text>
			<Text>We have found co travelers for</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	salutation: {
		fontSize: 16,
		fontWeight: '600',
	},
});
