<template>
    <div class="main" id="Home">
      
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
      <el-container>
      <el-main>
        <el-tabs v-bind:value="activeNames.activeName" :key="activeNames" @tab-click="handleClick">
          <el-tab-pane label="Home" name="first">
            <el-col :span="4">
              <br/>
              <el-row>
                <el-avatar :size="150" :src="avatarURL"></el-avatar>
              </el-row>
              <el-row style="margin-top: 20px;">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <a href="mailto:chenruijia120@gmail.com" style='color:black'>
                    <i class="fa fa-envelope" style="font-size:22px;"></i>
                  </a>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <a href="https://github.com/chenruijia120" target="_blank" style='color:black' rel="noopener noreferrer">
                    <i class="fa fa-github" style="font-size:24px;"></i>
                  </a>
              </el-row>
            </el-col>
            <el-col :span="19">
              <br/>
              <div class="myName">Ruijia Chen</div>
              <div id="introduction">
                <br/>
                <p class="paragraph">
                  Welcome!
                </p>
                <p class="paragraph">
                  I am Ruijia Chen, a senior student in the Department of Computer Science and Technology at Tsinghua University. 
                  I am currently working as a research assistant in the 
                  <a href="https://pi.cs.tsinghua.edu.cn/" style='color:#9966CC'>Pervasive Interaction Lab, Department of Computer Science, Tsinghua University</a>.
                </p>
                <p class="paragraph">
                  My research interest lies in 
                  <span style='color:#660066;font-weight: bolder;'>Human-Computer Interaction</span>,
                   at the intersection of virtual/mixed reality and human cognition.
                </p>
              </div>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="Projects" name="second">
            
          </el-tab-pane>
          <el-tab-pane label="CV" name="third"></el-tab-pane>
        </el-tabs>
      </el-main>
      
      <el-backtop :right="100" :bottom="100" />
    </el-container>
    </div>
</template>

<script>
  export default {
    name:"Home",
    data() {
      return {
        activeNames:{
          activeName: 'first',
          lastActiveName:'first',
        },
        avatarURL:require('@/assets/photo.jpg'),
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.name, event);
        if(tab.name=='third'){
          window.open("https://drive.google.com/file/d/1ZNpqcybm0ZdynIJbxDvCCWAYZIQu5hHD/view?usp=sharing", '_blank');
          
          this.$set(this.activeNames, 'activeName', this.activeNames.lastActiveName);
          this.activeNames = Object.assign({}, this.activeNames, {
            activeName: this.activeNames.lastActiveName,
            lastActiveName: this.activeNames.lastActiveName
          })
        }
        else{
          console.log(this.lastActiveName,this.activeName);
          this.activeNames.lastActiveName = tab.name; 
        }
        console.log(this.activeNames.lastActiveName,this.activeNames.activeName);
      }
    },
    mounted(){

    },
  };
</script>

<style>
  .el-container{
    height:100%;
  }

  #Home {
    height: 100%;
  }

  .el-tabs{
    padding-left:15px;
    padding-right:15px;
    /* text-align: center; */
    font-size: 30px;
  }

  .myName{
    font-size: 40px;
    font-weight: bolder;
    font-family:MYFONT;
  }

  #introduction{
    padding-right: 60px;
    font-size: medium;
  }

  .paragraph{
    margin-bottom: 20px;
    color:darkslategrey;
  }

</style>