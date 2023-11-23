import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Roberto Antunes"/>
            <Balance saldo="4.200,00" gastos="1.200,00"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F4F4F4'
    }
})