<script setup>
const supabase = useSupabaseClient()

const route = useRoute()

const buku = ref([])

const getBooks = async () => {
    const { data, error } = await supabase.fom('buku').select('*, kategori(*)')
    .eq('id', reoute.params.id)
    if(data) buku.value = data[0]
}

onMounted(() => {
    getBookByld()
})
</script>
