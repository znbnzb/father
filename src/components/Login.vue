<template>
    <div class="row">
        <div class="center-block">
            <img
                src="../assets/logo.png"
                alt=""
            >
            <p>我是</p>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        this.getuser();
        this.getusers();
        this.changemyname();
    },
    methods: {
        getuser() {
            // this.$http.get("/menu").then(request => {
            // this.getMenuItems = request.data.results;
            //将请求下来的数据存储到Vuex中
            this.$http.get("aaa",null).then(
                request => {
                    console.log(request.data.results);
                }
                //   this.$store.commit("setMenuItems", request.data.results);
            );
        },
        getusers() {
            var ccc = this.$store.getters.getChangedNum;
        
            console.log(ccc +'LOGIN');

        },
        changemyname(){
            this.$store.commit('newNum',1);
        }

    }
};
</script>

<style scoped>
</style>