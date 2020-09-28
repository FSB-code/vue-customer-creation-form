<template>
    <div class="form-group">
        <h2>Документ:</h2>
        <div class="form-item" :class="{invalid: ($v.documentTypes.$dirty && !$v.documentTypes.selectedDocumentValid)}">
            <label for="documentTypes" :class="{invalid: $v.documentTypes.$dirty && !$v.documentTypes.selectedDocumentValid}">Тип документа</label>
            <span class="required-star">*</span>
            <CustomSelect
                    :array-data="documentTypes"
                    :is-multiselect="false"
                    :set-value="setDocumentType"
            />
            <small class="input-error" v-if="$v.documentTypes.$dirty && !$v.documentTypes.selectedDocumentValid">
                Выберите тип документа
            </small>
        </div>
        <div class="form-item">
            <label for="seriesOfPassport">Серия</label>
            <input type="number" id="seriesOfPassport" v-model.trim="seriesOfPassport">
        </div>
        <div class="form-item">
            <label for="numberOfPassport">Номер</label>
            <input type="number" id="numberOfPassport" v-model.trim="numberOfPassport">
        </div>
        <div class="form-item">
            <label for="whoIssuedPassport">Кем выдан</label>
            <input id="whoIssuedPassport" v-model.trim="whoIssuedPassport">
        </div>
        <div class="form-item">
            <label for="date-of-issue" :class="{invalid: $v.dateOfItem.$error}">Дата выдачи</label>
            <span class="required-star">*</span>
            <input id="dateOfIssue" type="date" v-model="dateOfIssue" @input="$v.dateOfItem.$touch" :class="{invalid: $v.dateOfItem.$error}">
            <small class="input-error" v-if="$v.dateOfItem.$dirty && !$v.dateOfItem.required">
                Поле не должно быть пустым
            </small>
            <small class="input-error" v-if="!$v.dateOfItem.between">
                День рождение не должна быть раньше 1 января 1920 года и позже сегодняшней даты
            </small>
        </div>
    </div>
</template>

<script>
import CustomSelect from "../formItems/CustomSelect";
import { required, between } from 'vuelidate/lib/validators'

export default {
    name: "Document",
    components: {
        CustomSelect
    },
    data() {
        return {
            selectedDocumentType: '',
            documentTypes: ['Паспорт','Свидетельство о рождении', 'Вод. удостоверение'],
            seriesOfPassport: '',
            numberOfPassport: '',
            whoIssuedPassport: '',
            dateOfIssue: '',
        }
    },
    validations: {
        documentTypes: {
            selectedDocumentValid() {
                return this.selectedDocumentType !== ''
            }
        },
        dateOfItem: {
            required,
            between: between(new Date("1920-01-01"),new Date())
        }
    },
    computed: {
        dateOfItem() {
            return this.dateOfIssue ? new Date(this.dateOfIssue) : null;
        }
    },
    methods: {
        setDocumentType(documentType) {
            this.selectedDocumentType = documentType
        }
    },
}
</script>

<style>

</style>