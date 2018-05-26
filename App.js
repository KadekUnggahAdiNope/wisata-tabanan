import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.275168,
          longitude: 115.166774
        },
        title: 'Pura Ulun Danu',
        subtitle: 'berlokasi di Jl Denpasar-singaraja Bali'
      },
      {
        key:2,
        latlng: {
          latitude:-8.350117,
          longitude: 115.107813
        },
        title: 'Jatiluwih Bali',
        subtitle: 'desa wisata dengan pemandangan sawah nan indah'
      },
      {
        key:3,
        latlng: {
          latitude:-8.302251,
          longitude: 115.161767
        },
        title: 'the silas'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.364413,
          longitude: 115.197292
        },
        title: 'leke-leke bali'
      },
      {
        key:5,
        latlng: {
          latitude:-8.621182, 
          longitude: 115.086843
        },
        title: 'Tanah Lot Tample',
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Wisata Tabanan
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> uc map </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});