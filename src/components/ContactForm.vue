<template>
    <v-card
        class="d-flex justify-center align-center pa-0 mt-10 mb-10"
        flat
    >
        <v-card class="pa-3" flat rounded width="80%">
            <v-form
                ref="form"
                v-model="valid"
                class="text-center"
            >
                <v-form-title class="text-h4 text-center">
                    Skontaktuj się z nami
                </v-form-title>
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Imie i nazwisko"
                    name="from_name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    name="from_email"
                    required
                ></v-text-field>


                <v-textarea
                    v-model="message"
                    :rules="messageRules"
                    label="Wiadomość"
                    name="message"
                    required
                ></v-textarea>

                <v-btn
                    :disabled="!valid"
                    class="mr-4"
                    color="success"
                    @click="validate"
                >
                    Wyślij
                </v-btn>
            </v-form>
            <v-snackbar
                v-model="snackbar"
                :color="snackbarColor"
                :multi-line="multiLine"
                :timeout="2000"
                rounded="pill"
            >
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="black"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-card>
    </v-card>
</template>

<script>

import emailjs from '@emailjs/browser';

export default {


    name: "ContactForm",
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Imie i nazwisko są wymagane',
            v => (v && v.length >= 6) || 'Imie  i Nazwisko muszą być dłuższe niz 6 znaków',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail jest wymagany',
            v => /.+@.+\..+/.test(v) || 'E-mail musi być właściwy',
        ],
        message: '',
        messageRules: [
            v => !!v || 'Wiadomość jest wymagana',
            v => (v && v.length >= 20) || 'Wiadomość musi być dłuższa niz 20 znaków',
        ],
        multiLine: true,
        snackbar: false,
        snackbarColor: '',
        text: ``,
    }),

    methods: {
        validate() {
            this.$refs['form'].validate();
            if (this.valid) {
                this.sendEmail()
                this.$refs['form'].reset()
            } else {
                this.snackbar = true;
                this.snackbarColor = 'error';
            }
        },
        sendEmail() {
            emailjs.sendForm('contact_service', 'contact_form', this.$refs.form.$el, process.env.VUE_APP_FORM_USER_ID)
                .then((result) => {
                    this.text = 'Email wysłany'
                    this.snackbar = true;
                    this.snackbarColor = 'success';
                }, (error) => {
                    this.text = 'Wystąpił błąd proszę spróbować później'
                    this.snackbar = true;
                    this.snackbarColor = 'error';
                });
        }
    },
}
</script>

<style scoped>

</style>