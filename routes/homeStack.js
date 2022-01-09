import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home'
import Session from '../screens/session'
import NewSession from "../screens/NewSession";
import {Button} from 'react-native'


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Sessions',
            headerRight: () => (
                <Button
                  onPress={({navigation}) => navigation.navigate('NewSession')}
                  title="add"
                  color="#fff"
                />
              ),
        }
    },
    Session: {
        screen: Session
    },
    NewSession: {
        screen: NewSession,
        navigationOptions: {
            title: 'Create a session'
        }
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#eee', height: 80},
        headerBackTitleVisible: false,

    }
})

export default createAppContainer(HomeStack)