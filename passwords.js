// verifyPassword.js

function verifyPassword(password) {
    switch(password) {
        case '0220':
            window.location.href = 'https://score.mugassn.com';
            break;
        case '1234': // 假设另一个密码是 '1234'，并将其跳转到另一个网站
            window.location.href = 'https://example.com';
            break;
        // 添加更多密码和相应的跳转网站
        default:
            alert('未查询到存在该验证码，请核实！');
    }
}
