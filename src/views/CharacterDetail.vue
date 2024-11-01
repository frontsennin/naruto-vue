<template>
    <div v-if="character" class="row align-items-center">
        <div class="col">
            <DetailCard :character="character"/>
        </div>
    </div>
</template>

<script>
import DetailCard from '@/components/DetailCard';
import narutoService from '@/services/narutoService';
import { errorToastr } from '@/services/helperService';

export default {
    name: 'CharacterDetail',
    components: {
        DetailCard
    },
    data() {
        return {
            character: null
        }
    },
    async mounted() {
        let loader = this.$loading.show({
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: true,
            onCancel: this.onCancel,
        });
        try {
            const { data } = await narutoService.getCharacterById(this.$route.params.id);
            this.character = data;
        } catch (error) {
            errorToastr(error.message);
        } finally {
            loader.hide();
        }
    },
}
</script>