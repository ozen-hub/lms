import {View, Text, StyleSheet, Button} from 'react-native';

const AdminHomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Screen!</Text>
            <Button title='User Dashboard' onPress={() => {
                navigation.navigate('UserDashboard');
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default AdminHomeScreen;
