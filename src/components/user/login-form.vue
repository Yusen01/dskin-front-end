<template>
    <div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="E-mail" prop="mail">
                <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="Password" prop="pass">
                <Input v-model="formValidate.pass" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submit">Submit</Button>
                <Button @click="reset" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    mail: '',
                    pass: ''
                },
                ruleValidate: {
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, message: 'The password cannot be empty', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submit () {
                this.$refs["formValidate"].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            reset () {
                this.$refs["formValidate"].resetFields();
            }
        }
    }
</script>
