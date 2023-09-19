import { useRef, useState } from 'react';
import {
	TouchableWithoutFeedback,
	View,
	Text,
	Image,
	Animated,
	Easing,
	LayoutAnimation,
	Platform,
	UIManager,
} from 'react-native';

if (
	Platform.OS === 'android' &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Footer({ hideMain, setHideMain }) {
	const rotateAnim = useRef(new Animated.Value(1)).current;
	const toggleView = () => {
		if (hideMain) {
			Animated.timing(rotateAnim, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
				easing: Easing.ease,
			}).start();
		} else {
			Animated.timing(rotateAnim, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true,
				easing: Easing.ease,
			}).start();
		}
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setHideMain(!hideMain);
	};
	const arrowRotationValue = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '180deg'],
	});
	return (
		<TouchableWithoutFeedback onPress={toggleView}>
			<View
				style={{
					flexDirection: 'row',
					gap: 8,
					alignItems: 'flex-end',
				}}
			>
				<Text>{hideMain ? 'View more' : 'View less'}</Text>
				<Animated.Image
					style={{
						width: 14,
						resizeMode: 'contain',
						transform: [
							{
								rotate: arrowRotationValue,
							},
						],
					}}
					source={require('@assets/chevron-up.png')}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}
