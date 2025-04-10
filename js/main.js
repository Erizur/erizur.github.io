var darkmode = false;

function clickBrightChange() {
    var element = document.body;
    darkmode = !darkmode;

    if (darkmode == true) element.setAttribute('dark', "");
    else element.removeAttribute('dark');
    
    localStorage.setItem('darkmode', darkmode);
}

window.onload = function() {
    if (localStorage.getItem('darkmode') === 'true') darkmode = true;

    if (darkmode == true) document.body.setAttribute('dark', "");
    else document.body.removeAttribute('dark');
};