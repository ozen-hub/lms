import {ScrollView, StyleSheet, Text, View} from "react-native";

const UserPaymentCard = ({navigation}) => {
    return (
            <View style={styles.view}>
                <Text style={styles.text}>Transaction Id : 12345</Text>
                <Text style={styles.text}>Date : 2022-10-15</Text>
                <Text style={styles.text}>Amount : 25000 LKR</Text>
                <Text style={styles.text}>Program : Master Program</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color:'#000'
    },
    scroll: {
        marginTop: 20,
    },
    view: {
        width: '100%',
        padding: 8,
        backgroundColor: '#bdc3c7',
        borderRadius: 3,
        marginBottom:10
    }
});
export default UserPaymentCard;
