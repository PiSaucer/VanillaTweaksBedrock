//select-all
document.getElementById('select-all').onchange = function() {
    //BorderlessGlass
    var warn = document.getElementsByClassName('BorderlessGlassWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
    //CleanGlass
    var warn1 = document.getElementsByClassName('BorderlessGlassWarning')[0];
    if (this.checked) warn1.classList.remove('hide');
    else warn1.classList.add('hide');
    //CleanSTGlass
    var warn2 = document.getElementsByClassName('CleanGlassWarning')[0];
    if (this.checked) warn2.classList.remove('hide');
    else warn2.classList.add('hide');
    //BorderlessSTGlass
    var warn3 = document.getElementsByClassName('BorderlessSTGlassWarning')[0];
    if (this.checked) warn3.classList.remove('hide');
    else warn3.classList.add('hide');
    //CleanSTGlass
    var warn4 = document.getElementsByClassName('CleanSTGlassWarning')[0];
    if (this.checked) warn4.classList.remove('hide');
    else warn4.classList.add('hide');
    //TransparentShields
    var warn5 = document.getElementsByClassName('TransShieldWarning')[0];
    if (this.checked) warn5.classList.remove('hide');
    else warn5.classList.add('hide');
    //LowerShield
    var warn6 = document.getElementsByClassName('LowShieldWarning')[0];
    if (this.checked) warn6.classList.remove('hide');
    else warn6.classList.add('hide');
    //transPump
    var warn7 = document.getElementsByClassName('transPumpWarning')[0];
    if (this.checked) warn7.classList.remove('hide');
    else warn7.classList.add('hide');
    //NoPump
    var warn8 = document.getElementsByClassName('NoPumpWarning')[0];
    if (this.checked) warn8.classList.remove('hide');
    else warn8.classList.add('hide');
    //altpart
    var warn9 = document.getElementsByClassName('altpartWarning')[0];
    if (this.checked) warn9.classList.remove('hide');
    else warn9.classList.add('hide');
    //unobrain
    var warn10 = document.getElementsByClassName('unobrainWarning')[0];
    if (this.checked) warn10.classList.remove('hide');
    else warn10.classList.add('hide');
    //BlackNetherBricks
    var warn11 = document.getElementsByClassName('BlackNetherBricksWarning')[0];
    if (this.checked) warn11.classList.remove('hide');
    else warn11.classList.add('hide');
    //brig_neth
    var warn12 = document.getElementsByClassName('brig_nethWarning')[0];
    if (this.checked) warn12.classList.remove('hide');
    else warn12.classList.add('hide');

}


//BorderlessGlass
document.getElementById('BorderlessGlass').onchange = function() {
    var warn = document.getElementsByClassName('BorderlessGlassWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//CleanGlass
document.getElementById('CleanGlass').onchange = function() {
    var warn = document.getElementsByClassName('CleanGlassWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//BorderlessSTGlass
document.getElementById('BorderlessSTGlass').onchange = function() {
    var warn = document.getElementsByClassName('BorderlessSTGlassWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//CleanSTGlass
document.getElementById('CleanSTGlass').onchange = function() {
    var warn = document.getElementsByClassName('CleanSTGlassWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//TransparentShields
document.getElementById('TransparentShields').onchange = function() {
    var warn = document.getElementsByClassName('TransShieldWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//LowerShield
document.getElementById('LowerShield').onchange = function() {
    var warn = document.getElementsByClassName('LowShieldWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//transPump
document.getElementById('transPump').onchange = function() {
    var warn = document.getElementsByClassName('transPumpWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//NoPump
document.getElementById('NoPump').onchange = function() {
    var warn = document.getElementsByClassName('NoPumpWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//altpart
document.getElementById('altpart').onchange = function() {
    var warn = document.getElementsByClassName('altpartWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//unobrain
document.getElementById('unobrain').onchange = function() {
    var warn = document.getElementsByClassName('unobrainWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//BlackNetherBricks
document.getElementById('BlackNetherBricks').onchange = function() {
    var warn = document.getElementsByClassName('BlackNetherBricksWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//brig_neth
document.getElementById('brig_neth').onchange = function() {
    var warn = document.getElementsByClassName('brig_nethWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}