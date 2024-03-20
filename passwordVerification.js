// 密码和对应的网址分别存储在两个数组中
var passwords = ["0220", "1234", "5678", "abcd"]; // 密码数组
var urls = ["https://score.mugassn.com", "https://example.com", "https://another-example.com", "https://yet-another-example.com"]; // 网址数组

// Function to verify the password and redirect to the corresponding URL
function verifyPassword() {
    var password = document.getElementById('password').value;
    if (password.trim() === '') {
        alert('请输入密码！');
        return;
    }
    
    var index = passwords.indexOf(password);
    if (index !== -1) {
        window.location.href = urls[index]; // 如果密码存在于密码数组中，则跳转至对应的网址数组中的对应位置
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
