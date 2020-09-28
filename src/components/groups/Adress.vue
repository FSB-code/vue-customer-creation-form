<template>
    <div class="form-group">
        <h2>Адрес:</h2>
        <div class="form-item">
            <label for="postcode">Индекс</label>
            <input type="number" id="postcode" v-model.trim="postcode">
        </div>
        <div class="form-item">
            <label for="country">Страна</label>
            <input id="country" v-model.trim="country">
        </div>
        <div class="form-item">
            <label for="region">Регион</label>
            <input id="region" v-model.trim="region">
        </div>
        <div class="form-item">
            <label for="city" :class="{invalid:$v.city.$error}">Город</label>
            <span class="required-star">*</span>
            <input id="city" v-model.trim="$v.city.$model" :class="{invalid: $v.city.$error}">
            <small class="input-error" v-if="$v.city.$dirty && !$v.city.required">
                Поле не должно быть пустым
            </small>
            <small class="input-error" v-if="!$v.city.minLength">
                Город не должен быть меньше 4 букв
            </small>
        </div>
        <div class="form-item">
            <label for="street">Улица</label>
            <input id="street" v-model.trim="street">
        </div>
        <div class="form-item">
            <label for="house">Дом</label>
            <input id="house" v-model.trim="house">
        </div>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: "Adress",
    data() {
        return {
            postcode: '',
            country: '',
            region: '',
            city: '',
            street: '',
            house: '',
        }
    },
    validations: {
        city: {
            required,
            minLength: minLength(4)
        },
    }
}
</script>

<style>

</style>