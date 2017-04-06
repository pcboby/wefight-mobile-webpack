<template>
  <div class="on-fix-header on-trans-header pages-gray">
    <div class="header">
      <mu-appbar>
        <mu-icon-button slot="left" onclick="history.go(-1)">
          <i class="fa fa-chevron-left"></i>
        </mu-icon-button>
      </mu-appbar>
    </div>
    <div class="wraper">
      <!--  -->
      <div class="list-group-header" style="background-image: url(static/update/group_0.jpg);">
        <div>
          <ul class="list-group-users" data-view="4">
            <li>
              <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
            </li>
            <li>
              <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
            </li>
            <li>
              <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
            </li>
            <li>
              <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
            </li>
          </ul>
          <h4>
            <span>用户设计小分队</span>
            <a><i class="icon icon-note"></i></a>
          </h4>
        </div>
      </div>
      <!--  -->
      <div class="potal mg-0 shadow">
        <div class="potal-body">
          <!--  -->
          <div class="swiper-container swiper-container-0">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul class="list-icons">
                  <li>
                    <a><i class="fa fa-folder-open" style="background-color: #00c595;"></i><span>群文件</span></a>
                  </li>
                  <li>
                    <a><i class="fa fa-volume-up" style="background-color: #faa701;"></i><span>群公告</span></a>
                  </li>
                  <li>
                    <a><i class="fa fa-bookmark" style="background-color: #9d3e9a;"></i><span>群任务</span></a>
                  </li>
                  <li>
                    <a><i class="fa fa-th-large" style="background-color: #83b6d5;"></i><span>项目</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="space"></div>
      <!--  -->
      <div class="potal mg-0 shadow">
        <div class="potal-body">
          <!--  -->
          <ul class="list">
            <li>
              <a class="list-item fa fa-chevron-right">
                <span>群成员</span>
                <span class="pull-right mg-r-10">10人</span>
              </a>
            </li>
          </ul>
          <div class="swiper-container swiper-container-0">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul class="list-users">
                  <li>
                    <a>
                      <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="user-photo" style="background-image: url(static/update/11111.jpg);"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <!-- <i class="user-photo" style="background-image: url(../update/11111.jpg);"></i> -->
                      <i class="glyphicon glyphicon-user user-photo"></i>
                    </a>
                  </li>
                  <li>
                    <a class="list-users-btn">
                      <i class="glyphicon glyphicon-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a class="list-users-btn">
                      <i class="glyphicon glyphicon-minus"></i>
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
      <div class="space"></div>
      <!--  -->
      <div class="potal mg-0 shadow">
        <div class="potal-body">
          <!--  -->
          <ul class="list border">
            <li>
              <a class="list-item fa fa-chevron-right">
                <span>群二维码</span>
                <i class="pull-right mg-r-10 glyphicon glyphicon-qrcode"></i>
              </a>
            </li>
            <li>
              <div class="list-item">
                <div class="list-item-btns">
                  <input type="checkbox" class="al-toggle-button">
                </div>
                <div class="list-item-cont">
                  <p class="mg-0">入群验证</p>
                  <p class="f-12 c-05 mg-0">开启后，新成员入群需要通过群主验证。</p>
                </div>
              </div>
            </li>
            <li>
              <div class="list-item">
                <div class="list-item-btns">
                  <input type="checkbox" class="al-toggle-button">
                </div>
                <div class="list-item-cont">
                  <p class="mg-0">开启群文件</p>
                  <p class="f-12 c-05 mg-0">开启后，可上传且管理文件。</p>
                </div>
              </div>
            </li>
            <li>
              <div class="list-item">
                <div class="list-item-btns">
                  <input type="checkbox" class="al-toggle-button" checked>
                </div>
                <div class="list-item-cont">
                  <p class="mg-0">仅群主可管理</p>
                  <p class="f-12 c-05 mg-0">管理群名称、群成员、群公告、群头像。</p>
                </div>
              </div>
            </li>
          </ul>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="space"></div>
      <!--  -->
    </div>
  </div>
</template>
<script></script>
<style></style>
