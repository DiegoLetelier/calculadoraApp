import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import styles from '../theme/appTheme';
import { UseCalculadora } from '../hooks/UseCalculadora';

export const CalculadoraScreen = () => {
    
    const {calcular,limpiar, armarNumero, negativo, btnDel, btnDividir, btnMultiplicar, btnRestar, btnSumar, numeroAnterior, numero} = UseCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {
             (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text> )
            
            }
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
                {numero}
            </Text>

            <View style={styles.fila}>
                {/* boton */}

                <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
                <BotonCalc texto="+/-" color="#9B9B9B" accion={negativo} />
                <BotonCalc texto="del" color="#9B9B9B" accion={btnDel} />
                <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
            </View>

            <View style={styles.fila}>
                {/* boton */}

                <BotonCalc texto="7" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="8" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="9" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="x" color="#FF9427" accion={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                {/* boton */}

                <BotonCalc texto="4" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="5" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="6" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
            </View>
            <View style={styles.fila}>
                {/* boton */}

                <BotonCalc texto="1" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="2" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="3" color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
            </View>
            <View style={styles.fila}>
                {/* boton */}

                <BotonCalc
                    texto="0"
                    color="#2D2D2D"
                    ancho={true}
                    accion={armarNumero}
                />
                <BotonCalc texto="." color="#2D2D2D" accion={armarNumero} />
                <BotonCalc texto="=" color="#2D2D2D" accion={calcular} />
                {/* <BotonCalc texto="/" color="#FF9427"/> */}
            </View>
        </View>
    );
};
