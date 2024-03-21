import {View, Text, StyleSheet, Button, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';

const SignupScreen = ({navigation}) => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView style={styles.flatList}>
                <View style={{alignItems:'center',marginTop:50, marginBottom:50}}>
                    <Text style={{fontSize:30}}>Register Now</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        outlineColor='#ecf0f1'
                        label="First Name"
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        outlineColor='#ecf0f1'
                        label="Last Name"
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        outlineColor='#ecf0f1'
                        label="username"
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        outlineColor='#ecf0f1'
                        label="password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'white'}}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity  onPress={()=>navigation.navigate('LoginScreen')} style={[styles.button,{backgroundColor: 'white'}]}>
                    <Text style={{color:'#16a085',textDecorationLine:'underline'}}>Already have an Account?</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        width: '100%',
        height: 50,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center'
    },
    container: {
        flex: 1,
    },
    input: {
        marginBottom:25
    },
    flatList: {
        padding: 20,
        backgroundColor:'white'
    },
});
export default SignupScreen;
