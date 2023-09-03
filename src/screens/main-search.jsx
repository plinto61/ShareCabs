import { Button, View } from 'react-native';
import { CurrentLocationInput } from '../components/main-search/current-location-input';
import { DestinationInput } from '../components/main-search/destination-input';
import { OtherDetailsInput } from '../components/main-search/other-details-input';

export function MainSearch({ navigation }) {
	const handleSearchSubmission = () => {
		navigation.navigate('Listing');
	};

	return (
		<View>
			<CurrentLocationInput />
			<DestinationInput />
			<OtherDetailsInput />
			<Button title="Find co-traveler" onPress={handleSearchSubmission} />
		</View>
	);
}
