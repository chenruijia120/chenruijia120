<template>
    <div class="main" id="homeSection">
      <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
      
      <el-container>
        <el-main style="padding-top: 0%;">
          <el-tabs v-bind:value="activeNames.activeName" :key="activeNames" @tab-click="handleClick">
            <el-tab-pane label="Home" name="home">
              <br/>
              <div :class="['content-row', { 'desktop': windowWidth > 900 }]">
                <!-- <el-col :span="5" v-if="windowWidth > 900" style="text-align: center;"> -->
                <el-col :span="5" style="text-align: center;">
                  <el-avatar :size=windowWidth/7 :src="avatarURL"/>
                  <el-row id="icons">
                      <!-- <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> -->
                      <a href="mailto:ruijia.chen@wisc.edu" style='color:black' class="icon">
                        <i class="fa fa-envelope" id="email"></i>
                      </a>
                      <span>&nbsp;&nbsp;</span>
                      <a href="https://www.linkedin.com/in/ruijia-chen-094b48249/" target="_blank" style='color:black' rel="noopener noreferrer"  class="icon">
                        <i class="fa fa-linkedin" id="linkedin"></i>
                      </a>
                      <span>&nbsp;&nbsp;</span>
                      <a href="https://scholar.google.com/citations?user=jEHV3ucAAAAJ&hl=en&authuser=1" target="_blank" style='color:black' rel="noopener noreferrer"  class="icon">
                        <i class="fa fa-google" id="google"></i>
                      </a>
                      <span>&nbsp;&nbsp;</span>
                      <a href="https://github.com/chenruijia120" target="_blank" style='color:black' rel="noopener noreferrer" class="icon">
                        <i class="fa fa-github" id="github"></i>
                      </a>
                  </el-row>
                </el-col>
  
                <el-col :span="19" style="padding-left: 2%;">
                  <div class="myName">Ruijia Chen</div>
                  <div id="introduction">
                  <br/>
                  <p class="paragraph">
                    Welcome! My name is Ruijia Chen, pronounced as ray-jar (in Chinese: 陈睿嘉).
                  </p>
                  <p class="paragraph">
                    I am currently a second-year Ph.D. student in Computer Science at the University of Wisconsin-Madison, advised by <a href="https://www.yuhangz.com/" style='color:var(--link-color)' target="_blank">Prof. Yuhang Zhao</a>. 
                    Previously, I completed my B.E. in Computer Science at Tsinghua University, advised by <a href="https://pi.cs.tsinghua.edu.cn/lab/people/YuntaoWang/en/" style='color:var(--link-color)' target="_blank">Prof. Yuntao Wang</a>.
                    <!-- <a href="https://pi.cs.tsinghua.edu.cn/" style='color:#9966CC' target="_blank">Pervasive Interaction Lab, Department of Computer Science, Tsinghua University</a>. -->
                  </p>
                  <p class="paragraph">
                    My research interests lie in 
                    <span style='color:var(--primary-color);font-weight: bolder;'>Human-Computer Interaction</span>,
                    especially 
                    <span style='color:var(--primary-color);font-weight: bolder;'>augmented reality and accessibility</span>. 
                    I design and develop AR technology to automatically recognize surrounding visual information that cannot be easily perceived by people with low vision, 
                    and generate suitable multi-modal feedback to enhance their perceptual abilities in various daily tasks.
                  </p>
                  <p class="paragraph">
                    <span style='color:var(--primary-color);font-weight: bolder;'>Looking for research internship for Summer 2025!</span>. 
                  </p>
                </div>
                </el-col>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <PublicationsSection id="pubSection"/>
              <br/>
              <br/>
              <ExperiencesSection id="experiencesSection"/>
              <br/>
              <br/>
              <ServicesSection id="servicesSection"/>
              <br/>
              <br/>
            </el-tab-pane>
  
            <el-tab-pane label="Publications" name="pub"></el-tab-pane>
            <el-tab-pane label="Research Experiences" name="experiences"></el-tab-pane>
            <el-tab-pane label="Services" name="services"></el-tab-pane>
            <el-tab-pane label="Resume" name="resume"></el-tab-pane>
          </el-tabs>
        </el-main>
  
        <el-backtop :right="100" :bottom="100" />
      </el-container>
    </div>
  </template>

<script>
import ExperiencesSection from './ExperiencesSection.vue'
import PublicationsSection from './PublicationsSection.vue'
import ServicesSection from './ServicesSection.vue'

export default {
  name: "MyHome",
  components: {
    ExperiencesSection,
    PublicationsSection,
    ServicesSection
  },
  data() {
    return {
      activeNames:{
        activeName: 'home',
        lastActiveName:'home',
      },
      avatarURL: require('@/assets/photo.jpg'),
      windowWidth: document.documentElement.clientWidth,

    };
  },
  methods: {
    restoreActiveTab() {
      this.activeNames = Object.assign({}, this.activeNames, {
        activeName: this.activeNames.lastActiveName,
        lastActiveName: this.activeNames.lastActiveName
      })
    },
    handleClick(tab) {
      if (tab.name === 'resume') {
        window.open("https://drive.google.com/file/d/1a8mV8ntZzEHoXsRal8r_m023pGHoJWkt/view?usp=sharing", '_blank');
        this.restoreActiveTab();
      } 
      // else if(tab.name === 'pub') {
      //   this.restoreActiveTab();
      //   const section = document.getElementById("PublicationsSection");
      //   if (section) {
      //     section.scrollIntoView({ behavior: "smooth" });
      //   }
      // }
      else {
        this.restoreActiveTab();
        const section = document.getElementById(tab.name+"Section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
  },
    mounted(){
      var that = this;
        // <!--把window.onresize事件挂在到mounted函数上-->
        window.onresize = () => {
          return (() => {
            window.fullHeight = document.documentElement.clientHeight;
              window.fullWidth = document.documentElement.clientWidth;
            that.windowHeight = window.fullHeight;  // 高
            that.windowWidth = window.fullWidth; // 宽
          })()
        };
    },
    watch: {
      windowHeight (val) {
        let that = this;
        console.log("实时屏幕高度：",val, that.windowHeight );
      },
      windowWidth (val) {
        let that = this;
        console.log("实时屏幕宽度：",val, that.windowHeight );
      }
    },
};
</script>

<style>
  :root {
    --primary-color: #660066;
    --text-color: darkslategrey;
    --secondary-text-color: darkgray;
    --link-color: #9966CC;
    --conference-color:#910191;
  }
  .el-container{
    height:100%;
    overflow: visible;
    position: relative;
  }

  #homeSection {
    height: 100%;
    overflow: visible;
    position: relative;
  }


  .el-tab-pane {
    padding-top: 1%;
  }

  .el-tabs__header.is-top{
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #fff;
    padding-top: 1%;
  }

  
  .el-tabs{
    padding-left:5%;
    padding-right:5%;
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
    color:var(--text-color);
  }

  .project-title{
    font-size: large;
    font-weight:500;
    margin-bottom: 0px;
  }

  .project-conference{
    font-size: medium;
    color: var(--conference-color);
    font-weight: bold;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .project-content{
    font-size: medium;
    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
    
    font-family:'Times New Roman', Times, serif;
  }


  .project-author{
    font-size: medium;
    font-family:'Times New Roman', Times, serif;
  }
  
  .research{
    font-size: large;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .research-time{
    font-size: medium;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--secondary-text-color);
  }

  .pub-images{
    display: flex;
    justify-content: flex-end;
    padding-left: 1%;
  }

  #projects{
    padding-left: 50px;
    padding-right: 100px;
  }

  #experience{
    margin-left: 50px;
    margin-right: 100px;
  }


  #services{
    margin-left: 50px;
    margin-right: 100px;
  }
  
  #publications{
    margin-left: 50px;
    margin-right: 100px;
  }

  .section{
    margin-left: 50px;
    color: rgb(79, 78, 78); 
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
  }

  .icon{
    font-size: x-large;
  }

  @media only screen and (max-width: 900px){
    #projects{
      padding-left: 5px;
      padding-right: 10px;
    }
    #experience{
      margin-left: 5px;
      margin-right: 10px;
    }
    #publications{
      margin-left: 5px;
      margin-right: 10px;
    }
    #services{
      margin-left: 5px;
      margin-right: 10px;
    }
    #icons{
      /* margin-left: 0px; */
      padding-left: 10%;
    }
    .icon{
      font-size: medium;
    }

    .section{
      margin-left: 10px;
      color: dimgrey; 
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
    }
  }

</style>