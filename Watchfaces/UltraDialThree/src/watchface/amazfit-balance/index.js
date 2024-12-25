/*
** Watch_Face_Editor tool
** watchface js version v2.1.1
** Copyright © SashaCX75. All Rights Reserved
*/

try {
  (() => {
    //start of ignored block
    const __$$app$$__ = __$$hmAppManager$$__.currentApp;
    function getApp() {
      return __$$app$$__.app;
    }
    function getCurrentPage() {
      return __$$app$$__.current && __$$app$$__.current.module;
    }
    const __$$module$$__ = __$$app$$__.current;
    const h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__));
    const { px } = __$$app$$__.__globals__;
    const logger = Logger.getLogger('watchface_SashaCX75');
    //end of ignored block

    //dynamic modify start


    let normal_background_bg = ''
    let normal_pai_icon_img = ''
    let normal_image_img = ''
    let normal_step_TextCircle = new Array(5);
    let normal_step_TextCircle_ASCIIARRAY = new Array(10);
    let normal_step_TextCircle_img_width = 23;
    let normal_step_TextCircle_img_height = 27;
    let normal_digital_clock_img_time_AmPm = ''
    let normal_hour_TextCircle = new Array(2);
    let normal_hour_TextCircle_ASCIIARRAY = new Array(10);
    let normal_hour_TextCircle_img_width = 23;
    let normal_hour_TextCircle_img_height = 27;
    let normal_timerTextUpdate = undefined;
    let normal_minute_TextCircle = new Array(2);
    let normal_minute_TextCircle_ASCIIARRAY = new Array(10);
    let normal_minute_TextCircle_img_width = 23;
    let normal_minute_TextCircle_img_height = 27;
    let normal_second_TextCircle = new Array(2);
    let normal_second_TextCircle_ASCIIARRAY = new Array(10);
    let normal_second_TextCircle_img_width = 23;
    let normal_second_TextCircle_img_height = 27;
    let normal_weather_image_progress_img_level = ''
    let normal_temperature_max_min_text_font = ''
    let normal_temperature_current_text_font = ''
    let normal_sun_icon_img = ''
    let normal_sun_high_text_font = ''
    let normal_sun_low_text_font = ''
    let normal_dow_text_font = ''
    let normal_DOW_Array = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let normal_month_name_font = ''
    let normal_Month_Array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let normal_day_text_font = ''
    let normal_heart_rate_icon_img = ''
    let normal_heart_rate_circle_scale = ''
    let normal_heart_rate_TextCircle = new Array(3);
    let normal_heart_rate_TextCircle_ASCIIARRAY = new Array(10);
    let normal_heart_rate_TextCircle_img_width = 18;
    let normal_heart_rate_TextCircle_img_height = 22;
    let normal_battery_icon_img = ''
    let normal_battery_circle_scale = ''
    let normal_battery_TextCircle = new Array(3);
    let normal_battery_TextCircle_ASCIIARRAY = new Array(10);
    let normal_battery_TextCircle_img_width = 18;
    let normal_battery_TextCircle_img_height = 22;
    let normal_battery_TextCircle_unit = null;
    let normal_battery_TextCircle_unit_width = 18;
    let normal_analog_clock_pro_hour_pointer_img = ''
    let normal_analog_clock_pro_minute_pointer_img = ''
    let normal_timerUpdateSec = undefined;
    let normal_analog_clock_pro_second_pointer_img = ''
    let normal_timerUpdateSecSmooth = undefined;
    let lastTime = 0;
    let normal_analog_clock_pro_second_cover_pointer_img = ''
    let idle_background_bg = ''
    let idle_pai_icon_img = ''
    let idle_image_img = ''
    let idle_step_TextCircle = new Array(5);
    let idle_step_TextCircle_ASCIIARRAY = new Array(10);
    let idle_step_TextCircle_img_width = 23;
    let idle_step_TextCircle_img_height = 27;
    let idle_digital_clock_img_time_AmPm = ''
    let idle_hour_TextCircle = new Array(2);
    let idle_hour_TextCircle_ASCIIARRAY = new Array(10);
    let idle_hour_TextCircle_img_width = 23;
    let idle_hour_TextCircle_img_height = 27;
    let idle_timerTextUpdate = undefined;
    let idle_minute_TextCircle = new Array(2);
    let idle_minute_TextCircle_ASCIIARRAY = new Array(10);
    let idle_minute_TextCircle_img_width = 23;
    let idle_minute_TextCircle_img_height = 27;
    let idle_second_TextCircle = new Array(2);
    let idle_second_TextCircle_ASCIIARRAY = new Array(10);
    let idle_second_TextCircle_img_width = 23;
    let idle_second_TextCircle_img_height = 27;
    let idle_weather_image_progress_img_level = ''
    let idle_temperature_max_min_text_font = ''
    let idle_temperature_current_text_font = ''
    let idle_sun_icon_img = ''
    let idle_sun_high_text_font = ''
    let idle_sun_low_text_font = ''
    let idle_dow_text_font = ''
    let idle_DOW_Array = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let idle_month_name_font = ''
    let idle_Month_Array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let idle_day_text_font = ''
    let idle_heart_rate_icon_img = ''
    let idle_heart_rate_circle_scale = ''
    let idle_heart_rate_TextCircle = new Array(3);
    let idle_heart_rate_TextCircle_ASCIIARRAY = new Array(10);
    let idle_heart_rate_TextCircle_img_width = 18;
    let idle_heart_rate_TextCircle_img_height = 22;
    let idle_battery_icon_img = ''
    let idle_battery_circle_scale = ''
    let idle_battery_TextCircle = new Array(3);
    let idle_battery_TextCircle_ASCIIARRAY = new Array(10);
    let idle_battery_TextCircle_img_width = 18;
    let idle_battery_TextCircle_img_height = 22;
    let idle_battery_TextCircle_unit = null;
    let idle_battery_TextCircle_unit_width = 18;
    let idle_analog_clock_pro_hour_pointer_img = ''
    let idle_analog_clock_pro_minute_pointer_img = ''
    let idle_analog_clock_pro_minute_cover_pointer_img = ''
    let timeSensor = ''
    let sec_anim = ''

    const DEVICE_HEIGHT = 480
    const DEVICE_WIDTH = 480

    const koef = 1.03

    let mode_1 = false;
    let mode_2 = false;
    let black_aod = false;
    let black_mode = 0;
    let black_mode_text = ['BM off', 'BM AOD', 'BM AOD + normal'];

    let dial_ID = 0;

    let bg_color_ID = 0;
    let color_array = [0xffe0cb, 0xf4e8ff, 0xf4c6c6, 0xf6e5d3, 0xfef5cc, 0xecf1db, 0xe7eef4, 0xb4d7ff, 0xdad9fb];//, 0x8aceff];
    let color_array_second = [0xff822e, 0xc187ff, 0xe1735a, 0xaf855d, 0xffd62a, 0xa1af50, 0x779dc1, 0x5b91fe, 0x7d6fff];//, 0x13435e]
    let color_array_third = [0x592f10, 0x442f59, 0x40211a, 0x403022, 0x594a0e, 0x3b401d, 0x283440, 0x203359, 0x2c2759];// 0x0a2433]

    let text_color_ID_1 = 0;
    let text_color_array = [0xFFFFFFFF, 0xFF000000, 0x96f094, 0x8bf1ea, 0xf0fdad, 0x2972d5, 0xd92498, 0xcf1317, 0x6eef72, 0xe4852c, 0xbb6ce6];

    let wf_name = 'UltraDialThree_RRR';

    let alpha_mask_aod_id = 0;
    let alpha_mask_array = [0, 10, 20, 30, 40, 50, 100];

    let weatherGroup = ''
    let weatherGroupVis = false;

    function loadSettings() {
      if (hmFS.SysProGetInt(wf_name + '_bg_color_ID') === undefined) {
        bg_color_ID = 0;
        hmFS.SysProSetInt(wf_name + '_bg_color_ID', bg_color_ID);
      }
      else {
        bg_color_ID = hmFS.SysProGetInt(wf_name + '_bg_color_ID');
      }

      if (hmFS.SysProGetInt(wf_name + '_dial_ID') === undefined) {
        dial_ID = 0;
        hmFS.SysProSetInt(wf_name + '_dial_ID', dial_ID);
      }
      else {
        dial_ID = hmFS.SysProGetInt(wf_name + '_dial_ID');
      }

      if (hmFS.SysProGetBool(wf_name + '_mode_1') === undefined) {
        mode_1 = false;
        hmFS.SysProSetBool(wf_name + '_mode_1', mode_1);
      }
      else {
        mode_1 = hmFS.SysProGetBool(wf_name + '_mode_1');
      }

      if (hmFS.SysProGetBool(wf_name + '_mode_2') === undefined) {
        mode_2 = false;
        hmFS.SysProSetBool(wf_name + '_mode_2', mode_2);
      }
      else {
        mode_2 = hmFS.SysProGetBool(wf_name + '_mode_2');
      }

      if (hmFS.SysProGetBool(wf_name + '_black_aod') === undefined) {
        black_aod = false;
        hmFS.SysProSetBool(wf_name + '_black_aod', black_aod);
      }
      else {
        black_aod = hmFS.SysProGetBool(wf_name + '_black_aod');
      }

      if (hmFS.SysProGetInt(wf_name + '_black_mode') === undefined) {
        black_mode = 0;
        hmFS.SysProSetInt(wf_name + '_black_mode', black_mode);
      }
      else {
        black_mode = hmFS.SysProGetInt(wf_name + '_black_mode');
      }

      if (hmFS.SysProGetInt(wf_name + '_alpha_mask_aod_id') === undefined) {
        alpha_mask_aod_id = 0;
        hmFS.SysProSetInt(wf_name + '_alpha_mask_aod_id', alpha_mask_aod_id);
      }
      else {
        alpha_mask_aod_id = hmFS.SysProGetInt(wf_name + '_alpha_mask_aod_id');
      }
    }


    let temperatureWidget, icoWidget, ico_prob_widget, precProbWidget, feelsLikeWidget,
      conditionWidget, windWidget, windTitleWidget, windAngleWidget, pressureWidget,
      pressureWidgetValue, pressureWidgetIco

    // Массив виджетов для арок
    let arcWidgets = [];
    const minPressure = 721; // Минимальное давление
    const maxPressure = 779; // Максимальное давление
    const zoneWidth = (maxPressure - minPressure) / 3; // Ширина одной зоны
    // Общие параметры арок
    const arcRadius = px(28); // Радиус арки
    const arcWidth = px(3); // Толщина арки
    const gapAngle = 8; // Пробел в градусах между арками
    const totalAngle = 270; // Общий угол для арок (-135 до +135)
    // Цвета
    const defaultColor = 0xffA9A9A9; // Серый цвет
    const activeColors = [0xffdb3030, 0xff30dba6, 0xffd5db30]; // Красный, зеленый, желтый


    //dynamic modify end

    __$$module$$__.module = DeviceRuntimeCore.WatchFace({
      init_view() {
        //dynamic modify start


        // FontName: productsans_black.ttf; FontSize: 26
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 464 * koef,
          y: 464 * koef,
          w: 373 * koef,
          h: 39 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFA822E,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          text: "0123456789 _-.,:;`'%°\\/",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });
        // FontName: productsans_black.ttf; FontSize: 24; Cache: full
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 464 * koef,
          y: 464 * koef,
          w: 28 * koef,
          h: 28 * koef,
          text_size: 24 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFA822E,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: "0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя  ҐЄІЇґєії _-.,:;`'%°\\/",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });
        // FontName: productsans_black.ttf; FontSize: 26; Cache: full
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 464 * koef,
          y: 464 * koef,
          w: 31 * koef,
          h: 31 * koef,
          text_size: 26,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.NONE,
          text: "0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя  ҐЄІЇґєії _-.,:;`'%°\\/",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        const world_clock = hmSensor.createSensor(hmSensor.id.WORLD_CLOCK)

        console.log('Watch_Face.ScreenNormal');
        normal_background_bg = hmUI.createWidget(hmUI.widget.CIRCLE, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          radius: 233 * koef,
          color: black_mode == 2 ? 0xFF000000 : color_array[bg_color_ID],//'0xFFFFE0CB',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_pai_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          src: black_mode == 2 ? `dial_${dial_ID}_aod.png` : `dial_${dial_ID}.png`,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_image_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          src: 'fg.png',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });
        normal_image_img.setProperty(hmUI.prop.VISIBLE, black_mode == 2 ? false : true)

        normal_step_TextCircle_ASCIIARRAY[0] = 'dig34w_0.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[1] = 'dig34w_1.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[2] = 'dig34w_2.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[3] = 'dig34w_3.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[4] = 'dig34w_4.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[5] = 'dig34w_5.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[6] = 'dig34w_6.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[7] = 'dig34w_7.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[8] = 'dig34w_8.png';  // set of images with numbers
        normal_step_TextCircle_ASCIIARRAY[9] = 'dig34w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 5; i++) {
          normal_step_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - normal_step_TextCircle_img_width / 2,
            pos_y: (233 + 195) * koef,
            src: 'dig34w_0.png',
            show_level: hmUI.show_level.ONLY_NORMAL,
          });
          normal_step_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block

        const step = hmSensor.createSensor(hmSensor.id.STEP);
        step.addEventListener(hmSensor.event.CHANGE, function () {
          text_update();
        });

        function toDegree(radian) {
          return radian * (180 / Math.PI);
        };

        normal_digital_clock_img_time_AmPm = hmUI.createWidget(hmUI.widget.IMG_TIME, {
          am_x: 290 * koef,
          am_y: 0,
          am_sc_path: '12am.png',
          am_en_path: '12am.png',
          pm_x: 290 * koef,
          pm_y: 0,
          pm_sc_path: '12pm.png',
          pm_en_path: '12pm.png',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_hour_TextCircle_ASCIIARRAY[0] = 'dig34w_0.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[1] = 'dig34w_1.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[2] = 'dig34w_2.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[3] = 'dig34w_3.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[4] = 'dig34w_4.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[5] = 'dig34w_5.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[6] = 'dig34w_6.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[7] = 'dig34w_7.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[8] = 'dig34w_8.png';  // set of images with numbers
        normal_hour_TextCircle_ASCIIARRAY[9] = 'dig34w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 2; i++) {
          normal_hour_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - normal_hour_TextCircle_img_width / 2,
            pos_y: (233 - 221) * koef,
            src: 'dig34w_0.png',
            show_level: hmUI.show_level.ONLY_NORMAL,
          });
          normal_hour_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block

        if (!timeSensor) timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
        let screenType = hmSetting.getScreenType();

        normal_minute_TextCircle_ASCIIARRAY[0] = 'dig34w_0.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[1] = 'dig34w_1.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[2] = 'dig34w_2.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[3] = 'dig34w_3.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[4] = 'dig34w_4.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[5] = 'dig34w_5.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[6] = 'dig34w_6.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[7] = 'dig34w_7.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[8] = 'dig34w_8.png';  // set of images with numbers
        normal_minute_TextCircle_ASCIIARRAY[9] = 'dig34w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 2; i++) {
          normal_minute_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - normal_minute_TextCircle_img_width / 2,
            pos_y: (233 - 221) * koef,
            src: 'dig34w_0.png',
            show_level: hmUI.show_level.ONLY_NORMAL,
          });
          normal_minute_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block


        normal_second_TextCircle_ASCIIARRAY[0] = 'dig34w_dots.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[1] = 'fg.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[2] = 'hand_dot.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[3] = 'hand_hour_0.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[4] = 'hand_min_0.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[5] = 'hand_sec_0.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[6] = 'ico_batt.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[7] = 'ico_heart.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[8] = 'preview.png';  // set of images with numbers
        // normal_second_TextCircle_ASCIIARRAY[9] = 'pst.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 1; i++) {
          normal_second_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - normal_second_TextCircle_img_width / 2,
            pos_y: (233 - 222) * koef,
            src: 'dig34w_dots.png',
            angle: 46,
            show_level: hmUI.show_level.ONLY_NORMAL,
          });
          //normal_second_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block


        let time_down_digits_txt = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 173 * koef,
          y: 280 * koef,
          w: 120 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          text: '00:08',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });
        let world_clock_down_digits_txt = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 173 * koef,
          y: 308 * koef,
          w: 120 * koef,
          h: 30 * koef,
          text_size: 24 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          text: 'LON',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });



        normal_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
          x: 213 * koef,
          y: 285 * koef,
          image_array: ["w_1.png", "w_2.png", "w_3.png", "w_4.png", "w_5.png", "w_6.png", "w_7.png", "w_8.png", "w_9.png", "w_10.png", "w_11.png", "w_12.png", "w_13.png", "w_14.png", "w_15.png", "w_16.png", "w_17.png", "w_18.png", "w_19.png", "w_20.png", "w_21.png", "w_22.png", "w_23.png", "w_24.png", "w_25.png", "w_26.png", "w_27.png", "w_28.png", "w_29.png"],
          image_length: 29,
          type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_temperature_max_min_text_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 85 * koef,
          y: 234 * koef,
          w: 160 * koef,
          h: 30 * koef,
          text_size: 24 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          //unit_type: 1,
          text: 'Temp',
          text_style: hmUI.text_style.ELLIPSIS,
          //type: hmUI.data_type.WEATHER_HIGH_LOW,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_temperature_current_text_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 125 * koef,
          y: 206 * koef,
          w: 80 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          unit_type: 1,
          text_style: hmUI.text_style.ELLIPSIS,
          //type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_sun_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 217 * koef,
          y: 117 * koef,
          src: mode_1 ? `sunrise_${bg_color_ID}.png` : `sunset_${bg_color_ID}.png`,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_sun_high_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
          x: 173 * koef,
          y: 155 * koef,
          w: 120 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          text_style: hmUI.text_style.ELLIPSIS,
          type: hmUI.data_type.SUN_RISE,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_sun_low_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
          x: 173 * koef,
          y: 155 * koef,
          w: 120 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          text_style: hmUI.text_style.ELLIPSIS,
          type: hmUI.data_type.SUN_SET,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        timeSensor.addEventListener(timeSensor.event.DAYCHANGE, function () {
          time_update(true);
        });

        normal_dow_text_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 245 * koef,
          y: 234 * koef,
          w: 110 * koef,
          h: 30 * koef,
          text_size: 24 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          // padding: true,
          // unit_string: Mon, Tue, Wed, Thu, Fri, Sat, Sun,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_month_name_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 245 * koef,
          y: 206 * koef,
          w: 80 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          // padding: true,
          // unit_string: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_day_text_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 305 * koef,
          y: 206 * koef,
          w: 50 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          // padding: true,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_heart_rate_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 418 * koef,
          y: 270 * koef,
          src: `ico_heart_${bg_color_ID}.png`,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        let normal_heart_rate_circle_scale_bg = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          start_angle: 132,
          end_angle: 168,
          radius: 210 * koef,
          line_width: 14 * koef,
          corner_flag: 0,
          level: 100,
          color: color_array_third[bg_color_ID],//0xFF592f10,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_heart_rate_circle_scale = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          start_angle: 132,
          end_angle: 168,
          radius: 210 * koef,
          line_width: 14 * koef,
          corner_flag: 0,
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        const heart_rate = hmSensor.createSensor(hmSensor.id.HEART);
        heart_rate.addEventListener(hmSensor.event.CHANGE, function () {
          text_update();
          scale_call();
        });

        normal_heart_rate_TextCircle_ASCIIARRAY[0] = 'dig26w_0.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[1] = 'dig26w_1.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[2] = 'dig26w_2.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[3] = 'dig26w_3.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[4] = 'dig26w_4.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[5] = 'dig26w_5.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[6] = 'dig26w_6.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[7] = 'dig26w_7.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[8] = 'dig26w_8.png';  // set of images with numbers
        normal_heart_rate_TextCircle_ASCIIARRAY[9] = 'dig26w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 3; i++) {
          normal_heart_rate_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - normal_heart_rate_TextCircle_img_width / 2,
            pos_y: (233 + 197) * koef,
            src: 'dig26w_0.png',
            show_level: hmUI.show_level.ONLY_NORMAL,
          });
          normal_heart_rate_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block

        normal_battery_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 18 * koef,
          y: 164 * koef,
          src: `ico_batt_${bg_color_ID}.png`,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        let normal_battery_circle_scale_bg = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          start_angle: -48,
          end_angle: -12,
          radius: 210 * koef,
          line_width: 14 * koef,
          corner_flag: 0,
          color: color_array_third[bg_color_ID],//0xFF592f10,
          level: 100,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_battery_circle_scale = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          start_angle: -48,
          end_angle: -12,
          radius: 210 * koef,
          line_width: 14 * koef,
          corner_flag: 0,
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        const battery = hmSensor.createSensor(hmSensor.id.BATTERY);
        battery.addEventListener(hmSensor.event.CHANGE, function () {
          text_update();
          scale_call();
        });

        normal_battery_TextCircle_ASCIIARRAY[0] = 'dig26w_0.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[1] = 'dig26w_1.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[2] = 'dig26w_2.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[3] = 'dig26w_3.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[4] = 'dig26w_4.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[5] = 'dig26w_5.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[6] = 'dig26w_6.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[7] = 'dig26w_7.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[8] = 'dig26w_8.png';  // set of images with numbers
        normal_battery_TextCircle_ASCIIARRAY[9] = 'dig26w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 3; i++) {
          normal_battery_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - normal_battery_TextCircle_img_width / 2,
            pos_y: (233 - 219) * koef,
            src: 'dig26w_0.png',
            show_level: hmUI.show_level.ONLY_NORMAL,
          });
          normal_battery_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };

        normal_battery_TextCircle_unit = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          w: 466 * koef,
          h: 466 * koef,
          center_x: 233 * koef,
          center_y: 233 * koef,
          pos_x: 233 * koef - normal_battery_TextCircle_unit_width / 2,
          pos_y: (233 - 219) * koef,
          src: 'dig26w_proc.png',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });
        normal_battery_TextCircle_unit.setProperty(hmUI.prop.VISIBLE, false);
        //end of ignored block

        const deviceInfo = hmSetting.getDeviceInfo();
        timeSensor.addEventListener(timeSensor.event.MINUTEEND, function () {

          if (screenType == hmSetting.screen_type.WATCHFACE) updateWeatherApp();
          if (screenType == hmSetting.screen_type.AOD) updateWeatherApp();

          let updateHour = timeSensor.minute == 0;

          time_update(updateHour, true);
        });
        // let normal_analog_clock_pro_second_pointer_img_shad = hmUI.createWidget(hmUI.widget.IMG, {
        //   x: 0,
        //   y: 0,
        //   w: deviceInfo.width,
        //   h: deviceInfo.height,
        //   pos_x: 233 - 5,
        //   pos_y: 233 - 233,
        //   center_x: 233,
        //   center_y: 233 + 15,
        //   src: 'hand_sec_0_shad.png',
        //   angle: 0,
        //   alpha: 100,
        //   show_level: hmUI.show_level.ONLY_NORMAL,
        // });

        let sec_anim_shad = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
          second_path: 'hand_sec_1_shad.png',
          second_centerX: 233 * koef,
          second_centerY: (233 + 15) * koef,
          second_posX: 5 * koef,
          second_posY: 233 * koef,
          fresh_frequency: 25,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_analog_clock_pro_hour_pointer_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          w: deviceInfo.width,
          h: deviceInfo.height,
          pos_x: (233 - 26) * koef,
          pos_y: (233 - 154) * koef,
          center_x: 233 * koef,
          center_y: 233 * koef,
          src: 'hand_hour_0.png',
          angle: 0,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_analog_clock_pro_minute_pointer_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          w: deviceInfo.width,
          h: deviceInfo.height,
          pos_x: (233 - 26) * koef,
          pos_y: (233 - 233) * koef,
          center_x: 233 * koef,
          center_y: 233 * koef,
          src: 'hand_min_0.png',
          angle: 0,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });




        sec_anim = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
          second_path: `hand_sec_${bg_color_ID}.png`,
          second_centerX: 233 * koef,
          second_centerY: 233 * koef,
          second_posX: 5 * koef,
          second_posY: 233 * koef,
          fresh_frequency: 25,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });


        // normal_analog_clock_pro_second_pointer_img = hmUI.createWidget(hmUI.widget.IMG, {
        //   x: 0,
        //   y: 0,
        //   w: deviceInfo.width,
        //   h: deviceInfo.height,
        //   pos_x: 233 - 5,
        //   pos_y: 233 - 233,
        //   center_x: 233,
        //   center_y: 233,
        //   src: 'hand_sec_0.png',
        //   angle: 0,
        //   show_level: hmUI.show_level.ONLY_NORMAL,
        // });

        // function startSecAnim(sec, animDuration) {
        //   const secAnim = {
        //     anim_steps: [{
        //       anim_rate: 'linear',
        //       anim_duration: animDuration,
        //       anim_from: sec,
        //       anim_to: sec + (360 * (animDuration * 6 / 1000)) / 360,
        //       anim_key: 'angle',
        //     }],
        //     anim_fps: 30,
        //     anim_auto_start: 1,
        //     anim_repeat: 0,
        //     anim_auto_destroy: 1,
        //   }
        //   normal_analog_clock_pro_second_pointer_img_shad.setProperty(hmUI.prop.ANIM, secAnim);
        //   normal_analog_clock_pro_second_pointer_img.setProperty(hmUI.prop.ANIM, secAnim);
        // }
        normal_analog_clock_pro_second_cover_pointer_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 218 * koef,
          y: 218 * koef,
          src: 'hand_dot.png',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        // normal_analog_clock_pro_smooth_second = hmUI.createWidget(hmUI.widget.SMOOTH_SECOND, {
        // type: 4,
        // fps: 25,
        // show_level: hmUI.show_level.ONLY_NORMAL,
        // });






















        console.log('Watch_Face.ScreenAOD');
        idle_background_bg = hmUI.createWidget(hmUI.widget.CIRCLE, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          radius: 233 * koef,
          color: black_mode != 0 ? '0xFF000000' : color_array[bg_color_ID],//'0xFFFFE0CB',
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_pai_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          src: black_mode != 0 ? `dial_${dial_ID}_aod.png` : `dial_${dial_ID}.png`,
          alpha: black_mode != 0 ? 180 : 255,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        // let idle_background_bg_mask = hmUI.createWidget(hmUI.widget.CIRCLE, {
        //   center_x: 233,
        //   center_y: 233,
        //   radius: 235,
        //   color: '0xFF000000',
        //   alpha: (alpha_mask_array[alpha_mask_aod_id] * 255) / 100,
        //   show_level: hmUI.show_level.ONLY_AOD,
        // });
        // idle_background_bg_mask.setProperty(hmUI.prop.VISIBLE, black_aod ? false : true)

        idle_image_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          src: 'fg.png',
          show_level: hmUI.show_level.ONLY_AOD,
        });
        idle_image_img.setProperty(hmUI.prop.VISIBLE, black_mode != 0 ? false : true)

        // let idle_black_aod = hmUI.createWidget(hmUI.widget.CIRCLE, {
        //   center_x: 233,
        //   center_y: 233,
        //   radius: 235,
        //   color: '0xFF000000',
        //   alpha: black_aod ? 255 : 0,
        //   show_level: hmUI.show_level.ONLY_AOD,
        // });

        idle_step_TextCircle_ASCIIARRAY[0] = 'dig34w_0.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[1] = 'dig34w_1.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[2] = 'dig34w_2.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[3] = 'dig34w_3.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[4] = 'dig34w_4.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[5] = 'dig34w_5.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[6] = 'dig34w_6.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[7] = 'dig34w_7.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[8] = 'dig34w_8.png';  // set of images with numbers
        idle_step_TextCircle_ASCIIARRAY[9] = 'dig34w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 5; i++) {
          idle_step_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - idle_step_TextCircle_img_width / 2,
            pos_y: (233 + 195) * koef,
            src: 'dig34w_0.png',
            show_level: hmUI.show_level.ONLY_AOD,
          });
          idle_step_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block

        idle_digital_clock_img_time_AmPm = hmUI.createWidget(hmUI.widget.IMG_TIME, {
          am_x: 290 * koef,
          am_y: 0,
          am_sc_path: '12am.png',
          am_en_path: '12am.png',
          pm_x: 290 * koef,
          pm_y: 0,
          pm_sc_path: '12pm.png',
          pm_en_path: '12pm.png',
          show_level: hmUI.show_level.ONLY_AOD,
        });


        idle_hour_TextCircle_ASCIIARRAY[0] = 'dig34w_0.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[1] = 'dig34w_1.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[2] = 'dig34w_2.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[3] = 'dig34w_3.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[4] = 'dig34w_4.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[5] = 'dig34w_5.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[6] = 'dig34w_6.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[7] = 'dig34w_7.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[8] = 'dig34w_8.png';  // set of images with numbers
        idle_hour_TextCircle_ASCIIARRAY[9] = 'dig34w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 2; i++) {
          idle_hour_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - idle_hour_TextCircle_img_width / 2,
            pos_y: (233 - 221) * koef,
            src: 'dig34w_0.png',
            show_level: hmUI.show_level.ONLY_AOD,
          });
          idle_hour_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block


        idle_minute_TextCircle_ASCIIARRAY[0] = 'dig34w_0.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[1] = 'dig34w_1.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[2] = 'dig34w_2.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[3] = 'dig34w_3.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[4] = 'dig34w_4.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[5] = 'dig34w_5.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[6] = 'dig34w_6.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[7] = 'dig34w_7.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[8] = 'dig34w_8.png';  // set of images with numbers
        idle_minute_TextCircle_ASCIIARRAY[9] = 'dig34w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 2; i++) {
          idle_minute_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - idle_minute_TextCircle_img_width / 2,
            pos_y: (233 - 221) * koef,
            src: 'dig34w_0.png',
            show_level: hmUI.show_level.ONLY_AOD,
          });
          idle_minute_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block

        idle_second_TextCircle_ASCIIARRAY[0] = 'dig34w_dots.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[1] = 'fg.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[2] = 'hand_dot.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[3] = 'hand_hour_0.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[4] = 'hand_min_0.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[5] = 'hand_sec_0.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[6] = 'ico_batt.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[7] = 'ico_heart.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[8] = 'preview.png';  // set of images with numbers
        // idle_second_TextCircle_ASCIIARRAY[9] = 'pst.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 1; i++) {
          idle_second_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - idle_second_TextCircle_img_width / 2,
            pos_y: (233 - 222) * koef,
            angle: 46,
            src: 'dig34w_dots.png',
            show_level: hmUI.show_level.ONLY_AOD,
          });
          //idle_second_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block

        let idle_time_down_digits_txt = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 173 * koef,
          y: 280 * koef,
          w: 120 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          text: '00:08',
          show_level: hmUI.show_level.ONLY_AOD,
        });
        let idle_world_clock_down_digits_txt = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 173 * koef,
          y: 308 * koef,
          w: 120 * koef,
          h: 30 * koef,
          text_size: 24 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          text: 'LON',
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
          x: 213 * koef,
          y: 285 * koef,
          image_array: ["w_1.png", "w_2.png", "w_3.png", "w_4.png", "w_5.png", "w_6.png", "w_7.png", "w_8.png", "w_9.png", "w_10.png", "w_11.png", "w_12.png", "w_13.png", "w_14.png", "w_15.png", "w_16.png", "w_17.png", "w_18.png", "w_19.png", "w_20.png", "w_21.png", "w_22.png", "w_23.png", "w_24.png", "w_25.png", "w_26.png", "w_27.png", "w_28.png", "w_29.png"],
          image_length: 29,
          type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_temperature_max_min_text_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 85 * koef,
          y: 234 * koef,
          w: 160 * koef,
          h: 30 * koef,
          text_size: 24 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          text: 'Temp',
          //unit_type: 1,
          text_style: hmUI.text_style.ELLIPSIS,
          //type: hmUI.data_type.WEATHER_HIGH_LOW,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_temperature_current_text_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 125 * koef,
          y: 206 * koef,
          w: 80 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          unit_type: 1,
          text_style: hmUI.text_style.ELLIPSIS,
          //type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_sun_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 217 * koef,
          y: 117 * koef,
          src: mode_1 ? `sunrise_${bg_color_ID}.png` : `sunset_${bg_color_ID}.png`,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_sun_high_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
          x: 173 * koef,
          y: 155 * koef,
          w: 120 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          text_style: hmUI.text_style.ELLIPSIS,
          type: hmUI.data_type.SUN_RISE,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_sun_low_text_font = hmUI.createWidget(hmUI.widget.TEXT_FONT, {
          x: 173 * koef,
          y: 155 * koef,
          w: 120 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          text_style: hmUI.text_style.ELLIPSIS,
          type: hmUI.data_type.SUN_SET,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_dow_text_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 245 * koef,
          y: 234 * koef,
          w: 110 * koef,
          h: 30 * koef,
          text_size: 24 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          // padding: true,
          // unit_string: Mon, Tue, Wed, Thu, Fri, Sat, Sun,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_month_name_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 245 * koef,
          y: 206 * koef,
          w: 80 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          // padding: true,
          // unit_string: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_day_text_font = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 305 * koef,
          y: 206 * koef,
          w: 50 * koef,
          h: 30 * koef,
          text_size: 26 * koef,
          char_space: 0,
          line_space: 0,
          font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.ELLIPSIS,
          // padding: true,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_heart_rate_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 418 * koef,
          y: 270 * koef,
          src: `ico_heart_${bg_color_ID}.png`,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        let idle_heart_rate_circle_scale_bg = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          start_angle: 132,
          end_angle: 168,
          radius: 210 * koef,
          line_width: 14 * koef,
          level: 100,
          color: color_array_third[bg_color_ID],//0xFF592f10,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_heart_rate_circle_scale = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          start_angle: 132,
          end_angle: 168,
          radius: 210 * koef,
          line_width: 14 * koef,
          corner_flag: 0,
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_heart_rate_TextCircle_ASCIIARRAY[0] = 'dig26w_0.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[1] = 'dig26w_1.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[2] = 'dig26w_2.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[3] = 'dig26w_3.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[4] = 'dig26w_4.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[5] = 'dig26w_5.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[6] = 'dig26w_6.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[7] = 'dig26w_7.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[8] = 'dig26w_8.png';  // set of images with numbers
        idle_heart_rate_TextCircle_ASCIIARRAY[9] = 'dig26w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 3; i++) {
          idle_heart_rate_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - idle_heart_rate_TextCircle_img_width / 2,
            pos_y: (233 + 197) * koef,
            src: 'dig26w_0.png',
            show_level: hmUI.show_level.ONLY_AOD,
          });
          idle_heart_rate_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };
        //end of ignored block

        idle_battery_icon_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 18 * koef,
          y: 164 * koef,
          src: `ico_batt_${bg_color_ID}.png`,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        let idle_battery_circle_scale_bg = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          start_angle: -48,
          end_angle: -12,
          radius: 210 * koef,
          line_width: 14 * koef,
          corner_flag: 0,
          color: color_array_third[bg_color_ID],//0xFF592f10,
          level: 100,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_battery_circle_scale = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: 233 * koef,
          center_y: 233 * koef,
          start_angle: -48,
          end_angle: -12,
          radius: 210 * koef,
          line_width: 14 * koef,
          corner_flag: 0,
          color: color_array_second[bg_color_ID],//0xFFFA822E,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_battery_TextCircle_ASCIIARRAY[0] = 'dig26w_0.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[1] = 'dig26w_1.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[2] = 'dig26w_2.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[3] = 'dig26w_3.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[4] = 'dig26w_4.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[5] = 'dig26w_5.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[6] = 'dig26w_6.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[7] = 'dig26w_7.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[8] = 'dig26w_8.png';  // set of images with numbers
        idle_battery_TextCircle_ASCIIARRAY[9] = 'dig26w_9.png';  // set of images with numbers

        //start of ignored block
        for (let i = 0; i < 3; i++) {
          idle_battery_TextCircle[i] = hmUI.createWidget(hmUI.widget.IMG, {
            x: 0,
            y: 0,
            w: 466 * koef,
            h: 466 * koef,
            center_x: 233 * koef,
            center_y: 233 * koef,
            pos_x: 233 * koef - idle_battery_TextCircle_img_width / 2,
            pos_y: (233 - 219) * koef,
            src: 'dig26w_0.png',
            show_level: hmUI.show_level.ONLY_AOD,
          });
          idle_battery_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
        };

        idle_battery_TextCircle_unit = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          w: 466 * koef,
          h: 466 * koef,
          center_x: 233 * koef,
          center_y: 233 * koef,
          pos_x: 233 * koef - idle_battery_TextCircle_unit_width / 2,
          pos_y: (233 - 219) * koef,
          src: 'dig26w_proc.png',
          show_level: hmUI.show_level.ONLY_AOD,
        });
        idle_battery_TextCircle_unit.setProperty(hmUI.prop.VISIBLE, false);
        //end of ignored block

        let idle_analog_clock_time_pointer_hour = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
          hour_path: 'hand_hour_0.png',
          hour_centerX: 233 * koef,
          hour_centerY: 233 * koef,
          hour_posX: 26 * koef,
          hour_posY: 154 * koef,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        let idle_analog_clock_time_pointer_minute = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
          minute_path: 'hand_min_0.png',
          minute_centerX: 233 * koef,
          minute_centerY: 233 * koef,
          minute_posX: 26 * koef,
          minute_posY: 233 * koef,
          minute_cover_path: 'hand_dot.png',
          minute_cover_x: 218 * koef,
          minute_cover_y: 218 * koef,
          show_level: hmUI.show_level.ONLY_AOD,
        });

        // idle_analog_clock_pro_hour_pointer_img = hmUI.createWidget(hmUI.widget.IMG, {
        //   x: 0,
        //   y: 0,
        //   w: deviceInfo.width,
        //   h: deviceInfo.height,
        //   pos_x: 233 - 26,
        //   pos_y: 233 - 154,
        //   center_x: 233,
        //   center_y: 233,
        //   src: 'hand_hour_0.png',
        //   angle: 0,
        //   show_level: hmUI.show_level.ONLY_AOD,
        // });

        // idle_analog_clock_pro_minute_pointer_img = hmUI.createWidget(hmUI.widget.IMG, {
        //   x: 0,
        //   y: 0,
        //   w: deviceInfo.width,
        //   h: deviceInfo.height,
        //   pos_x: 233 - 26,
        //   pos_y: 233 - 233,
        //   center_x: 233,
        //   center_y: 233,
        //   src: 'hand_min_0.png',
        //   angle: 0,
        //   show_level: hmUI.show_level.ONLY_AOD,
        // });

        // idle_analog_clock_pro_minute_cover_pointer_img = hmUI.createWidget(hmUI.widget.IMG, {
        //   x: 218,
        //   y: 218,
        //   src: 'hand_dot.png',
        //   show_level: hmUI.show_level.ONLY_AOD,
        // });



        let Button_1 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: (233 - 50) * koef,
          y: 124 * koef,
          w: 100 * koef,
          h: 100 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();

            mode_1 = !mode_1;
            hmFS.SysProSetBool(wf_name + '_mode_1', mode_1);

            mode_1_sun_apply()

          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        let Button_2 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: (233 - 50) * koef,
          y: (466 - 100) * koef,
          w: 100 * koef,
          h: 100 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();

            dial_ID = (dial_ID + 1) % 6;
            hmFS.SysProSetInt(wf_name + '_dial_ID', dial_ID);
            dial_apply()

          }, // end func
          longpress_func: () => {
            vibro();
            dial_ID = 0;
            hmFS.SysProSetInt(wf_name + '_dial_ID', dial_ID);
            dial_apply()
          },
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        let Button_3 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: (233 - 50) * koef,
          y: (233 + 50) * koef,
          w: 100 * koef,
          h: 60 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();

            mode_2 = !mode_2;
            hmFS.SysProSetBool(wf_name + '_mode_2', mode_2);

            mode_2_2dtime_apply()

          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        let Button_3_color = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 0,
          y: (233 - 50) * koef,
          w: 100 * koef,
          h: 100 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();

            bg_color_ID = (bg_color_ID + 1) % color_array.length;
            hmFS.SysProSetInt(wf_name + '_bg_color_ID', bg_color_ID);
            hmUI.showToast({ text: 'bg color: ' + bg_color_ID });
            color_apply()

          }, // end func
          longpress_func: () => {
            vibro();

            bg_color_ID = 0;
            hmFS.SysProSetInt(wf_name + '_bg_color_ID', bg_color_ID);
            hmUI.showToast({ text: 'bg color: ' + bg_color_ID });
            color_apply()

          },
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        let Button_4 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 5 * koef,
          y: 88 * koef,
          w: 100 * koef,
          h: 100 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();
            hmApp.startApp({ url: 'Settings_batteryManagerScreen', native: true });
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        let Button_5 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 330 * koef,
          y: 40 * koef,
          w: 100 * koef,
          h: 100 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();
            hmApp.startApp({ url: 'AlarmInfoScreen', native: true });
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        let Button_6 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 35 * koef,
          y: 325 * koef,
          w: 100 * koef,
          h: 100 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();
            hmApp.startApp({ url: 'activityAppScreen', native: true });
          }, // end func
          longpress_func: (button_widget) => {
            vibro();
            hmApp.startApp({ url: 'SportListScreen', native: true });
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        let Button_7 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 365 * koef,
          y: 275 * koef,
          w: 100 * koef,
          h: 100 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();
            hmApp.startApp({ url: 'heart_app_Screen', native: true });
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        let Button_8 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 250 * koef,
          y: 195 * koef,
          w: 100 * koef,
          h: 80,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();
            hmApp.startApp({ url: 'ScheduleCalScreen', native: true });
          }, // end func
          longpress_func: (button_widget) => {
            vibro();
            hmApp.startApp({ appid: 1066654, url: 'page/index_wf_update' });
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        let Button_9 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 115 * koef,
          y: 195 * koef,
          w: 100 * koef,
          h: 80 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          click_func: (button_widget) => {
            vibro();
            //hmApp.startApp({ url: 'WeatherScreen', native: true });
            console.log('ckicj')
            weatherGroupVis = !weatherGroupVis;
            weatherGroup.setProperty(hmUI.prop.VISIBLE, weatherGroupVis);
          }, // end func
          longpress_func: (button_widget) => {
            vibro();
            hmApp.startApp({ appid: 1066654, url: 'page/index' });
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button

        let Button_13 = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: (233 - 50) * koef,
          y: 0,
          w: 100 * koef,
          h: 60 * koef,
          text: '',
          color: 0xFFFF8C00,
          text_size: 25,
          press_src: 'pst.png',
          normal_src: 'pst.png',
          longpress_func: () => {
            vibro();
            // alpha_mask_aod_id = (alpha_mask_aod_id + 1) % alpha_mask_array.length;
            // hmUI.showToast({ text: 'AOD mask: ' + (alpha_mask_array[alpha_mask_aod_id]).toString() + '%' });
            // hmFS.SysProSetInt(wf_name + '_alpha_mask_aod_id', alpha_mask_aod_id);

            // black_aod = !black_aod;
            // hmFS.SysProSetBool(wf_name + '_black_aod', black_aod);
            // hmUI.showToast({ text: 'Black AOD ' + black_aod });

            black_mode = (black_mode + 1) % black_mode_text.length;
            hmFS.SysProSetInt(wf_name + '_black_mode', black_mode);
            hmUI.showToast({ text: black_mode_text[black_mode].toString() });

            console.log('black_mode', black_mode);

            aod_mode_apply()
          },
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button


        weatherGroup = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 50 * koef,
          y: 110 * koef,
          w: deviceInfo.width,
          h: deviceInfo.height,
        })
        let wBG = weatherGroup.createWidget(hmUI.widget.FILL_RECT, {
          x: 70 - 50,
          y: 70 - 110,
          w: 466 - 70 * 2,
          h: 466 - 70 * 2,
          color: 0xFF211d1e,
          radius: 20,
          alpha: 240,
          show_level: hmUI.show_level.ONLY_NORMAL,
        })
        let wBG_line = weatherGroup.createWidget(hmUI.widget.STROKE_RECT, {
          x: 70 - 50,
          y: 70 - 110,
          w: 466 - 70 * 2,
          h: 466 - 70 * 2,
          color: 0xFFFFFFFF,
          radius: 20,
          line_width: 2,
          alpha: 220,
          show_level: hmUI.show_level.ONLY_NORMAL,
        })
        weatherGroup.createWidget(hmUI.widget.STROKE_RECT, {
          x: px(40),
          y: px(0),
          w: px(286),
          h: px(155),
          color: 0xFFFFFFFF,
          radius: px(30),
          line_width: 1,
          alpha: 80,
        })
        temperatureWidget = weatherGroup.createWidget(hmUI.widget.TEXT, {
          x: px(60),
          y: px(40) - px(15),
          w: px(150),
          h: px(80),
          text_size: px(60),  // Крупная температура
          color: 0xffFFFFFF,
          text: '--',  // Текущая температура
          align_h: hmUI.align.LEFT,
        });
        icoWidget = weatherGroup.createWidget(hmUI.widget.IMG, {
          x: px(200),
          y: px(30),
          w: px(70),
          h: px(70),
          auto_scale: true,
          src: 'icons/skc_d.png',
        })
        ico_prob_widget = weatherGroup.createWidget(hmUI.widget.IMG, {
          x: px(292),
          y: px(7),
          w: px(20),
          h: px(20),
          auto_scale: true,
          src: 'icons/ico_prob.png',
        })
        ico_prob_widget.setAlpha(220);
        precProbWidget = weatherGroup.createWidget(hmUI.widget.TEXT, {
          x: px(6),
          y: px(5),
          w: px(220),
          h: px(30),
          text_size: px(18),
          color: 0xFF80d9eb,//0xffCCCCCC,
          text: '--%',
          align_h: hmUI.align.RIGHT,
        })
        precProbWidget.setAlpha(220);
        feelsLikeWidget = weatherGroup.createWidget(hmUI.widget.TEXT, {
          x: px(60),
          y: px(5),
          w: px(220),
          h: px(30),
          text_size: px(18),
          color: 0xFF80d9eb,//0xffCCCCCC,
          text: "Feels like",  // "Ощущается как"
          align_h: hmUI.align.LEFT,
        });
        conditionWidget = weatherGroup.createWidget(hmUI.widget.TEXT, {
          x: px(60),
          y: px(100),
          w: px(200),
          h: px(50),
          text_size: px(20),
          color: 0xffFFFFFF,
          text: `--`,  // Состояние погоды
          line_space: -px(30),
          text_style: hmUI.text_style.WRAP,
          align_v: hmUI.align.CENTER_V,
          align_h: hmUI.align.LEFT,
        });


        //wind
        weatherGroup.createWidget(hmUI.widget.STROKE_RECT, {
          x: px(40),
          y: px(160),
          w: px(286),
          h: px(35),
          color: 0xFFFFFFFF,
          radius: px(15),
          alpha: 80,
        })
        windWidget = weatherGroup.createWidget(hmUI.widget.TEXT, {
          x: px(50),
          y: px(163),
          w: px(286),
          h: px(43),
          text_size: px(20),
          color: 0xffFFFFFF,
          text: '--',  // Скорость ветра и направление
          align_h: hmUI.align.CENTER_H,
        });

        //pressure
        weatherGroup.createWidget(hmUI.widget.STROKE_RECT, {
          x: px(40),
          y: px(200),
          w: px(286),
          h: px(35),
          color: 0xFFFFFFFF,
          radius: px(15),
          alpha: 80,
        })
        pressureWidget = weatherGroup.createWidget(hmUI.widget.TEXT, {
          x: px(45),
          y: px(203),
          w: px(286),
          h: px(43),
          text_size: px(20),
          color: 0xffFFFFFF,
          text: '--',  // Скорость ветра и направление
          align_h: hmUI.align.CENTER_H,
        });

        let wCity = weatherGroup.createWidget(hmUI.widget.TEXT, {
          x: 45,
          y: -36,
          w: 280,
          h: 40,
          text_size: 24,
          char_space: 0,
          line_space: 0,
          //font: 'fonts/productsans_black.ttf',
          color: 0xFFFFFFFF,
          align_h: hmUI.align.LEFT,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          //unit_type: 1,
          text: 'Сан-франциско',
          text_style: hmUI.text_style.NONE,
          show_level: hmUI.show_level.ONLY_NORMAL,
        })

        let wUpdate = weatherGroup.createWidget(hmUI.widget.TEXT, {
          x: 45,
          y: 240,
          w: 280,
          h: 40,
          text_size: 20,
          char_space: 0,
          line_space: 0,
          color: 0xFFFFFFFF,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          padding: true,
          text: '2024-10-04 16:00',
          text_style: hmUI.text_style.ELLIPSIS,
          show_level: hmUI.show_level.ONLY_NORMAL,
        })

        weatherGroup.createWidget(hmUI.widget.BUTTON, {
          x: 466 / 2 - 25 - 50,
          y: 290,
          w: 50,
          h: 50,
          text: 'X',
          color: 0xFFFF0000,
          text_size: 40,
          normal_color: 0xFF555555,
          press_color: 0xFFc1c1c1,
          radius: 50 / 2,
          click_func: (button_widget) => {
            vibro();
            //hmApp.startApp({ url: 'WeatherScreen', native: true });
            weatherGroupVis = !weatherGroupVis;
            weatherGroup.setProperty(hmUI.prop.VISIBLE, weatherGroupVis);
          }, // end func
          show_level: hmUI.show_level.ONLY_NORMAL,
        }); // end button
        weatherGroup.setProperty(hmUI.prop.VISIBLE, false);

        function aod_mode_apply() {

          normal_background_bg.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            radius: 233 * koef,
            color: black_mode == 2 ? 0xFF000000 : color_array[bg_color_ID],//'0xFFFFE0CB',
            show_level: hmUI.show_level.ONLY_NORMAL,
          });

          normal_pai_icon_img.setProperty(hmUI.prop.SRC, black_mode == 2 ? `dial_${dial_ID}_aod.png` : `dial_${dial_ID}.png`);
          normal_image_img.setProperty(hmUI.prop.VISIBLE, black_mode == 2 ? false : true)

          // idle_image_img.setProperty(hmUI.prop.VISIBLE, black_aod ? false : true)
          // idle_pai_icon_img.setProperty(hmUI.prop.SRC, black_aod ? `dial_${dial_ID}_aod.png` : `dial_${dial_ID}.png`)

          // idle_background_bg_mask.setProperty(hmUI.prop.MORE, {
          //   center_x: 233,
          //   center_y: 233,
          //   radius: 235,
          //   color: '0xFF000000',
          //   alpha: (alpha_mask_array[alpha_mask_aod_id] * 255) / 100,
          //   show_level: hmUI.show_level.ONLY_AOD,
          // });
          // idle_background_bg_mask.setProperty(hmUI.prop.VISIBLE, black_aod ? false : true)

          // idle_background_bg.setProperty(hmUI.prop.MORE, {
          //   center_x: 233,
          //   center_y: 233,
          //   radius: 233,
          //   color: black_aod ? '0xFF000000' : color_array[bg_color_ID],//'0xFFFFE0CB',
          //   show_level: hmUI.show_level.ONLY_AOD,
          // });
        }


        //--------ViBRO----------
        const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
        let timer_StopVibrate = null;
        function vibro(scene = 25) {
          let stopDelay = 50;
          stopVibro();
          vibrate.scene = scene;
          if (scene < 23 || scene > 25) stopDelay = 1300;
          vibrate.start();
          timer_StopVibrate = timer.createTimer(stopDelay, 3000, stopVibro, {});
        }
        function stopVibro() {
          vibrate.stop();
          if (timer_StopVibrate) timer.stopTimer(timer_StopVibrate);
        }
        //--------ViBRO----------









        function mode_1_sun_apply() {
          normal_sun_icon_img.setProperty(hmUI.prop.SRC, mode_1 ? `sunrise_${bg_color_ID}.png` : `sunset_${bg_color_ID}.png`)
          normal_sun_high_text_font.setProperty(hmUI.prop.VISIBLE, mode_1 ? true : false)
          normal_sun_low_text_font.setProperty(hmUI.prop.VISIBLE, mode_1 ? false : true)

          idle_sun_icon_img.setProperty(hmUI.prop.SRC, mode_1 ? `sunrise_${bg_color_ID}.png` : `sunset_${bg_color_ID}.png`)
          idle_sun_high_text_font.setProperty(hmUI.prop.VISIBLE, mode_1 ? true : false)
          idle_sun_low_text_font.setProperty(hmUI.prop.VISIBLE, mode_1 ? false : true)
        }
        mode_1_sun_apply()

        function mode_2_2dtime_apply() {
          normal_weather_image_progress_img_level.setProperty(hmUI.prop.VISIBLE, mode_2 ? true : false)
          idle_weather_image_progress_img_level.setProperty(hmUI.prop.VISIBLE, mode_2 ? true : false)

          time_down_digits_txt.setProperty(hmUI.prop.VISIBLE, mode_2 ? false : true)
          idle_time_down_digits_txt.setProperty(hmUI.prop.VISIBLE, mode_2 ? false : true)
          world_clock_down_digits_txt.setProperty(hmUI.prop.VISIBLE, mode_2 ? false : true)
          idle_world_clock_down_digits_txt.setProperty(hmUI.prop.VISIBLE, mode_2 ? false : true)
        }
        mode_2_2dtime_apply()

        function dial_apply() {
          normal_pai_icon_img.setProperty(hmUI.prop.SRC, black_mode == 2 ? `dial_${dial_ID}_aod.png` : `dial_${dial_ID}.png`)
          idle_pai_icon_img.setProperty(hmUI.prop.SRC, black_mode != 0 ? `dial_${dial_ID}_aod.png` : `dial_${dial_ID}.png`)
        }

        function getWorldClock() {
          //return;
          world_clock.init()
          const count = world_clock.getWorldClockCount()
          if (count > 0) {
            const worldData = world_clock.getWorldClockInfo(0)
            world_clock_down_digits_txt.setProperty(hmUI.prop.TEXT, worldData.cityCode);
            idle_world_clock_down_digits_txt.setProperty(hmUI.prop.TEXT, worldData.cityCode);

            let normal_time_HH_MIN = worldData.hour.toString().padStart(2, '0') + ':' + worldData.minute.toString().padStart(2, '0')
            time_down_digits_txt.setProperty(hmUI.prop.TEXT, `${normal_time_HH_MIN}`);
            idle_time_down_digits_txt.setProperty(hmUI.prop.TEXT, `${normal_time_HH_MIN}`);
          }
          world_clock.uninit()
        }

        function color_apply() {
          normal_background_bg.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            radius: 233 * koef,
            color: black_mode == 2 ? 0xFF000000 : color_array[bg_color_ID],//'0xFFFFE0CB',
          });
          idle_background_bg.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            radius: 233 * koef,
            color: black_mode != 0 ? '0xFF000000' : color_array[bg_color_ID],//'0xFFFFE0CB',
            show_level: hmUI.show_level.ONLY_AOD,
          });

          world_clock_down_digits_txt.setProperty(hmUI.prop.MORE, {
            x: 173 * koef,
            y: 308 * koef,
            w: 120 * koef,
            h: 30 * koef,
            text_size: 24 * koef,
            char_space: 0,
            line_space: 0,
            font: 'fonts/productsans_black.ttf',
            color: color_array_second[bg_color_ID],//0xFFFA822E,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            text_style: hmUI.text_style.ELLIPSIS,
          });
          normal_temperature_max_min_text_font.setProperty(hmUI.prop.MORE, {
            x: 85 * koef,
            y: 234 * koef,
            w: 160 * koef,
            h: 30 * koef,
            text_size: 24 * koef,
            char_space: 0,
            line_space: 0,
            font: 'fonts/productsans_black.ttf',
            color: color_array_second[bg_color_ID],//0xFFFA822E,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            padding: true,
            text_style: hmUI.text_style.ELLIPSIS,
          });
          normal_dow_text_font.setProperty(hmUI.prop.MORE, {
            x: 245 * koef,
            y: 234 * koef,
            w: 110 * koef,
            h: 30 * koef,
            text_size: 24 * koef,
            char_space: 0,
            line_space: 0,
            font: 'fonts/productsans_black.ttf',
            color: color_array_second[bg_color_ID],//0xFFFA822E,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            text_style: hmUI.text_style.ELLIPSIS,
          });
          idle_world_clock_down_digits_txt.setProperty(hmUI.prop.MORE, {
            x: 173 * koef,
            y: 308 * koef,
            w: 120 * koef,
            h: 30 * koef,
            text_size: 24 * koef,
            char_space: 0,
            line_space: 0,
            font: 'fonts/productsans_black.ttf',
            color: color_array_second[bg_color_ID],//0xFFFA822E,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            text_style: hmUI.text_style.ELLIPSIS,
          });
          idle_temperature_max_min_text_font.setProperty(hmUI.prop.MORE, {
            x: 85 * koef,
            y: 234 * koef,
            w: 160 * koef,
            h: 30 * koef,
            text_size: 24 * koef,
            char_space: 0,
            line_space: 0,
            font: 'fonts/productsans_black.ttf',
            color: color_array_second[bg_color_ID],//0xFFFA822E,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            padding: true,
            text_style: hmUI.text_style.ELLIPSIS,
          });
          idle_dow_text_font.setProperty(hmUI.prop.MORE, {
            x: 245 * koef,
            y: 234 * koef,
            w: 110 * koef,
            h: 30 * koef,
            text_size: 24 * koef,
            char_space: 0,
            line_space: 0,
            font: 'fonts/productsans_black.ttf',
            color: color_array_second[bg_color_ID],//0xFFFA822E,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            text_style: hmUI.text_style.ELLIPSIS,
          });
          normal_heart_rate_circle_scale_bg.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            start_angle: 132,
            end_angle: 168,
            radius: 210 * koef,
            line_width: 14 * koef,
            corner_flag: 0,
            level: 100,
            color: color_array_third[bg_color_ID],//0xFF592f10,
            show_level: hmUI.show_level.ONLY_NORMAL,
          });
          normal_heart_rate_circle_scale.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            start_angle: 132,
            end_angle: 168,
            radius: 210 * koef,
            line_width: 14 * koef,
            corner_flag: 0,
            color: color_array_second[bg_color_ID],//0xFFFA822E,
            show_level: hmUI.show_level.ONLY_NORMAL,
          });
          normal_battery_circle_scale_bg.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            start_angle: -48,
            end_angle: -12,
            radius: 210 * koef,
            line_width: 14 * koef,
            corner_flag: 0,
            color: color_array_third[bg_color_ID],//0xFF592f10,
            level: 100,
          });
          normal_battery_circle_scale.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            start_angle: -48,
            end_angle: -12,
            radius: 210 * koef,
            line_width: 14 * koef,
            corner_flag: 0,
            color: color_array_second[bg_color_ID],//0xFFFA822E,
          });
          idle_heart_rate_circle_scale_bg.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            start_angle: 132,
            end_angle: 168,
            radius: 210 * koef,
            line_width: 14 * koef,
            level: 100,
            color: color_array_third[bg_color_ID],//0xFF592f10,
          });
          idle_heart_rate_circle_scale.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            start_angle: 132,
            end_angle: 168,
            radius: 210 * koef,
            line_width: 14 * koef,
            corner_flag: 0,
            color: color_array_second[bg_color_ID],//0xFFFA822E,
          });
          idle_battery_circle_scale_bg.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            start_angle: -48,
            end_angle: -12,
            radius: 210 * koef,
            line_width: 14 * koef,
            corner_flag: 0,
            color: color_array_third[bg_color_ID],//0xFF592f10,
            level: 100,
          });
          idle_battery_circle_scale.setProperty(hmUI.prop.MORE, {
            center_x: 233 * koef,
            center_y: 233 * koef,
            start_angle: -48,
            end_angle: -12,
            radius: 210 * koef,
            line_width: 14 * koef,
            corner_flag: 0,
            color: color_array_second[bg_color_ID],//0xFFFA822E,
          });

          normal_sun_icon_img.setProperty(hmUI.prop.SRC, mode_1 ? `sunrise_${bg_color_ID}.png` : `sunset_${bg_color_ID}.png`)
          idle_sun_icon_img.setProperty(hmUI.prop.SRC, mode_1 ? `sunrise_${bg_color_ID}.png` : `sunset_${bg_color_ID}.png`)

          normal_heart_rate_icon_img.setProperty(hmUI.prop.SRC, `ico_heart_${bg_color_ID}.png`)
          normal_battery_icon_img.setProperty(hmUI.prop.SRC, `ico_batt_${bg_color_ID}.png`)
          idle_heart_rate_icon_img.setProperty(hmUI.prop.SRC, `ico_heart_${bg_color_ID}.png`)
          idle_battery_icon_img.setProperty(hmUI.prop.SRC, `ico_batt_${bg_color_ID}.png`)

          //hmUI.deleteWidget(sec_anim)
          sec_anim.setProperty(hmUI.prop.MORE, {
            second_path: `hand_sec_${bg_color_ID}.png`,
            second_centerX: 233 * koef,
            second_centerY: 233 * koef,
            second_posX: 5 * koef,
            second_posY: 233 * koef,
            fresh_frequency: 25,
            show_level: hmUI.show_level.ONLY_NORMAL,
          });

          wCurTempText.setProperty(hmUI.prop.COLOR, color_array_second[bg_color_ID]);
          wCityText.setProperty(hmUI.prop.COLOR, color_array_second[bg_color_ID]);
          wUpdateText.setProperty(hmUI.prop.COLOR, color_array_second[bg_color_ID]);
        }


        //start of ignored block
        function time_update(updateHour = false, updateMinute = false) {
          //console.log('time_update()');
          let hour = timeSensor.hour;
          let minute = timeSensor.minute;
          let second = timeSensor.second;
          let format_hour = timeSensor.format_hour;

          //console.log('day of week font');
          if (updateHour) {
            let normal_DOW_Str = normal_DOW_Array[timeSensor.week - 1];
            normal_dow_text_font.setProperty(hmUI.prop.TEXT, normal_DOW_Str);
          };

          //console.log('month font');
          if (updateHour) {
            let normal_Month_Str = normal_Month_Array[timeSensor.month - 1];
            normal_month_name_font.setProperty(hmUI.prop.TEXT, normal_Month_Str);
          };

          //console.log('day font');
          if (updateHour) {
            let normal_dayStr = timeSensor.day.toString();
            normal_dayStr = normal_dayStr.padStart(2, '0');
            normal_day_text_font.setProperty(hmUI.prop.TEXT, normal_dayStr);
          };

          if (updateHour) {
            let normal_hour = hour;
            let normal_fullAngle_hour = 360;
            if (normal_hour > 11) normal_hour -= 12;
            let normal_angle_hour = 0 + normal_fullAngle_hour * normal_hour / 12 + (normal_fullAngle_hour / 12) * minute / 60;
            if (normal_analog_clock_pro_hour_pointer_img) normal_analog_clock_pro_hour_pointer_img.setProperty(hmUI.prop.ANGLE, normal_angle_hour);
          };

          if (updateMinute) {
            let normal_fullAngle_minute = 360;
            let normal_angle_minute = 0 + normal_fullAngle_minute * (minute + second / 60) / 60;
            if (normal_analog_clock_pro_minute_pointer_img) normal_analog_clock_pro_minute_pointer_img.setProperty(hmUI.prop.ANGLE, normal_angle_minute);
            getWorldClock()
          };

          //console.log('day of week font');
          if (updateHour) {
            let idle_DOW_Str = idle_DOW_Array[timeSensor.week - 1];
            idle_dow_text_font.setProperty(hmUI.prop.TEXT, idle_DOW_Str);
          };

          //console.log('month font');
          if (updateHour) {
            let idle_Month_Str = idle_Month_Array[timeSensor.month - 1];
            idle_month_name_font.setProperty(hmUI.prop.TEXT, idle_Month_Str);
          };

          //console.log('day font');
          if (updateHour) {
            let idle_dayStr = timeSensor.day.toString();
            idle_dayStr = idle_dayStr.padStart(2, '0');
            idle_day_text_font.setProperty(hmUI.prop.TEXT, idle_dayStr);
          };

          // if (updateHour) {
          //   let idle_hour = hour;
          //   let idle_fullAngle_hour = 360;
          //   if (idle_hour > 11) idle_hour -= 12;
          //   let idle_angle_hour = 0 + idle_fullAngle_hour * idle_hour / 12 + (idle_fullAngle_hour / 12) * minute / 60;
          //   if (idle_analog_clock_pro_hour_pointer_img) idle_analog_clock_pro_hour_pointer_img.setProperty(hmUI.prop.ANGLE, idle_angle_hour);
          // };

          // if (updateMinute) {
          //   let idle_fullAngle_minute = 360;
          //   //let idle_angle_minute = 0 + idle_fullAngle_minute * minute / 60;
          //   let idle_angle_minute = 0 + idle_fullAngle_minute * (minute + second / 60) / 60;
          //   if (idle_analog_clock_pro_minute_pointer_img) idle_analog_clock_pro_minute_pointer_img.setProperty(hmUI.prop.ANGLE, idle_angle_minute);
          // };

        };

        //end of ignored block
        //start of ignored block
        function text_update() {
          //console.log('text_update()');

          //console.log('update text circle step_STEP');
          let valueStep = step.current;
          let normal_step_circle_string = parseInt(valueStep).toString();
          normal_step_circle_string = normal_step_circle_string.padStart(5, '0');
          if (screenType != hmSetting.screen_type.AOD) {
            for (var i = 1; i < 5; i++) {  // hide all symbols
              normal_step_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            let char_Angle = 405;
            if (valueStep != null && valueStep != undefined && isFinite(valueStep) && normal_step_circle_string.length > 0 && normal_step_circle_string.length <= 5) {  // display data if it was possible to get it
              let normal_step_TextCircle_img_angle = 0;
              let normal_step_TextCircle_dot_img_angle = 0;
              normal_step_TextCircle_img_angle = toDegree(Math.atan2(normal_step_TextCircle_img_width / 2, 208));
              // alignment = CENTER_H
              let normal_step_TextCircle_angleOffset = normal_step_TextCircle_img_angle * (normal_step_circle_string.length - 1);
              normal_step_TextCircle_angleOffset = -normal_step_TextCircle_angleOffset;
              char_Angle -= normal_step_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of normal_step_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 5) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle -= normal_step_TextCircle_img_angle;
                  firstSymbol = false;
                  normal_step_TextCircle[index].setProperty(hmUI.prop.ANGLE, index == 3 ? char_Angle + 1 : index == 4 ? char_Angle + 1 : char_Angle);
                  normal_step_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 - normal_step_TextCircle_img_width / 2);
                  normal_step_TextCircle[index].setProperty(hmUI.prop.SRC, normal_step_TextCircle_ASCIIARRAY[charCode]);
                  normal_step_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle -= normal_step_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
            }  // end isFinite
          };

          //console.log('update text circle hour_TIME');
          let valueHour = timeSensor.format_hour;
          let normal_hour_circle_string = parseInt(valueHour).toString();
          normal_hour_circle_string = normal_hour_circle_string.padStart(2, '0');

          if (screenType != hmSetting.screen_type.AOD) {
            for (var i = 1; i < 2; i++) {  // hide all symbols
              normal_hour_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            let char_Angle = 38;
            if (valueHour != null && valueHour != undefined && isFinite(valueHour) && normal_hour_circle_string.length > 0 && normal_hour_circle_string.length <= 2) {  // display data if it was possible to get it
              let normal_hour_TextCircle_img_angle = 0;
              let normal_hour_TextCircle_dot_img_angle = 0;
              normal_hour_TextCircle_img_angle = toDegree(Math.atan2(normal_hour_TextCircle_img_width / 2, 208));
              // alignment = CENTER_H
              let normal_hour_TextCircle_angleOffset = normal_hour_TextCircle_img_angle * (normal_hour_circle_string.length - 1);
              normal_hour_TextCircle_angleOffset = normal_hour_TextCircle_angleOffset + -1 * (normal_hour_circle_string.length - 1) / 2;
              char_Angle -= normal_hour_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of normal_hour_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 2) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle += normal_hour_TextCircle_img_angle;
                  firstSymbol = false;
                  normal_hour_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
                  normal_hour_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - normal_hour_TextCircle_img_width / 2);
                  normal_hour_TextCircle[index].setProperty(hmUI.prop.SRC, normal_hour_TextCircle_ASCIIARRAY[charCode]);
                  normal_hour_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle += normal_hour_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
            }  // end isFinite

          };

          //console.log('update text circle minute_TIME');
          let valueMinute = timeSensor.minute;
          let normal_minute_circle_string = parseInt(valueMinute).toString();
          normal_minute_circle_string = normal_minute_circle_string.padStart(2, '0');

          if (screenType != hmSetting.screen_type.AOD) {
            for (var i = 1; i < 2; i++) {  // hide all symbols
              normal_minute_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            let char_Angle = 55;
            if (valueMinute != null && valueMinute != undefined && isFinite(valueMinute) && normal_minute_circle_string.length > 0 && normal_minute_circle_string.length <= 2) {  // display data if it was possible to get it
              let normal_minute_TextCircle_img_angle = 0;
              let normal_minute_TextCircle_dot_img_angle = 0;
              normal_minute_TextCircle_img_angle = toDegree(Math.atan2(normal_minute_TextCircle_img_width / 2, 208));
              // alignment = CENTER_H
              let normal_minute_TextCircle_angleOffset = normal_minute_TextCircle_img_angle * (normal_minute_circle_string.length - 1);
              normal_minute_TextCircle_angleOffset = normal_minute_TextCircle_angleOffset + -1 * (normal_minute_circle_string.length - 1) / 2;
              char_Angle -= normal_minute_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of normal_minute_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 2) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle += normal_minute_TextCircle_img_angle;
                  firstSymbol = false;
                  normal_minute_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
                  normal_minute_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - normal_minute_TextCircle_img_width / 2);
                  normal_minute_TextCircle[index].setProperty(hmUI.prop.SRC, normal_minute_TextCircle_ASCIIARRAY[charCode]);
                  normal_minute_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle += normal_minute_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
            }  // end isFinite

          };

          //console.log('update text circle second_TIME');
          // let valueSecond = timeSensor.second;
          // let normal_second_circle_string = parseInt(valueSecond).toString();

          // if (screenType != hmSetting.screen_type.AOD) {
          //   for (var i = 1; i < 2; i++) {  // hide all symbols
          //     normal_second_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
          //   };
          //   let char_Angle = 46;
          //   if (valueSecond != null && valueSecond != undefined && isFinite(valueSecond) && normal_second_circle_string.length > 0 && normal_second_circle_string.length <= 2) {  // display data if it was possible to get it
          //     let normal_second_TextCircle_img_angle = 0;
          //     let normal_second_TextCircle_dot_img_angle = 0;
          //     normal_second_TextCircle_img_angle = toDegree(Math.atan2(normal_second_TextCircle_img_width/2, 209));
          //     // alignment = CENTER_H
          //     let normal_second_TextCircle_angleOffset = normal_second_TextCircle_img_angle * (normal_second_circle_string.length - 1);
          //     char_Angle -= normal_second_TextCircle_angleOffset;
          //     // alignment end

          //     let firstSymbol = true;
          //     let index = 0;
          //     for (let char of normal_second_circle_string) {
          //       let charCode = char.charCodeAt()-48;
          //       if (index >= 2) break;
          //       if (charCode >= 0 && charCode < 10) { 
          //         if (!firstSymbol) char_Angle += normal_second_TextCircle_img_angle;
          //         firstSymbol = false;
          //         normal_second_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
          //         normal_second_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 - normal_second_TextCircle_img_width / 2);
          //         normal_second_TextCircle[index].setProperty(hmUI.prop.SRC, normal_second_TextCircle_ASCIIARRAY[charCode]);
          //         normal_second_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
          //         char_Angle += normal_second_TextCircle_img_angle;
          //         index++;
          //       };  // end if digit
          //     };  // end char of string
          //   }  // end isFinite

          // };

          ////console.log('update text circle heart_rate_HEART');
          let valueHeartRate = heart_rate.last;
          let normal_heart_rate_circle_string = parseInt(valueHeartRate).toString();

          if (screenType != hmSetting.screen_type.AOD) {
            for (var i = 1; i < 3; i++) {  // hide all symbols
              normal_heart_rate_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            let char_Angle = 300;
            if (valueHeartRate != null && valueHeartRate != undefined && isFinite(valueHeartRate) && normal_heart_rate_circle_string.length > 0 && normal_heart_rate_circle_string.length <= 3) {  // display data if it was possible to get it
              let normal_heart_rate_TextCircle_img_angle = 0;
              let normal_heart_rate_TextCircle_dot_img_angle = 0;
              normal_heart_rate_TextCircle_img_angle = toDegree(Math.atan2(normal_heart_rate_TextCircle_img_width / 2, 208));
              // alignment = CENTER_H
              let normal_heart_rate_TextCircle_angleOffset = normal_heart_rate_TextCircle_img_angle * (normal_heart_rate_circle_string.length - 1);
              normal_heart_rate_TextCircle_angleOffset = -normal_heart_rate_TextCircle_angleOffset;
              char_Angle -= normal_heart_rate_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of normal_heart_rate_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 3) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle -= normal_heart_rate_TextCircle_img_angle;
                  firstSymbol = false;
                  normal_heart_rate_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
                  normal_heart_rate_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - normal_heart_rate_TextCircle_img_width / 2);
                  normal_heart_rate_TextCircle[index].setProperty(hmUI.prop.SRC, normal_heart_rate_TextCircle_ASCIIARRAY[charCode]);
                  normal_heart_rate_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle -= normal_heart_rate_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
            }  // end isFinite

          };

          //console.log('update text circle battery_BATTERY');
          let valueBattery = battery.current;
          let normal_battery_circle_string = parseInt(valueBattery).toString();

          if (screenType != hmSetting.screen_type.AOD) {
            for (var i = 1; i < 3; i++) {  // hide all symbols
              normal_battery_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            normal_battery_TextCircle_unit.setProperty(hmUI.prop.VISIBLE, false);
            let char_Angle = -60;
            if (valueBattery != null && valueBattery != undefined && isFinite(valueBattery) && normal_battery_circle_string.length > 0 && normal_battery_circle_string.length <= 3) {  // display data if it was possible to get it
              let normal_battery_TextCircle_img_angle = 0;
              let normal_battery_TextCircle_dot_img_angle = 0;
              let normal_battery_TextCircle_unit_angle = 0;
              normal_battery_TextCircle_img_angle = toDegree(Math.atan2(normal_battery_TextCircle_img_width / 2, 208));
              normal_battery_TextCircle_unit_angle = toDegree(Math.atan2(normal_battery_TextCircle_unit_width / 2, 208));
              // alignment = CENTER_H
              let normal_battery_TextCircle_angleOffset = normal_battery_TextCircle_img_angle * (normal_battery_circle_string.length - 1);
              normal_battery_TextCircle_angleOffset = normal_battery_TextCircle_angleOffset + (normal_battery_TextCircle_img_angle + normal_battery_TextCircle_unit_angle + 0) / 2;
              char_Angle -= normal_battery_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of normal_battery_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 3) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle += normal_battery_TextCircle_img_angle;
                  firstSymbol = false;
                  normal_battery_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
                  normal_battery_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - normal_battery_TextCircle_img_width / 2);
                  normal_battery_TextCircle[index].setProperty(hmUI.prop.SRC, normal_battery_TextCircle_ASCIIARRAY[charCode]);
                  normal_battery_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle += normal_battery_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
              char_Angle += normal_battery_TextCircle_unit_angle;
              normal_battery_TextCircle_unit.setProperty(hmUI.prop.ANGLE, char_Angle);
              normal_battery_TextCircle_unit.setProperty(hmUI.prop.VISIBLE, true);
            }  // end isFinite

          };

          //console.log('update text circle step_STEP');
          let idle_step_circle_string = parseInt(valueStep).toString();
          idle_step_circle_string = idle_step_circle_string.padStart(5, '0');

          if (screenType == hmSetting.screen_type.AOD) {
            for (var i = 1; i < 5; i++) {  // hide all symbols
              idle_step_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            let char_Angle = 405;
            if (valueStep != null && valueStep != undefined && isFinite(valueStep) && idle_step_circle_string.length > 0 && idle_step_circle_string.length <= 5) {  // display data if it was possible to get it
              let idle_step_TextCircle_img_angle = 0;
              let idle_step_TextCircle_dot_img_angle = 0;
              idle_step_TextCircle_img_angle = toDegree(Math.atan2(idle_step_TextCircle_img_width / 2, 208));
              // alignment = CENTER_H
              let idle_step_TextCircle_angleOffset = idle_step_TextCircle_img_angle * (idle_step_circle_string.length - 1);
              idle_step_TextCircle_angleOffset = -idle_step_TextCircle_angleOffset;
              char_Angle -= idle_step_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of idle_step_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 5) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle -= idle_step_TextCircle_img_angle;
                  firstSymbol = false;
                  idle_step_TextCircle[index].setProperty(hmUI.prop.ANGLE, index == 3 ? char_Angle + 1 : index == 4 ? char_Angle + 1 : char_Angle);
                  idle_step_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - idle_step_TextCircle_img_width / 2);
                  idle_step_TextCircle[index].setProperty(hmUI.prop.SRC, idle_step_TextCircle_ASCIIARRAY[charCode]);
                  idle_step_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle -= idle_step_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
            }  // end isFinite

          };

          //console.log('update text circle hour_TIME');
          let idle_hour_circle_string = parseInt(valueHour).toString();
          idle_hour_circle_string = idle_hour_circle_string.padStart(2, '0');

          if (screenType == hmSetting.screen_type.AOD) {
            for (var i = 1; i < 2; i++) {  // hide all symbols
              idle_hour_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            let char_Angle = 38;
            if (valueHour != null && valueHour != undefined && isFinite(valueHour) && idle_hour_circle_string.length > 0 && idle_hour_circle_string.length <= 2) {  // display data if it was possible to get it
              let idle_hour_TextCircle_img_angle = 0;
              let idle_hour_TextCircle_dot_img_angle = 0;
              idle_hour_TextCircle_img_angle = toDegree(Math.atan2(idle_hour_TextCircle_img_width / 2, 208));
              // alignment = CENTER_H
              let idle_hour_TextCircle_angleOffset = idle_hour_TextCircle_img_angle * (idle_hour_circle_string.length - 1);
              idle_hour_TextCircle_angleOffset = idle_hour_TextCircle_angleOffset + -1 * (idle_hour_circle_string.length - 1) / 2;
              char_Angle -= idle_hour_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of idle_hour_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 2) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle += idle_hour_TextCircle_img_angle;
                  firstSymbol = false;
                  idle_hour_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
                  idle_hour_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - idle_hour_TextCircle_img_width / 2);
                  idle_hour_TextCircle[index].setProperty(hmUI.prop.SRC, idle_hour_TextCircle_ASCIIARRAY[charCode]);
                  idle_hour_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle += idle_hour_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
            }  // end isFinite

          };

          //console.log('update text circle minute_TIME');
          let idle_minute_circle_string = parseInt(valueMinute).toString();
          idle_minute_circle_string = idle_minute_circle_string.padStart(2, '0');

          if (screenType == hmSetting.screen_type.AOD) {
            for (var i = 1; i < 2; i++) {  // hide all symbols
              idle_minute_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            let char_Angle = 55;
            if (valueMinute != null && valueMinute != undefined && isFinite(valueMinute) && idle_minute_circle_string.length > 0 && idle_minute_circle_string.length <= 2) {  // display data if it was possible to get it
              let idle_minute_TextCircle_img_angle = 0;
              let idle_minute_TextCircle_dot_img_angle = 0;
              idle_minute_TextCircle_img_angle = toDegree(Math.atan2(idle_minute_TextCircle_img_width / 2, 208));
              // alignment = CENTER_H
              let idle_minute_TextCircle_angleOffset = idle_minute_TextCircle_img_angle * (idle_minute_circle_string.length - 1);
              idle_minute_TextCircle_angleOffset = idle_minute_TextCircle_angleOffset + -1 * (idle_minute_circle_string.length - 1) / 2;
              char_Angle -= idle_minute_TextCircle_angleOffset;
              // alignment end
              let firstSymbol = true;
              let index = 0;
              for (let char of idle_minute_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 2) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle += idle_minute_TextCircle_img_angle;
                  firstSymbol = false;
                  idle_minute_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
                  idle_minute_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - idle_minute_TextCircle_img_width / 2);
                  idle_minute_TextCircle[index].setProperty(hmUI.prop.SRC, idle_minute_TextCircle_ASCIIARRAY[charCode]);
                  idle_minute_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle += idle_minute_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
            }  // end isFinite
          };

          //console.log('update text circle second_TIME');
          //let idle_second_circle_string = parseInt(valueSecond).toString();

          // if (screenType == hmSetting.screen_type.AOD) {
          //   for (var i = 1; i < 2; i++) {  // hide all symbols
          //     idle_second_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
          //   };
          //   let char_Angle = 46;
          //   if (valueSecond != null && valueSecond != undefined && isFinite(valueSecond) && idle_second_circle_string.length > 0 && idle_second_circle_string.length <= 2) {  // display data if it was possible to get it
          //     let idle_second_TextCircle_img_angle = 0;
          //     let idle_second_TextCircle_dot_img_angle = 0;
          //     idle_second_TextCircle_img_angle = toDegree(Math.atan2(idle_second_TextCircle_img_width/2, 209));
          //     // alignment = CENTER_H
          //     let idle_second_TextCircle_angleOffset = idle_second_TextCircle_img_angle * (idle_second_circle_string.length - 1);
          //     char_Angle -= idle_second_TextCircle_angleOffset;
          //     // alignment end

          //     let firstSymbol = true;
          //     let index = 0;
          //     for (let char of idle_second_circle_string) {
          //       let charCode = char.charCodeAt()-48;
          //       if (index >= 2) break;
          //       if (charCode >= 0 && charCode < 10) { 
          //         if (!firstSymbol) char_Angle += idle_second_TextCircle_img_angle;
          //         firstSymbol = false;
          //         idle_second_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
          //         idle_second_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 - idle_second_TextCircle_img_width / 2);
          //         idle_second_TextCircle[index].setProperty(hmUI.prop.SRC, idle_second_TextCircle_ASCIIARRAY[charCode]);
          //         idle_second_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
          //         char_Angle += idle_second_TextCircle_img_angle;
          //         index++;
          //       };  // end if digit
          //     };  // end char of string
          //   }  // end isFinite

          // };

          ////console.log('update text circle heart_rate_HEART');
          let idle_heart_rate_circle_string = parseInt(valueHeartRate).toString();

          if (screenType == hmSetting.screen_type.AOD) {
            for (var i = 1; i < 3; i++) {  // hide all symbols
              idle_heart_rate_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            let char_Angle = 300;
            if (valueHeartRate != null && valueHeartRate != undefined && isFinite(valueHeartRate) && idle_heart_rate_circle_string.length > 0 && idle_heart_rate_circle_string.length <= 3) {  // display data if it was possible to get it
              let idle_heart_rate_TextCircle_img_angle = 0;
              let idle_heart_rate_TextCircle_dot_img_angle = 0;
              idle_heart_rate_TextCircle_img_angle = toDegree(Math.atan2(idle_heart_rate_TextCircle_img_width / 2, 208));
              // alignment = CENTER_H
              let idle_heart_rate_TextCircle_angleOffset = idle_heart_rate_TextCircle_img_angle * (idle_heart_rate_circle_string.length - 1);
              idle_heart_rate_TextCircle_angleOffset = -idle_heart_rate_TextCircle_angleOffset;
              char_Angle -= idle_heart_rate_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of idle_heart_rate_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 3) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle -= idle_heart_rate_TextCircle_img_angle;
                  firstSymbol = false;
                  idle_heart_rate_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
                  idle_heart_rate_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - idle_heart_rate_TextCircle_img_width / 2);
                  idle_heart_rate_TextCircle[index].setProperty(hmUI.prop.SRC, idle_heart_rate_TextCircle_ASCIIARRAY[charCode]);
                  idle_heart_rate_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle -= idle_heart_rate_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
            }  // end isFinite

          };

          //console.log('update text circle battery_BATTERY');
          let idle_battery_circle_string = parseInt(valueBattery).toString();

          if (screenType == hmSetting.screen_type.AOD) {
            for (var i = 1; i < 3; i++) {  // hide all symbols
              idle_battery_TextCircle[i].setProperty(hmUI.prop.VISIBLE, false);
            };
            idle_battery_TextCircle_unit.setProperty(hmUI.prop.VISIBLE, false);
            let char_Angle = -60;
            if (valueBattery != null && valueBattery != undefined && isFinite(valueBattery) && idle_battery_circle_string.length > 0 && idle_battery_circle_string.length <= 3) {  // display data if it was possible to get it
              let idle_battery_TextCircle_img_angle = 0;
              let idle_battery_TextCircle_dot_img_angle = 0;
              let idle_battery_TextCircle_unit_angle = 0;
              idle_battery_TextCircle_img_angle = toDegree(Math.atan2(idle_battery_TextCircle_img_width / 2, 208));
              idle_battery_TextCircle_unit_angle = toDegree(Math.atan2(idle_battery_TextCircle_unit_width / 2, 208));
              // alignment = CENTER_H
              let idle_battery_TextCircle_angleOffset = idle_battery_TextCircle_img_angle * (idle_battery_circle_string.length - 1);
              idle_battery_TextCircle_angleOffset = idle_battery_TextCircle_angleOffset + (idle_battery_TextCircle_img_angle + idle_battery_TextCircle_unit_angle + 0) / 2;
              char_Angle -= idle_battery_TextCircle_angleOffset;
              // alignment end

              let firstSymbol = true;
              let index = 0;
              for (let char of idle_battery_circle_string) {
                let charCode = char.charCodeAt() - 48;
                if (index >= 3) break;
                if (charCode >= 0 && charCode < 10) {
                  if (!firstSymbol) char_Angle += idle_battery_TextCircle_img_angle;
                  firstSymbol = false;
                  idle_battery_TextCircle[index].setProperty(hmUI.prop.ANGLE, char_Angle);
                  idle_battery_TextCircle[index].setProperty(hmUI.prop.POS_X, 233 * koef - idle_battery_TextCircle_img_width / 2);
                  idle_battery_TextCircle[index].setProperty(hmUI.prop.SRC, idle_battery_TextCircle_ASCIIARRAY[charCode]);
                  idle_battery_TextCircle[index].setProperty(hmUI.prop.VISIBLE, true);
                  char_Angle += idle_battery_TextCircle_img_angle;
                  index++;
                };  // end if digit
              };  // end char of string
              char_Angle += idle_battery_TextCircle_unit_angle;
              idle_battery_TextCircle_unit.setProperty(hmUI.prop.ANGLE, char_Angle);
              idle_battery_TextCircle_unit.setProperty(hmUI.prop.VISIBLE, true);
            }  // end isFinite

          };

        };

        //end of ignored block
        function scale_call() {
          //console.log('scale_call()');

          //console.log('update scales HEART');

          let valueHeartRate = heart_rate.last;
          let targetHeartRate = 179;
          let progressHeartRate = (valueHeartRate - 50) / (targetHeartRate - 50);
          if (progressHeartRate < 0) progressHeartRate = 0;
          if (progressHeartRate > 1) progressHeartRate = 1;
          let progress_cs_normal_heart_rate = progressHeartRate;

          if (screenType != hmSetting.screen_type.AOD) {

            // normal_heart_rate_circle_scale_circle_scale
            let level = Math.round(progress_cs_normal_heart_rate * 100);
            if (normal_heart_rate_circle_scale) {
              normal_heart_rate_circle_scale.setProperty(hmUI.prop.MORE, {
                center_x: 233 * koef,
                center_y: 233 * koef,
                start_angle: 132,
                end_angle: 168,
                radius: 210 * koef,
                line_width: 14 * koef,
                corner_flag: 0,
                color: color_array_second[bg_color_ID],//0xFFFA822E,
                show_level: hmUI.show_level.ONLY_NORMAL,
                level: level,
              });
            };
          };

          //console.log('update scales BATTERY');

          let valueBattery = battery.current;
          let targetBattery = 100;
          let progressBattery = valueBattery / targetBattery;
          if (progressBattery > 1) progressBattery = 1;
          let progress_cs_normal_battery = progressBattery;

          if (screenType != hmSetting.screen_type.AOD) {

            // normal_battery_circle_scale_circle_scale
            let level = Math.round(progress_cs_normal_battery * 100);
            if (normal_battery_circle_scale) {
              normal_battery_circle_scale.setProperty(hmUI.prop.MORE, {
                center_x: 233 * koef,
                center_y: 233 * koef,
                start_angle: -48,
                end_angle: -12,
                radius: 210 * koef,
                line_width: 14 * koef,
                corner_flag: 0,
                color: color_array_second[bg_color_ID],//0xFFFA822E,
                show_level: hmUI.show_level.ONLY_NORMAL,
                level: level,
              });
            };
          };

          //console.log('update scales HEART');
          let progress_cs_idle_heart_rate = progressHeartRate;

          if (screenType == hmSetting.screen_type.AOD) {

            // idle_heart_rate_circle_scale_circle_scale
            let level = Math.round(progress_cs_idle_heart_rate * 100);
            if (idle_heart_rate_circle_scale) {
              idle_heart_rate_circle_scale.setProperty(hmUI.prop.MORE, {
                center_x: 233 * koef,
                center_y: 233 * koef,
                start_angle: 132,
                end_angle: 168,
                radius: 210 * koef,
                line_width: 14 * koef,
                corner_flag: 0,
                color: color_array_second[bg_color_ID],//0xFFFA822E,
                show_level: hmUI.show_level.ONLY_AOD,
                level: level,
              });
            };
          };

          //console.log('update scales BATTERY');
          let progress_cs_idle_battery = progressBattery;

          if (screenType == hmSetting.screen_type.AOD) {

            // idle_battery_circle_scale_circle_scale
            let level = Math.round(progress_cs_idle_battery * 100);
            if (idle_battery_circle_scale) {
              idle_battery_circle_scale.setProperty(hmUI.prop.MORE, {
                center_x: 233 * koef,
                center_y: 233 * koef,
                start_angle: -48,
                end_angle: -12,
                radius: 210 * koef,
                line_width: 14 * koef,
                corner_flag: 0,
                color: color_array_second[bg_color_ID],//0xFFFA822E,
                show_level: hmUI.show_level.ONLY_AOD,
                level: level,
              });
            };
          };

        };




        //#region Loading data from RuWeather
        function arrayBufferToCyrillic(buffer) {
          let result = '';
          const bytes = new Uint8Array(buffer);

          let i = 0;
          while (i < bytes.length) {
            let byte1 = bytes[i++];

            // Обработка 1-байтовых символов (ASCII)
            if (byte1 < 0x80) {
              result += String.fromCharCode(byte1);
            }
            // Обработка 2-байтовых символов (UTF-8 кодировка для кириллицы)
            else if (byte1 >= 0xC0 && byte1 < 0xE0) {
              let byte2 = bytes[i++];
              let charCode = ((byte1 & 0x1F) << 6) | (byte2 & 0x3F);
              result += String.fromCharCode(charCode);
            }
            // Обработка 3-байтовых символов (например, для UTF-8)
            else if (byte1 >= 0xE0 && byte1 < 0xF0) {
              let byte2 = bytes[i++];
              let byte3 = bytes[i++];
              let charCode = ((byte1 & 0x0F) << 12) | ((byte2 & 0x3F) << 6) | (byte3 & 0x3F);
              result += String.fromCharCode(charCode);
            }
          }

          return result;
        }
        function read_weather_data_str() {
          console.log('start read weather data');
          let str_result = "";
          try {
            const file_name = "weather.json";
            const mini_app_id = 1066654;

            const [fs_stat, err] = hmFS.stat(file_name, {
              appid: mini_app_id
            });
            if (err == 0) {
              //console.log('--->size_alt:', fs_stat.size);

              const fh = hmFS.open(file_name, hmFS.O_RDONLY, {
                appid: mini_app_id
              })

              const len = fs_stat.size;
              let array_buffer = new ArrayBuffer(len);
              hmFS.read(fh, array_buffer, 0, len);
              hmFS.close(fh);
              str_result = arrayBufferToCyrillic(array_buffer);
              //console.log(`str_result = ${str_result}`);
              return str_result;

            } else {
              console.log('err:', err)
            }

          } catch (error) {
            console.log('error:', error);
            console.log("FAIL: No access to hmFS.");
          }
          return "";
        }
        function getDataValue(str = "") {
          try {
            const data = JSON.parse(str);

            normal_temperature_current_text_font.setProperty(hmUI.prop.TEXT, data.temperature + '°')
            idle_temperature_current_text_font.setProperty(hmUI.prop.TEXT, data.temperature + '°')

            temperatureWidget.setProperty(hmUI.prop.TEXT, data.temperature + '°')
            icoWidget.setProperty(hmUI.prop.SRC, 'icons/' + data.weatherIconString + '.png');
            //ico_prob_widget.setProperty(hmUI.prop.TEXT, weatherJson.chanceOfRain > 0 ? weatherJson.chanceOfRain + '%' : '')
            precProbWidget.setProperty(hmUI.prop.TEXT, data.chanceOfRain > 0 ? data.chanceOfRain + '%' : '')
            feelsLikeWidget.setProperty(hmUI.prop.TEXT, 'Ощущается: ' + ` ${data.temperatureFeels}` + '°');
            conditionWidget.setProperty(hmUI.prop.TEXT, getWeatherDescription(data.weatherDescription));
            data.windSpeed != 0
              ? windWidget.setProperty(hmUI.prop.TEXT, `Ветер: ${data.windSpeed}` + ` м/с, ` + getWindDirection(data.windTitle))// + ', ' + getText(data.windTitle))
              : windWidget.setProperty(hmUI.prop.TEXT, "Ветер: Штиль")
            pressureWidget.setProperty(hmUI.prop.TEXT, `Давление: ${data.pressure} мм рт.ст.`)


            wCity.setProperty(hmUI.prop.TEXT, data.city)
            wUpdate.setProperty(hmUI.prop.TEXT, 'Обновлено: ' + data.weatherTimeStr)

          } catch (error) {
            console.log('error:', error);
          }

          function getWeatherDescription(state) {
            switch (state) {
              case "CLEAR":
                return "Ясно";
              case "PARTLY_CLOUDY":
                return "Переменная облачность";
              case "CLOUDY":
                return "Облачно";
              case "OVERCAST":
                return "Пасмурно";
              case "LIGHT_RAIN":
                return "Небольшой дождь";
              case "RAIN":
                return "Дождь";
              case "HEAVY_RAIN":
                return "Сильный дождь";
              case "SHOWERS":
                return "Ливень";
              case "SLEET":
                return "Дождь со снегом";
              case "LIGHT_SNOW":
                return "Небольшой снег";
              case "SNOW":
                return "Снег";
              case "SNOWFALL":
                return "Снегопад";
              case "HAIL":
                return "Град";
              case "THUNDERSTORM":
                return "Гроза";
              case "THUNDERSTORM_WITH_RAIN":
                return "Гроза с дождем";
              case "THUNDERSTORM_WITH_HAIL":
                return "Гроза с градом";
              default:
                return "Неизвестное состояние";
            }
          }
          function getWindDirection(abbreviation) {
            switch (abbreviation) {
              case "N":
                return "С";
              case "NE":
                return "СВ";
              case "E":
                return "В";
              case "SE":
                return "ЮВ";
              case "S":
                return "Ю";
              case "SW":
                return "ЮЗ";
              case "W":
                return "З";
              case "NW":
                return "СЗ";
              default:
                return "Неизвестное направление";
            }
          }

          //return value;
        }

        function updateWeatherApp() {
          console.log('tick')
          let read_str = read_weather_data_str();
          getDataValue(read_str);
        }
        //#endregion


        const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
          resume_call: (function () {
            console.log('resume_call()');
            weatherGroupVis = false;
            weatherGroup.setProperty(hmUI.prop.VISIBLE, weatherGroupVis);
            scale_call();
            time_update(true, true);
            text_update();
            updateWeatherApp()
            if (screenType == hmSetting.screen_type.WATCHFACE) {
              if (!normal_timerTextUpdate) {
                normal_timerTextUpdate = timer.createTimer(0, 1000, (function (option) {
                  text_update();
                }));  // end timer 
              };  // end timer check
            };  // end screenType

            if (screenType == hmSetting.screen_type.WATCHFACE) {
              if (!normal_timerUpdateSec) {
                let animDelay = timeSensor.utc % 1000;
                let animRepeat = 1000;
                normal_timerUpdateSec = timer.createTimer(animDelay, animRepeat, (function (option) {
                  time_update(false, true);
                }));  // end timer 
              };  // end timer check
            };  // end screenType




            // let secAngle = 0 + (360 * 6) * (timeSensor.second + ((timeSensor.utc % 1000) / 1000)) / 360;
            // //normal_analog_clock_pro_second_pointer_img.setProperty(hmUI.prop.ANGLE, secAngle);
            // normal_analog_clock_pro_second_pointer_img_shad.setProperty(hmUI.prop.ANGLE, secAngle);
            // if (screenType == hmSetting.screen_type.WATCHFACE) {
            //   if (!normal_timerUpdateSecSmooth) {
            //     let duration = 0;
            //     let animDuration = 5000;
            //     if (timeSensor.second > 55) animDuration = 1000 * (60.1 - (timeSensor.second - (timeSensor.utc % 1000) / 1000));
            //     let diffTime = timeSensor.utc - lastTime;
            //     if (diffTime < animDuration) duration = animDuration - diffTime;
            //     normal_timerUpdateSecSmooth = timer.createTimer(duration, animDuration, (function (option) {
            //       lastTime = timeSensor.utc;
            //       secAngle = 0 + (360 * 6) * (timeSensor.second + ((timeSensor.utc % 1000) / 1000)) / 360;
            //       startSecAnim(secAngle, animDuration);
            //     }));  // end timer 
            //   };  // end timer check
            // };  // end screenType

            if (screenType == hmSetting.screen_type.AOD) {

              // console.log(alpha_mask_aod_id, alpha_mask_array.length, black_aod)
              // idle_image_img.setProperty(hmUI.prop.VISIBLE, black_aod ? false : true)

              if (!idle_timerTextUpdate) {
                idle_timerTextUpdate = timer.createTimer(0, 1000, (function (option) {
                  text_update();
                }));  // end timer 
              };  // end timer check
            };  // end screenType

            stopVibro()
          }),
          pause_call: (function () {
            console.log('pause_call()');
            if (normal_timerTextUpdate) {
              timer.stopTimer(normal_timerTextUpdate);
              normal_timerTextUpdate = undefined;
            }
            if (normal_timerUpdateSec) {
              timer.stopTimer(normal_timerUpdateSec);
              normal_timerUpdateSec = undefined;
            }
            // if (normal_timerUpdateSecSmooth) {
            //   timer.stopTimer(normal_timerUpdateSecSmooth);
            //   normal_timerUpdateSecSmooth = undefined;
            // }
            if (idle_timerTextUpdate) {
              timer.stopTimer(idle_timerTextUpdate);
              idle_timerTextUpdate = undefined;
            }
            stopVibro()
          }),
        });

        //dynamic modify end
      },
      onInit() {
        loadSettings();
        logger.log('index page.js on init invoke');
      },
      build() {
        this.init_view();
        logger.log('index page.js on ready invoke');
      },
      onDestroy() {
        logger.log('index page.js on destroy invoke');
      }
    });
    ;
  })();
} catch (e) {
  console.log('Mini Program Error', e);
  e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
  ;
}