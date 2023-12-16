import {
  alpha_spaces as alhaSpaces,
  confirmed,
  email,
  not_one_of as excluded,
  max,
  max_value as maxVal,
  min,
  min_value as minVal,
  required
} from '@vee-validate/rules'
import {
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm,
  configure,
  defineRule
} from 'vee-validate'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    // Define rules
    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alhaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('password_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      // Customise error messages
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetic characters and spaces.`,
          email: `The field ${ctx.field} must be a valid email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          country_excluded: `Due to restrictions, we do not accept users from this location.`,
          password_mismatch: `The passwords don't match.`,
          tos: `You must accept the Terms of Service.`
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`

        return message
      },

      // Validation Triggers
      validateOnBlur: true, // default: true
      validateOnChange: true, // default: true
      validateOnInput: false, // default: false
      validateOnModelUpdate: true // default: true
    })
  }
}
