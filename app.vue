<template>
    <div>
        <fieldset style="width:200px">
            <legend>
                <h2>{{ $t("legend") }} {{animal}}</h2>
            </legend>
            <p>{{ $t("petition") }} {{animal}}!</p>
            <button>{{ $t("buttonSave") }} </button>
            <button>{{ $t("buttonKill") }} </button>
        </fieldset>
    </div>
</template>

<script>
import i18n from './i18n.js';
export default {
    data: function () {
        return {
            animal: 'enot'
        }
    },
    i18n
}
</script>