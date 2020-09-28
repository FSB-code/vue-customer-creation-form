<template>
    <div>
        <div class="select-wrapper">
            <div class="selected" @click="onDropDown">{{items}}</div>
            <div class="close-drop-down" v-if="isDropDown" @click="onDropDown"></div>
            <ul class="drop-down" v-if="isDropDown">
                <li
                    v-for="(element, index) in arrayData"
                    :key="index"
                    @click="selectItem(element)"
                    :class="{active: (selectedString === element) || (selectedItems.includes(element))}"
                >
                {{element}}
                </li>
            </ul>
        </div>
        <div class="close-drop-down" v-if="isDropDown" @click="onDropDown"></div>
    </div>
</template>

<script>
    export default {
        name: "CustomSelect",
        props: ['arrayData', 'isMultiselect', 'setValue'],
        data() {
            return {
                selectedString: '',
                selectedItems: [],
                isDropDown: false
            }
        },
        computed: {
            items() {
                return this.isMultiselect ? this.selectedItems.toString(): this.selectedString
            }
        },
        methods: {
            onDropDown() {
                this.isDropDown = !this.isDropDown
            },
            selectItem(element) {
                if (!this.isMultiselect) {
                    this.selectedString = element
                    this.setValue(element.value)
                    this.onDropDown()
                } else {
                    if(this.selectedItems.includes(element)){
                        this.selectedItems.splice(this.selectedItems.indexOf(element), 1)
                    }else {
                        this.selectedItems.push(element)
                    }
                    this.setValue(this.selectedItems)
                    this.onDropDown()
                }
            }
        }
    }
</script>

<style lang="scss">
$ulBgColor: #fff;
$inputBorderColor: #c3c3c3;
$darkColor: #000;

.select-wrapper {
position: relative;
    .selected {
        padding: 8px 10px;
        font-size: 16px;
        border: 1px solid $inputBorderColor;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
        height: 36px;
        cursor: pointer;
        &:after {
            content: '';
            position: relative;
            width: 0;
            height: 0;
            opacity: .3;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 7px solid $darkColor;
            transition: all .3s ease-out;
            float: right;
            margin-top: 5px;
            margin-right: 5px;
        }
    }
    .drop-down {
        margin: 0;
        padding: 0;
        position: absolute;
        border: 1px solid $inputBorderColor;
        border-radius: 4px;
        width: 100%;
        background: $ulBgColor;
        list-style: none;
        box-sizing: border-box;
        margin-top: -1px;
        z-index: 2;
        li {
            padding: 8px 10px;
            font-size: 16px;
            border-bottom: 1px solid $inputBorderColor;
            width: 100%;
            box-sizing: border-box;
            cursor: pointer;
            &:hover{
                background-color: #ececec;
            }
            &.active {
                background-color: rgba(53, 54, 52, 0.5);
            }
            &:last-child {
                border: none;
            }
        }
    }
}
</style>