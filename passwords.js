var passwordMap = {
    'Jhaan': 'https://www.mugassn.com',
    'Kevin': 'https://www.kevinwu.cc',
    'Ben': 'https://timewaster43.github.io',
    'NewPassword': 'https://www.newwebsite.com'
};

// 导出函数以验证密码并进行相应的跳转
function verifyPassword(password) {
    var url = passwordMap[password];
    if (url) {
        window.location.href = url;
    } else {
        alert('未查询存在该识别码，请核实！');
    }
}
