import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	StyleSheet,
	FlatList,
	Modal,
	StatusBar,
	TextInput
} from 'react-native';

// Components
import CategoryList from '../components/CategoryList'



class CustomeDrawer extends Component {
	state = {
		modalVisible: false,
		categoryList: [
			{
				id: 1,
				category_name: 'Personal',
				image_url: 'https://img.icons8.com/ios-glyphs/90/000000/hand-with-pen.png'
			},
			{
				id: 2,
				category_name: 'Wishlist',
				image_url: 'https://img.icons8.com/ios/90/000000/wish-list-filled.png'
			},
			{
				id: 3,
				category_name: 'Learn',
				image_url: 'https://img.icons8.com/ios-glyphs/90/000000/machine-learning.png'
			},
			{
				id: 4,
				category_name: 'Work',
				image_url: 'https://img.icons8.com/ios-glyphs/90/000000/check.png'
			},
		]
	}

	setModalVisible(visible) {
	    this.setState({modalVisible: visible});
	}

	render () {
		return (
			<ScrollView>
				<Image 
					style={styles.profilePicture}
					source={require('../assets/profile-picture.jpeg')}
				/>
				<FlatList 
					data={this.state.categoryList}
					style={styles.flatList}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({item}) => {
						return(
							<CategoryList item={item} />
						)
					}}
				/>
				<TouchableOpacity onPress={() => {this.setModalVisible(true)}} style={styles.addCategory}>
					<Image 
					source={require('../assets/icons/plus.png')}
					/>
					<Text style={styles.textAdd}>Add Category</Text>
				</TouchableOpacity>

				<Modal
		          animationType="fade"
		          transparent={true}
		          visible={this.state.modalVisible}
		          onRequestClose={() => {
		            this.setModalVisible(!this.state.modalVisible);
		          }}>
		          <StatusBar backgroundColor="black" barStyle="dark-content" />
		          	<View style={styles.popUp}>
		              <TextInput style={styles.categoryInput} placeholder="Category Name" />
		              <TextInput style={styles.categoryInput} placeholder="ImageUrl" />
		              <View style={styles.button}>
		              		<TouchableOpacity
				                onPress={() => {
				                  this.setModalVisible(!this.state.modalVisible);
				                }}>
				                <Text style={styles.add}>Add</Text>
			              	</TouchableOpacity>
		              		<TouchableOpacity
				                onPress={() => {
				                  this.setModalVisible(!this.state.modalVisible);
				                }}>
				                <Text style={styles.close}>close</Text>
			              	</TouchableOpacity>
		              </View>
		            </View>
		        </Modal>

			</ScrollView>
		)
	}
}

export default CustomeDrawer;

const styles = StyleSheet.create({
	profilePicture: {
		width: 150,
		height: 150,
		alignSelf: 'center',
		marginTop: 20,
		borderRadius: 100,
	},
	flatList: {
		marginTop: 40,
	},
	addCategory: {
		paddingLeft: 40,
		marginVertical: 15,
		flexDirection: 'row'
	},
	textAdd: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		left: 20,
		bottom: 2
	},
	popUp: {
		backgroundColor: 'white',
		width: '70%',
		alignSelf: 'center',
		elevation: 20,
		borderRadius: 5,
		paddingVertical: 15,
		top: '30%',
	},
	button: {
		flexDirection: 'row', 
		alignSelf: 'flex-end',
		marginTop: 20,
		right: 20,
	},
	close: {
		fontSize: 20,
		color: 'grey',
		fontWeight:'bold',
		paddingHorizontal: 10
	},
	add: {
		fontSize: 20,
		color: 'black',
		fontWeight:'bold',
		paddingHorizontal: 10
	},
	categoryInput: {
		borderBottomWidth: 2,
		borderBottomColor: '#00D4AA',
		marginHorizontal: 40,
		fontSize: 17,
		padding: 15,
	}
})