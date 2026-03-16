import { StyleSheet, Text, View } from "react-native"

import { Button } from "../components/button"

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hi! my name is Cristiano 😊</Text>
            <Button title = "test button"/>
            <Button title = "second button"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding : 32,
        justifyContent: "center",
    },

    titulo:{
        color : "black",
        fontSize : 20,
        fontWeight : "bold",
        margin : 20, 
        textAlign : "right",
    },
})