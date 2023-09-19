import {
	Image,
	View,
	TouchableWithoutFeedback,
	Text,
	StyleSheet,
} from 'react-native';

export default function Communications() {
	const handleCallButtonPress = () => {
		// open dial pad with number
	};
	return (
		<View style={styles.root}>
			<TouchableWithoutFeedback>
				<Image
					style={{ width: 44, height: 44 }}
					source={require('../../../../assets/phone-circle-icon.png')}
				/>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback>
				<View style={styles.messageView}>
					<Text style={{ color: '#78858F' }}>Message</Text>
					<Image
						style={{ width: 23, height: 23 }}
						source={require('../../../../assets/message-icon.png')}
					/>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	messageView: {
		height: 44,
		borderRadius: 22,
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#F3F3F3',
		justifyContent: 'space-between',
		paddingHorizontal: 18,
	},
});
