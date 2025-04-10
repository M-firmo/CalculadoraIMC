import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Classification = ({ imc }) => {
    if (imc < 18.5) {
        return (
            <Text style={styles.classification}>Sua Classificação é: Abaixo do Peso</Text>
        );
    } else if (imc < 24.9) {
        return (
            <Text style={styles.classification}>Sua Classificação é: Peso Normal</Text>
        );
    } else if (imc < 34.9) {
        return (
            <Text style={styles.classification}>Sua Classificação é: Sobrepeso</Text>
        );
    } else if (imc < 39.9) {
        return (
            <Text style={styles.classification}>Sua Classificação é: Obesidade grau 1</Text>
        );
    } else {
        return (
            <Text style={styles.classification}>Sua Classificação é: Obesidade grau 2</Text>
        );
    }

};

const styles = StyleSheet.create({
    classification: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#074004',
    },
});

export default Classification;