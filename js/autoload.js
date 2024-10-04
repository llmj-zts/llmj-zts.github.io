try {
    $("<link>").attr({href: "../assets/waifu.min.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: '../assets/waifu-tips.min.js',dataType:"script", cache: true, async: false});
    $.ajax({url: '../assets/live2d.min.js',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    live2d_settings['modelId'] = 2;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 6;          // 默认材质 ID
    live2d_settings['modelStorage']         = false;         // 记录 ID (刷新后恢复)，可选 true(真), false(假)
    live2d_settings['showHitokoto']         = true;         // 显示一言
    live2d_settings['showF12Status']        = true;         // 显示加载状态
    live2d_settings['showF12Message']       = false;        // 显示看板娘消息
    live2d_settings['showF12OpenMsg']       = true;         // 显示控制台打开提示
    live2d_settings['showCopyMessage']      = true;         // 显示 复制内容 提示
    live2d_settings['showWelcomeMessage']   = true;         // 显示进入面页欢迎词
    live2d_settings['waifuDraggable']       = 'axis-x';
    live2d_settings['homePageUrl']          = 'index.html';       // 主页地址，可选 'auto'(自动), '{URL 网址}'
    live2d_settings['aboutPageUrl']         = 'https://www.fghrsh.net/post/123.html';   // 关于页地址, '{URL 网址}'
    live2d_settings['screenshotCaptureName']= 'llmj.png'; // 看板娘截图文件名，例如 'live2d.png'
    /* 在 initModel 前添加 */
    initModel('../assets/waifu-tips.json');
} catch(err) { console.log('[Error] JQuery is not defined.') }
