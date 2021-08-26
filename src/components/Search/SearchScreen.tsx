/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import {Box, Text} from 'react-native-design-utility';

import {theme} from '../../constants/theme';
import KeyBoardDismissView from '../KeyboardDismissView';

const SearchScreen = () => {
  return (
    <KeyBoardDismissView>

      <Box f={1} bg="white">
        <Box h={58} w="100%" px="sm" my="sm">
          <TextInput style={s.input} placeholder="Search Podcast" selectionColor={theme.color.blueLight}/>
        </Box>

        <FlatList style={s.list} data={[{id:1},{id:2}]} renderItem={() => (
            <Box h={98} dir="row" align="center" px="sm">
              <Box h={78} w={78} bg="blueLight" radius={10} mr={10}/>
              <Box>
              <Text bold>Title</Text>
              <Text size="xs" color="grey">Subtitle of the book</Text>
              <Text size="xs" color="blueLight">400 episodes</Text>
              </Box>
            </Box>
        )} keyExtractor={(item) => String(item.id)} />


      </Box>
    </KeyBoardDismissView>
  );
};

const s = StyleSheet.create({
  input: {
    height: 40,
    flex:1,
    backgroundColor:theme.color.greyLightest,
    borderRadius:10,
    paddingHorizontal:theme.space.sm,
    fontSize:theme.text.size.md,
  },
  list:{
    minHeight:'100%',
  },
});

export default SearchScreen;
