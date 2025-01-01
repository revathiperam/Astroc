import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Video from 'react-native-video';
import Sound from 'react-native-sound';

const Media = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioPlayer, setAudioPlayer] = useState(null);

    // Initialize the audio player when the component mounts
    useEffect(() => {
        const player = new Sound(require('../assets/audio.mp3'), (error) => {
            if (error) {
                Alert.alert('Error', 'Failed to load the audio file.');
                return;
            }
        });

        setAudioPlayer(player);

        // Cleanup the player when the component unmounts
        return () => {
            if (player) {
                player.release();
            }
        };
    }, []);

    // Function to play/pause audio
    const toggleAudio = () => {
        if (audioPlayer) {
            if (isPlaying) {
                audioPlayer.pause(); // Pause the audio
            } else {
                audioPlayer.play((success) => {
                    if (!success) {
                        Alert.alert('Error', 'Playback failed.');
                    }
                    setIsPlaying(false);
                }); // Play the audio
            }
            setIsPlaying(!isPlaying); // Toggle play/pause state
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.heading}>Video</Text>
                <Video
                    source={require('../assets/samplevedio.mp4')} // Video file
                    style={styles.media}
                    controls={true}
                    resizeMode="cover"
                />

                <Text style={{ ...styles.heading, marginTop: 20 }}>Audio</Text>
                <TouchableOpacity style={styles.button} onPress={toggleAudio}>
                    <Text style={styles.buttonText}>
                        {isPlaying ? 'Pause Audio' : 'Play Audio'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA', // Light peach background color
        padding: 20,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60,
        flex: 1,
        width: '100%',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#000',
    },
    media: {
        width: '100%',
        height: 200,
        marginVertical: 15,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Media;
