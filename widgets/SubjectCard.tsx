import {ScrollView, StyleSheet, Text, View} from "react-native";

const SubjectCard = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Subject Id : 12345</Text>
            <Text style={styles.text}>Subject : Java Script</Text>
            <Text style={styles.text}>Status : Available</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{

    },
    scroll: {
        marginTop: 20,

    },
    date: {
        width: 120,
        height: 35,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#d35400',
        borderRadius: 50,
        marginTop: 15,
    },
    amount: {
        color: '#c0392b'
    },
    name: {
        fontSize: 20,
        color: '#000'
    },
    view: {
        width: '100%',
        padding: 8,
        backgroundColor: '#bdc3c7',
        borderRadius: 3,
        marginBottom:10
    }
});
export default SubjectCard;
