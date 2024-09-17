<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 400px;">
      <h2 class="card-title text-center mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group mb-3">
          <label for="username">Username</label>
          <input
            v-model="form.username"
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>

        <div class="form-group mb-4">
          <label for="password">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>

      <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    handleLogin() {
      // 模拟登录逻辑
      if (this.form.username === 'ICBCBYYB' && this.form.password === 'password') {
        sessionStorage.setItem('auth', 'true');
        this.$router.push('/');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
};
</script>

<style scoped>
html, body, #app {
  height: 100%;
}

.vh-100 {
  height: 100vh; /* Full viewport height */
}
</style>
