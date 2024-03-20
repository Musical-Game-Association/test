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
    var url = passwordUrls[password];
    if (url) {
        window.location.href = url; // 如果密码存在于对象中，则跳转至对应网址
    } else {
        alert('密码错误！');
    }
}

// Function to check if Enter key is pressed
function checkEnter(event) {
    if (event.key === 'Enter') {
        verifyPassword();
    }
}
