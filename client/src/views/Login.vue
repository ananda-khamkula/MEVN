<template>
    <div class="page-content">
    <v-layout justify-space-between align-content-center column>
      <v-layout justify-space-between align-content-center>
            <h2>Sign In</h2>
      </v-layout>
      <form>
        <div class="row mb-2">
          <label for="Email" class="col-sm-3 col-form-label">Sign in with email address</label>
          <div class="col-sm-9">
            <input type="email" class="form-control" id="Email" name="Email" placeholder="name@example.com" >
          </div>
        </div>
        <div class="row mb-2">
          <label for="Password" class="col-sm-3 col-form-label">Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="Password" name="Password" placeholder="BIGsmall$" >
          </div>
        </div>
        <v-btn color="success" @click="doLogin()" :loading="usersLoading">Sign In</v-btn>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <v-btn color="alert" @click="forgotPassword()" :loading="usersLoading">Forgot password ?</v-btn>
      </form>
    </v-layout>
      <div class="text-center mb-2">
        <v-btn raised depressed color="info" >
          <v-icon>mdi-google</v-icon>Google
        </v-btn>
        <v-btn raised depressed  color="primary" >
          <v-icon>mdi-facebook</v-icon>Facebook
        </v-btn>
        <v-btn raised depressed color="dark" >
          <v-icon>mdi-twitter</v-icon>Twitter
        </v-btn>
      </div>
  </div>
</template>

<script>
import { loadingStates } from '../mixins/loading-state'

export default {
  name: 'LoginPage',
  mixins: [loadingStates],

  data: () => ({
    // doLogin: false,
  }),

  methods: {
    // toggleAddModal(show) {
    //   this.doLogin = !!show
    // },

    doLogin() {
		//ModalService.openGenericModal(NewUserForm)
    },
    forgotPassword() {
		//ModalService.openGenericModal(NewUserForm)
    },
  },
}
</script>

<style></style>
