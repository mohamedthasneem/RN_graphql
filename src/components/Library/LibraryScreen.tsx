import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {useTranslation} from 'react-i18next';

const LibraryScreen = () => {
  const {t} = useTranslation();
  return (
    <Box f={1} center>
      {/* <Text color="red">lib Screen</Text> */}
      <Text color="red">{t('lib Screen')}</Text>
    </Box>
  );
};

export default LibraryScreen;
