<template>
    <div class="SinglePageEdit">
        <input id="ElementInput" type="text" v-model='localState.el_data'>
        <input id="URLInput" type="text" v-model='localState.url_data'>
        <input id="ReplacmentInput" placeholder="Replace With" type="text" v-model='localState.replace_data'>
        <div @click="emitPageEditDelete" id="deleteBtn" ><i id="deleteBtnIcon" class="far fa-trash-alt"></i></div>
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
  },

  methods: {
      emitPageEditDelete: function(){
          this.$emit('deletePageEdit',{
              editindex: this.index
          })
      }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.SinglePageEdit{
    padding: 20px 20px 20px 20px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 170px 170px auto;
    grid-template-rows: 30px 30px;
    column-gap: 20px;
    row-gap: 10px;
    height: 75px;
}

.input{
    background-color: #FFFFFF;
    border: none;
    border-radius: 15px;
    box-shadow: 0px 8px 15px rgba(255, 255, 255 0.1);
    font-family: 'Open Sans', sans-serif;
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
    grid-row: 2 ;
}

#ReplacmentInput::placeholder{
    text-align: center;
}

#deleteBtn{
    border: none;
    background-color: none;
    grid-column: 3 ;
    grid-row: 1 / span 2;
    text-align: center;
    position: relative;
}

#deleteBtnIcon{
    font-size: 20px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: 0.3s;
    color: #00A1E0;
}

#deleteBtn:hover #deleteBtnIcon{
    color: #FFFFFF;
    font-size: 22px;
}
</style>
