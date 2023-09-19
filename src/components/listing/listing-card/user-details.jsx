import { Image, View, Text, StyleSheet } from 'react-native';

export default function UserDetails() {
	const userDetails = {
		name: 'Harsh Nagda',
		profession: 'Software developer',
		image: '',
	};
	return (
		<View style={styles.root}>
			<Image
				style={styles.image}
				source={require('../../../../assets/dummy-user.png')}
			/>
			<View>
				<Text style={styles.userName}>{userDetails.name}</Text>
				<Text>{userDetails.profession}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 15,
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 25,
	},
	userName: {
		fontSize: 18,
		fontWeight: '500',
	},
});
