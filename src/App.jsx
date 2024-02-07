import React from 'react';
import {useState} from 'react';
import {FlatList, SafeAreaView, View, StyleSheet} from 'react-native';
import music_data from './music-data.json';
import SongCard from './Components/Card/Card';
import SearchBar from './Components/SearchBar';
function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
