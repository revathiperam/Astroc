import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');

// Data for image gallery and carousel
const images = [
    require('../assets/logos/raasi1.png'),
    require('../assets/logos/raasi2.png'),
    require('../assets/logos/raasi3.png'),
    require('../assets/logos/raasi4.png'),
    require('../assets/logos/raasi5.png'),
    require('../assets/logos/raasi6.png'),
    require('../assets/logos/raasi7.png'),
    require('../assets/logos/raasi8.png'),
    require('../assets/logos/raasi9.png'),
];

const carouselImages = [
    {
        id: 1,
        image: require('../assets/images/explore1.png'),
        title: 'Unlock Your Spiritual Journey with Sacred Rudraksha',
        position: 'right'
    },
    {
        id: 2,
        image: require('../assets/images/explore2.png'),
        title: 'Shield yourself from negativity. Embrace the power of rudraksha.',
        position: 'left'
    },
];

const categories = [
    { id: 1, icon: require('../assets/images/panchang.png') },
    { id: 2, icon: require('../assets/images/numerology.png') },
    { id: 3, icon: require('../assets/images/horoscope.png') },
    { id: 4, icon: require('../assets/images/mooncalender.png') },
];

const consultation = [
    {
        id: 1,
        image: require('../assets/images/Gemstone_Consultation.png'),

    },
    {
        id: 2,
        image: require('../assets/images/Rudraksha_consultation.png'),

    },
];



const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    return (
        <>
            <View style={styles.container}>


                {/* Main Content */}
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
                    {/* Scrollable Image Gallery */}
                    <FlatList
                        data={images}
                        horizontal
                        renderItem={({ item }) => <Image source={item} style={styles.image} />}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.imageScroll}
                    />

                    {/* All Features Bar */}
                    <View style={styles.searchContainer}>
                        <LinearGradient colors={['#EB7E01', '#F8B201']} style={styles.searchBar}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="All Features"
                                value={searchQuery}
                                onChangeText={(text) => setSearchQuery(text)}
                                placeholderTextColor="#fff"
                            />
                            <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
                        </LinearGradient>
                    </View>

                    {/* Live Button Section */}
                    <View style={styles.imageContainer}>
                        <Text style={styles.heading}>AstroAvastha 3D</Text>
                        <Image source={require('../assets/images/astro3d.png')} style={styles.newImage} />
                        <TouchableOpacity style={styles.liveButton}>
                            <Text style={styles.liveButtonText}>Live</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Carousel with Dots */}
                    <View style={styles.carouselContainer}>
                        <Text style={styles.heading}>Explore More</Text>
                        <FlatList
                            data={carouselImages}
                            horizontal
                            ref={flatListRef}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={handleScroll}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <Image source={item.image} style={styles.carouselImage} />
                                    <View style={[styles.textContainer, item.position === 'left' ? styles.textLeft : styles.textRight]}>
                                        <Text style={styles.titleText}>{item.title}</Text>
                                        <TouchableOpacity style={styles.carouselButton}>
                                            <Text style={styles.buttonText}>Buy Now!</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                        <View style={styles.dotsContainer}>
                            {carouselImages.map((_, index) => (
                                <View
                                    key={index}
                                    style={[styles.dot, activeIndex === index && styles.activeDot]}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.heading}>Recommended Categories</Text>

                        <FlatList
                            data={categories}
                            horizontal
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.categoryButton}>
                                    <Image source={item.icon} style={styles.categoryIcon} />
                                </TouchableOpacity>
                            )}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.flatListContent}
                        />
                    </View>

                    <View style={styles.consultation}>
                        <Text style={styles.heading}>Rudraksha & Gemstone Consultation</Text>
                        <FlatList
                            data={consultation}
                            horizontal
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.consultationCard}>
                                    <Image source={item.image} style={styles.consultationImage} />
                                </TouchableOpacity>
                            )}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.flatListContent}
                        />
                    </View>





                </ScrollView>



            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollContent: {
        paddingBottom: 100,  // Extra padding to ensure footer is visible
        flexGrow: 1,  // This ensures ScrollView content expands to take up available space

    },
    imageScroll: {
        marginTop: 25,
    },
    image: {
        width: 60,
        height: 60,
        marginHorizontal: 1,
    },
    searchContainer: {
        paddingHorizontal: 10,
        marginTop: 25,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingHorizontal: 10,
        height: 45,
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        color: '#fff',
    },
    searchIcon: {
        marginLeft: 10,
    },
    imageContainer: {
        marginTop: 20,
        position: 'relative',
        left: 4
    },
    newImage: {
        width: 350,
        height: 170,
        resizeMode: 'contain',
    },
    liveButton: {
        position: 'absolute',
        bottom: 120,
        left: '50%',
        marginLeft: -170,
        backgroundColor: '#D32F2F',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    liveButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    carouselContainer: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 10,
        color: '#272525',
        alignItems: 'center',
        left: 4
    },
    card: {
        width: width,
        position: 'relative',
    },
    carouselImage: {
        width: '95%',
        height: 160,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        top: 20,
        paddingHorizontal: 15,
        maxWidth: '60%', // Limit text width
    },
    textLeft: {
        left: 5,
    },
    textRight: {
        right: 20,
    },
    titleText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 10,
        fontFamily: 'lexend',
        textAlign: 'center',
        lineHeight: 25,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    carouselButton: {
        backgroundColor: '#F4F9E9',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 2,
        alignSelf: 'flex-start',
        left: 30
    },
    buttonText: {
        color: '#550101',
        fontSize: 14,
        fontWeight: 700,
        fontFamily: 'lexend',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#EB7E01',
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    categoryContainer: {
        marginTop: 10,
        paddingHorizontal: 5,
    },

    flatListContent: {
        paddingHorizontal: 5,
    },
    categoryButton: {
        width: 120,
        height: 140,
        marginHorizontal: 5,
    },
    categoryIcon: {
        width: 120,
        height: 130,
        resizeMode: 'contain',

    },
    consultation: {
        marginTop: 5,
        paddingHorizontal: 10,
    },

    consultationCard: {
        width: 300,
        height: 300,
        marginHorizontal: 5,
        marginTop: -70,
        right: 8
    },
    consultationImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
});

export default HomeScreen;
