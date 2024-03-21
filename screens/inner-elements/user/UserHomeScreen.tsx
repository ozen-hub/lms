import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-paper';

const UserHomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('AdminDashboard')} style={styles.access}>
                    <Text style={{color:'white'}}>Access Admin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notification}>
                    <View style={styles.badge}>
                        <Text style={{color: 'white', fontSize: 10}}>15</Text>
                    </View>
                    <Icon size={20} source='bell' color={'white'}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    access: {
        width: 120,
        height: 35,
        backgroundColor: '#d35400',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    badge: {
        width: 15,
        height: 15,
        backgroundColor: '#3498db',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: 5,
        zIndex: 1,
        right: 10
    },
    notification: {
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center',
        position: 'relative'
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#2c3e50',
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'flex-end',
        flexDirection:'row',
        alignItems:'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})
export default UserHomeScreen;
