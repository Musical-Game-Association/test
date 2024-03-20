var verified = false;

// Function to open the verification popup
function openVerificationPopup() {
    document.getElementById('verificationPopup').classList.remove('hidden');
    showCode(); // Generate and display the verification code
}

// Function to close the verification popup
function closeVerificationPopup() {
    document.getElementById('verificationPopup').classList.add('hidden');
}

// Function to verify the password
function verifyPassword() {
    var password = document.getElementById('password').value;
    if (password in passwords) {
        window.location.href = passwords[password];
    } else {
        alert('未查询存在该识别码，请核实！');
    }
}

// Function to validate the verification code
function validateCode() {
    var inputCode = document.getElementById('inputCode').value.toUpperCase();
    var text = sessionStorage.getItem('text').toUpperCase();
    if (inputCode === text) {
        alert('你已经是一只成熟的人类了！！');
        verified = true;
        closeVerificationPopup(); // Close the verification popup
        document.getElementById('password').classList.remove('hidden');
        document.getElementById('password').focus();
        document.getElementById('password').select();
        document.getElementById('verificationCode').classList.add('hidden'); // Hide the verification code input
    } else {
        alert('你真的不是一只机器人么？！o.O');
        showCode(); // Show a new verification code image
    }
}

// Function to check if Enter key is pressed
function checkEnter(event) {
    if (event.key === 'Enter') {
        validateCode();
    }
}

// Function to check the password
function checkPassword() {
    var password = document.getElementById('password').value;
    if ((password in passwords) && verified) {
        verifyPassword();
    }
}

// Function to generate and display the verification code
function showCode() {
    var image = document.getElementById('codeImg');
    var obj = drawCode();
    image.src = obj.base64;
    sessionStorage.setItem('text', obj.text);
}

// Function to generate the verification code
function drawCode() {
    // 省略生成验证码的函数
}

// 省略绘制随机线和点的函数

// Function to convert canvas to image
function convertCanvasToImage(canvas) {
    // 省略Canvas转换为图片的函数
}
