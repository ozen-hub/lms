import {View, Text, StyleSheet, Button} from 'react-native';

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Screen!</Text>

            <Button title='SignUp' onPress={() => {
                navigation.navigate('LoginScreen');
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
export default SignupScreen;
