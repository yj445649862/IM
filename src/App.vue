<template>
  <div>a</div>
</template>

<script>

  import WebIM from './config/WebIM';
  export default {
    mixins:[
      {
        methods:{
          $login(){
            WebIM.conn.open({
              apiUrl: WebIM.config.apiURL,
              user: 'im_doc_15570775688',
              pwd: '123456',
              appKey: WebIM.config.appkey
            })
          }
        }
      }
    ],
    name: 'First',
    created() {
      this.$login()
    }
  }
</script>

<style scoped>

</style>
