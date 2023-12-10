import { required } from '@vee-validate/rules'
import { ErrorMessage, Field as VeeField, Form as VeeForm, defineRule } from 'vee-validate'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
  }
}
