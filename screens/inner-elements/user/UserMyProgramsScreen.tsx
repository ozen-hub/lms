import {View, Text, StyleSheet} from 'react-native';

const UserMyProgramsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Screen!</Text>
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
export default UserMyProgramsScreen;
