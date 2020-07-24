$(function() {
    // 登录注册栏切换事件
    $("#link_reg").on("click", function() {
        $(".login-box").hide();
        $(".reg-box").show();
    });

    $("#link_login").on("click", function() {
        $(".login-box").show();
        $(".reg-box").hide();
    });
    // 自定义验证规则
    var form = layui.form;
    // 通过 form.verify() 函数自定义校验规则
    form.verify({
        // 自定义用户名校验规则
        namepass: [
            /^[\w]{6,12}$/, '用户名必须6到12为,只能0-9,a-z,A-Z,_'
        ],
        // 自定义了一个叫做 pwd 校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致的规则
        repwd: function(value) {
            // 通过形参拿到的是确认密码框中的内容
            // 还需要拿到密码框中的内容
            // 然后进行一次等于的判断
            // 如果判断失败,则return一个提示消息即可
            var pwd = $('.reg-box [name=password]').val();
            if (pwd !== value) {
                return '两次密码不一致！'
            };
        }
    });

    // ajax接口请求

})