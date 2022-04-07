var link = {
    //亚博链接 
    yaboHomePc: 'https://www.1ch2x.com:7443/register/?i_code='+yaboCode,
    yaboPcHome: 'https://www.1ch2x.com:7443/app/home/?i_code='+yaboCode,
    yaboHomeH5: 'https://www.ncggik.com:6001/entry/register/?i_code='+yaboCode,
    yaboHome: 'https://www.ncggik.com:6001/app/home/?i_code='+yaboCode,
    yaboApp: 'https://www.btfxec.com:6001/?i_code='+yaboCode,
   
    // HTH链接
    hthHomePc: 'https://www.8xorqeft.com:9966/register/?i_code='+hthCode,
    hthPcHome: 'https://www.8xorqeft.com:9966/app/home/?i_code='+hthCode,
    hthHomeH5: 'https://www.8xorqeft.com:9966/entry/register/?i_code='+hthCode,
    hthHome: 'https://www.8xorqeft.com:9966/app/home/?i_code='+hthCode,
    hthApp: 'https://www.vgdqb.com:6443/?i_code='+hthCode,
  
    // 美洽客服： 妮妮
    contact: 'https://serv003.hdchat.cc',
    // 美洽客服： 诗兰
    contact1: 'https://serv08.hdchat.cc',
    // 美洽客服： 雅琳
    contact2: 'https://serv03.hdchat.cc',
    
   
    
                               
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
    if (key === 'yaboHome') {
        window.location.href = device == 'pc' ? link.yaboHomePc : link.yaboHomeH5;
    }else if (key === 'hthHome') {
        window.location.href = device == 'pc' ? link.hthHomePc : link.hthHomeH5;
    }else if (key === 'yaboHome') {
        window.location.href = device == 'pc' ? link.yaboPcHome : link.yaboHome;
    }else if (key === 'hthHome') {
        window.location.href = device == 'pc' ? link.hthPcHome : link.hthHome;
    }
    else {
        window.location.href = link[key]
    }
}