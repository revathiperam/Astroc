import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View style={styles.screenContainer} />
    );
}

function DiscoverScreen() {
    return (
        <View style={styles.screenContainer} />
    );
}

function AstroShopScreen() {
    return (
        <View style={styles.screenContainer} />
    );
}

function ProfileScreen() {
    return (
        <View style={styles.screenContainer} />
    );
}

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';  // Correct name for home icon
                    } else if (route.name === 'Discover') {
                        iconName = 'compass-outline';  // Correct name for compass icon
                    } else if (route.name === 'AstroShop') {
                        iconName = 'bag-outline';  // Correct name for bag icon
                    } else if (route.name === 'Profile') {
                        iconName = 'person-outline';  // Correct name for person icon
                    }

                    return <Icon name={iconName} size={size} color={color} />;
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
                                size: 24
                            });

                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    onPress={() => props.navigation.navigate(route.name)}
                                    style={styles.tabItem}
                                >
                                    {/* Render Icon here */}
                                    <Icon
                                        name={iconName.props.name}  // Correctly pass the icon name
                                        size={iconName.props.size}  // Pass the size
                                        color={iconName.props.color}  // Pass the color
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
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        fontWeight: 400,
        marginTop: 4,
    },
});
