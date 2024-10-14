import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ListadoGastos({ datos, eliminarGasto, cambiarId }) {

  return (
    <ScrollView style={styles.scroll}>
      {datos.map((i) => {
        return (
          <View key={i.id} style={styles.contenedor}>
            <Text style={styles.texto1}>{i.nombreGasto}</Text>
            <Text style={styles.texto2}>${i.costoGasto}</Text>
            <AntDesign onPress={() =>
              Alert.alert('Eliminar', '¿Está seguro?', [
                {text: 'Cancel', style: 'cancel',},
                {text: 'OK', onPress: () => eliminarGasto(i.id)},])
              }
              style={styles.iconoEliminar} name="delete" size={30} color="black" />
            <AntDesign onPress={() => cambiarId(i.id)}
              style={styles.iconoEliminar} name="edit" size={30} color="black" />
          </View>
        )
      })}
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  contenedor: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    minHeight: 50,
    borderColor: 'gray',
    borderWidth: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 0.22,
    elevation: 0.5,
  },
  texto1: {
    flex: 2,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#000',
  },
  texto2: {
    flex: 2,
    fontSize: 15,
    color: '#B7275E',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  iconoEliminar: {
    flex: 1,
    color: 'green',
    textAlign: 'right',

  },
  scroll: {
    height: 450,

  }


});