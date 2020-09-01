<template>
    <div class="SinglePageEdit">
        <input id="ElementInput" type="text" v-model='localState.el_data'>
        <input id="URLInput" type="text" v-model='localState.url_data'>
        <input id="ReplacmentInput" type="text" v-model='localState.replace_data'>
        <button id="saveBtn">Save</button>
        <button id="deleteBtn" >Delete</button>
    </div>
</template>

<script>
export default {
  name: 'PageEditComponent',
  props: {el: String, url: String, replace: String, index: Number},
  data:function(){
      return{
          localState: {
            el_data: '',
            url_data: '',
            replace_data: ''
          }
      }
  },

  created:function(){
      console.log(this.index)
      this.localState.el_data = this.el
      this.localState.url_data = this.url
      this.localState.replace_data = this.replace
  },

  watch:{
      'localState.el_data': function(){
        this.$emit('EditChange', {
        localState: this.localState,
        editindex: this.index
      })
    },
    'localState.url_data': function(){
        this.$emit('EditChange', {
        localState: this.localState,
        editindex: this.index
      })
    },
    'localState.replace_data': function(){
        this.$emit('EditChange', {
        localState: this.localState,
        editindex: this.index
      })
    }
  }
}
</script>

<style scoped>
.SinglePageEdit{
    padding: 20px 20px 20px 20px;
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: 150px 150px auto;
    grid-template-rows: 30px 30px;
    column-gap: 20px;
    row-gap: 10px;
    height: 75px;
}

#ElementInput{
    grid-column: 1;
    grid-row: 1;
}
#URLInput{
    grid-column:2;
    grid-row: 1;
}

#ReplacmentInput{
    grid-column: 1 / span 2;
    grid-row: 2;
}

#saveBtn{
    background-color: #3590D5;
    grid-column: 3 ;
    grid-row: 1;
}

#deleteBtn{
    background-color: #3590D5;
    grid-column: 3 ;
    grid-row: 2;
}

</style>
