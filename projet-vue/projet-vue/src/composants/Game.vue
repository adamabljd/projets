<template>
  <div class="game_container">
    <div class="head">
      <button class="btn btn-secondary btn-back" @click="showModal1=true; stopTimer=true">Retour</button>
      <h1 class="titre">Découvre le mot !</h1>
    </div>
    <hr/>
    <abandon class="abandon" :show1="showModal1" @close="showModal1 = false; stopTimer=false" @forf="showModal1 = false; showModal2 = true"/>
    <forfait id="forfait" :show2="showModal2" @home="showModal2 = false; finishLose()" :mot="this.wordToFind"/>
    <victory :show-victory="showVictory" :mot="wordToFind" @home="showVictory=false; finishWin()"></victory>
    <div class="game">
      <div class="play">
        <input id="text" type="text" v-model="txt" maxlength="5" placeholder="Entrer votre mot" @keyup.enter="addWord"/>
        <input id="btnValide" type="button" class="btn btn-primary" :disabled="txt.length !==5" value="Valider" @click="addWord"/>
        <input id="btnAbandon" type="button" class="btn btn-danger" value="Abandonner" @click="showModal1 = true; stopTimer=true"/>
        <div class="result">
          <timer class="timer" @stop="showModal2 = true" @time="timer" :stop="stopTimer"/>
          <a class="tentatives">Tentatives restantes : {{count}}</a>
        </div>
        <keyboard class="keyboard" @letter="key" @suppr="keySuppr"/>
      </div>
      <div class="board">
        <div :id="'grid-'+ i" class="grid" v-for="i in 6" :key="i">
          <div class="grid-row" v-for="(j,index) in this.words.at(i-1)" :key="j">
            <board :letter="j" :color="this.colors.at(i-1).at(index)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapMutations} from 'vuex'
import Timer from "@/composants/Timer";
import Keyboard from "@/composants/Keyboard";
import Abandon from "@/composants/Abandon";
import Forfait from "@/composants/Forfait";
import Board from "@/composants/Board"
import Victory from "@/composants/Victory";

export default {
  name: "Game",
  components: {
    Timer,
    Keyboard,
    Abandon,
    Forfait,
    Board,
    Victory
  },
  data: function(){
    return{
      txt:"",
      isWord: false,
      wordToFind: "",
      time:{
        min: Number,
        sec: Number
      },
      showModal1: false,
      showModal2: false,
      showVictory: false,
      stopTimer: false,
      words: [],
      colors: [],
      attempt:{
        attempts: 0,
        date: new Date(),
        time: undefined,
        word: "",
        result: Boolean
      }
    }
  },
  methods:{
    ...mapMutations(['addAttempt']),
    addWord: async function(){
      await axios
          .post("https://vue-project-backend-eta.vercel.app/api/check-word",{
            word: this.txt
          })
          .then(response => this.isWord = response.data.isWord)
          .catch(e => {console.error(e)})
      if(!this.isWord){
        return alert("Le mot n'est pas dans la liste")
      }
      else{
        this.words.push(this.txt.split(''))
        this.testPosition(this.txt)
        this.attempt.attempts ++;
        if(this.txt === this.wordToFind){
          this.stopTimer = true
          setTimeout(()=> {
            this.showVictory = true },1000)
        }
        else{
          if(this.attempt.attempts > 5){
            this.stopTimer = true
            this.showModal2 = true
          }
        }
      }
      this.txt = ""
    },
    testPosition: function(val){
      let color = []
      for(let i=0;i<5;i++){
        let letter = val.charAt(i)
        if(letter === this.wordToFind.charAt(i)){
          color.push('correct')
        }
        else{
          for(let j=0;j<5;j++){
            if(letter === this.wordToFind.charAt(j)){
              color.push('partiel')
            }
          }
          if(color.length === i) {
            color.push('incorrect')
          }
        }
      }
      this.colors.push(color)
    },
    timer: function (val){
      this.time.min = val.min
      this.time.sec = val.sec
    },
    key: function(val){
      if(this.txt.length < 5) {
        this.txt = this.txt.concat(val)
      }
    },
    keySuppr: function (){
      if(this.txt.length > 0){
        this.txt = this.txt.substring(0,this.txt.length -1)
      }
    },
    finishLose: function(){
      this.stopTimer = true
      this.attempt.result = false
      this.attempt.word = this.wordToFind
      this.attempt.time = this.finalTime(this.time)
      this.addAttempt(this.attempt)
      this.attempt.attempts = 0
    },
    finishWin: function (){
      this.stopTimer = true
      this.attempt.result = true
      this.attempt.word = this.wordToFind
      this.attempt.time = this.finalTime(this.time)
      this.addAttempt(this.attempt)
    },
    finalTime: function(val){
      let m
      let s
      m = 9 - val.min
      s = 60 - val.sec
      if(s === 60){
        m = m + 1
        s = 0
      }
      val.min = m
      val.sec = s
      return val
    }
  },
  mounted(){
      axios
          .get(" https://vue-project-backend-eta.vercel.app/api/new-game", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            }
          })
          .then(response => this.wordToFind = response.data.word)
  },
  computed:{
    count(){
      let count
      if(this.words.length <= 6){
        count = 6 - this.words.length
      }
      return count
    }
  }
}
</script>

<style scoped>
#text{
  width: 450px;
  height: 40px;
  justify-self: center;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  grid-column: 1/2;
  margin-top: 20px;
}

.keyboard{
  grid-column: 1/2;
  margin-top: 40px;
}

.result{
  grid-column: 1/2;
  display: grid;
  grid-template-columns: repeat(2,auto);
  margin-top: 40px;
}

.timer{
  grid-column: 1/2;
}

.tentatives{
  grid-column: 2/2;
}

.play{
  display: grid;
  grid-template-columns: repeat(1,550px);
  grid-gap: 20px;
  grid-column: 1/2;
}

.game{
  display: grid;
  grid-template-columns: repeat(2,auto);
}

.grid{
  display: flex;
  gap: 3px;
  width: auto;
  height: auto;
}

.grid-row{
  text-transform: uppercase;
  width: 50px;
  height: 50px;
}

.board{
  display: grid;
  grid-column: 2/2;
  margin-top: 20px;
  margin-left: 40px;
}

.head{
  overflow: hidden;
  align-content: center;
}

.btn-back{
  float: left;
  margin-top: 5px;
  display: flex;
}

</style>