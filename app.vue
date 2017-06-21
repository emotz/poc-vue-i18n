<template>
    <div>
        <fieldset style="width:200px">
            <legend>
                <h2>Poor {{animal}}</h2>
            </legend>
            <p>Save {{animal}}!</p>
            <button>Save</button>
            <button>Kill</button>
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