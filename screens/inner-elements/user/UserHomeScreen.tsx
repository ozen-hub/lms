import {View, Text, StyleSheet, Button} from 'react-native';

const UserHomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Screen!</Text>

            <Button title='Admin Dashboard' onPress={() => {
                navigation.navigate('AdminDashboard');
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
export default UserHomeScreen;
