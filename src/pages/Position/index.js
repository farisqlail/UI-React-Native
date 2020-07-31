import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import laptop from '../../assets/images/laptop.jpg';

const Position = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Materi Position</Text>
            <View style={styles.cartWrapper}>
                <Image source={laptop} style={styles.iconCart} />
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja</Text>
        </View>
    )
}

export default Position;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center',
        position: 'relative'
    },
    cartWrapper: {
        borderWidth: 1, 
        borderColor: '#4398d1', 
        width: 93, 
        height: 93, 
        borderRadius: 93 / 2, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    iconCart: {
        width: 50, 
        height: 50
    },
    text: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 8
    },
    notif: {
        fontSize: 11,
        color: 'white',
        backgroundColor: '#6fcf97',
        padding: 5.5,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
})
