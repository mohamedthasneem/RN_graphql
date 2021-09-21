import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {useTranslation} from 'react-i18next';

const ListenNowScreen = () => {
  const {t} = useTranslation();
  return (
    <Box f={1} center>
      <Text color="red">{t('lis now')}</Text>
    </Box>
  );
};

export default ListenNowScreen;
