import React, { Component } from 'react'
import {
	TouchableOpacity,
	Image,
	StyleSheet
} from 'react-native'
import { WithNavigation } from 'react-navigation'


class DrawerButton extends Component {
	render() {
		return(
			<TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
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
		)
	}
}

export default WithNavigation(DrawerButton);