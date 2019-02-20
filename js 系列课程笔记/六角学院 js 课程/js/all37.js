var xhr = new XMLHttpRequest();

// 将数据传送到网址并请求数据
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);

// 传送的数据的格式(根据后端提供的格式),一定要写在 open 和 send 中间，否则会抛出异常
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

// 传送的数据
xhr.send('email=abcdef@gmail.com&password=1234');

// 可以在 console 里面输入 xhr 查询状态