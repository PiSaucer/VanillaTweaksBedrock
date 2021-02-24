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
    //OreBorders
    var warn13 = document.getElementsByClassName('OreBordersWarning')[0];
    if (this.checked) warn13.classList.remove('hide');
    else warn13.classList.add('hide');
    //UniformOres
    var warn14 = document.getElementsByClassName('UniformOresWarning')[0];
    if (this.checked) warn14.classList.remove('hide');
    else warn14.classList.add('hide');
    //gr_sid
    var warn15 = document.getElementsByClassName('gr_sidWarning')[0];
    if (this.checked) warn15.classList.remove('hide');
    else warn15.classList.add('hide');
    //low_grass
    var warn16 = document.getElementsByClassName('low_grassWarning')[0];
    if (this.checked) warn16.classList.remove('hide');
    else warn16.classList.add('hide');
    //myc_sid
    var warn17 = document.getElementsByClassName('myc_sidWarning')[0];
    if (this.checked) warn17.classList.remove('hide');
    else warn17.classList.add('hide');
    //low_myc
    var warn18 = document.getElementsByClassName('low_mycWarning')[0];
    if (this.checked) warn18.classList.remove('hide');
    else warn18.classList.add('hide');
    //no_peb_dirt
    var warn19 = document.getElementsByClassName('no_peb_dirtWarning')[0];
    if (this.checked) warn19.classList.remove('hide');
    else warn19.classList.add('hide');
    //path_sid
    var warn20 = document.getElementsByClassName('path_sidWarning')[0];
    if (this.checked) warn20.classList.remove('hide');
    else warn20.classList.add('hide');
    //low_path
    var warn21 = document.getElementsByClassName('low_pathWarning')[0];
    if (this.checked) warn21.classList.remove('hide');
    else warn21.classList.add('hide');
    //pod_side
    var warn22 = document.getElementsByClassName('pod_sideWarning')[0];
    if (this.checked) warn22.classList.remove('hide');
    else warn22.classList.add('hide');
    //low_pod
    var warn23 = document.getElementsByClassName('low_podWarning')[0];
    if (this.checked) warn23.classList.remove('hide');
    else warn23.classList.add('hide');
    //snow_sid
    var warn24 = document.getElementsByClassName('snow_sidWarning')[0];
    if (this.checked) warn24.classList.remove('hide');
    else warn24.classList.add('hide');
    //low_snow
    var warn25 = document.getElementsByClassName('low_snowWarning')[0];
    if (this.checked) warn25.classList.remove('hide');
    else warn25.classList.add('hide');
    //crim_sid
    var warn26 = document.getElementsByClassName('crim_sidWarning')[0];
    if (this.checked) warn26.classList.remove('hide');
    else warn26.classList.add('hide');
    //low_crim
    var warn27 = document.getElementsByClassName('low_crimWarning')[0];
    if (this.checked) warn27.classList.remove('hide');
    else warn27.classList.add('hide');
    //warp_sid
    var warn28 = document.getElementsByClassName('warp_sidWarning')[0];
    if (this.checked) warn28.classList.remove('hide');
    else warn28.classList.add('hide');
    //low_warp
    var warn29 = document.getElementsByClassName('low_warpWarning')[0];
    if (this.checked) warn29.classList.remove('hide');
    else warn29.classList.add('hide');
    //nobeacbeam
    var warn30 = document.getElementsByClassName('nobeacbeamWarning')[0];
    if (this.checked) warn30.classList.remove('hide');
    else warn30.classList.add('hide');
    //bacon_beam
    var warn31 = document.getElementsByClassName('bacon_beamWarning')[0];
    if (this.checked) warn31.classList.remove('hide');
    else warn31.classList.add('hide');
    //sticky_sides
    var warn32 = document.getElementsByClassName('sticky_sidesWarning')[0];
    if (this.checked) warn32.classList.remove('hide');
    else warn32.classList.add('hide');
    //honey_slime
    var warn33 = document.getElementsByClassName('honey_slimeWarning')[0];
    if (this.checked) warn33.classList.remove('hide');
    else warn33.classList.add('hide');
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

//OreBorders
document.getElementById('OreBorders').onchange = function() {
    var warn = document.getElementsByClassName('OreBordersWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//UniformOres
document.getElementById('UniformOres').onchange = function() {
    var warn = document.getElementsByClassName('UniformOresWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//gr_sid
document.getElementById('gr_sid').onchange = function() {
    var warn = document.getElementsByClassName('gr_sidWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//low_grass
document.getElementById('low_grass').onchange = function() {
    var warn = document.getElementsByClassName('low_grassWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//myc_sid
document.getElementById('myc_sid').onchange = function() {
    var warn = document.getElementsByClassName('myc_sidWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//low_myc
document.getElementById('low_myc').onchange = function() {
    var warn = document.getElementsByClassName('low_mycWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//no_peb_dirt
document.getElementById('no_peb_dirt').onchange = function() {
    var warn = document.getElementsByClassName('no_peb_dirtWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//path_sid
document.getElementById('path_sid').onchange = function() {
    var warn = document.getElementsByClassName('path_sidWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//low_path
document.getElementById('low_path').onchange = function() {
    var warn = document.getElementsByClassName('low_pathWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//pod_side
document.getElementById('pod_side').onchange = function() {
    var warn = document.getElementsByClassName('pod_sideWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//low_pod
document.getElementById('low_pod').onchange = function() {
    var warn = document.getElementsByClassName('low_podWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//snow_sid
document.getElementById('snow_sid').onchange = function() {
    var warn = document.getElementsByClassName('snow_sidWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//low_snow
document.getElementById('low_snow').onchange = function() {
    var warn = document.getElementsByClassName('low_snowWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//crim_sid
document.getElementById('crim_sid').onchange = function() {
    var warn = document.getElementsByClassName('crim_sidWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//low_crim
document.getElementById('low_crim').onchange = function() {
    var warn = document.getElementsByClassName('low_crimWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//warp_sid
document.getElementById('warp_sid').onchange = function() {
    var warn = document.getElementsByClassName('warp_sidWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//low_warp
document.getElementById('low_warp').onchange = function() {
    var warn = document.getElementsByClassName('low_warpWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//nobeacbeam
document.getElementById('nobeacbeam').onchange = function() {
    var warn = document.getElementsByClassName('nobeacbeamWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//bacon_beam
document.getElementById('bacon_beam').onchange = function() {
    var warn = document.getElementsByClassName('bacon_beamWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//sticky_sides
document.getElementById('sticky_sides').onchange = function() {
    var warn = document.getElementsByClassName('sticky_sidesWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//honey_slime
document.getElementById('honey_slime').onchange = function() {
    var warn = document.getElementsByClassName('honey_slimeWarning')[0];
    if (this.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}