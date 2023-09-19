import { View } from 'react-native';
import ListingCard from '../components/listing/listing-card';
import TripDetails from '../components/listing/trip-details';

export function Listing({ navigation }) {
	return (
		<View style={{ backgroundColor: '#fff' }}>
			<TripDetails />
			<ListingCard />
		</View>
	);
}
