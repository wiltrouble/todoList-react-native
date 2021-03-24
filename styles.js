import { StyleSheet } from "react-native";

import Colors from "./constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondaryColor,
    },
    taskWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: Colors.firstColor,
        borderRadius: 60,
        borderColor: Colors.fourthColor,
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: Colors.fourthColor,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.fifthColor,
        borderWidth: 1,

    },
    addText: {
        color: Colors.sixthColor,
        fontSize: 25
    }
})

export default styles