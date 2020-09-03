<template>
    <div>
        <div class="headings">
            <h3 class="left">Selected Element</h3>
            <h3 class="right">Target Page URL</h3>
        </div>

        <div id="container" @scroll="handleScroll">
            <template v-for='(value, index) in pageEdits'>
                <PageEditComponent @deletePageEdit="deletePageEdit" @EditChange='pageEditChange' :key='index' :el='value.el' :url='value.url' :replace='value.replace' :index='index'/>
            </template>
        </div>

        <keep-alive>
            <div class="MainButtonsContainer">
                <button @click='addNewPageEdit' id="NewPageEditBtn">New Page Edit</button>
                <button @click='savePageEdits' id="SaveBtn">Save</button>  
            </div>
        </keep-alive>
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
      this.loadCachedEdits() //Load cached edits on page load
  },

  methods: {
      loadCachedEdits:function(){
        chrome.storage.sync.get(['MyMarkup'], (result) => {
        if (result.MyMarkup != null || result.MyMarkup != undefined){
            this.pageEdits = result.MyMarkup
        }else{
            this.addNewPageEdit()
        }
        })
        },

      addNewPageEdit:function(){
          console.log(this)
         this.pageEdits.push({el: "", url: "", replace: ""})
      },

      pageEditChange:function(data){
          console.log('data',data)
          this.pageEdits[data.editindex].el = data.localState.el_data
          this.pageEdits[data.editindex].url = data.localState.url_data
          this.pageEdits[data.editindex].replace = data.localState.replace_data
      },

      savePageEdits:function(){
          chrome.storage.sync.clear(function(){})
          chrome.storage.sync.set({'MyMarkup': this.pageEdits}, function() {
            chrome.tabs.getSelected(null, function(tab) {
                var code = 'window.location.reload();';
                chrome.tabs.executeScript(tab.id, {code: code});
            })
          })
      },

      deletePageEdit:function(data){
          this.pageEdits.splice([data.editndex],1)
          this.savePageEdits()
          
      },

      handleScroll:function(){
        document.getElementById("container").style.borderBottomWidth = "2px"
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#container{
    margin: 20px 20px 0px 20px;
    height: 300px;
    overflow: auto;
    border: none;
    border-bottom: solid 1px #00A1E0;
}

.headings{
    padding: 0px 20px 0px 20px;
    margin: 10px 20px 10px 20px;
    display: grid;
    grid-template-columns: 170px 170px auto ;
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
    color: #00A1E0;
    font-family: 'Open Sans', sans-serif;
}

button{
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0px 8px 15px rgba(255, 255, 255, 0.1);
    color: #222222;
}

.MainButtonsContainer{
    margin: 25px 20px 0px 20px;
}

#NewPageEditBtn{
    margin-bottom: 20px;
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: solid 2px #00A1E0;
    transition: 0.3s;
    background-color: #FFFFFF;
    outline: none;
    opacity: 1;
}

#NewPageEditBtn:hover{
    background-color: #00A1E0;
    color: #FFFFFF;
}

#SaveBtn{
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: solid 2px #00A1E0;
    transition: 0.3s;
    background-color: #FFFFFF;
    outline: none;
    opacity: 1;
}

#SaveBtn:hover{
    background-color: #00A1E0;
    color: #FFFFFF;
}

</style>
