import {ScrollView, StyleSheet, Text, View} from "react-native";
import SubjectWidget from "./SubjectWidget.tsx";

const ProgramWidget = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.name}>Program Name</Text>
            <Text style={styles.amount}>25000</Text>

            <View style={styles.date}>
                <Text style={{color: 'white'}}>2022-12-20</Text>
            </View>

            <ScrollView style={styles.scroll} horizontal={true}>
                <SubjectWidget navigation={navigation} subject={'Java Script'}/>
                <SubjectWidget navigation={navigation} subject={'Php'}/>
                <SubjectWidget navigation={navigation} subject={'C#'}/>
                <SubjectWidget navigation={navigation} subject={'Ruby'}/>
                <SubjectWidget navigation={navigation} subject={'Kotlin'}/>
                <SubjectWidget navigation={navigation} subject={'Java Script'}/>
                <SubjectWidget navigation={navigation} subject={'Php'}/>
                <SubjectWidget navigation={navigation} subject={'C#'}/>
                <SubjectWidget navigation={navigation} subject={'Ruby'}/>
                <SubjectWidget navigation={navigation} subject={'Kotlin'}/>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
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
export default ProgramWidget;
