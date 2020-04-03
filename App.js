import React, { useEffect } from 'react';
import { View } from 'react-native';
import Login from './src/components/login/Login.component';
import RecipeList from './src/components/recipelist/RecipeList.component';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RecipeDetail from './src/components/recipedetail/RecipeDetail.component';
import RecipeItem from './src/components/recipelist/RecipeItem.component';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  

const internalNavigator = createStackNavigator({
  RecipeList: { screen: RecipeList }
}, {
  initialRouteName: 'Recipe List',
  headerMode: 'none',
  mode: 'card',
  navigationOptions: {
    headerVisible: false,
  }
});

const homeNavigator = createMaterialBottomTabNavigator({
  RecipeList: {
    screen: RecipeList,
    navigationOptions: {
      tabBarLabel: 'Recipe List',
      tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name={'ios-list'}/>  
        </View>),  
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (  
        <View>  
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
        </View>),  
    }
  },
}, {
  barStyle: { backgroundColor: '#DC7633' },
  initialRouteName: 'RecipeList',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    'Recipe List': homeNavigator,
    internal: internalNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);
// RecipeList
class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default createAppContainer(AppNavigator);
