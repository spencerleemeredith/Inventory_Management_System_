<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card shadow-sm my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">
                                            Login
                                        </h1>
                                    </div>
                                    <!-- User Form Start  prevent not load the page login -->
                                    <form class="user" @submit.prevent="login">
                                        <div class="form-group">
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="exampleInputEmail"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter Email Address"
                                                v-model="form.email"
                                            />
                                            <small
                                                class="text-danger"
                                                v-if="errors.email"
                                                >{{ errors.email[0] }}</small
                                            >
                                        </div>
                                        <div class="form-group">
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="exampleInputPassword"
                                                placeholder="Password"
                                                v-model="form.password"
                                            />
                                            <small
                                                class="text-danger"
                                                v-if="errors.password"
                                                >{{ errors.email[0] }}</small
                                            >
                                        </div>
                                        <div class="form-group">
                                            <div
                                                class="custom-control custom-checkbox small"
                                                style="line-height: 1.5rem;"
                                            >
                                                <input
                                                    type="checkbox"
                                                    class="custom-control-input"
                                                    id="customCheck"
                                                />
                                                <label
                                                    class="custom-control-label"
                                                    for="customCheck"
                                                    >Remember Me</label
                                                >
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button
                                                type="submit"
                                                class="btn btn-primary btn-block"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <hr />

                                        <!-- User Form End -->
                                    </form>
                                    <hr />
                                    <div class="text-center">
                                        <router-link
                                            to="/register"
                                            class="font-weight-bold small"
                                            href="register.html"
                                            >Create an Account</router-link
                                        >
                                    </div>
                                    <div class="text-center">
                                        <router-link
                                            to="/forgot"
                                            class="font-weight-bold small"
                                            href="register.html"
                                            >Forgot Password</router-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    created() {
        if (User.loggedIn()) {
            this.$router.push({ name: "home" });
        }
    },

    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                confirm_password: null
            },

            errors: {}
        };
    },

    methods: {
        singup() {
            // for testing to see if login works alert("test");
            // Display Errors and responses
            axios
                .post("/api/auth/login", this.form)
                // .then(res => console.log(res.data))
                // .catch(error => console.log(error.response.data))
                .then(res => {
                    User.responseAfterLogin(res);

                    Toast.fire({
                        icon: "success",
                        title: "Signed in successfully"
                    });

                    this.$router.push({ name: "home" });
                })
                // .catch(error => console.log(error.response.data));
                .catch(error => (this.errors = error.response.data.errors))
                .catch(
                    Toast.fire({
                        icon: "warning",
                        title: "Invaild email or password"
                    })
                );
        }
    }
};
</script>

<style type="text/css"></style>
