// 密码和对应的网址存储在一个对象中
var passwordUrls = {
    "0220": "https://score.mugassn.com",
    "1234": "https://example.com",
    "5678": "https://another-example.com",
    "abcd": "https://yet-another-example.com"
    // 可以继续添加更多的密码和对应的网址
};

// Function to verify the password and redirect to the corresponding URL
function verifyPassword() {
    var password = document.getElementById('password').value;
    if (password.trim() === '') {
        alert('请输入密码！');
        return;
    }
    
    var isValidPassword = false;
    for (var key in passwordUrls) {
        if (password === key) {
            isValidPassword = true;
            window.location.href = passwordUrls[key]; // 如果密码存在于对象中，则跳转至对应网址
            break;
        }
    }

    if (!isValidPassword) {
        alert('密码错误！');
    }
}

// Function to check if Enter key is pressed
function checkEnter(event) {
    if (event.key === 'Enter') {
        verifyPassword();
    }
}
