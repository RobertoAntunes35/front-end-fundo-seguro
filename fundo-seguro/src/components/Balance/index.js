import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import * as Animatable from 'react-native-animatable';


export default function Balance({saldo, gastos}) {
    return (
    <Animatable.View style={styles.container} animation="fadeInUp">
            <View style={styles.items}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currentSymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>
 
            <View style={styles.items}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currentSymbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>
        </Animatable.View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -50,
        marginStart:14,
        marginEnd:14,
        borderRadius:25,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    itemTitle: {
        fontSize: 25,
        color:'#989898',
        fontWeight:'bold'
    },
    content: {
        color:'#989898',
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentSymbol: {
        color: '#DADADA',
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color:'#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    } 
})