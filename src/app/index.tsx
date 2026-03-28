import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { Button } from "../components/button";


const [name,setName] = useState("Cristiano")

const changeName = () => {
    setName("Ronaldo")
};

export default function Index() {

    const [name,setName] = useState("Cristiano")

    const changeName = () => {
        setName("Ronaldo")
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hi! my name is {name} 😊</Text>
            <Button title = "Change the name" onPress={changeName}/>
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