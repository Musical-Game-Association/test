function verifyPassword(password) {
    switch(password) {
        case 'proxy':
            window.location.href = 'https://proxy.techny.site/155d9be2-322c-4f71-8d84-4d655701ce40';
            break;
        case '1234':
            window.location.href = 'https://example.com';
            break;
        default:
            alert('未查询到存在该验证码，请核实！');
    }
}
