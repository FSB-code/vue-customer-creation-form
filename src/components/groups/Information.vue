<template>
    <div class="form-group">
        <h2>Информация:</h2>
        <div class="form-item">
            <label for="lastName" :class="{invalid: $v.lastName.$error}">Фамилия</label>
            <span class="required-star">*</span>
            <input id="lastName" v-model.trim="$v.lastName.$model" :class="{invalid: $v.lastName.$error}">
            <small class="input-error" v-if="$v.lastName.$dirty && !$v.lastName.required">
                Поле не должно быть пустым
            </small>
            <small class="input-error" v-if="!$v.lastName.minLength">
                Имя не должно быть меньше 4 букв
            </small>
        </div>
        <div class="form-item">
            <label for="firstName" :class="{invalid: $v.firstName.$error}">Имя</label>
            <span class="required-star">*</span>
            <input id="firstName" v-model.trim="$v.firstName.$model" :class="{invalid: $v.firstName.$error}">
            <small class="input-error" v-if="$v.firstName.$dirty && !$v.firstName.required">
                Поле не должно быть пустым
            </small>
            <small class="input-error" v-if="!$v.firstName.minLength">
                Имя не должно быть меньше 4 букв
            </small>
        </div>
        <div class="form-item">
            <label for="patronymic">Отчество</label>
            <input v-model.trim="patronymic">
        </div>
        <div class="form-item">
            <label for="birthDay" :class="{invalid: $v.birthDay.$error}">Дата рождения</label>
            <span class="required-star">*</span>
            <input id="patronymic" type="date" v-model="birthDate" @input="$v.birthDay.$touch" :class="{invalid: $v.birthDay.$error}">
            <small class="input-error" v-if="$v.birthDay.$dirty && !$v.birthDay.required">
                Поле не должно быть пустым
            </small>
            <small class="input-error" v-if="!$v.birthDay.between">
                День рождение не должно быть раньше 1 января 1920 года и позже сегодняшней даты
            </small>
        </div>
        <div class="form-item">
            <label for="phoneNumber" :class="{invalid: $v.phoneNumber.$dirty && phoneNumber.length != 15 || phoneNumber[0] !== '7'}">Номер телефона</label>
            <span class="required-star">*</span>
            <input id="phoneNumber" @input="acceptNumber" v-model="$v.phoneNumber.$model" :class="{invalid: ($v.phoneNumber.$dirty && phoneNumber.length != 15 || phoneNumber[0] !== '7')}">
            <small class="input-error" v-if="phoneNumber[0] !== '7'">
                Номер телефона должен начинаться с цифры 7
            </small>
            <small class="input-error" v-else-if="$v.phoneNumber.$dirty && phoneNumber.length != 15">
                Номер телефона должен состоять из 11 цифр
            </small>
        </div>
        <div class="form-item">
            <label for="gender">Пол</label>
            <input id="gender" v-model.trim="gender">
        </div>
        <div class="form-item" :class="{invalid: ($v.clientsGroup.$dirty && !$v.clientsGroup.selectedGroupValid)}">
            <label for="clientsGroup" :class="{invalid: $v.clientsGroup.$dirty && !$v.clientsGroup.selectedGroupValid}">Группа клиентов</label>
            <span class="required-star">*</span>
            <CustomSelect
                    :array-data="clientsGroup"
                    :is-multiselect="true"
                    :set-value="setClientsGroup"
            />
            <small class="input-error" v-if="$v.clientsGroup.$dirty && !$v.clientsGroup.selectedGroupValid">
                Нужно выбрать хотябы 1 пункт
            </small>
        </div>
        <div class="form-item">
            <label for="doctors">Лечащий врач</label>
            <CustomSelect
                    :array-data="doctors"
                    :is-multiselect="false"
                    :set-value="setDoctor"
            />
        </div>
        <div class="form-item">
            <label for="notification" class="checkbox-label">
                <input type="checkbox" id="notification" v-model="sendingSMS">
                <span class="check-wrap"><i class="ok"></i></span>
            </label>
            <label class="checkbox-label">Не отправлять СМС</label>
        </div>
    </div>
</template>

<script>
import CustomSelect from "../formItems/CustomSelect";
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    name: "Information",
    components: {
        CustomSelect
    },
    data() {
        return {
            lastName: '',
            firstName: '',
            patronymic: '',
            birthDate: '',
            phoneNumber: '7',
            gender: '',
            selectedGroup: [],
            selectedDoctor: '',
            sendingSMS: false,
            clientsGroup: ['VIP', 'Проблемные', 'ОМС'],
            doctors: ['Иванов', 'Захаров','Чернышева'],
        }
    },
    validations: {
        lastName: {
            required,
            minLength: minLength(4)
        },
        firstName: {
            required,
            minLength: minLength(4)
        },
        birthDay: {
            required,
            between: between(new Date("1920-01-01"),new Date()),
        },
        phoneNumber: {
            required,
        },
        clientsGroup: {
            selectedGroupValid() {
                return this.selectedGroup.length > 0
            }
        },
    },
    computed: {
        birthDay() {
            return this.birthDate ? new Date(this.birthDate) : null;
        },
    },
    methods: {
        acceptNumber() {
            let x = this.phoneNumber.replace(/\D/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/) 
            this.phoneNumber = !x[2] ? x[1] : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "") + (x[5] ? "-" + x[5] : "")
        },
        setClientsGroup(clientsGroup) {
            this.selectedGroup = clientsGroup
        },
        setDoctor(doctor) {
            this.selectedDoctor = doctor
        },
    }
}
</script>

<style>

</style>