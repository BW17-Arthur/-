var link = {
    //亚博链接 
    yaboPc: 'https://www.1651yabo.com:9024/register/?i_code='+yaboCode,
    yaboPcHome: 'https://www.1651yabo.com:9024/app/home/?i_code='+yaboCode,
    yaboH5: 'https://www.jovjyj.com:9003/entry/register/?i_code='+yaboCode,
    yaboH5Home: 'https://www.jovjyj.com:9003/app/home/?i_code='+yaboCode,
    yaboApp: 'https://www.yabet106.app:9109/?i_code='+yaboCode,
    
   
    // HTH链接
    hthPc: 'https://www.8xorqeft.com:9966/register/?i_code='+hthCode,
    hthPcHome: 'https://www.8xorqeft.com:9966/app/home/?i_code='+hthCode,
    hthH5: 'https://www.hthvip96.com:9964/entry/register/?i_code='+hthCode,
    hthH5Home: 'https://www.hthvip96.com:9964/app/home/?i_code='+hthCode,
    hthApp: 'https://www.xxxdwf.com:8005/?i_code='+hthCode,
    
    

    // 美洽客服： 妮妮
    contact: 'https://serv003.hdchat.cc',
    // 美洽客服： 诗兰
    contact1: 'https://serv08.hdchat.cc',
    // 美洽客服： 雅琳
    contact2: 'https://serv03.hdchat.cc',
    // AChat_9组
    contact3: 'https://chatweb.0jt082.com/chat/text/chat_1pIAoF.html',
    
   
}


function getDevice() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return "ios";
    } else if (/(Android)/i.test(navigator.userAgent)) {
        return "android";
    } else {
        return "pc";
    }
}



const device = getDevice();

function register(key) {
    if (key === 'yabo') {
        window.location.href = device == 'pc' ? link.yaboPc : link.yaboH5;
    }else if (key === 'hth') {
        window.location.href = device == 'pc' ? link.hthPc : link.hthH5;
    }else if (key === 'yaboHome') {
        if(/(UCBrowser|UC|Quark)/i.test(navigator.userAgent)){
            // alert(navigator.userAgent);
            window.location.href = device == 'pc' ? link.yaboPcHome : link.yaboH5;
        }else{
            // alert("TEST "+navigator.userAgent);
            // window.location.href = device == 'pc' ? link.yaboPcHome : link.yaboH5;
            window.location.href = device == 'pc' ? link.yaboPcHome : link.yaboH5Home;
        }
        
        
    }else if (key === 'hthHome') {
        if(/(UCBrowser|UC|Quark)/i.test(navigator.userAgent)){
            // alert(navigator.userAgent);
            window.location.href = device == 'pc' ? link.hthPcHome : link.hthH5;
        }else{
            // alert("TEST "+navigator.userAgent);
            // window.location.href = device == 'pc' ? link.hthPcHome : link.hthH5;
            window.location.href = device == 'pc' ? link.hthPcHome : link.hthH5Home; 
        }
        
    }
    else {
        window.location.href = link[key]
    }
}

function registerOpen(key) {
    if (key === 'yabo') {
        if (device == 'pc'){
            window.open(`${link.yaboPc}`);
        }else{
            window.open(`${link.yaboH5}`);
        }
        // window.location.href = device == 'pc' ? link.yaboPc : link.yaboH5;
    }else if (key === 'hth') {
        if (device == 'pc'){
            window.open(`${link.hthPc}`);
        }else{
            window.open(`${link.hthH5}`);
        }
        // window.location.href = device == 'pc' ? link.hthPc : link.hthH5;
    }else if (key === 'yaboHome') {
        if (device == 'pc'){
            window.open(`${link.yaboPcHome}`);
        }else{
            window.open(`${link.yaboH5Home}`);
        }
        // window.location.href = device == 'pc' ? link.yaboPcHome : link.yaboH5Home;
    }else if (key === 'hthHome') {
        if (device == 'pc'){
            window.open(`${link.hthPcHome}`);
        }else{
            window.open(`${link.hthH5Home}`);
        }
        // window.location.href = device == 'pc' ? link.hthPcHome : link.hthH5Home;
    }
    else {
        window.open(`${link[key]}`);
        // window.location.href = link[key]
    }
}




