import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../src/Home';
import DiscoverScreen from '../src/Discover';
import AstroShopScreen from '../src/Astroshop';
import ProfileScreen from '../src/Profile';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Discover') {
                        iconName = 'compass';
                    } else if (route.name === 'AstroShop') {
                        iconName = 'bag';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }

                    return <Icon name={iconName} size={30} color={color} />;
                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#fff',
                tabBarStyle: { display: 'flex' },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 4,
                },
                tabBarShowLabel: true,
            })}
            tabBar={(props) => (
                <LinearGradient
                    colors={['#E66F00', '#F8B500']}
                    style={styles.tabBarGradient}
                >
                    <View style={styles.tabBar}>
                        {props.state.routes.map((route, index) => {
                            const { options } = props.descriptors[route.key];
                            const isFocused = props.state.index === index;

                            const iconName = options.tabBarIcon({
                                color: isFocused ? '#000' : '#fff',
                                size: 24,
                            });

                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    onPress={() => props.navigation.navigate(route.name)}
                                    style={styles.tabItem}
                                >

                                    <Icon
                                        name={iconName.props.name}
                                        size={iconName.props.size}
                                        color={iconName.props.color}
                                    />
                                    <Text
                                        style={[
                                            styles.tabLabel,
                                            { color: isFocused ? '#000' : '#fff' },
                                        ]}
                                    >
                                        {route.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </LinearGradient>
            )}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Discover" component={DiscoverScreen} options={{ headerShown: false }} />
            <Tab.Screen name="AstroShop" component={AstroShopScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarGradient: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    tabItem: {
        alignItems: 'center',
    },
    tabLabel: {
        fontSize: 11,
        fontWeight: '400',
        marginTop: 4,
    },
});
