<template>
    <div class="main" id="MyHome">
      
<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
      <el-container>
      <el-main>
        <el-tabs v-bind:value="activeNames.activeName" :key="activeNames" @tab-click="handleClick">
          <el-tab-pane label="MyHome" name="first">
            <el-row>
              <el-col :span="4">
                <br/>
                <el-row>
                  <el-avatar :size="200" :src="avatarURL"></el-avatar>
                </el-row>
                <el-row style="margin-top: 20px;margin-left: 28px;">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <a href="mailto:ruijia.chen@wisc.edu" style='color:black'>
                      <i class="fa fa-envelope" style="font-size:22px;"></i>
                    </a>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <a href="https://github.com/chenruijia120" target="_blank" style='color:black' rel="noopener noreferrer">
                      <i class="fa fa-github" style="font-size:24px;"></i>
                    </a>
                </el-row>
              </el-col>
              <el-col :span="20">
                <br/>
                <div class="myName">Ruijia Chen</div>
                <div id="introduction">
                  <br/>
                  <p class="paragraph">
                    Welcome!
                  </p>
                  <p class="paragraph">
                    I am currently a first-year Ph.D. student in Computer Sciences at the University of Wisconsin-Madison. 
                    Previously, I completed my B.E. in Computer Science at Tsinghua University, advised by Prof. Yuntao Wang.
                    <!-- <a href="https://pi.cs.tsinghua.edu.cn/" style='color:#9966CC' target="_blank">Pervasive Interaction Lab, Department of Computer Science, Tsinghua University</a>. -->
                  </p>
                  <p class="paragraph">
                    My research interest lies in 
                    <span style='color:#660066;font-weight: bolder;'>Human-Computer Interaction</span>,
                    especially virtual/mixed reality.
                    <!-- I am applying for a PhD in Human-Computer Interaction for the entry of <span style='color:#660066;font-weight: bolder;'>2023 Fall</span> Semester. -->
                  </p>
                </div>
              </el-col>
            </el-row>
            <br/>
            <h5 style="margin-left: 50px;color: dimgrey; font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;">
              Research Experience
            </h5>
            <el-card class="box-card" style="margin-left: 50px;margin-right: 100px;">
              <p class="research">
                2022 Mitacs Globalink Research Internship | Mitacs & University of British Columbia, Okanagan
              </p>
              <p class="research-time">
                June 2022 -- September 2022
              </p>
              <el-divider></el-divider>
              <p class="research">
                2021 Access Computing Summer Program | University of Washington & Tsinghua University & Microsoft
              </p>
              <p class="research-time">
                June 2021 -- September 2021
              </p>
              <el-divider></el-divider>
              <p class="research">
                Research Assistant | Pervasive Interaction Lab, Department of Computer Science, Tsinghua University
              </p>
              <p class="research-time">
                December 2020 -- Present
              </p>
            </el-card>
            <br/>
            <br/>
          </el-tab-pane>


          <el-tab-pane label="Projects" name="second" style="padding-left: 50px;padding-right: 100px;">
            <h5 style="color: dimgrey; font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;">
              Publications
            </h5>
            <el-card class="box-card">
              <p class="project-title">Modeling the Noticeability of User-Avatar Movement Inconsistency for Sense of Body Ownership Intervention</p>
              <el-col :span="19">
                <p class="project-conference">IMWUT 2022&nbsp;&nbsp;&nbsp;
                  <span style="color:grey ;"><a href="https://drive.google.com/file/d/15q4QfytW2d1L4mXLL7pibFZL5xWQFNT-/view?usp=sharing" style="color:grey ;" target="_blank">[Video]</a></span> 
                  <span style="color:grey ;">&ensp;<a href="https://arxiv.org/pdf/2204.12071.pdf" style="color:grey ;" target="_blank">[PDF]</a></span>
                </p>
                <p class="project-author">
                  Zhipeng Li, Yu Jiang, Yihao Zhu, <span style="font-weight:bolder;">Ruijia Chen</span>, Ruolin Wang, Yuntao Wang, Yukang Yan, Yuanchun Shi
                </p>
                <!-- <div style="margin-top:40px ;"></div> -->
                <p class="project-content">
                  We applied angular offsets to the avatar's shoulder and elbow joints, recorded users' responses and identifications to the inconsistency through a three-stage user studies, and built a statistical model based on the results. 
                  Leveraging the model, we implemented a technique that amplifies the user's arm movements with unnoticeable offsets and then evaluated implementations with different parameters(offset strength, offset distribution). 
                  We demonstrated the model's extendibility in interventions in the sense of body ownership with three VR applications including stroke rehabilitation, action game and widget arrangement.
                </p>
              </el-col>
              <el-col :span="5">
                <el-image :src="srcIMWUT"></el-image>
              </el-col>
            </el-card>
            
            
            <!-- <br/>
            <h5 style="color: dimgrey; font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;">
              Some Projects
            </h5>
            <el-card class="box-card">
              <p class="project-title">Cognitive Load Analysis in Target Selection</p>
              <el-col>
                <p class="project-conference">In Revision</p>
                 <div style="margin-top:40px ;"></div> 
                <p class="project-content">
                  Fitts' Law is the most robust and successful behavioral model capturing the quantitative relationship between target selection time and target width and distance. We propose extending Fitts' Law by considering users' cognitive load as a human factor in target selection tasks. 
                  It can help support the adaptation of user interfaces in responding to users' cognitive load. We conducted a dual-task experiment with target selection as the primary task and two types of secondary tasks (math calculation and N-back). We changed the secondary task's difficulty to alter the user's perception of cognitive load while performing the primary task. 
                  We recorded completion time and subjective ratings (SR), with which we built an extension of Fitts' Law: MT=a*log<sub>2</sub>(A/W+1)+b*ln(SR)+c. 
                  Compared to standard Fitts' Law fitting with R<sup>2</sup>=0.62, our model with R<sup>2</sup>= 0.87 describes the relationship between motion time and ID under different cognitive loads much better. 
                  We aim to provide extendable guidance on designing and developing adaptive interfaces with the proposed formula.
                </p>
                <br/>
              </el-col>
            </el-card>
            <br/>
            <el-card class="box-card">
              <p class="project-title">Smart Scrolling for Mobile Devices</p>
              <el-col>
                <p class="project-conference">In Progress</p>
                 <div style="margin-top:40px ;"></div> 
                <p class="project-content">
                  We designed clutch-free techniques for list scrolling on smartphones to reach higher interaction efficiency and lower effort in the screen scrolling scenarios.
                  We utilized features including the size of fingers to determine the scrolling speed and managed to reduce finger dangling time.
                  We plan to validate the design by conducting a controlled experiment considering phone book item location tasks.
                </p>
                <br/>
              </el-col>
            </el-card> -->
            <!-- <br/>
            <br/> -->
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
    name:"MyHome",
    data() {
      return {
        activeNames:{
          activeName: 'first',
          lastActiveName:'first',
        },
        avatarURL:require('@/assets/photo.jpg'),
        srcIMWUT:require('@/assets/IMWUT2022.png')
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.name, event);
        if(tab.name=='third'){
          window.open("https://drive.google.com/file/d/11cAWXHRW2KdKBYTmvCHM6iibuO_TeQDV/view?usp=drive_link", '_blank');
          
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

  #MyHome {
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

  .project-title{
    font-size: large;
    font-weight: bold;
  }

  .project-conference{
    font-size: large;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  .project-content{
    font-size: medium;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
    color: darkgray;
  }
</style>