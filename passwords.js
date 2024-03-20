function verifyPassword(password) {
    if (password === 'Jhaan') {
        window.location.href = 'https://www.mugassn.com';
    } else if (password === 'Kevin') {
        window.location.href = 'https://www.kevinwu.cc';
    } else if (password === 'Ben') {
        window.location.href = 'https://timewaster43.github.io';
    } else if (password === 'NewPassword') {
        window.location.href = 'https://www.newwebsite.com';
    } else {
        alert('未查询存在该识别码，请核实！');
    }
}
