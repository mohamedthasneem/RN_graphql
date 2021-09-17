import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        'lib Screen': 'Library Screen',
      },
    },
    ko: {
      translation: {
        'lib Screen': '라이브러리 화면',
      },
    },
  },
});
