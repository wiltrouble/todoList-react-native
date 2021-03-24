import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.circule}>
            </View>
        </View>
    )
}


export default Task;