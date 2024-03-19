import {View, Text, StyleSheet, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Screen!</Text>
            <Button title='Login' onPress={() => {
                navigation.navigate('UserDashboard');
            }}/>
            <Button title='Signup' onPress={() => {
                navigation.navigate('SignupScreen');
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
export default LoginScreen;
