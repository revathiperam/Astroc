import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/Home';
import DiscoverScreen from '../src/Discover';
import Header from '../components/Header'; // Import Header
import Media from '../src/Media';
import LoginScreen from '../src/authScreens/Login';
import SignScreen from '../src/authScreens/Signup';
import Gallery from '../src/Gallery';
import ImageSlider from '../src/ImageSlider';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: (props) => <Header {...props} />, // Use Header for the Drawer
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Signup" component={SignScreen} />
            <Drawer.Screen name="Media" component={Media} />
            <Drawer.Screen name="Gallery" component={Gallery} />
            <Drawer.Screen name="Slider" component={ImageSlider} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
