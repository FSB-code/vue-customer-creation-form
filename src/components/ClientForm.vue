<template>
    <div class="customer-form">
        <div class="form-wrapper">
            <form @submit.prevent="submitHandler">
                <h1>Форма создания клиента</h1>
                <Information ref="information"/>
                <Adress ref="adress"/>
                <Document ref="document"/>
                <div class="require-message">Поля отмеченные <span class="required-star">*</span> обязательны для заполнения</div>
                <div class="success-message" v-if="showSuccessMessage">Клиент успешно добавлен !</div>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>

import Information from "./groups/Information";
import Adress from "./groups/Adress";
import Document from "./groups/Document";

export default {
    name: "ClientForm",
    components: {
        Information,
        Adress,
        Document,
    },
    data() {
        return {
            showSuccessMessage: false
        }
    },
    methods: {
        submitHandler() {
            const allVuelidation = this.$refs.document.$v.$invalid || this.$refs.adress.$v.$invalid || this.$refs.information.$v.$invalid
            if (allVuelidation) {
                this.$refs.information.$v.$touch()
                this.$refs.adress.$v.$touch()
                this.$refs.document.$v.$touch()
                return
            }
            this.showSuccessMessage = true
            setTimeout(() => this.showSuccessMessage = false, 4000)
        },
    },
}
</script>

<style lang="scss">
@import "../assets/styles/form-group.scss";

.customer-form {
    font-family: 'Roboto', sans-serif;
    background-color: rgba(53, 54, 52, 0.5);
    .form-wrapper {
        position: relative;
        padding-bottom: 50px;
        .require-message {
            margin-bottom: 15px;
            font-size: 14px;
            .required-star {
                color: $invalidColor;
            }
        }
        .success-message {
            color: $darkContrastColor;
            margin-bottom: 15px;
        }
        button {
            padding: 10px;
            text-transform: uppercase;
            border: none;
            border-radius: 5px;
            font-weight: 700;
            background-color: $contrastColor;
            color: #fff;
            box-shadow: 0 0 2px 1px #fff;
            cursor: pointer;
            outline: none;
            transition: background-color 0.1s;
            &:hover {
                background-color: $darkContrastColor;
            }
        }
        form {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            h1 {
                margin: 0;
                padding: 50px 0 30px 0;
                text-align: center;
            }
        }
    }
}  
</style>

