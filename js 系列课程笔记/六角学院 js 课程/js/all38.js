var send = document.querySelector('.send');
var email = document.querySelector('.email');
var password = document.querySelector('.password');

send.addEventListener('click',signup,false);

function signup() {
    if(email.value === ''){
        window.alert('请填写账号！');
    }
    else if(password.value === ''){
        window.alert('密码不能为空！');
    }
    else{
        var account = {};
        account.account = email.value;
        account.password = password.value;
        console.log(account);
        var xhr = new XMLHttpRequest();
        xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
        xhr.setRequestHeader('content-type','application/json');
        var data = JSON.stringify(account);
        xhr.send(data);
        xhr.onload = function () {
            // 更改回传的字串的格式
            var callbackData = JSON.parse(xhr.responseText);
            console.log(callbackData);
            var veriStr = callbackData.message;
            if(veriStr == "账号注册成功"){
                window.alert("账号注册成功");
            }else{
                window.alert("注册失败！");
            }

        }
    }

}