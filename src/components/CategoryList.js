import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native'


export default class CategoryList extends Component {
	render() {
		return(
			<View style={styles.parentView}>
				<Image 
					style={{width: 25, height: 25}}
					source={{uri: this.props.item.image_url}}
				/>
				<Text style={styles.text}>{this.props.item.category_name}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	parentView: {
		paddingLeft: 40,
		marginVertical: 15,
		flexDirection: 'row'
	},
	text: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		left: 20,
	},
})