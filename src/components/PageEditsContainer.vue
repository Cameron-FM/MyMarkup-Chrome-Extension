<template>
    <div>
        <div class="headings">
            <h3 class="left">Selected Element</h3>
            <h3 class="right">Target Page URL</h3>
        </div>

        <div class="container">
            <template v-for='(value, index) in pageEdits'>
                <PageEditComponent @EditChange='PageEditChange' :key='index' :el='value.el' :url='value.url' :replace='value.replace' :index='index'/>
            </template>
        </div>

        <div class="NewPageEditBtnContainer">
            <button v-on:click='AddNewPageEdit' id="NewPageEditBtn">New Page Edit</button>
        </div>
    </div>
</template>

<script>
import PageEditComponent from '@/components/PageEditComponent.vue' 

export default {
  name: 'PageEditsContainer',
  components: {PageEditComponent},
  data:function(){
      return{
          pageEdits: []
      }
  },

  mounted:function(){
      this.LoadCachedEdits() //Load cached edits on page load
  },

  methods: {
      LoadCachedEdits:function(){
        this.pageEdits.push({
            "el": "<a>",
            "url": "www.suraj.com",
            "replace": "hi"
        },
        {
            "el": "<a>",
            "url": "www.cameron.com",
            "replace": "yo"
        })
      },

      AddNewPageEdit:function(){
         this.pageEdits.push({})
         
      },

      PageEditChange:function(data){
          this.pageEdits[data.editindex] = data.localState
      },


  }
}

</script>

<style scoped>
.container{
    margin: 20px 20px 0px 20px;
    height: 375px;
    overflow: auto;
    border: solid 1px #517CA4;
}

.headings{
    padding: 0px 20px 0px 20px;
    margin: 10px 20px 10px 20px;
    display: grid;
    grid-template-columns: 150px 150px auto ;
    grid-template-rows: 25px;
    column-gap: 20px;
    text-align: center;
}

.left{ grid-column: 1;
    grid-row: 1;
}

.right{ grid-column:2;
    grid-row: 1;
}

h3{
    color: #3590D5;
}

.NewPageEditBtnContainer{
    margin: 25px 20px 0px 20px;
}

#NewPageEditBtn{
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: solid 2px #3590D5;
    transition: 0.3s;
    background-color: white;
    outline: none;
    opacity: 0.8;
}

#NewPageEditBtn:hover{
    background-color: #3590D5;
}

</style>
