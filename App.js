import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainSearch } from './src/screens/main-search';
import { Listing } from './src/screens/listing';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Listing" component={Listing} />
				<Stack.Screen name="MainSearch" component={MainSearch} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
