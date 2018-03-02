<template>
  <div class="col-md-3 left_col">
    <div class="left_col scroll-view">

      <div class="navbar nav_title" style="border: 0;">
        <a href="index.html" class="site_title"><i class="fa fa-paw"></i>
          <span>Gentelella Alela!</span></a>
      </div>
      <div class="clearfix"></div>
      <div class="profile clearfix"><!--img_2 -->
        <div class="profile_pic">
          <img src="static/images/img.jpg" alt="..." class="img-circle profile_img">
        </div>
        <div class="profile_info">
          <span>Welcome,</span>
          <h2>Aalon</h2>
        </div>
      </div>

      <br>
      <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
        <div class="menu_section" v-for="ml in meueList">
          <h3>{{ml.KP}}</h3>
          <ul class="nav side-menu"   v-for="item in ml.VL">
            <li><a @click="toggleclick($event)"><i :class="item.className"></i> {{item.title}} <span class="fa fa-chevron-down"></span></a>
              <ul class="nav child_menu" >
                <li v-for="sub in item.subList">
                  <router-link :to="sub.url">{{sub.title}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings">
          <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
          <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Lock">
          <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Logout">
          <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  data ()
{
  return {
    meueList: []
  }
},
  created () {
    axios.get('static/data/menu.json').then((res) => {
       this.meueList = res.data.data;
    })
  },
  methods: {
    toggleclick (e) {
      let $li = $(e.target).parents("li")
      let $SIDEBAR_MENU = $('#sidebar-menu')
      if ($li.is('.active')) {
        $li.removeClass('active active-sm')
        $('ul:first', $li).slideUp()
      } else {
        if (!$li.parent().is('.child_menu')) {
          $SIDEBAR_MENU.find('li').removeClass('active active-sm')
          $SIDEBAR_MENU.find('li ul').slideUp()
        }
        $li.addClass('active')
        $('ul:first', $li).slideDown()
      }
    }
  },
  mounted () {
  }
}
</script>
