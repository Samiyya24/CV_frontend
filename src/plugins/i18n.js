import RU from '../lang/ru'
import UZ from '../lang/uz'
import EN from '../lang/en'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'EN',
  messages: {
    RU, UZ, EN
  }
})

export default i18n