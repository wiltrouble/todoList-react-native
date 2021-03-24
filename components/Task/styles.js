import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.fifthColor,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: Colors.sixthColor,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    text: {
        maxWidth: '80%',
        color: Colors.fourthColor,
    },
    circule: {
        width: 12,
        height: 12,
        borderColor: Colors.sixthColor,
        borderWidth: 2,
        borderRadius: 5,
    },
})
export default styles
