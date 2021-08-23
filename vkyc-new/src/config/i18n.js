import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { format as formatDate, isDate } from 'date-fns'
import { enGB as en, nl, arSA as ar } from 'date-fns/locale' // import all locales we need

const locales = { en, nl, ar } // used to look up the required locale

i18n
  .use(Backend)
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
      format: (value, format, lng) => {
        if (isDate(value)) {
          const locale = locales[lng]
          return formatDate(value, format, { locale })
        }
      },
    },
  })

export default i18n
