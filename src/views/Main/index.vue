<template>
  <div class="on-fix-header">
    <div class="header">
      <mu-appbar title="单兵作战" class="tc">
        <mu-icon-button slot="left" onclick="history.go(-1)">
          <i class="fa fa-chevron-left"></i>
        </mu-icon-button>
        <mu-icon-button slot="right">
        </mu-icon-button>
      </mu-appbar>
    </div>
    <div class="wraper">
      <div class="potal">
        <div class="potal-body">
          <!-- <swiper id="swiper_horizontal"
            :pagination-visible="true"
            direction="horizontal">
            <div v-for="slideText in slides" track-by="$index">{{slideText}}</div>
          </swiper> -->
        </div>
      </div>
      <!--  -->
      <div class="space"></div>
      <!--  -->
      <div class="potal">
        <div class="potal-body pd-0">
          <!--  -->
          <ul class="list-step small pd-r-5">
            <li class="active">
              <div class="step-item">
                <div class="step-item-title">&nbsp;</div>
              </div>
            </li>
            <li class="selected">
              <div class="step-item c-00">
                <div class="step-item-title">训战中</div>
                <div class="step-item-content">
                  <p class="c-02">离出队大概还有6个月</p>
                </div>
                <div class="step-item-btns">
                  <a class="step-view-more" onclick="window.open('page-step1.html','_self')">
                    <span>流程指引</span>
                    <i class="fa fa-angle-right"></i>
                    <i class="fa fa-angle-right"></i>
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="step-item">
                <div class="step-item-title">&nbsp;</div>
              </div>
            </li>
          </ul>
          <div class="space-line mg-0 mg-t-5"></div>
          <div class="swiper-container swiper-no-swiping swiper-container-note pd-l-5 pd-r-5" style="height: 40px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="list-item fa fa-chevron-right">
                  <i class="icon icon-speech c-02" tips="1"></i>
                  <span>抵达一线后请及时报到1111</span>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="list-item fa fa-chevron-right">
                  <i class="icon icon-speech c-02"></i>
                  <span>抵达一线后请及时报到2222</span>
                </a>
              </div>
              <div class="swiper-slide">
                <a class="list-item fa fa-chevron-right">
                  <i class="icon icon-speech c-02" tips="3"></i>
                  <span>抵达一线后请及时报到3333</span>
                </a>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          任务书
        </div>
        <div class="potal-body">
          <!--  -->
          <div class="swiper-container swiper-container-0">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <!--  -->
                <ul class="list-img" data-col="4">
                  <li>
                    <a class="img-item">
                      <img src="static/images/img_11.png" alt="">
                      <p><span class="checkLab">作战任务书</span></p>
                    </a>
                  </li>
                  <li>
                    <a class="img-item">
                      <img src="static/images/img_12.png" alt="">
                      <p><span class="checkLab" tips="3">周报</span></p>
                    </a>
                  </li>
                  <li>
                    <a class="img-item">
                      <img src="static/images/img_13.png" alt="">
                      <p><span class="checkLab">月报</span></p>
                    </a>
                  </li>
                  <li>
                    <a class="img-item">
                      <img src="static/images/img_14.png" alt="">
                      <p><span class="checkLab">中期审视</span></p>
                    </a>
                  </li>
                </ul>
                <!--  -->
              </div>
              <div class="swiper-slide">
                <!--  -->
                <ul class="list-img" data-col="4">
                  <li>
                    <a class="img-item">
                      <img src="static/images/img_14.png" alt="">
                      <p><span class="checkLab">中期审视</span></p>
                    </a>
                  </li>
                  <li>
                    <a class="img-item">
                      <img src="static/images/img_14.png" alt="">
                      <p><span class="checkLab">中期审视</span></p>
                    </a>
                  </li>
                </ul>
                <!--  -->
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          德电公有云项目
        </div>
        <div class="potal-body">
          <!--  -->
          <div class="swiper-container swiper-container-1">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <!--  -->
                <ul class="list-img" data-col="4">
                  <li>
                    <a class="img-item" href="page-project.html">
                      <img src="static/images/img_15.png" alt="">
                      <p><span class="checkLab">项目简介</span></p>
                    </a>
                  </li>
                  <li>
                    <a class="img-item" href="page-step-mile.html">
                      <img src="static/images/img_16.png" alt="">
                      <p><span class="checkLab">项目里程碑</span></p>
                    </a>
                  </li>
                  <li>
                    <a class="img-item" href="page-persons.html">
                      <img src="static/images/img_17.png" alt="">
                      <p><span class="checkLab">项目人员</span></p>
                    </a>
                  </li>
                </ul>
                <!--  -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          推荐知识
        </div>
        <div class="potal-body">
          <!--  -->
          <div>
            <mu-tabs :value="tab_recommend" @change="handle_tab_recommend">
              <mu-tab value="tab1" title="进行中" />
              <mu-tab value="tab2" title="已完成" />
              <mu-tab value="tab3" title="可报名" />
            </mu-tabs>
            <!--  -->
            <ul class="list border" v-if="tab_recommend === 'tab1'">
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备课堂演练基础知识储备课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                </div>
              </li>
            </ul>
            <!--  -->
            <ul class="list border" v-if="tab_recommend === 'tab2'">
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                </div>
              </li>
            </ul>
            <!--  -->
            <ul class="list border" v-if="tab_recommend === 'tab3'">
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                  <p class="btns">
                    <a class="btn-block-o-sm">报名</a>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                  <p class="btns">
                    <a class="btn-block-o-sm">报名</a>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon icon-clock mg-r-5 c-03"></i>
                    <span>2016-11-24 至 2017-10-20</span>
                  </p>
                  <p class="btns">
                    <a class="btn-block-o-sm">报名</a>
                  </p>
                </div>
              </li>
            </ul>
            <!--  -->
          </div>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          培训面授
        </div>
        <div class="potal-body">
          <!--  -->
          <div>
            <mu-tabs :value="tab_training" @change="handle_tab_training">
              <mu-tab value="tab1" title="社区" />
              <mu-tab value="tab2" title="课程" />
            </mu-tabs>
            <!--  -->
            <ul class="list border" v-if="tab_training === 'tab1'">
              <li>
                <div class="news-item" data-view="right">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备课堂演练基础知识储备课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <span class="mg-r-5">XMEN</span>
                    <span class="mg-r-5">3月9日</span>
                    <span class="mg-r-5">9999+浏览</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item" data-view="right">
                  <p class="title">100 announcements form Google Cloud Next 2017-A Mast read for All Cloud folke.</p>
                  <p class="other">
                    <span class="mg-r-5">XMEN</span>
                    <span class="mg-r-5">3月9日</span>
                    <span class="mg-r-5">100浏览</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item" data-view="right">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <span class="mg-r-5">XMEN</span>
                    <span class="mg-r-5">3月9日</span>
                    <span class="mg-r-5">100浏览</span>
                  </p>
                </div>
              </li>
            </ul>
            <!--  -->
            <ul class="list border" v-if="tab_training === 'tab2'">
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon  icon-user mg-r-5 c-02"></i>
                    <span class="mg-r-15">4596</span>
                    <i class="icon icon-emotsmile mg-r-5 c-03"></i>
                    <span>96%</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon  icon-user mg-r-5 c-02"></i>
                    <span class="mg-r-15">4596</span>
                    <i class="icon icon-emotsmile mg-r-5 c-03"></i>
                    <span>96%</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="news-item">
                  <img src="static/update/news.png" alt="">
                  <p class="title">
                    市场青训战略预备队 - 课堂演练基础知识储备
                  </p>
                  <p class="other">
                    <i class="icon  icon-user mg-r-5 c-02"></i>
                    <span class="mg-r-15">9999+</span>
                    <i class="icon icon-emotsmile mg-r-5 c-03"></i>
                    <span>96%</span>
                  </p>
                </div>
              </li>
            </ul>
            <!--  -->
          </div>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="space"></div>
      <!--  -->
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      slides: ['← o →', 'Page 2', 'Page 3'],
      tab_recommend: 'tab1',
      tab_training: 'tab1'
    }
  },
  methods: {
    handle_tab_recommend (val) {
      this.tab_recommend = val
    },
    handle_tab_training (val) {
      this.tab_training = val
    }
  }
}
</script>
<style>
.swiper {
  height: 200px;
}

.swiper-wrap > div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 48px;
  color: #fff;
}

.swiper-wrap > div:nth-child(3n) {
  background-color: skyblue;
}

.swiper-wrap > div:nth-child(3n + 1) {
  background-color: yellowgreen;
}

.swiper-wrap > div:nth-child(3n + 2) {
  background-color: rosybrown;
}

</style>
