<template>
    <div>
            <h5 class="section">
              Publications
            </h5>
            <el-card class="box-card" id="publications">
              <p class="project-title">VisiMark： Characterizing and Augmenting Landmarks for People with Low Vision in Augmented Reality to Support Indoor Navigation</p>
              <el-col :span="18">
              <!-- <p class="project-title">VisiMark: Characterizing and Augmenting Landmarks for People with Low Vision in Augmented Reality to Support Indoor Navigation</p> -->
                
                <p class="project-conference">Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)
                  <span style="color:grey ;">&ensp;<a href="https://arxiv.org/pdf/2502.10561" style="color:grey ;" target="_blank">[PDF]</a></span>
                </p>
                <p class="project-author">
                  <span style="font-weight:bolder; text-decoration: underline;">Ruijia Chen</span>, Junru Jiang, Pragati Maheshwary, Brianna R Cochran, Yuhang Zhao
                </p>
                <div style="margin-top:40px ;"></div>
                <!-- <p class="project-content">

                </p> -->
              </el-col>
              <el-col :span="6" class="pub-images">
                <el-image :src="srcVisiMark" style="padding-top: 3%;padding-bottom: 5%;"></el-image>
              </el-col>
            </el-card>
            <br/>

            
            <el-card class="box-card" id="publications">
              <!-- <p class="project-title">VisiMark： Characterizing and Augmenting Landmarks for People with Low Vision in Augmented Reality to Support Indoor Navigation</p> -->
              <el-col :span="18">
              <p class="project-title">Modelling Effects of Visual Attention on Noticeability of Body-Avatar Offsets in Virtual Reality</p>
              
              <p class="project-conference">Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)
                  <!-- <span style="color:grey ;">&ensp;<a href="https://arxiv.org/pdf/2502.10561" style="color:grey ;" target="_blank">[PDF]</a></span> -->
                </p>
                <p class="project-author">
                  Zhipeng Li, Yishu Ji, <span style="font-weight:bolder; text-decoration: underline;">Ruijia Chen</span>, Tianqi Liu, Yuntao Wang, Yuanchun Shi, Yukang Yan
                </p>
                <div style="margin-top:40px ;"></div>
                <!-- <p class="project-content">
                  
                </p> -->
              </el-col>
              <el-col :span="6" class="pub-images">
                <!-- <el-image :src="srcVisiMark"></el-image> -->
              </el-col>
            </el-card>
            <br/>


            <el-card class="box-card" id="publications">
                <p class="project-title">Exploring the Design Space of Optical See-through AR Head-Mounted Displays to Support First Responders in the Field</p>
                
              <el-col :span="18">
                <p class="project-conference">Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI '24)
                  <span style="color:grey ;">&ensp;<a href="https://dl.acm.org/doi/pdf/10.1145/3613904.3642195" style="color:grey ;" target="_blank">[PDF]</a></span>
                </p>
                <p class="project-author">
                  Kexin Zhang, Brianna R Cochran, <span style="font-weight:bolder; text-decoration: underline;">Ruijia Chen</span>, Lance Hartung, Bryce Sprecher, Ross Tredinnick, Kevin Ponto, Suman Banerjee, Yuhang Zhao
                </p>
                <div style="margin-top:40px ;"></div>
                <p class="project-content">
                  First responders (FRs) navigate hazardous, unfamiliar environments in the field (e.g., mass-casualty incidents), 
                  making life-changing decisions in a split second. 
                  We interviewed 26 first responders in the field who experienced a state-of-the-art optical-see-through AR HMD, 
                  as well as its interaction techniques and four types of AR cues (i.e., overview cues, directional cues, highlighting cues, and labeling cues), soliciting their first-hand experiences, design ideas, and concerns. 
                  Our study revealed both generic and role-specific preferences and needs for AR hardware, interactions, and feedback, as well as identifying desired AR designs tailored to urgent, risky scenarios (e.g., affordance augmentation to facilitate fast and safe action). 
                  Finally, we derived comprehensive and actionable design guidelines to inform future AR systems for in-field FRs.
                </p>
              </el-col>
              <el-col :span="6" class="pub-images" >
                <el-image :src="srcCHI24" style="padding-top: 3%;"></el-image>
              </el-col>
            </el-card>
            <br/>
            <el-card class="box-card" id="publications">
              <el-col :span="20">
                <p class="project-title">Modeling the Noticeability of User-Avatar Movement Inconsistency for Sense of Body Ownership Intervention</p>
                <p class="project-conference">Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT '22)
                  &nbsp;
                  <span style="color:grey ;"><a href="https://drive.google.com/file/d/15q4QfytW2d1L4mXLL7pibFZL5xWQFNT-/view?usp=sharing" style="color:grey ;" target="_blank">[Video]</a></span> 
                  <span style="color:grey ;">&ensp;<a href="https://dl.acm.org/doi/pdf/10.1145/3534590" style="color:grey ;" target="_blank">[PDF]</a></span>
                </p>
                <p class="project-author">
                  Zhipeng Li, Yu Jiang, Yihao Zhu, <span style="font-weight:bolder; text-decoration: underline;">Ruijia Chen</span>, Ruolin Wang, Yuntao Wang, Yukang Yan, Yuanchun Shi
                </p>
                <!-- <div style="margin-top:40px ;"></div> -->
                <p class="project-content">
                  We applied angular offsets to the avatar's shoulder and elbow joints, recorded users' responses and identifications to the inconsistency through a three-stage user studies, and built a statistical model based on the results. 
                  Leveraging the model, we implemented a technique that amplifies the user's arm movements with unnoticeable offsets and then evaluated implementations with different parameters(offset strength, offset distribution). 
                  We demonstrated the model's extendibility in interventions in the sense of body ownership with three VR applications including stroke rehabilitation, action game and widget arrangement.
                </p>
              </el-col>
              <el-col :span="3" class="pub-images" >
                <el-image :src="srcIMWUT"></el-image>
              </el-col>
            </el-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PublicationsSection',
    data() {
      return {
        srcIMWUT:require('@/assets/IMWUT2022.png'),
        srcCHI24:require('@/assets/CHI2024.jpg'),
        srcVisiMark:require('@/assets/VisiMark.jpg'),
      };
    }
  };
  </script>
  