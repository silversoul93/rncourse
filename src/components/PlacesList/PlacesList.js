import React from 'react';
import { StyleSheet, FlatList, Alert } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placesList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onPressItem={() => props.onItemSelected(info.item.key)}
          onLongPressItem={() => {
            Alert.alert('Confirm', `Are you sure that you want to delete the element '${info.item.name}'?`,
              [
                { text: 'Ok', onPress: () => props.onItemLongPressed(info.item.key) },
                { text: 'Cancel' }
              ])
          }}
        />
      )}
      keyExtractor={item => item.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placesList;