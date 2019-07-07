import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Picker,
	StyleSheet,
	Image
} from 'react-native'



export default class EditNote extends Component {
	constructor (props) {
		super(props)
		this.state = {
			category: [
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
			],
			title: this.props.navigation.state.params.title,
			note: this.props.navigation.state.params.note,
			selectedCategory: this.props.navigation.state.params.category_name,
		}
	}

	titleChange = (value) => {
		this.setState({
			title: value
		})
	}

	noteChange = (value) => {
		this.setState({
			note: value
		})
	}

	static navigationOptions = {
	    headerTitle: 'Edit Note',
	    headerTitleStyle: {
	    	textAlign: 'center',
	    	flexGrow: 1,
	    },
	    headerRight: (
	    	<TouchableOpacity style={{marginRight: 15}}>
	    		<Image 
	    			source={require('../assets/icons/checked.png')}
	    		/>
	    	</TouchableOpacity>
	    ),
	};

	render() {
		return(
			<View style={styles.ParentView}>
				<TextInput
					style={styles.title} 
					value={this.state.title}
					onChangeText={this.titleChange}
					placeholder="ADD TITLE ..." 
				/>
				<TextInput 
					style={styles.description}
					value={this.state.note}
					multiline= {true}
					numberOfLines={10}
					onChangeText={this.noteChange}
					placeholder="ADD DESCRIPTION ..." 
				/>
				<Picker
					style={styles.picker}
					selectedValue={this.state.selectedCategory}
					style={{height: 50, width: '100%'}}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({selectedCategory: itemValue})
					}>
					{
					  	this.state.category.map((item) => {
					  		return(
					  			<Picker.Item key={item.id} label={item.category_name} value={item.category_name} />
					  		)
					  	})
					}
				</Picker>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	ParentView: {
		margin: 30,
	},
	title:{
		fontSize: 20,
		textAlignVertical: 'top'
	},
	description: {
		fontSize: 20,
		textAlignVertical: 'top'
	},
	picker: {
		height: 50, 
		width: 200,
		top: 10,
		borderWidth: 1,
	},
})