import { extend } from "vee-validate";
import { email } from "vee-validate/dist/rules";
extend("email", {
  ...email,
  message: 'This field needs the correct email!'
});
