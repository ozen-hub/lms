import UserPaymentCard from "../../../widgets/UserPaymentCard.tsx";

export default UserPaymentsScreen;
import {View, Text, StyleSheet, ScrollView} from 'react-native';


const UserPaymentsScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
            <UserPaymentCard navigation={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    }
})
export default UserPaymentsScreen;
