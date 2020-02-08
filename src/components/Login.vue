<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="4">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-btn @click="submit">submit</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, maxLength, email } from "vuelidate/lib/validators"

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
  },
  data() {
    return {
      name: "",
      email: "",
    }
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      if (!this.$v.name.maxLength) {
        errors.push("Name must be at most 10 characters long")
      }
      if (!this.$v.name.required) {
        errors.push("Name is required.")
      }
      return errors
    },
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
  },

  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log("request", {
          name: this.name,
          email: this.email,
        })
      }
    },
  },
}
</script>
