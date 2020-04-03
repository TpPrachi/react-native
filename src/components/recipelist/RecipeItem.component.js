import React, { Component } from 'react';
import { View, ImageBackground, TouchableWithoutFeedback, Text, Image } from 'react-native';
import styles from './RecipeItem.component.style';

export default class RecipeItem extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        console.log(navigation);
    }
    render() {
        return (
            // <TouchableOpacity
            //     style={styles.mainContainer}
            //     onPress={() => this.props.navigation.navigate('RecipeDetail', { token: responseJson.token })}
            //     underlayColor='#fff'>
            //     <View style={styles.inputContainer}>
            //         <Image style={styles.imageRecipe}
            //             source={{ uri: this.props.photo }} />
            //         <Text>{this.props.name}</Text>
            //         <Text>{this.props.firstName + ' ' + this.props.lastName}</Text>
            //     </View>
            // </TouchableOpacity>
            <View style={{ height: 200, backgroundColor: 'white', margin: 10, borderRadius: 10, borderColor: 'silver', borderWidth: 1, }}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RecipeDetail', { token: responseJson.token })} style={{ height: 50 }}>
                    <ImageBackground source={this.props.photo != null ? { uri: this.props.photo } : require('../../../assets/recipibackground.jpeg')} style={[styles.horizontalImageContainer, { height: 200, flex: 0.95 }]} resizeMode="cover">
                    </ImageBackground>
                </TouchableWithoutFeedback>
                <View style={styles.transparentContainer}>
                    <View style={[styles.rowContainer, { height: 30 }]}>
                        <View style={styles.combineRowContainer}>
                            {/* <Image source={require('../../../assets/fork.png')} style={{ width: 15, height: 15, tintColor: 'white' }}></Image> */}
                            <Text style={[styles.textStyle, { fontSize: 12, marginTop: 0 }]}>{this.props.name}</Text>
                        </View>
                        <View style={styles.combineRowContainer}>
                            <Image source={require('../../../assets/fork.png')} style={{ width: 15, height: 15, tintColor: 'black' }}></Image>
                            <Text style={[styles.textStyle, { fontSize: 12, marginTop: 0 }]}>Made By: {this.props.firstName + ' ' + this.props.lastName}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}