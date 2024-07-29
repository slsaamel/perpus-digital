<script setup>
    const supabase =  useSupabaseClient()

    const visitors = ref ([])

    const getPengunjung = async () => {
        const { data, error } = await supabase.from('pengunjung').select('*, keanggotaan(*), keperluan(*)')
        if(data) visitors.value = data 
    }

    onMounted(() => {
        getPengunjung()
    })
</script>

<tbody>
    <tr v=for="(visitors,i) in visitors" :key="i">
        <td>{{i+1 }}.</td>
        <td>{{ visitor.nama }}</td>
        <td>{{ visitor.keanggotaan.nama  }}</td>
        <td>{{ visitor.tanggal  }}, {{ visitor.waktu }}</td>
        <td>{{ visitor.keperluan.nama }}</td>
    </tr>
</tbody>