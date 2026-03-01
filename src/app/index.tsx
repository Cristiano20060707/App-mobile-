import{View,Text,StyleSheet} from "react-native"

export default function Inde() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hi! my name is Cristiano 😊</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding : 32,
        justifyContent:"center",
    },

    titulo:{
        color : "black",
        fontSize : 20,
        fontWeight : "bold",
    },
})