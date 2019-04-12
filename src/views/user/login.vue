<template>
    <div>
        <Navbar></Navbar>
        <LoginForm></LoginForm>
    </div>
</template>

<script>
    import Navbar from "../../components/layout/navbar.vue";
    import LoginForm from "../../components/user/login-form.vue";

    export default {
        components: {
            Navbar,
            LoginForm
        }
    }
</script>

