<template>
  <div class="on-fix-header">
    <div class="header">
      <mu-appbar title="报名" class="tc">
        <mu-icon-button slot="left" onclick="history.go(-1)">
          <i class="fa fa-chevron-left"></i>
        </mu-icon-button>
        <mu-icon-button slot="right">
        </mu-icon-button>
      </mu-appbar>
    </div>
    <div class="wraper">
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          选择场景
        </div>
        <div class="potal-body">
          <ul class="list-img">
            <li>
              <a class="img-item">
                <img src="static/images/img_01.png" alt="">
                <p><span class="checkLab">云</span></p>
                <p class="c-01 mg-5">31人</p>
              </a>
            </li>
            <li>
              <a class="img-item">
                <img src="static/images/img_02.png" alt="">
                <p><span class="checkLab">视频</span></p>
                <p class="c-01 mg-5">31人</p>
              </a>
            </li>
            <li>
              <a class="img-item">
                <img src="static/images/img_03.png" alt="">
                <p><span class="checkLab">传统增量战场</span></p>
                <p class="c-01 mg-5">31人</p>
              </a>
            </li>
            <li>
              <a class="img-item selected">
                <img src="static/images/img_04.png" alt="">
                <p><span class="checkLab">数字化运维</span></p>
                <p class="c-01 mg-5">31人<span class="c-02">(主)</span></p>
              </a>
            </li>
            <li>
              <a class="img-item selected">
                <img src="static/images/img_05.png" alt="">
                <p><span class="checkLab">网络架构转型</span></p>
                <p class="c-01 mg-5">31人<span class="c-05">(辅)</span></p>
              </a>
            </li>
            <li>
              <a class="img-item">
                <img src="static/images/img_06.png" alt="">
                <p><span class="checkLab">平安城市</span></p>
                <p class="c-01 mg-5">31人</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          基础信息
        </div>
        <div class="potal-body pd-l-10 pd-r-10">
          <ul class="list border">
            <li>
              <a class="list-item fa fa-chevron-right" onclick="window.open('model.select.profession.html','_self')">
                <i class="icon icon-wrench c-02"></i>
                <span>专业1</span>
                <span class="c-05">(首选)</span>
              </a>
              <a class="list-item fa fa-chevron-right" onclick="window.open('model.select.profession.html','_self')">
                <i class="icon icon-wrench c-03"></i>
                <span>专业2</span>
                <span class="c-05">(备选)</span>
              </a>
              <a class="list-item fa fa-chevron-right" onclick="window.open('model.select.area.html','_self')">
                <i class="icon icon-location-pin c-02"></i>
                <span>地区</span>
                <span class="c-05"></span>
              </a>
            </li>
            <li>
              <div class="list-item">
                <h4>经验</h4>
                <p class="f-12 c-05">一颗星为工作经验1年以下，每加一颗星增加2年，请以此为依据为自己打星，星数会影响所接任务内容，请谨慎评定</p>
                <p>自我评定<span class="pull-right">***</span></p>
              </div>
            </li>
            <li>
              <div class="list-item">
                是否有团队管理经验<span class="pull-right c-05">是 <input type="checkbox" class="al-toggle-button" checked></span>
              </div>
              <a class="list-item fa fa-chevron-right" onclick="window.open('model.textarea.history.html','_self')">
                            参加过预备队训战
                        </a>
              <div class="list-item">
                <p class="f-12 c-05">一颗星为工作经验1年以下，每加一颗星增加2年，请以此为依据为自己打星，星数会影响所接任务内容，请谨慎评定</p>
              </div>
            </li>
            <li>
              <a class="list-item fa fa-chevron-right">
							护照签发地
						</a>
              <div class="list-item">
                <p class="f-12 c-05">中国，湖北省，武汉市，江厦区</p>
              </div>
            </li>
            <li>
              <a class="list-item fa fa-chevron-right">
							户口所在地
						</a>
              <div class="list-item">
                <p class="f-12 c-05">中国，湖北省，武汉市，江厦区</p>
              </div>
            </li>
            <li>
              <a class="list-item">
							护照失效日期<i class="pull-right icon icon-calendar c-02"></i>	
						</a>
              <div class="list-item">
                <p class="f-12 c-05">2018-01-15</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          推荐人<span class="f-14">（2位）</span>
        </div>
        <div class="potal-body pd-l-10 pd-r-10">
          <ul class="list">
            <li class="line-bottom-dot">
              <a class="user-item">
                <i class="glyphicon glyphicon-user user-photo"></i>
                <span class="c-05">点击查找通讯录</span>
              </a>
              <a class="list-item fa fa-chevron-right" onclick="window.open('model.select.between.html','_self')">
                <i class="icon icon-link c-02"></i>
                <span>与我的关系</span>
              </a>
            </li>
            <li>
              <a class="user-item">
                <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
                <span>彭四月</span>
                <span class="pull-right">
								<span class="c-05">修改</span>
                <i class="glyphicon glyphicon-user c-03"></i>
                </span>
              </a>
              <a class="list-item fa fa-chevron-right" onclick="window.open('model.select.between.html','_self')">
                <i class="icon icon-link c-02"></i>
                <span>与我的关系</span>
              </a>
              <div class="list-item">
                <p class="f-12 c-05">同事</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          语言
          <a class="pull-right f-14">
					添加语言 <i class="glyphicon glyphicon-plus c-02"></i>	
				</a>
        </div>
        <div class="potal-body pd-l-10 pd-r-10">
          <ul class="list border">
            <li>
              <div class="list-item">
                英语<span class="c-02">（必填）</span>
              </div>
              <div class="list-item">
                <p class="f-12 c-05">一颗星为工作经验1年以下，每加一颗星增加2年，请以此为依据为自己打星，星数会影响所接任务内容，请谨慎评定</p>
                <p>自我评定<span class="pull-right">***</span></p>
              </div>
            </li>
            <li>
              <div class="list-item fa fa-chevron-right" onclick="window.open('model.select.lang.html','_self')">
                <a class="btn-left"><i class="glyphicon glyphicon-minus-sign c-02"></i></a>
                <span>英语</span>
              </div>
              <div class="list-item">
                <p class="f-12 c-05">一颗星为工作经验1年以下，每加一颗星增加2年，请以此为依据为自己打星，星数会影响所接任务内容，请谨慎评定</p>
                <p>自我评定<span class="pull-right">***</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div class="potal">
        <div class="potal-header">
          自我评估
        </div>
        <div class="potal-body">
          <div class="input-group">
            <textarea style="height: 8em;" placeholder="这里您可以描述主动申请战略预备队的原因，以及您以往的项目经历和工作能力，以提高您的竞争力。"></textarea>
          </div>
        </div>
        <div class="potal-footer">
          <div class="input-group">
            <input id="1" type="checkbox" class="magic-checkbox">
            <label for="1" class="f-12">本人声明：我申请加入战略预备队听从组织安排。我确认所提交的申请内容和<span class="c-02">个人简历（CV）</span>都是真实可靠的，并对此负责。</label>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- <div class="tc pd-15">
            <button class="btn btn-block-o" style="width: 60%;">我准备好了</button>
        </div> -->
    <!--  -->
    <div class="tc pd-15">
      <button class="btn btn-block-d" style="width: 45%;">保存</button>
      <button class="btn btn-block-o" style="width: 45%;" onclick="window.open('page-step.html','_self')">提交</button>
    </div>
    <!--  -->
    <div class="space"></div>
  </div>
</template>
<script></script>
<style></style>
