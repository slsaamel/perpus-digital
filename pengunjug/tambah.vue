<template>
    
</template>
<script setup>
    const supabase =  useSupabaseClient()

    const members = ref([])
    const objectives = ref([])

    const form = ref({
        nama: "",
        keanggotaan: "",
        tingkat: "",
        jurusan: "",
        kelas: "",
        keperluan: "",
    })

    const kirimData = async () => {
        const { error } = await supabase.from('pengunjung').insert([form.value])
        if(!error) navigateTo('/pengunjung')
    }

    const getKeanggotaan = async ()=> {
        const { data, error } = await supabase.from('keanggotaam').select('*')
        if(data) members.value = data 
    }

    const getKeperluan = async () => {
        const {data, error } = await supabase.from('keperluan').select('*')
        if(data) objectives.value = data 
    }

    onMounted(() => {
        getKeanggotaan()
        getKeperluan()
    })



</script>