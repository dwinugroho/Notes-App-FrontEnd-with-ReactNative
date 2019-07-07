import React, { Component } from 'react'
import {
	View, 
	Text, 
	StyleSheet,
	TextInput,
	FlatList,
	TouchableOpacity,
	Image,
	Modal,
	StatusBar,
	ActivityIndicator
} from 'react-native';

// Components
import NoteCard from '../components/card';
import Sorting from '../components/Sorting';


class Home extends Component {

	state = {
		notes: [
			{
			"id": 8,
			"title": "React Redux",
			"note": "React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.",
			"time": "2019-07-02T10:08:18.000Z",
			"category_name": "Wishlist"
			},
			{
			"id": 9,
			"title": "Redux Promise Middleware",
			"note": "Given a single action with an async payload, the middleware transforms the action to a separate pending action and a separate fulfilled/rejected action, representing the states of the async action.",
			"time": "2019-07-02T10:08:18.000Z",
			"category_name": "Wishlist"
			},
			{
			"id": 3,
			"title": "Note one",
			"note": "Hello this is note one, I wish Today is a good Day",
			"time": "2019-07-02T10:02:40.000Z",
			"category_name": "Personal"
			},
			{
			"id": 1,
			"title": "Goalsss",
			"note": "I must Study Hard tomorrow",
			"time": "2019-07-02T10:02:28.000Z",
			"category_name": "Work"
			},
			{
			"id": 6,
			"title": "React Native",
			"note": "The apps you are building with React Native aren't mobile web apps because React Native uses the same fundamental UI building blocks as regular iOS and Android apps. Instead of using Swift, Kotlin or Java, you are putting those building blocks together using JavaScript and React.",
			"time": "2019-07-02T10:01:37.000Z",
			"category_name": "Wishlist"
			},
			{
			"id": 7,
			"title": "Native Base",
			"note": "NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1.",
			"time": "2019-07-02T10:01:37.000Z",
			"category_name": "Learn"
			},
			{
			"id": 5,
			"title": "Redux",
			"note": "It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
			"time": "2019-07-02T10:00:03.000Z",
			"category_name": "Learn"
			}
		]
	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<Image
						style={{
							width: 35,
							height: 35,
							borderRadius: 100,
							marginLeft: 15,
						}} 
						source={require('../assets/profile-picture.jpeg')}
					/>
				</TouchableOpacity>
			),
			headerTitle: 'Notes-App',
		    headerTitleStyle: {
		    	textAlign: 'center',
		    	flexGrow: 1,
		    },
		    headerRight: (
		    	<Sorting />
		    ),
		} 
	};

	handleNavigation = () => {
		this.props.navigation.navigate('AddNote')
	}

	render () {
		return (
			<View style={styles.parentView}>
				<StatusBar backgroundColor="white" barStyle="dark-content" />
				<TextInput 
					style={styles.search}
					placeholder="search..."
				/>
				<FlatList 
					style={styles.flatList}
					data={this.state.notes}
					numColumns={2}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({item}) => {
						return(
							<NoteCard item={item} navigation={this.props.navigation} />
						)
					}}
				/>
				<TouchableOpacity 
					style={styles.actionButton}
					onPress={this.handleNavigation}
				>
					<Text style={styles.actionButtonLogo}>+</Text>
				</TouchableOpacity>
			</View>
		)
	}
}


export default Home;



const styles = StyleSheet.create({
	parentView: {
		backgroundColor: '#FFFFFF',
		flex: 1,
		position: 'relative'
	},
	search: {
		width: '90%',
		alignSelf: 'center',
		marginTop: 30,
		backgroundColor: 'white',
		elevation: 4,
		borderRadius: 50,
		paddingHorizontal: 25,
		fontSize: 20,
	},
	flatList: {
		paddingHorizontal: 10,
		marginTop: 20,
	},
	actionButton: {
		width: 70,
		height: 70,
		backgroundColor: 'white',
		borderRadius: 100, 
		position: 'absolute',
		elevation: 10,
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 30,
		right: 30
	},
	actionButtonLogo: {
		fontSize: 30,
		fontWeight:'bold'
	},
	isLoading: {
		marginTop: 100,
	},
	isError: {
		alignSelf: 'center',
		fontSize: 20,
		marginTop: 100,
	}
})