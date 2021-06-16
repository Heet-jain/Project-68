import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

export class fbScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.dispalyText}>FaceBook Screen</Text>
            </View>
        )
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    dispalyText:{
        textALign: 'center',
        backgroundcolor: 'blue'
    }
})