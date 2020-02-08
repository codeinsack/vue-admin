<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="4">
        <form>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="password"
            :error-messages="passwordErrors"
            label="Password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
          <p style="color: red">{{ serverError }}</p>
          <v-btn @click="submit">submit</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, email } from "vuelidate/lib/validators"

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required },
  },
  data() {
    return {
      email: "",
      password: "",
      serverError: "",
    }
  },
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      if (!this.$v.email.email) {
        errors.push("Must be valid e-mail")
      }
      if (!this.$v.email.required) {
        errors.push("E-mail is required")
      }
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.required) {
        errors.push("Password is required.")
      }
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const authData = {
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch("login", authData)
        // axios.post("/login", user)
        //   .then(({ data }) => {
        //     this.serverError = ""
        //     console.log("token", data.accessToken)
        //     // this.$router.replace("/")
        //   })
        //   .catch((error) => {
        //     this.serverError = error.response.data
        //   })
      }
    },
  },
}
</script>
