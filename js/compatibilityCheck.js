function compatibilityCheck(id, warning) {
    var ele = document.getElementById(id)
    var warn = document.getElementsByClassName(warning)[0];
    if (ele.checked) warn.classList.remove('hide');
    else warn.classList.add('hide');
}

//select-all
document.getElementById('select-all').onchange = function() {
    //BorderlessGlass
    compatibilityCheck("BorderlessGlass", "BorderlessGlassWarning");

    //CleanGlass
    compatibilityCheck("CleanGlass", "CleanGlassWarning");

    //BorderlessSTGlass
    compatibilityCheck("BorderlessSTGlass", "BorderlessSTGlassWarning");

    //CleanSTGlass
    compatibilityCheck("CleanSTGlass", "CleanSTGlassWarning");

    //TransparentShields
    compatibilityCheck("TransparentShields", "TransShieldWarning");

    //LowerShield
    compatibilityCheck("LowerShield", "LowShieldWarning");

    //transPump
    compatibilityCheck("transPump", "transPumpWarning");

    //NoPump
    compatibilityCheck("NoPump", "NoPumpWarning");

    //altpart
    compatibilityCheck("altpart", "altpartWarning");

    //unobrain
    compatibilityCheck("unobrain", "unobrainWarning");

    //BlackNetherBricks
    compatibilityCheck("BlackNetherBricks", "BlackNetherBricksWarning");

    //brig_neth
    compatibilityCheck("brig_neth", "brig_nethWarning");

    //OreBorders
    compatibilityCheck("OreBorders", "OreBordersWarning");

    //UniformOres
    compatibilityCheck("UniformOres", "UniformOresWarning");

    //gr_sid
    compatibilityCheck("gr_sid", "gr_sidWarning");

    //low_grass
    compatibilityCheck("low_grass", "low_grassWarning");

    //myc_sid
    compatibilityCheck("myc_sid", "myc_sidWarning");

    //low_myc
    compatibilityCheck("low_myc", "low_mycWarning");

    //no_peb_dirt
    compatibilityCheck("no_peb_dirt", "no_peb_dirtWarning");

    //path_sid
    compatibilityCheck("path_sid", "path_sidWarning");

    //low_path
    compatibilityCheck("low_path", "low_pathWarning");

    //pod_side
    compatibilityCheck("pod_side", "pod_sideWarning");

    //low_pod
    compatibilityCheck("low_pod", "low_podWarning");

    //snow_sid
    compatibilityCheck("snow_sid", "snow_sidWarning");

    //low_snow
    compatibilityCheck("low_snow", "low_snowWarning");

    //crim_sid
    compatibilityCheck("crim_sid", "crim_sidWarning");

    //low_crim
    compatibilityCheck("low_crim", "low_crimWarning");

    //warp_sid
    compatibilityCheck("warp_sid", "warp_sidWarning");

    //low_warp
    compatibilityCheck("low_warp", "low_warpWarning");

    //nobeacbeam
    compatibilityCheck("nobeacbeam", "nobeacbeamWarning");

    //bacon_beam
    compatibilityCheck("bacon_beam", "bacon_beamWarning");

    //sticky_sides
    compatibilityCheck("sticky_sides", "sticky_sidesWarning");

    //honey_slime
    compatibilityCheck("honey_slime", "honey_slimeWarning");

    //Classic Pano
    compatibilityCheck("classicpano", "classicpanoWarning");
}


//BorderlessGlass
document.getElementById('BorderlessGlass').onchange = function() {
    compatibilityCheck("BorderlessGlass", "BorderlessGlassWarning");
}

//CleanGlass
document.getElementById('CleanGlass').onchange = function() {
    compatibilityCheck("CleanGlass", "CleanGlassWarning");
}

//BorderlessSTGlass
document.getElementById('BorderlessSTGlass').onchange = function() {
    compatibilityCheck("BorderlessSTGlass", "BorderlessSTGlassWarning");
}

//CleanSTGlass
document.getElementById('CleanSTGlass').onchange = function() {
    compatibilityCheck("CleanSTGlass", "CleanSTGlassWarning");
}

//TransparentShields
document.getElementById('TransparentShields').onchange = function() {
    compatibilityCheck("TransparentShields", "TransShieldWarning");
}

//LowerShield
document.getElementById('LowerShield').onchange = function() {
    compatibilityCheck("LowerShield", "LowShieldWarning");
}

//transPump
document.getElementById('transPump').onchange = function() {
    compatibilityCheck("transPump", "transPumpWarning");
}

//NoPump
document.getElementById('NoPump').onchange = function() {
    compatibilityCheck("NoPump", "NoPumpWarning");
}

//altpart
document.getElementById('altpart').onchange = function() {
    compatibilityCheck("altpart", "altpartWarning");
}

//unobrain
document.getElementById('unobrain').onchange = function() {
    compatibilityCheck("unobrain", "unobrainWarning");
}

//BlackNetherBricks
document.getElementById('BlackNetherBricks').onchange = function() {
    compatibilityCheck("BlackNetherBricks", "BlackNetherBricksWarning");
}

//brig_neth
document.getElementById('brig_neth').onchange = function() {
    compatibilityCheck("brig_neth", "brig_nethWarning");
}

//OreBorders
document.getElementById('OreBorders').onchange = function() {
    compatibilityCheck("OreBorders", "OreBordersWarning");
}

//UniformOres
document.getElementById('UniformOres').onchange = function() {
    compatibilityCheck("UniformOres", "UniformOresWarning");
}

//gr_sid
document.getElementById('gr_sid').onchange = function() {
    compatibilityCheck("gr_sid", "gr_sidWarning");
}

//low_grass
document.getElementById('low_grass').onchange = function() {
    compatibilityCheck("low_grass", "low_grassWarning");
}

//myc_sid
document.getElementById('myc_sid').onchange = function() {
    compatibilityCheck("myc_sid", "myc_sidWarning");
}

//low_myc
document.getElementById('low_myc').onchange = function() {
    compatibilityCheck("low_myc", "low_mycWarning");
}

//no_peb_dirt
document.getElementById('no_peb_dirt').onchange = function() {
    compatibilityCheck("no_peb_dirt", "no_peb_dirtWarning");
}

//path_sid
document.getElementById('path_sid').onchange = function() {
    compatibilityCheck("path_sid", "path_sidWarning");
}

//low_path
document.getElementById('low_path').onchange = function() {
    compatibilityCheck("low_path", "low_pathWarning");
}

//pod_side
document.getElementById('pod_side').onchange = function() {
    compatibilityCheck("pod_side", "pod_sideWarning");
}

//low_pod
document.getElementById('low_pod').onchange = function() {
    compatibilityCheck("low_pod", "low_podWarning");
}

//snow_sid
document.getElementById('snow_sid').onchange = function() {
    compatibilityCheck("snow_sid", "snow_sidWarning");
}

//low_snow
document.getElementById('low_snow').onchange = function() {
    compatibilityCheck("low_snow", "low_snowWarning");
}

//crim_sid
document.getElementById('crim_sid').onchange = function() {
    compatibilityCheck("crim_sid", "crim_sidWarning");
}

//low_crim
document.getElementById('low_crim').onchange = function() {
    compatibilityCheck("low_crim", "low_crimWarning");
}

//warp_sid
document.getElementById('warp_sid').onchange = function() {
    compatibilityCheck("warp_sid", "warp_sidWarning");
}

//low_warp
document.getElementById('low_warp').onchange = function() {
    compatibilityCheck("low_warp", "low_warpWarning");
}

//nobeacbeam
document.getElementById('nobeacbeam').onchange = function() {
    compatibilityCheck("nobeacbeam", "nobeacbeamWarning");
}

//bacon_beam
document.getElementById('bacon_beam').onchange = function() {
    compatibilityCheck("bacon_beam", "bacon_beamWarning");
}

//sticky_sides
document.getElementById('sticky_sides').onchange = function() {
    compatibilityCheck("sticky_sides", "sticky_sidesWarning");
}

//honey_slime
document.getElementById("honey_slime").onchange = function() {
    compatibilityCheck("honey_slime", "honey_slimeWarning");
}

//Classic Pano
document.getElementById("classicpano").onchange = function() {
    compatibilityCheck("classicpano", "classicpanoWarning");
}