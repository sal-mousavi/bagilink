import { Form as VForm, Field as VField, ErrorMessage, defineRule, configure } from 'vee-validate'

import { required, email, min, max, confirmed, alpha_num, url } from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VForm', VForm)
    app.component('VField', VField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('email', email)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('password_mismatch', confirmed)
    defineRule('alpha_num', alpha_num)
    defineRule('url', url)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_num: `The field ${ctx.field} may only contain alphabetical characters and numbers .`,
          email: `The field ${ctx.field} must be a valid email.`,
          password_mismatch: `The password don't match.`,
          url: `The field ${ctx.field} must be a valid url.`
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`

        return message
      }
    })
  }
}
