<template>
  <div>
    <div class="row">
      <!-- form input mask -->
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Input Mask</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <br>
            <form class="form-horizontal form-label-left">

              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-3">Date Mask</label>
                <div class="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" class="form-control" data-inputmask="'mask': '99/99/9999'">
                  <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-3">Phone mask</label>
                <div class="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" class="form-control" data-inputmask="'mask' : '(999) 999-9999'">
                  <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-3">Custom Mask</label>
                <div class="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" class="form-control" data-inputmask="'mask': '99-999999'">
                  <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-3">Serial Number</label>
                <div class="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" class="form-control" data-inputmask="'mask' : '****-****-****-****-****-***'">
                  <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-3">TaxID Mask</label>
                <div class="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" class="form-control" data-inputmask="'mask' : '99-99999999'">
                  <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-3">Credit Card Mask</label>
                <div class="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" class="form-control" data-inputmask="'mask' : '9999-9999-9999-9999'">
                  <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                </div>
              </div>
              <div class="ln_solid"></div>

              <div class="form-group">
                <div class="col-md-9 col-md-offset-3">
                  <button type="submit" class="btn btn-primary">Cancel</button>
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
      <!-- /form input mask -->

      <!-- form color picker -->
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Color Picker</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <br>
            <form class="form-horizontal form-label-left">

              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Default Input</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="demo1 form-control colorpicker-element" value="#5367ce">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Styled</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <div class="input-group demo2 colorpicker-element">
                    <input type="text" value="#e01ab5" class="form-control">
                    <span class="input-group-addon"><i style="background-color: rgb(224, 26, 181);"></i></span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Horizontal bar</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control demo colorpicker-element" data-horizontal="true" id="demo_forceformat" value="#8fff00">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Vertical bar</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" class="form-control demo colorpicker-element" id="demo_forceformat3" value="#8fff00">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Inline picker</label>
                <div class="col-md-9 col-sm-9 col-xs-12">
                  <div class="well">
                    <div id="demo_cont" class="demo demo-auto inl-bl colorpicker-element" data-container="#demo_cont" data-color="rgba(150,216,62,0.55)" data-inline="true"><div class="colorpicker dropdown-menu colorpicker-inline colorpicker-visible colorpicker-with-alpha colorpicker-right colorpicker-no-arrow"><div class="colorpicker-saturation" style="background-color: rgb(146, 255, 0);"><i style="top: 43px; left: 64.375px;"><b></b></i></div><div class="colorpicker-hue"><i style="top: 76.1905px;"></i></div><div class="colorpicker-alpha" style="background-color: rgb(105, 145, 52);"><i style="top: 44px;"></i></div><div class="colorpicker-color" style="background-color: rgba(105, 145, 52, 0.56);"><div style="background-color: rgba(105, 145, 52, 0.56);"></div></div><div class="colorpicker-selectors"></div></div></div>
                    <div class="demo demo-auto inl-bl colorpicker-element" data-container="true" data-color="rgb(50,216,62)" data-inline="true" style="margin-left:20px;"><div class="colorpicker dropdown-menu colorpicker-inline colorpicker-visible colorpicker-with-alpha colorpicker-right colorpicker-no-arrow"><div class="colorpicker-saturation" style="background-color: rgb(0, 255, 18);"><i style="top: 72px; left: 49.7656px;"><b></b></i></div><div class="colorpicker-hue"><i style="top: 65.4618px;"></i></div><div class="colorpicker-alpha" style="background-color: rgb(36, 71, 38);"><i style="top: 0px;"></i></div><div class="colorpicker-color" style="background-color: rgb(36, 71, 38);"><div style="background-color: rgb(36, 71, 38);"></div></div><div class="colorpicker-selectors"></div></div></div>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
      <!-- /form color picker -->

      <!-- form input knob -->
      <div class="col-md-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Input knob</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <div class="col-md-2">
              <p>Display value</p>
              <div style="display:inline;width:100px;height:120px;"><canvas width="100" height="120"></canvas><input class="knob" data-width="100" data-height="120" data-min="-100" data-displayprevious="true" data-fgcolor="#26B99A" value="44" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; background: none; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(38, 185, 154); padding: 0px; -webkit-appearance: none;"></div>
            </div>
            <div class="col-md-2">
              <p>× 'cursor' mode</p>
              <div style="display:inline;width:100px;height:120px;"><canvas width="100" height="120"></canvas><input class="knob" data-width="100" data-height="120" data-cursor="true" data-fgcolor="#34495E" value="29" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; background: none; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(52, 73, 94); padding: 0px; -webkit-appearance: none;"></div>
            </div>
            <div class="col-md-2">
              <p>Step 0.1</p>
              <div style="display:inline;width:100px;height:120px;"><canvas width="100" height="120"></canvas><input class="knob" data-width="100" data-height="120" data-min="-10000" data-displayprevious="true" data-fgcolor="#26B99A" data-max="10000" data-step=".1" value="0" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; background: none; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Arial; text-align: center; color: rgb(38, 185, 154); padding: 0px; -webkit-appearance: none;"></div>
            </div>
            <div class="col-md-2">
              <p>Angle arc</p>
              <div style="display:inline;width:100px;height:120px;"><canvas width="100" height="120"></canvas><input class="knob" data-width="100" data-height="120" data-angleoffset="-125" data-anglearc="250" data-fgcolor="#34495E" data-rotation="anticlockwise" value="35" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; background: none; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(52, 73, 94); padding: 0px; -webkit-appearance: none;"></div>
            </div>
            <div class="col-md-2">
              <p>Alternate design</p>
              <div style="display:inline;width:110px;height:120px;"><canvas width="110" height="120"></canvas><input class="knob" data-width="110" data-height="120" data-displayprevious="true" data-fgcolor="#26B99A" data-skin="tron" data-thickness=".2" value="75" style="width: 59px; height: 36px; position: absolute; vertical-align: middle; margin-top: 36px; margin-left: -84px; border: 0px; background: none; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 22px; line-height: normal; font-family: Arial; text-align: center; color: rgb(38, 185, 154); padding: 0px; -webkit-appearance: none;"></div>
            </div>
            <div class="col-md-2">
              <p>Angle offset</p>
              <div style="display:inline;width:100px;height:120px;"><canvas width="100" height="120"></canvas><input class="knob" data-width="100" data-height="120" data-angleoffset="90" data-linecap="round" data-fgcolor="#26B99A" value="35" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; background: none; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(38, 185, 154); padding: 0px; -webkit-appearance: none;"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /form input knob -->

    </div>
    <div class="row">
      <div class="col-md-12">

        <!-- form date pickers -->
        <div class="x_panel" style="">
          <div class="x_title">
            <h2>Date Pickers <small> Available with multiple designs</small></h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">


            <div class="well" style="overflow: auto">
              <div class="col-md-4">
                <div id="reportrange_right" class="pull-left" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc">
                  <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                  <span>January 30, 2018 - February 28, 2018</span> <b class="caret"></b>
                </div>
              </div>
              <div class="col-md-4">
                <p>Date Range Picker with opening to right and left</p>
              </div>
              <div class="col-md-4">
                <div id="reportrange" class="pull-right" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc">
                  <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>
                  <span>January 30, 2018 - February 28, 2018</span> <b class="caret"></b>
                </div>
              </div>
            </div>


            <div class="well" style="overflow: auto">
              <div class="col-md-4">
                Date Range Picker
                <form class="form-horizontal">
                  <fieldset>
                    <div class="control-group">
                      <div class="controls">
                        <div class="input-prepend input-group">
                          <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
                          <input type="text" style="width: 200px" name="reservation" id="reservation" class="form-control" value="01/01/2016 - 01/25/2016">
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>

              <div class="col-md-5">
                Date and Time
                <form class="form-horizontal">
                  <fieldset>
                    <div class="control-group">
                      <div class="controls">
                        <div class="input-prepend input-group">
                          <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
                          <input type="text" name="reservation-time" id="reservation-time" class="form-control" value="01/01/2016 - 01/25/2016">
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>

            <div class="row calendar-exibit">
              <div class="col-md-3">
                <div class="daterangepicker dropdown-menu ltr single opensright show-calendar picker_1 xdisplay"><div class="calendar left single" style="display: block;"><div class="daterangepicker_input"><input class="input-mini form-control active" type="text" name="daterangepicker_start" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th><th colspan="5" class="month">Oct 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">25</td><td class="off available" data-title="r0c1">26</td><td class="off available" data-title="r0c2">27</td><td class="off available" data-title="r0c3">28</td><td class="off available" data-title="r0c4">29</td><td class="off available" data-title="r0c5">30</td><td class="weekend available" data-title="r0c6">1</td></tr><tr><td class="weekend available" data-title="r1c0">2</td><td class="available" data-title="r1c1">3</td><td class="available" data-title="r1c2">4</td><td class="available" data-title="r1c3">5</td><td class="available" data-title="r1c4">6</td><td class="available" data-title="r1c5">7</td><td class="weekend available" data-title="r1c6">8</td></tr><tr><td class="weekend available" data-title="r2c0">9</td><td class="available" data-title="r2c1">10</td><td class="available" data-title="r2c2">11</td><td class="available" data-title="r2c3">12</td><td class="available" data-title="r2c4">13</td><td class="available" data-title="r2c5">14</td><td class="weekend available" data-title="r2c6">15</td></tr><tr><td class="weekend available" data-title="r3c0">16</td><td class="available" data-title="r3c1">17</td><td class="today active start-date active end-date available" data-title="r3c2">18</td><td class="available" data-title="r3c3">19</td><td class="available" data-title="r3c4">20</td><td class="available" data-title="r3c5">21</td><td class="weekend available" data-title="r3c6">22</td></tr><tr><td class="weekend available" data-title="r4c0">23</td><td class="available" data-title="r4c1">24</td><td class="available" data-title="r4c2">25</td><td class="available" data-title="r4c3">26</td><td class="available" data-title="r4c4">27</td><td class="available" data-title="r4c5">28</td><td class="weekend available" data-title="r4c6">29</td></tr><tr><td class="weekend available" data-title="r5c0">30</td><td class="available" data-title="r5c1">31</td><td class="off available" data-title="r5c2">1</td><td class="off available" data-title="r5c3">2</td><td class="off available" data-title="r5c4">3</td><td class="off available" data-title="r5c5">4</td><td class="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div class="calendar right" style="display: none;"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th></th><th colspan="5" class="month">Nov 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">30</td><td class="off available" data-title="r0c1">31</td><td class="available" data-title="r0c2">1</td><td class="available" data-title="r0c3">2</td><td class="available" data-title="r0c4">3</td><td class="available" data-title="r0c5">4</td><td class="weekend available" data-title="r0c6">5</td></tr><tr><td class="weekend available" data-title="r1c0">6</td><td class="available" data-title="r1c1">7</td><td class="available" data-title="r1c2">8</td><td class="available" data-title="r1c3">9</td><td class="available" data-title="r1c4">10</td><td class="available" data-title="r1c5">11</td><td class="weekend available" data-title="r1c6">12</td></tr><tr><td class="weekend available" data-title="r2c0">13</td><td class="available" data-title="r2c1">14</td><td class="available" data-title="r2c2">15</td><td class="available" data-title="r2c3">16</td><td class="available" data-title="r2c4">17</td><td class="available" data-title="r2c5">18</td><td class="weekend available" data-title="r2c6">19</td></tr><tr><td class="weekend available" data-title="r3c0">20</td><td class="available" data-title="r3c1">21</td><td class="available" data-title="r3c2">22</td><td class="available" data-title="r3c3">23</td><td class="available" data-title="r3c4">24</td><td class="available" data-title="r3c5">25</td><td class="weekend available" data-title="r3c6">26</td></tr><tr><td class="weekend available" data-title="r4c0">27</td><td class="available" data-title="r4c1">28</td><td class="available" data-title="r4c2">29</td><td class="available" data-title="r4c3">30</td><td class="off available" data-title="r4c4">1</td><td class="off available" data-title="r4c5">2</td><td class="weekend off available" data-title="r4c6">3</td></tr><tr><td class="weekend off available" data-title="r5c0">4</td><td class="off available" data-title="r5c1">5</td><td class="off available" data-title="r5c2">6</td><td class="off available" data-title="r5c3">7</td><td class="off available" data-title="r5c4">8</td><td class="off available" data-title="r5c5">9</td><td class="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div class="ranges" style="display: none;"><div class="range_inputs"><button class="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>


                <fieldset>
                  <div class="control-group">
                    <div class="controls">
                      <div class="col-md-11 xdisplay_inputx form-group has-feedback">
                        <input type="text" class="form-control has-feedback-left" id="single_cal1" placeholder="First Name" aria-describedby="inputSuccess2Status">
                        <span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
                        <span id="inputSuccess2Status" class="sr-only">(success)</span>
                      </div>
                    </div>
                  </div>
                </fieldset>

              </div>

              <div class="col-md-3">
                <div class="daterangepicker dropdown-menu ltr single opensright show-calendar picker_2 xdisplay"><div class="calendar left single" style="display: block;"><div class="daterangepicker_input"><input class="input-mini form-control active" type="text" name="daterangepicker_start" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th><th colspan="5" class="month">Oct 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">25</td><td class="off available" data-title="r0c1">26</td><td class="off available" data-title="r0c2">27</td><td class="off available" data-title="r0c3">28</td><td class="off available" data-title="r0c4">29</td><td class="off available" data-title="r0c5">30</td><td class="weekend available" data-title="r0c6">1</td></tr><tr><td class="weekend available" data-title="r1c0">2</td><td class="available" data-title="r1c1">3</td><td class="available" data-title="r1c2">4</td><td class="available" data-title="r1c3">5</td><td class="available" data-title="r1c4">6</td><td class="available" data-title="r1c5">7</td><td class="weekend available" data-title="r1c6">8</td></tr><tr><td class="weekend available" data-title="r2c0">9</td><td class="available" data-title="r2c1">10</td><td class="available" data-title="r2c2">11</td><td class="available" data-title="r2c3">12</td><td class="available" data-title="r2c4">13</td><td class="available" data-title="r2c5">14</td><td class="weekend available" data-title="r2c6">15</td></tr><tr><td class="weekend available" data-title="r3c0">16</td><td class="available" data-title="r3c1">17</td><td class="today active start-date active end-date available" data-title="r3c2">18</td><td class="available" data-title="r3c3">19</td><td class="available" data-title="r3c4">20</td><td class="available" data-title="r3c5">21</td><td class="weekend available" data-title="r3c6">22</td></tr><tr><td class="weekend available" data-title="r4c0">23</td><td class="available" data-title="r4c1">24</td><td class="available" data-title="r4c2">25</td><td class="available" data-title="r4c3">26</td><td class="available" data-title="r4c4">27</td><td class="available" data-title="r4c5">28</td><td class="weekend available" data-title="r4c6">29</td></tr><tr><td class="weekend available" data-title="r5c0">30</td><td class="available" data-title="r5c1">31</td><td class="off available" data-title="r5c2">1</td><td class="off available" data-title="r5c3">2</td><td class="off available" data-title="r5c4">3</td><td class="off available" data-title="r5c5">4</td><td class="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div class="calendar right" style="display: none;"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th></th><th colspan="5" class="month">Nov 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">30</td><td class="off available" data-title="r0c1">31</td><td class="available" data-title="r0c2">1</td><td class="available" data-title="r0c3">2</td><td class="available" data-title="r0c4">3</td><td class="available" data-title="r0c5">4</td><td class="weekend available" data-title="r0c6">5</td></tr><tr><td class="weekend available" data-title="r1c0">6</td><td class="available" data-title="r1c1">7</td><td class="available" data-title="r1c2">8</td><td class="available" data-title="r1c3">9</td><td class="available" data-title="r1c4">10</td><td class="available" data-title="r1c5">11</td><td class="weekend available" data-title="r1c6">12</td></tr><tr><td class="weekend available" data-title="r2c0">13</td><td class="available" data-title="r2c1">14</td><td class="available" data-title="r2c2">15</td><td class="available" data-title="r2c3">16</td><td class="available" data-title="r2c4">17</td><td class="available" data-title="r2c5">18</td><td class="weekend available" data-title="r2c6">19</td></tr><tr><td class="weekend available" data-title="r3c0">20</td><td class="available" data-title="r3c1">21</td><td class="available" data-title="r3c2">22</td><td class="available" data-title="r3c3">23</td><td class="available" data-title="r3c4">24</td><td class="available" data-title="r3c5">25</td><td class="weekend available" data-title="r3c6">26</td></tr><tr><td class="weekend available" data-title="r4c0">27</td><td class="available" data-title="r4c1">28</td><td class="available" data-title="r4c2">29</td><td class="available" data-title="r4c3">30</td><td class="off available" data-title="r4c4">1</td><td class="off available" data-title="r4c5">2</td><td class="weekend off available" data-title="r4c6">3</td></tr><tr><td class="weekend off available" data-title="r5c0">4</td><td class="off available" data-title="r5c1">5</td><td class="off available" data-title="r5c2">6</td><td class="off available" data-title="r5c3">7</td><td class="off available" data-title="r5c4">8</td><td class="off available" data-title="r5c5">9</td><td class="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div class="ranges" style="display: none;"><div class="range_inputs"><button class="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>


                <fieldset>
                  <div class="control-group">
                    <div class="controls">
                      <div class="col-md-11 xdisplay_inputx form-group has-feedback">
                        <input type="text" class="form-control has-feedback-left" id="single_cal2" placeholder="First Name" aria-describedby="inputSuccess2Status2">
                        <span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
                        <span id="inputSuccess2Status2" class="sr-only">(success)</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-3">
                <div class="daterangepicker dropdown-menu ltr single opensright show-calendar picker_3 xdisplay"><div class="calendar left single" style="display: block;"><div class="daterangepicker_input"><input class="input-mini form-control active" type="text" name="daterangepicker_start" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th><th colspan="5" class="month">Oct 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">25</td><td class="off available" data-title="r0c1">26</td><td class="off available" data-title="r0c2">27</td><td class="off available" data-title="r0c3">28</td><td class="off available" data-title="r0c4">29</td><td class="off available" data-title="r0c5">30</td><td class="weekend available" data-title="r0c6">1</td></tr><tr><td class="weekend available" data-title="r1c0">2</td><td class="available" data-title="r1c1">3</td><td class="available" data-title="r1c2">4</td><td class="available" data-title="r1c3">5</td><td class="available" data-title="r1c4">6</td><td class="available" data-title="r1c5">7</td><td class="weekend available" data-title="r1c6">8</td></tr><tr><td class="weekend available" data-title="r2c0">9</td><td class="available" data-title="r2c1">10</td><td class="available" data-title="r2c2">11</td><td class="available" data-title="r2c3">12</td><td class="available" data-title="r2c4">13</td><td class="available" data-title="r2c5">14</td><td class="weekend available" data-title="r2c6">15</td></tr><tr><td class="weekend available" data-title="r3c0">16</td><td class="available" data-title="r3c1">17</td><td class="today active start-date active end-date available" data-title="r3c2">18</td><td class="available" data-title="r3c3">19</td><td class="available" data-title="r3c4">20</td><td class="available" data-title="r3c5">21</td><td class="weekend available" data-title="r3c6">22</td></tr><tr><td class="weekend available" data-title="r4c0">23</td><td class="available" data-title="r4c1">24</td><td class="available" data-title="r4c2">25</td><td class="available" data-title="r4c3">26</td><td class="available" data-title="r4c4">27</td><td class="available" data-title="r4c5">28</td><td class="weekend available" data-title="r4c6">29</td></tr><tr><td class="weekend available" data-title="r5c0">30</td><td class="available" data-title="r5c1">31</td><td class="off available" data-title="r5c2">1</td><td class="off available" data-title="r5c3">2</td><td class="off available" data-title="r5c4">3</td><td class="off available" data-title="r5c5">4</td><td class="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div class="calendar right" style="display: none;"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th></th><th colspan="5" class="month">Nov 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">30</td><td class="off available" data-title="r0c1">31</td><td class="available" data-title="r0c2">1</td><td class="available" data-title="r0c3">2</td><td class="available" data-title="r0c4">3</td><td class="available" data-title="r0c5">4</td><td class="weekend available" data-title="r0c6">5</td></tr><tr><td class="weekend available" data-title="r1c0">6</td><td class="available" data-title="r1c1">7</td><td class="available" data-title="r1c2">8</td><td class="available" data-title="r1c3">9</td><td class="available" data-title="r1c4">10</td><td class="available" data-title="r1c5">11</td><td class="weekend available" data-title="r1c6">12</td></tr><tr><td class="weekend available" data-title="r2c0">13</td><td class="available" data-title="r2c1">14</td><td class="available" data-title="r2c2">15</td><td class="available" data-title="r2c3">16</td><td class="available" data-title="r2c4">17</td><td class="available" data-title="r2c5">18</td><td class="weekend available" data-title="r2c6">19</td></tr><tr><td class="weekend available" data-title="r3c0">20</td><td class="available" data-title="r3c1">21</td><td class="available" data-title="r3c2">22</td><td class="available" data-title="r3c3">23</td><td class="available" data-title="r3c4">24</td><td class="available" data-title="r3c5">25</td><td class="weekend available" data-title="r3c6">26</td></tr><tr><td class="weekend available" data-title="r4c0">27</td><td class="available" data-title="r4c1">28</td><td class="available" data-title="r4c2">29</td><td class="available" data-title="r4c3">30</td><td class="off available" data-title="r4c4">1</td><td class="off available" data-title="r4c5">2</td><td class="weekend off available" data-title="r4c6">3</td></tr><tr><td class="weekend off available" data-title="r5c0">4</td><td class="off available" data-title="r5c1">5</td><td class="off available" data-title="r5c2">6</td><td class="off available" data-title="r5c3">7</td><td class="off available" data-title="r5c4">8</td><td class="off available" data-title="r5c5">9</td><td class="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div class="ranges" style="display: none;"><div class="range_inputs"><button class="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>

                <fieldset>
                  <div class="control-group">
                    <div class="controls">
                      <div class="col-md-11 xdisplay_inputx form-group has-feedback">
                        <input type="text" class="form-control has-feedback-left" id="single_cal3" placeholder="First Name" aria-describedby="inputSuccess2Status3">
                        <span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
                        <span id="inputSuccess2Status3" class="sr-only">(success)</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div class="col-md-3">
                <div class="daterangepicker dropdown-menu ltr single opensright show-calendar picker_4 xdisplay"><div class="calendar left single" style="display: block;"><div class="daterangepicker_input"><input class="input-mini form-control active" type="text" name="daterangepicker_start" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th><th colspan="5" class="month">Oct 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">25</td><td class="off available" data-title="r0c1">26</td><td class="off available" data-title="r0c2">27</td><td class="off available" data-title="r0c3">28</td><td class="off available" data-title="r0c4">29</td><td class="off available" data-title="r0c5">30</td><td class="weekend available" data-title="r0c6">1</td></tr><tr><td class="weekend available" data-title="r1c0">2</td><td class="available" data-title="r1c1">3</td><td class="available" data-title="r1c2">4</td><td class="available" data-title="r1c3">5</td><td class="available" data-title="r1c4">6</td><td class="available" data-title="r1c5">7</td><td class="weekend available" data-title="r1c6">8</td></tr><tr><td class="weekend available" data-title="r2c0">9</td><td class="available" data-title="r2c1">10</td><td class="available" data-title="r2c2">11</td><td class="available" data-title="r2c3">12</td><td class="available" data-title="r2c4">13</td><td class="available" data-title="r2c5">14</td><td class="weekend available" data-title="r2c6">15</td></tr><tr><td class="weekend available" data-title="r3c0">16</td><td class="available" data-title="r3c1">17</td><td class="today active start-date active end-date available" data-title="r3c2">18</td><td class="available" data-title="r3c3">19</td><td class="available" data-title="r3c4">20</td><td class="available" data-title="r3c5">21</td><td class="weekend available" data-title="r3c6">22</td></tr><tr><td class="weekend available" data-title="r4c0">23</td><td class="available" data-title="r4c1">24</td><td class="available" data-title="r4c2">25</td><td class="available" data-title="r4c3">26</td><td class="available" data-title="r4c4">27</td><td class="available" data-title="r4c5">28</td><td class="weekend available" data-title="r4c6">29</td></tr><tr><td class="weekend available" data-title="r5c0">30</td><td class="available" data-title="r5c1">31</td><td class="off available" data-title="r5c2">1</td><td class="off available" data-title="r5c3">2</td><td class="off available" data-title="r5c4">3</td><td class="off available" data-title="r5c5">4</td><td class="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div class="calendar right" style="display: none;"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th></th><th colspan="5" class="month">Nov 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">30</td><td class="off available" data-title="r0c1">31</td><td class="available" data-title="r0c2">1</td><td class="available" data-title="r0c3">2</td><td class="available" data-title="r0c4">3</td><td class="available" data-title="r0c5">4</td><td class="weekend available" data-title="r0c6">5</td></tr><tr><td class="weekend available" data-title="r1c0">6</td><td class="available" data-title="r1c1">7</td><td class="available" data-title="r1c2">8</td><td class="available" data-title="r1c3">9</td><td class="available" data-title="r1c4">10</td><td class="available" data-title="r1c5">11</td><td class="weekend available" data-title="r1c6">12</td></tr><tr><td class="weekend available" data-title="r2c0">13</td><td class="available" data-title="r2c1">14</td><td class="available" data-title="r2c2">15</td><td class="available" data-title="r2c3">16</td><td class="available" data-title="r2c4">17</td><td class="available" data-title="r2c5">18</td><td class="weekend available" data-title="r2c6">19</td></tr><tr><td class="weekend available" data-title="r3c0">20</td><td class="available" data-title="r3c1">21</td><td class="available" data-title="r3c2">22</td><td class="available" data-title="r3c3">23</td><td class="available" data-title="r3c4">24</td><td class="available" data-title="r3c5">25</td><td class="weekend available" data-title="r3c6">26</td></tr><tr><td class="weekend available" data-title="r4c0">27</td><td class="available" data-title="r4c1">28</td><td class="available" data-title="r4c2">29</td><td class="available" data-title="r4c3">30</td><td class="off available" data-title="r4c4">1</td><td class="off available" data-title="r4c5">2</td><td class="weekend off available" data-title="r4c6">3</td></tr><tr><td class="weekend off available" data-title="r5c0">4</td><td class="off available" data-title="r5c1">5</td><td class="off available" data-title="r5c2">6</td><td class="off available" data-title="r5c3">7</td><td class="off available" data-title="r5c4">8</td><td class="off available" data-title="r5c5">9</td><td class="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div class="ranges" style="display: none;"><div class="range_inputs"><button class="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>


                <fieldset>
                  <div class="control-group">
                    <div class="controls">
                      <div class="col-md-11 xdisplay_inputx form-group has-feedback">
                        <input type="text" class="form-control has-feedback-left" id="single_cal4" placeholder="First Name" aria-describedby="inputSuccess2Status4">
                        <span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
                        <span id="inputSuccess2Status4" class="sr-only">(success)</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

          </div>
        </div>
        <!-- /form datepicker -->


        <!-- form grid slider -->
        <div class="x_panel" style="">
          <div class="x_title">
            <h2>Grid Slider</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <div class="row grid_slider">

              <div class="col-md-6 col-sm-6 col-xs-12">
                <p>Default grid slider with min and max values</p>
                <span class="irs js-irs-1 irs-with-grid"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="display: none; visibility: visible;">0</span><span class="irs-max" style="display: none; visibility: visible;">1</span><span class="irs-from" style="visibility: visible; left: 16.7759%;">$1 000</span><span class="irs-to" style="visibility: visible; left: 75.1207%;">$4 000</span><span class="irs-single" style="visibility: hidden; left: 41.2069%;">$1 000 — $4 000</span></span><span class="irs-grid" style="width: 97.2414%; left: 1.27931%;"><span class="irs-grid-pol" style="left: 0%"></span><span class="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -1.03448%;">0</span><span class="irs-grid-pol small" style="left: 20%"></span><span class="irs-grid-pol small" style="left: 15%"></span><span class="irs-grid-pol small" style="left: 10%"></span><span class="irs-grid-pol small" style="left: 5%"></span><span class="irs-grid-pol" style="left: 25%"></span><span class="irs-grid-text js-grid-text-1" style="left: 25%; visibility: visible; margin-left: -3.10345%;">1 250</span><span class="irs-grid-pol small" style="left: 45%"></span><span class="irs-grid-pol small" style="left: 40%"></span><span class="irs-grid-pol small" style="left: 35%"></span><span class="irs-grid-pol small" style="left: 30%"></span><span class="irs-grid-pol" style="left: 50%"></span><span class="irs-grid-text js-grid-text-2" style="left: 50%; visibility: visible; margin-left: -3.10345%;">2 500</span><span class="irs-grid-pol small" style="left: 70%"></span><span class="irs-grid-pol small" style="left: 65%"></span><span class="irs-grid-pol small" style="left: 60%"></span><span class="irs-grid-pol small" style="left: 55%"></span><span class="irs-grid-pol" style="left: 75%"></span><span class="irs-grid-text js-grid-text-3" style="left: 75%; visibility: visible; margin-left: -3.10345%;">3 750</span><span class="irs-grid-pol small" style="left: 95%"></span><span class="irs-grid-pol small" style="left: 90%"></span><span class="irs-grid-pol small" style="left: 85%"></span><span class="irs-grid-pol small" style="left: 80%"></span><span class="irs-grid-pol" style="left: 100%"></span><span class="irs-grid-text js-grid-text-4" style="left: 100%; margin-left: -3.10345%;">5 000</span></span><span class="irs-bar" style="left: 20.8276%; width: 58.3448%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 19.4483%;"></span><span class="irs-slider to type_last" style="left: 77.7931%;"></span></span><input type="text" id="range" value="" name="range" class="irs-hidden-input" readonly="">
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <p>Grid with slider labels are far away outside it's container</p>
                <span class="irs js-irs-2 irs-with-grid"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: hidden;">1 000 000</span><span class="irs-max" style="visibility: hidden;">2 000 000</span><span class="irs-from" style="visibility: visible; left: -4.05172%;">1 000 000</span><span class="irs-to" style="visibility: visible; left: 93.1897%;">2 000 000</span><span class="irs-single" style="visibility: hidden; left: 38.3621%;">1 000 000 — 2 000 000</span></span><span class="irs-grid" style="width: 97.2414%; left: 1.27931%;"><span class="irs-grid-pol" style="left: 0%"></span><span class="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -5.17241%;">1 000 000</span><span class="irs-grid-pol small" style="left: 20%"></span><span class="irs-grid-pol small" style="left: 15%"></span><span class="irs-grid-pol small" style="left: 10%"></span><span class="irs-grid-pol small" style="left: 5%"></span><span class="irs-grid-pol" style="left: 25%"></span><span class="irs-grid-text js-grid-text-1" style="left: 25%; visibility: visible; margin-left: -5.17241%;">1 250 000</span><span class="irs-grid-pol small" style="left: 45%"></span><span class="irs-grid-pol small" style="left: 40%"></span><span class="irs-grid-pol small" style="left: 35%"></span><span class="irs-grid-pol small" style="left: 30%"></span><span class="irs-grid-pol" style="left: 50%"></span><span class="irs-grid-text js-grid-text-2" style="left: 50%; visibility: visible; margin-left: -5.08621%;">1 500 000</span><span class="irs-grid-pol small" style="left: 70%"></span><span class="irs-grid-pol small" style="left: 65%"></span><span class="irs-grid-pol small" style="left: 60%"></span><span class="irs-grid-pol small" style="left: 55%"></span><span class="irs-grid-pol" style="left: 75%"></span><span class="irs-grid-text js-grid-text-3" style="left: 75%; visibility: visible; margin-left: -5.08621%;">1 750 000</span><span class="irs-grid-pol small" style="left: 95%"></span><span class="irs-grid-pol small" style="left: 90%"></span><span class="irs-grid-pol small" style="left: 85%"></span><span class="irs-grid-pol small" style="left: 80%"></span><span class="irs-grid-pol" style="left: 100%"></span><span class="irs-grid-text js-grid-text-4" style="left: 100%; margin-left: -5.08621%;">2 000 000</span></span><span class="irs-bar" style="left: 1.37931%; width: 97.2414%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 0%;"></span><span class="irs-slider to" style="left: 97.2414%;"></span></span><input type="text" id="range_25" value="" name="range" class="irs-hidden-input" readonly="">
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <p>Grid with labels inside container using force_edges attribute</p>
                <span class="irs js-irs-0 irs-with-grid"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: hidden;">1 000 000</span><span class="irs-max" style="visibility: hidden;">2 000 000</span><span class="irs-from" style="visibility: visible; left: 0%;">1 000 000</span><span class="irs-to" style="visibility: visible; left: 89.1379%;">2 000 000</span><span class="irs-single" style="visibility: hidden; left: 38.3621%;">1 000 000 — 2 000 000</span></span><span class="irs-grid" style="width: 97.2414%; left: 1.27931%;"><span class="irs-grid-pol" style="left: 0%"></span><span class="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -1.27931%;">1 000 000</span><span class="irs-grid-pol small" style="left: 20%"></span><span class="irs-grid-pol small" style="left: 15%"></span><span class="irs-grid-pol small" style="left: 10%"></span><span class="irs-grid-pol small" style="left: 5%"></span><span class="irs-grid-pol" style="left: 25%"></span><span class="irs-grid-text js-grid-text-1" style="left: 25%; visibility: visible; margin-left: -5.17241%;">1 250 000</span><span class="irs-grid-pol small" style="left: 45%"></span><span class="irs-grid-pol small" style="left: 40%"></span><span class="irs-grid-pol small" style="left: 35%"></span><span class="irs-grid-pol small" style="left: 30%"></span><span class="irs-grid-pol" style="left: 50%"></span><span class="irs-grid-text js-grid-text-2" style="left: 50%; visibility: visible; margin-left: -5.08621%;">1 500 000</span><span class="irs-grid-pol small" style="left: 70%"></span><span class="irs-grid-pol small" style="left: 65%"></span><span class="irs-grid-pol small" style="left: 60%"></span><span class="irs-grid-pol small" style="left: 55%"></span><span class="irs-grid-pol" style="left: 75%"></span><span class="irs-grid-text js-grid-text-3" style="left: 75%; visibility: visible; margin-left: -5.08621%;">1 750 000</span><span class="irs-grid-pol small" style="left: 95%"></span><span class="irs-grid-pol small" style="left: 90%"></span><span class="irs-grid-pol small" style="left: 85%"></span><span class="irs-grid-pol small" style="left: 80%"></span><span class="irs-grid-pol" style="left: 100%"></span><span class="irs-grid-text js-grid-text-4" style="left: 100%; margin-left: -9.06552%;">2 000 000</span></span><span class="irs-bar" style="left: 1.37931%; width: 97.2414%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 0%;"></span><span class="irs-slider to" style="left: 97.2414%;"></span></span><input type="text" id="range_27" value="" name="range" class="irs-hidden-input" readonly="">
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <p>Create Grid with pre-defined steps</p>
                <span class="irs js-irs-3 irs-with-grid"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: hidden;">0</span><span class="irs-max" style="visibility: hidden;">10 000</span><span class="irs-from" style="visibility: visible; left: -0.0862069%;">0</span><span class="irs-to" style="visibility: visible; left: 94.569%;">10 000</span><span class="irs-single" style="visibility: hidden; left: 45.0862%;">0 — 10 000</span></span><span class="irs-grid" style="width: 97.2414%; left: 1.27931%;"><span class="irs-grid-pol" style="left: 0%"></span><span class="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -1.03448%;">0</span><span class="irs-grid-pol small" style="left: 2.5%"></span><span class="irs-grid-pol" style="left: 5%"></span><span class="irs-grid-text js-grid-text-1" style="left: 5%; visibility: visible; margin-left: -2.24138%;">500</span><span class="irs-grid-pol small" style="left: 7.5%"></span><span class="irs-grid-pol" style="left: 10%"></span><span class="irs-grid-text js-grid-text-2" style="left: 10%; visibility: visible; margin-left: -3.10345%;">1 000</span><span class="irs-grid-pol small" style="left: 12.5%"></span><span class="irs-grid-pol" style="left: 15%"></span><span class="irs-grid-text js-grid-text-3" style="left: 15%; visibility: hidden; margin-left: -3.10345%;">1 500</span><span class="irs-grid-pol small" style="left: 17.5%"></span><span class="irs-grid-pol" style="left: 20%"></span><span class="irs-grid-text js-grid-text-4" style="left: 20%; margin-left: -3.10345%;">2 000</span><span class="irs-grid-pol small" style="left: 22.5%"></span><span class="irs-grid-pol" style="left: 25%"></span><span class="irs-grid-text js-grid-text-5" style="left: 25%; visibility: hidden; margin-left: -3.10345%;">2 500</span><span class="irs-grid-pol small" style="left: 27.5%"></span><span class="irs-grid-pol" style="left: 30%"></span><span class="irs-grid-text js-grid-text-6" style="left: 30%; visibility: visible; margin-left: -3.10345%;">3 000</span><span class="irs-grid-pol small" style="left: 32.5%"></span><span class="irs-grid-pol" style="left: 35%"></span><span class="irs-grid-text js-grid-text-7" style="left: 35%; visibility: hidden; margin-left: -3.10345%;">3 500</span><span class="irs-grid-pol small" style="left: 37.5%"></span><span class="irs-grid-pol" style="left: 40%"></span><span class="irs-grid-text js-grid-text-8" style="left: 40%; margin-left: -3.10345%;">4 000</span><span class="irs-grid-pol small" style="left: 42.5%"></span><span class="irs-grid-pol" style="left: 45%"></span><span class="irs-grid-text js-grid-text-9" style="left: 45%; visibility: hidden; margin-left: -3.10345%;">4 500</span><span class="irs-grid-pol small" style="left: 47.5%"></span><span class="irs-grid-pol" style="left: 50%"></span><span class="irs-grid-text js-grid-text-10" style="left: 50%; visibility: visible; margin-left: -3.10345%;">5 000</span><span class="irs-grid-pol small" style="left: 52.5%"></span><span class="irs-grid-pol" style="left: 55%"></span><span class="irs-grid-text js-grid-text-11" style="left: 55%; visibility: hidden; margin-left: -3.10345%;">5 500</span><span class="irs-grid-pol small" style="left: 57.5%"></span><span class="irs-grid-pol" style="left: 60%"></span><span class="irs-grid-text js-grid-text-12" style="left: 60%; margin-left: -3.10345%;">6 000</span><span class="irs-grid-pol small" style="left: 62.5%"></span><span class="irs-grid-pol" style="left: 65%"></span><span class="irs-grid-text js-grid-text-13" style="left: 65%; visibility: hidden; margin-left: -3.10345%;">6 500</span><span class="irs-grid-pol small" style="left: 67.5%"></span><span class="irs-grid-pol" style="left: 70%"></span><span class="irs-grid-text js-grid-text-14" style="left: 70%; visibility: visible; margin-left: -3.10345%;">7 000</span><span class="irs-grid-pol small" style="left: 72.5%"></span><span class="irs-grid-pol" style="left: 75%"></span><span class="irs-grid-text js-grid-text-15" style="left: 75%; visibility: hidden; margin-left: -3.10345%;">7 500</span><span class="irs-grid-pol small" style="left: 77.5%"></span><span class="irs-grid-pol" style="left: 80%"></span><span class="irs-grid-text js-grid-text-16" style="left: 80%; margin-left: -3.10345%;">8 000</span><span class="irs-grid-pol small" style="left: 82.5%"></span><span class="irs-grid-pol" style="left: 85%"></span><span class="irs-grid-text js-grid-text-17" style="left: 85%; visibility: hidden; margin-left: -3.18966%;">8 500</span><span class="irs-grid-pol small" style="left: 87.5%"></span><span class="irs-grid-pol" style="left: 90%"></span><span class="irs-grid-text js-grid-text-18" style="left: 90%; visibility: visible; margin-left: -3.10345%;">9 000</span><span class="irs-grid-pol small" style="left: 92.5%"></span><span class="irs-grid-pol" style="left: 95%"></span><span class="irs-grid-text js-grid-text-19" style="left: 95%; visibility: hidden; margin-left: -3.10345%;">9 500</span><span class="irs-grid-pol small" style="left: 97.5%"></span><span class="irs-grid-pol" style="left: 100%"></span><span class="irs-grid-text js-grid-text-20" style="left: 100%; margin-left: -3.7069%;">10 000</span></span><span class="irs-bar" style="left: 1.37931%; width: 97.2414%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 0%;"></span><span class="irs-slider to" style="left: 97.2414%;"></span></span><input type="text" id="range_26" value="" name="range" class="irs-hidden-input" readonly="">
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <p>Prevent one from dragging the labels</p>
                <span class="irs js-irs-4"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: visible;">0</span><span class="irs-max" style="visibility: visible;">100</span><span class="irs-from" style="visibility: visible; left: 28.569%;">30</span><span class="irs-to" style="visibility: visible; left: 67.4655%;">70</span><span class="irs-single" style="visibility: hidden; left: 45.2586%;">30 — 70</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 30.5517%; width: 38.8966%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 29.1724%;"></span><span class="irs-slider to type_last" style="left: 68.069%;"></span></span><input type="text" id="range_31" value="" name="range" class="irs-hidden-input" readonly="">
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <p>Grid with minimum and maximum values</p>
                <span class="irs js-irs-5"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: visible;">0</span><span class="irs-max" style="visibility: visible;">100</span><span class="irs-from" style="visibility: visible; left: 28.569%;">30</span><span class="irs-to" style="visibility: visible; left: 67.4655%;">70</span><span class="irs-single" style="visibility: hidden; left: 45.2586%;">30 — 70</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 30.5517%; width: 38.8966%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-slider from" style="left: 29.1724%;"></span><span class="irs-slider to type_last" style="left: 68.069%;"></span></span><input type="text" class="range_min_max irs-hidden-input" value="" name="range" readonly="">
              </div>
              <div>
                <p>Grid With time in 24 hour format</p>
                <span class="irs js-irs-6 irs-with-grid"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: visible;">28th February, 06:00</span><span class="irs-max" style="visibility: visible;">28th February, 18:00</span><span class="irs-from" style="visibility: hidden;">0</span><span class="irs-to" style="visibility: hidden;">0</span><span class="irs-single" style="left: 45.4132%;">28th February, 12:00</span></span><span class="irs-grid" style="width: 98.787%; left: 0.50652%;"><span class="irs-grid-pol" style="left: 0%"></span><span class="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -0.50652%;">28th February, 06:00</span><span class="irs-grid-pol small" style="left: 20%"></span><span class="irs-grid-pol small" style="left: 15%"></span><span class="irs-grid-pol small" style="left: 10%"></span><span class="irs-grid-pol small" style="left: 5%"></span><span class="irs-grid-pol" style="left: 25%"></span><span class="irs-grid-text js-grid-text-1" style="left: 25%; visibility: visible; margin-left: -4.43518%;">28th February, 09:00</span><span class="irs-grid-pol small" style="left: 45%"></span><span class="irs-grid-pol small" style="left: 40%"></span><span class="irs-grid-pol small" style="left: 35%"></span><span class="irs-grid-pol small" style="left: 30%"></span><span class="irs-grid-pol" style="left: 50%"></span><span class="irs-grid-text js-grid-text-2" style="left: 50%; visibility: visible; margin-left: -4.39727%;">28th February, 12:00</span><span class="irs-grid-pol small" style="left: 70%"></span><span class="irs-grid-pol small" style="left: 65%"></span><span class="irs-grid-pol small" style="left: 60%"></span><span class="irs-grid-pol small" style="left: 55%"></span><span class="irs-grid-pol" style="left: 75%"></span><span class="irs-grid-text js-grid-text-3" style="left: 75%; visibility: visible; margin-left: -4.43518%;">28th February, 15:00</span><span class="irs-grid-pol small" style="left: 95%"></span><span class="irs-grid-pol small" style="left: 90%"></span><span class="irs-grid-pol small" style="left: 85%"></span><span class="irs-grid-pol small" style="left: 80%"></span><span class="irs-grid-pol" style="left: 100%"></span><span class="irs-grid-text js-grid-text-4" style="left: 100%; margin-left: -8.36384%;">28th February, 18:00</span></span><span class="irs-bar" style="left: 0.60652%; width: 49.3935%;"></span><span class="irs-bar-edge"></span><span class="irs-shadow shadow-single" style="display: none;"></span><span class="irs-slider single" style="left: 49.3935%;"></span></span><input type="text" class="range_time24 irs-hidden-input" value="" name="range" readonly="">
              </div>
            </div>
          </div>
        </div>
        <br>
        <br>
        <!-- /form grid slider -->

        <!-- image cropping -->
        <div class="container cropper">
          <div class="row">
            <div class="col-md-9">
              <div class="img-container">
                <img id="image" src="images/cropper.jpg" alt="Picture" class="cropper-hidden"><div class="cropper-container cropper-bg" style="width: 1004px; height: 516px;"><div class="cropper-wrap-box"><div class="cropper-canvas" style="width: 917.333px; height: 516px; left: 43.3333px; top: 0px;"><img src="https://colorlib.com/polygon/gentelella/images/cropper.jpg" style="width: 917.333px; height: 516px; margin-left: 0px; margin-top: 0px; transform: none;"></div></div><div class="cropper-drag-box cropper-modal cropper-crop"></div><div class="cropper-crop-box" style="width: 733.867px; height: 412.8px; left: 135.067px; top: 51.6px;"><span class="cropper-view-box"><img src="https://colorlib.com/polygon/gentelella/images/cropper.jpg" style="width: 917.333px; height: 516px; margin-left: -91.7333px; margin-top: -51.6px; transform: none;"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face cropper-move"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="docs-preview clearfix">
                <div class="img-preview preview-lg" style="width: 263px; height: 147.938px;"><img src="https://colorlib.com/polygon/gentelella/images/cropper.jpg" style="display: block; width: 328.75px; height: 184.922px; min-width: 0px !important; min-height: 0px !important; max-width: none !important; max-height: none !important; margin-left: -32.875px; margin-top: -18.4922px; transform: none;"></div>
                <div class="img-preview preview-md" style="width: 138.667px; height: 78px;"><img src="https://colorlib.com/polygon/gentelella/images/cropper.jpg" style="display: block; width: 173.333px; height: 97.5px; min-width: 0px !important; min-height: 0px !important; max-width: none !important; max-height: none !important; margin-left: -17.3333px; margin-top: -9.75px; transform: none;"></div>
                <div class="img-preview preview-sm" style="width: 69px; height: 38.8125px;"><img src="https://colorlib.com/polygon/gentelella/images/cropper.jpg" style="display: block; width: 86.25px; height: 48.5156px; min-width: 0px !important; min-height: 0px !important; max-width: none !important; max-height: none !important; margin-left: -8.625px; margin-top: -4.85156px; transform: none;"></div>
                <div class="img-preview preview-xs" style="width: 35px; height: 19.6875px;"><img src="https://colorlib.com/polygon/gentelella/images/cropper.jpg" style="display: block; width: 43.75px; height: 24.6094px; min-width: 0px !important; min-height: 0px !important; max-width: none !important; max-height: none !important; margin-left: -4.375px; margin-top: -2.46094px; transform: none;"></div>
              </div>

              <div class="docs-data">
                <div class="input-group input-group-sm">
                  <label class="input-group-addon" for="dataX">X</label>
                  <input type="text" class="form-control" id="dataX" placeholder="x">
                  <span class="input-group-addon">px</span>
                </div>
                <div class="input-group input-group-sm">
                  <label class="input-group-addon" for="dataY">Y</label>
                  <input type="text" class="form-control" id="dataY" placeholder="y">
                  <span class="input-group-addon">px</span>
                </div>
                <div class="input-group input-group-sm">
                  <label class="input-group-addon" for="dataWidth">Width</label>
                  <input type="text" class="form-control" id="dataWidth" placeholder="width">
                  <span class="input-group-addon">px</span>
                </div>
                <div class="input-group input-group-sm">
                  <label class="input-group-addon" for="dataHeight">Height</label>
                  <input type="text" class="form-control" id="dataHeight" placeholder="height">
                  <span class="input-group-addon">px</span>
                </div>
                <div class="input-group input-group-sm">
                  <label class="input-group-addon" for="dataRotate">Rotate</label>
                  <input type="text" class="form-control" id="dataRotate" placeholder="rotate">
                  <span class="input-group-addon">deg</span>
                </div>
                <div class="input-group input-group-sm">
                  <label class="input-group-addon" for="dataScaleX">ScaleX</label>
                  <input type="text" class="form-control" id="dataScaleX" placeholder="scaleX">
                </div>
                <div class="input-group input-group-sm">
                  <label class="input-group-addon" for="dataScaleY">ScaleY</label>
                  <input type="text" class="form-control" id="dataScaleY" placeholder="scaleY">
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9 docs-buttons">
              <!-- <h3 class="page-header">Toolbar:</h3> -->
              <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="move" title="Move">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)">
                            <span class="fa fa-arrows"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="setDragMode" data-option="crop" title="Crop">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)">
                            <span class="fa fa-crop"></span>
                          </span>
                </button>
              </div>

              <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="zoom" data-option="0.1" title="Zoom In">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;zoom&quot;, 0.1)">
                            <span class="fa fa-search-plus"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="zoom" data-option="-0.1" title="Zoom Out">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;zoom&quot;, -0.1)">
                            <span class="fa fa-search-minus"></span>
                          </span>
                </button>
              </div>

              <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="move" data-option="-10" data-second-option="0" title="Move Left">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;move&quot;, -10, 0)">
                            <span class="fa fa-arrow-left"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="move" data-option="10" data-second-option="0" title="Move Right">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;move&quot;, 10, 0)">
                            <span class="fa fa-arrow-right"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="move" data-option="0" data-second-option="-10" title="Move Up">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;move&quot;, 0, -10)">
                            <span class="fa fa-arrow-up"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="move" data-option="0" data-second-option="10" title="Move Down">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;move&quot;, 0, 10)">
                            <span class="fa fa-arrow-down"></span>
                          </span>
                </button>
              </div>

              <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="rotate" data-option="-45" title="Rotate Left">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;rotate&quot;, -45)">
                            <span class="fa fa-rotate-left"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="rotate" data-option="45" title="Rotate Right">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;rotate&quot;, 45)">
                            <span class="fa fa-rotate-right"></span>
                          </span>
                </button>
              </div>

              <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="scaleX" data-option="-1" title="Flip Horizontal">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;scaleX&quot;, -1)">
                            <span class="fa fa-arrows-h"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="scaleY" data-option="-1" title="Flip Vertical">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;scaleY&quot;, -1)">
                            <span class="fa fa-arrows-v"></span>
                          </span>
                </button>
              </div>

              <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="crop" title="Crop">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;crop&quot;)">
                            <span class="fa fa-check"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="clear" title="Clear">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;clear&quot;)">
                            <span class="fa fa-remove"></span>
                          </span>
                </button>
              </div>

              <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="disable" title="Disable">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;disable&quot;)">
                            <span class="fa fa-lock"></span>
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="enable" title="Enable">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;enable&quot;)">
                            <span class="fa fa-unlock"></span>
                          </span>
                </button>
              </div>

              <div class="btn-group">
                <button type="button" class="btn btn-primary" data-method="reset" title="Reset">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;reset&quot;)">
                            <span class="fa fa-refresh"></span>
                          </span>
                </button>
                <label class="btn btn-primary btn-upload" for="inputImage" title="Upload image file">
                  <input type="file" class="sr-only" id="inputImage" name="file" accept="image/*">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="Import image with Blob URLs">
                            <span class="fa fa-upload"></span>
                          </span>
                </label>
                <button type="button" class="btn btn-primary" data-method="destroy" title="Destroy">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;destroy&quot;)">
                            <span class="fa fa-power-off"></span>
                          </span>
                </button>
              </div>

              <div class="btn-group btn-group-crop">
                <button type="button" class="btn btn-primary" data-method="getCroppedCanvas">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;getCroppedCanvas&quot;)">
                            Get Cropped Canvas
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })">
                            160×90
                          </span>
                </button>
                <button type="button" class="btn btn-primary" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })">
                            320×180
                          </span>
                </button>
              </div>

              <!-- Show the cropped image in modal -->
              <div class="modal fade docs-cropped" id="getCroppedCanvasModal" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle" role="dialog" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 class="modal-title" id="getCroppedCanvasTitle">Cropped</h4>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <a class="btn btn-primary" id="download" href="javascript:void(0);" download="cropped.png">Download</a>
                    </div>
                  </div>
                </div>
              </div><!-- /.modal -->

              <button type="button" class="btn btn-primary" data-method="getData" data-option="" data-target="#putData">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;getData&quot;)">
                          Get Data
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="setData" data-target="#putData">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;setData&quot;, data)">
                          Set Data
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="getContainerData" data-option="" data-target="#putData">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;getContainerData&quot;)">
                          Get Container Data
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="getImageData" data-option="" data-target="#putData">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;getImageData&quot;)">
                          Get Image Data
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="getCanvasData" data-option="" data-target="#putData">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;getCanvasData&quot;)">
                          Get Canvas Data
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="setCanvasData" data-target="#putData">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;setCanvasData&quot;, data)">
                          Set Canvas Data
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="getCropBoxData" data-option="" data-target="#putData">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;getCropBoxData&quot;)">
                          Get Crop Box Data
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="setCropBoxData" data-target="#putData">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;setCropBoxData&quot;, data)">
                          Set Crop Box Data
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="moveTo" data-option="0">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.moveTo(0)">
                          0,0
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="zoomTo" data-option="1">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.zoomTo(1)">
                          100%
                        </span>
              </button>
              <button type="button" class="btn btn-primary" data-method="rotateTo" data-option="180">
                        <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="cropper.rotateTo(180)">
                          180°
                        </span>
              </button>
              <input type="text" class="form-control" id="putData" placeholder="Get data to here or set data with this value">
            </div><!-- /.docs-buttons -->

            <div class="col-md-3 docs-toggles">
              <!-- <h3 class="page-header">Toggles:</h3> -->
              <div class="btn-group btn-group-justified" data-toggle="buttons">
                <label class="btn btn-primary active">
                  <input type="radio" class="sr-only" id="aspectRatio0" name="aspectRatio" value="1.7777777777777777">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 16 / 9">
                            16:9
                          </span>
                </label>
                <label class="btn btn-primary">
                  <input type="radio" class="sr-only" id="aspectRatio1" name="aspectRatio" value="1.3333333333333333">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 4 / 3">
                            4:3
                          </span>
                </label>
                <label class="btn btn-primary">
                  <input type="radio" class="sr-only" id="aspectRatio2" name="aspectRatio" value="1">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 1 / 1">
                            1:1
                          </span>
                </label>
                <label class="btn btn-primary">
                  <input type="radio" class="sr-only" id="aspectRatio3" name="aspectRatio" value="0.6666666666666666">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: 2 / 3">
                            2:3
                          </span>
                </label>
                <label class="btn btn-primary">
                  <input type="radio" class="sr-only" id="aspectRatio4" name="aspectRatio" value="NaN">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="aspectRatio: NaN">
                            Free
                          </span>
                </label>
              </div>

              <div class="btn-group btn-group-justified" data-toggle="buttons">
                <label class="btn btn-primary active">
                  <input type="radio" class="sr-only" id="viewMode0" name="viewMode" value="0" checked="">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="View Mode 0">
                            VM0
                          </span>
                </label>
                <label class="btn btn-primary">
                  <input type="radio" class="sr-only" id="viewMode1" name="viewMode" value="1">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="View Mode 1">
                            VM1
                          </span>
                </label>
                <label class="btn btn-primary">
                  <input type="radio" class="sr-only" id="viewMode2" name="viewMode" value="2">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="View Mode 2">
                            VM2
                          </span>
                </label>
                <label class="btn btn-primary">
                  <input type="radio" class="sr-only" id="viewMode3" name="viewMode" value="3">
                          <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="View Mode 3">
                            VM3
                          </span>
                </label>
              </div>

              <div class="dropdown dropup docs-options">
                <button type="button" class="btn btn-primary btn-block dropdown-toggle" id="toggleOptions" data-toggle="dropdown" aria-expanded="true">
                  Toggle Options
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="toggleOptions" role="menu">
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="responsive" checked="">
                      responsive
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="restore" checked="">
                      restore
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="checkCrossOrigin" checked="">
                      checkCrossOrigin
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="checkOrientation" checked="">
                      checkOrientation
                    </label>
                  </li>

                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="modal" checked="">
                      modal
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="guides" checked="">
                      guides
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="center" checked="">
                      center
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="highlight" checked="">
                      highlight
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="background" checked="">
                      background
                    </label>
                  </li>

                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="autoCrop" checked="">
                      autoCrop
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="movable" checked="">
                      movable
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="rotatable" checked="">
                      rotatable
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="scalable" checked="">
                      scalable
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="zoomable" checked="">
                      zoomable
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="zoomOnTouch" checked="">
                      zoomOnTouch
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="zoomOnWheel" checked="">
                      zoomOnWheel
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="cropBoxMovable" checked="">
                      cropBoxMovable
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="cropBoxResizable" checked="">
                      cropBoxResizable
                    </label>
                  </li>
                  <li role="presentation">
                    <label class="checkbox-inline">
                      <input type="checkbox" name="toggleDragModeOnDblclick" checked="">
                      toggleDragModeOnDblclick
                    </label>
                  </li>
                </ul>
              </div><!-- /.dropdown -->

              <a class="btn btn-default btn-block" data-toggle="tooltip" href="https://fengyuanchen.github.io/cropperjs" title="" data-original-title="Cropper without jQuery">Cropper.js</a>

            </div><!-- /.docs-toggles -->
          </div>
        </div>
        <!-- /image cropping -->
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    data ()
  {
    return {
      meueList: []
    }
  }
  ,
  created()
  {
  }
  ,
  methods: {
  }
  ,
  mounted()
  {
    $(function(){
      "undefined" != typeof $.fn.colorpicker && (console.log("init_ColorPicker"),
        $(".demo1").colorpicker(),
        $(".demo2").colorpicker(),
        $("#demo_forceformat").colorpicker({
          format: "rgba",
          horizontal: !0
        }),
        $("#demo_forceformat3").colorpicker({
          format: "rgba"
        }),
        $(".demo-auto").colorpicker())
    })
  }
  }
</script>

<style type="text/css">
</style>
