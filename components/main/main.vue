<template>
  <div class="container body">
    <div class="main_container">
      <my-sidemenu></my-sidemenu>
      <my-topnav></my-topnav>
      <my-content>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </my-content>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
  import MyTopnav from '@/components/topnav/topnav.vue'
  import MySidemenu from '@/components/sidemenu/sidemenu1.vue'
  import MyContent from '@/components/content/content.vue'
  import MyFooter from '@/components/footer/footer.vue'
  export default {
    name: 'App',
    components: {
      'my-sidemenu': MySidemenu,
      'my-content': MyContent,
      'my-topnav': MyTopnav,
      'my-footer': MyFooter
    },
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    setContentHeight () {
      let $RIGHT_COL = $('.right_col')
      let $LEFT_COL = $('.left_col')
      let $BODY = $('body')
      let $FOOTER = $('footer')
      let $NAV_MENU = $('.nav_menu')
      let  $SIDEBAR_FOOTER = $('.sidebar-footer')
      $RIGHT_COL.css('min-height', $(window).height());
      var bodyHeight = $BODY.outerHeight(),
        footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
        leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
        contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

      contentHeight -= $NAV_MENU.height() + footerHeight;

      $RIGHT_COL.css('min-height', contentHeight);
    }
  },
  mounted () {
    var _=this;
    $(document).ready(function() {
      $(window).smartresize(function(){
        _.setContentHeight();
      });
      _.setContentHeight();
      // fixed sidebar
      if ($.fn.mCustomScrollbar) {
        $('.menu_fixed').mCustomScrollbar({
          autoHideScrollbar: true,
          theme: 'minimal',
          mouseWheel:{ preventDefault: true }
        });
      }
      let $BODY = $('body')
      let $MENU_TOGGLE = $('#menu_toggle')
      let $SIDEBAR_MENU = $('#sidebar-menu')
      // toggle small or large menu
      $MENU_TOGGLE.on('click', function() {
        if ($BODY.hasClass('nav-md')) {
          $SIDEBAR_MENU.find('li.active ul').hide();
          $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
          $SIDEBAR_MENU.find('li.active-sm ul').show();
          $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $BODY.toggleClass('nav-md nav-sm');

        _.setContentHeight();

        $('.dataTable').each ( function () { $(this).dataTable().fnDraw(); });


      });
    })
  }
  }
</script>

<style>
</style>
