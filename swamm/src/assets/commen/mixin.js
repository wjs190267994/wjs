import backUp from '@/components/content/backup/backup'
export const backTop = {
    data() {
        return {
            isShowback:false,
        }
    },
    components:{
        backUp
    },
    methods: {
        backup(){
            // console.log(this.$refs.scroll)
            this.$refs.scroll.backup();
        }
    },
}