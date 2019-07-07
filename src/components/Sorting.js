import React, { Component } from 'react'
import {
	TouchableOpacity,
	Image,
	Modal,
	View,
	Text,
	StyleSheet,
	StatusBar
} from 'react-native'

export default class Sorting extends Component {
	constructor() {
		super()
		this.state = {
		    modalVisible: false,
		};
	}

	setModalVisible(visible) {
	    this.setState({
	    	modalVisible: visible
	    });
	}

	render() {
		return (
			<View>
				<TouchableOpacity 
		    		style={{marginRight: 15}}
		    		onPress={() => {this.setModalVisible(true)}}
		    		>
		    		<Image 
		    			source={require('../assets/icons/download.png')}
		    		/>
		    	</TouchableOpacity>
		    	<Modal
			          animationType="fade"
			          transparent={true}
			          visible={this.state.modalVisible}
			          onRequestClose={() => {
			            this.setModalVisible(!this.state.modalVisible);
			          }}>
			          <View style={styles.popUp}>
			          		<StatusBar backgroundColor="black" barStyle="dark-content" />
			              <TouchableOpacity
			                onPress={() => {
			                  this.setModalVisible(!this.state.modalVisible);
			                }}>
			                <Text style={styles.text}>ASCENDING</Text>
			              </TouchableOpacity>

			              <TouchableOpacity
			                onPress={() => {
			                  this.setModalVisible(!this.state.modalVisible);
			                }}>
			                <Text style={styles.text}>DESCENDING</Text>
			              </TouchableOpacity>

			          </View>
		        </Modal>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	popUp: {
		backgroundColor: 'white',
		width: 'auto',
		top: 50,
		right: 20,
		elevation: 10,
		alignSelf: 'flex-end',
		borderRadius: 5,
		paddingVertical: 15
	},
	text: {
		fontSize: 20,
		color: 'black',
		marginHorizontal: 20,
		marginVertical: 10
	}
})