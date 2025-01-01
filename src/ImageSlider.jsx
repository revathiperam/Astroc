import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const ImageSlider = () => {
    const [activeIndices, setActiveIndices] = useState([0, 0]); // Track active index for both sliders

    const imagesArray = [
        [
            require("../assets/images/image1.jpg"),
            require("../assets/images/image2.jpg"),
            require("../assets/images/image3.jpg"),
            require("../assets/images/image4.jpg"),
        ],
        [
            require("../assets/images/image5.jpg"),
            require("../assets/images/image6.jpg"),
            require("../assets/images/image7.jpg"),
            require("../assets/images/image8.jpg"),
        ],
    ];

    const handleScroll = (event, sliderIndex) => {
        const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
        );
        setActiveIndices((prevIndices) => {
            const updatedIndices = [...prevIndices];
            updatedIndices[sliderIndex] = slideIndex;
            return updatedIndices;
        });
    };

    return (
        <View style={styles.container}>
            {imagesArray.map((images, sliderIndex) => (
                <View key={sliderIndex} style={styles.sliderContainer}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={(event) => handleScroll(event, sliderIndex)}
                        contentContainerStyle={styles.scrollViewContent}
                    >
                        {images.map((image, index) => (
                            <View key={index} style={styles.imageContainer}>
                                <Image source={image} style={styles.image} />
                            </View>
                        ))}
                    </ScrollView>
                    <View style={styles.indicators}>
                        {images.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.indicator,
                                    index === activeIndices[sliderIndex] &&
                                    styles.activeIndicator,
                                ]}
                            />
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    sliderContainer: {
        marginBottom: 10,
    },
    scrollViewContent: {
        marginTop: 40,
    },
    imageContainer: {
        width: width - 20,
        marginHorizontal: 10,
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        resizeMode: "cover",
    },
    indicators: {
        position: "absolute",
        top: 270,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#FFF",
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: "#FFA500",
    },
});

export default ImageSlider;
