import React, { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
    Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Video from "react-native-video";

// Dummy media data
const mediaItems = [
    { id: 1, uri: require("../assets/images/image1.jpg"), type: "image" },
    { id: 2, uri: require("../assets/images/image2.jpg"), type: "image" },
    { id: 3, uri: require("../assets/samplevedio.mp4"), type: "video" },
    { id: 4, uri: require("../assets/images/image3.jpg"), type: "image" },
    { id: 5, uri: require("../assets/sampleVideo2.mp4"), type: "video" },
    { id: 6, uri: require("../assets/images/image4.jpg"), type: "image" },
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState("all"); // Tabs: "photos", "videos", "all"
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);

    // Filter media based on the active tab
    const filteredMedia = mediaItems.filter((item) => {
        if (activeTab === "photos") return item.type === "image";
        if (activeTab === "videos") return item.type === "video";
        return true; // "all" tab
    });

    const handleMediaPress = (media) => {
        setSelectedMedia(media);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedMedia(null);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleMediaPress(item)} style={styles.mediaContainer}>
            {item.type === "image" ? (
                <Image source={item.uri} style={styles.media} />
            ) : (
                <View style={styles.videoContainer}>
                    <Icon name="play-circle-outline" size={40} color="#fff" style={styles.playIcon} />
                </View>
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Tabs */}
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === "all" && styles.activeTab]}
                    onPress={() => setActiveTab("all")}
                >
                    <Text style={styles.tabText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === "photos" && styles.activeTab]}
                    onPress={() => setActiveTab("photos")}
                >
                    <Text style={styles.tabText}>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === "videos" && styles.activeTab]}
                    onPress={() => setActiveTab("videos")}
                >
                    <Text style={styles.tabText}>Videos</Text>
                </TouchableOpacity>
            </View>

            {/* Media Grid */}
            <FlatList
                data={filteredMedia}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContent}
            />

            {/* Modal for Selected Media */}
            <Modal visible={isModalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                        <Icon name="close" size={30} color="#fff" />
                    </TouchableOpacity>
                    {selectedMedia && selectedMedia.type === "image" && (
                        <Image source={selectedMedia.uri} style={styles.fullImage} />
                    )}
                    {selectedMedia && selectedMedia.type === "video" && (
                        <Video
                            source={selectedMedia.uri}
                            style={styles.fullVideo}
                            controls
                            resizeMode="contain"
                        />
                    )}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 40
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 35,
        backgroundColor: "#ccc",
        borderRadius: 10,
        marginHorizontal: 4,
    },
    activeTab: {
        backgroundColor: "#6200ee",
    },
    tabText: {
        color: "#FFF",
        fontWeight: 700,
        fontSize: 16
    },
    listContent: {
        paddingHorizontal: 5,
    },
    mediaContainer: {
        flex: 1,
        margin: 5,
    },
    media: {
        width: "100%",
        height: 300,
        borderRadius: 8,
    },
    videoContainer: {
        width: "100%",
        height: 300,
        backgroundColor: "#000",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    playIcon: {
        opacity: 0.8,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        justifyContent: "center",
        alignItems: "center",
    },
    fullImage: {
        width: "90%",
        height: "70%",
        resizeMode: "contain",
    },
    fullVideo: {
        width: "90%",
        height: "70%",
    },
    closeButton: {
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 10,
        borderRadius: 50,
    },
});

export default Gallery;
