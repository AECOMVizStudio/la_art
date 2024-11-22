import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1:
              'Yesterday, I walked to the park, where I often go to relax and clear my mind.',
            part2:
              'While I was reading a book, a friendly dog approached me, wagging its tail.',
            part3:
              'By the time I leave tomorrow, I will have finished the entire novel.',
          },
        },
      },
      es: {
        translation: {
          description: {
            part1:
              'Ayer caminé hasta el parque, donde suelo ir para relajarme y despejar mi mente.',
            part2:
              'Mientras leía un libro, una perra amistosa se acercó a mí, moviendo la cola.',
            part3:
              'Para cuando me vaya mañana, habré terminado toda la novela.',
          },
        },
      },
    },
  });

export default i18n;
