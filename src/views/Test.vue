<template>
    <div style="width: 100%;height: 100%;"></div>
</template>

<script>
import { supabase } from '../supabase'
export default {
    name: 'Test',
    methods: {
        async getProfile() {
            let { data, error } = await supabase
                .from('t_game')
                .select('*')
            console.log(data);
        }
    },
    mounted() {
        this.getProfile();
    }
}
</script>