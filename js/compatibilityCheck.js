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

    //BorderlessStainedGlass
    compatibilityCheck("BorderlessStainedGlass", "BorderlessStainedGlassWarning");

    //CleanStainedGlass
    compatibilityCheck("CleanStainedGlass", "CleanStainedGlassWarning");

    //TransparentShields
    compatibilityCheck("TransparentShields", "TransShieldWarning");

    //LowerShield
    compatibilityCheck("LowerShield", "LowShieldWarning");

    //TransparentPumpkin
    compatibilityCheck("TransparentPumpkin", "TransparentPumpkinWarning");

    //NoPumpkinOverlay
    compatibilityCheck("NoPumpkinOverlay", "NoPumpkinOverlayWarning");

    //AlternateParticles
    compatibilityCheck("AlternateParticles", "AlternateParticlesWarning");

    //UnobtrusiveRain
    compatibilityCheck("UnobtrusiveRain", "UnobtrusiveRainWarning");

    //BlackNetherBricks
    compatibilityCheck("BlackNetherBricks", "BlackNetherBricksWarning");

    //BrighterNether
    compatibilityCheck("BrighterNether", "BrighterNetherWarning");

    //OreBorders
    compatibilityCheck("OreBorders", "OreBordersWarning");

    //UniformOres
    compatibilityCheck("UniformOres", "UniformOresWarning");

    //GrassSides
    compatibilityCheck("GrassSides", "GrassSidesWarning");

    //LowerGrass
    compatibilityCheck("LowerGrass", "LowerGrassWarning");

    //MyceliumSides
    compatibilityCheck("MyceliumSides", "MyceliumSidesWarning");

    //LowerMycelium
    compatibilityCheck("LowerMycelium", "LowerMyceliumWarning");

    //Pebble-lessDirt
    compatibilityCheck("Pebble-lessDirt", "Pebble-lessDirtWarning");

    //PathSides
    compatibilityCheck("PathSides", "PathSidesWarning");

    //LowerPaths
    compatibilityCheck("LowerPaths", "LowerPathsWarning");

    //PodzolSides
    compatibilityCheck("PodzolSides", "PodzolSidesWarning");

    //LowerPodzol
    compatibilityCheck("LowerPodzol", "LowerPodzolWarning");

    //SnowSides
    compatibilityCheck("SnowSides", "SnowSidesWarning");

    //LowerSnow
    compatibilityCheck("LowerSnow", "LowerSnowWarning");

    //CrimsonNyliumSides
    compatibilityCheck("CrimsonNyliumSides", "CrimsonNyliumSidesWarning");

    //LowerCrimsonNylium
    compatibilityCheck("LowerCrimsonNylium", "LowerCrimsonNyliumWarning");

    //WarpedNyliumSides
    compatibilityCheck("WarpedNyliumSides", "WarpedNyliumSidesWarning");

    //LowerWarpedNylium
    compatibilityCheck("LowerWarpedNylium", "LowerWarpedNyliumWarning");

    //NoBeaconBeam
    compatibilityCheck("NoBeaconBeam", "NoBeaconBeamWarning");

    //BaconBeam
    compatibilityCheck("BaconBeam", "BaconBeamWarning");

    //StickyPistonSides
    compatibilityCheck("StickyPistonSides", "StickyPistonSidesWarning");

    //HoneySlime
    compatibilityCheck("HoneySlime", "HoneySlimeWarning");

    //Dark Mode
    compatibilityCheck("DarkMode", "DarkModeWarning");

    //Mobile Export EDU Warning
    compatibilityCheck("MobileExport", "MobileExportWarning");

    //Classic Panorama
    compatibilityCheck("ClassicPanorama", "ClassicPanoramaWarning");

    //Ocean Panorama
    compatibilityCheck("OceanPanorama", "OceanPanoramaWarning");

    //Village Panorama
    compatibilityCheck("VillagePanorama", "VillagePanoramaWarning");

    //Bees Panorama
    compatibilityCheck("BeesPanorama", "BeesPanoramaWarning");

    //Nether Panorama
    compatibilityCheck("NetherPanorama", "NetherPanoramaWarning");

    //Amethyst Geode Panorama
    compatibilityCheck("AmethystGeodePanorama", "AmethystGeodePanoramaWarning");

    //Sunset Valley Panorama
    compatibilityCheck("SunsetValleyPanorama", "SunsetValleyPanoramaWarning");

    //The End Panorama
    compatibilityCheck("TheEndPanorama", "TheEndPanoramaWarning");

    //Pack.png Panorama
    compatibilityCheck("Pack.pngPanorama", "Pack.pngPanoramaWarning");

    //Nostalgia Panorama
    compatibilityCheck("NostalgiaPanorama", "NostalgiaPanoramaWarning");
}


//BorderlessGlass
document.getElementById('BorderlessGlass').onchange = function() {
    compatibilityCheck("BorderlessGlass", "BorderlessGlassWarning");
}

//CleanGlass
document.getElementById('CleanGlass').onchange = function() {
    compatibilityCheck("CleanGlass", "CleanGlassWarning");
}

//BorderlessStainedGlass
document.getElementById('BorderlessStainedGlass').onchange = function() {
    compatibilityCheck("BorderlessStainedGlass", "BorderlessStainedGlassWarning");
}

//CleanStainedGlass
document.getElementById('CleanStainedGlass').onchange = function() {
    compatibilityCheck("CleanStainedGlass", "CleanStainedGlassWarning");
}

//TransparentShields
document.getElementById('TransparentShields').onchange = function() {
    compatibilityCheck("TransparentShields", "TransShieldWarning");
}

//LowerShield
document.getElementById('LowerShield').onchange = function() {
    compatibilityCheck("LowerShield", "LowShieldWarning");
}

//TransparentPumpkin
document.getElementById('TransparentPumpkin').onchange = function() {
    compatibilityCheck("TransparentPumpkin", "TransparentPumpkinWarning");
}

//NoPumpkinOverlay
document.getElementById('NoPumpkinOverlay').onchange = function() {
    compatibilityCheck("NoPumpkinOverlay", "NoPumpkinOverlayWarning");
}

//AlternateParticles
document.getElementById('AlternateParticles').onchange = function() {
    compatibilityCheck("AlternateParticles", "AlternateParticlesWarning");
}

//UnobtrusiveRain
document.getElementById('UnobtrusiveRain').onchange = function() {
    compatibilityCheck("UnobtrusiveRain", "UnobtrusiveRainWarning");
}

//BlackNetherBricks
document.getElementById('BlackNetherBricks').onchange = function() {
    compatibilityCheck("BlackNetherBricks", "BlackNetherBricksWarning");
}

//BrighterNether
document.getElementById('BrighterNether').onchange = function() {
    compatibilityCheck("BrighterNether", "BrighterNetherWarning");
}

//OreBorders
document.getElementById('OreBorders').onchange = function() {
    compatibilityCheck("OreBorders", "OreBordersWarning");
}

//UniformOres
document.getElementById('UniformOres').onchange = function() {
    compatibilityCheck("UniformOres", "UniformOresWarning");
}

//GrassSides
document.getElementById('GrassSides').onchange = function() {
    compatibilityCheck("GrassSides", "GrassSidesWarning");
}

//LowerGrass
document.getElementById('LowerGrass').onchange = function() {
    compatibilityCheck("LowerGrass", "LowerGrassWarning");
}

//MyceliumSides
document.getElementById('MyceliumSides').onchange = function() {
    compatibilityCheck("MyceliumSides", "MyceliumSidesWarning");
}

//LowerMycelium
document.getElementById('LowerMycelium').onchange = function() {
    compatibilityCheck("LowerMycelium", "LowerMyceliumWarning");
}

//Pebble-lessDirt
document.getElementById('Pebble-lessDirt').onchange = function() {
    compatibilityCheck("Pebble-lessDirt", "Pebble-lessDirtWarning");
}

//PathSides
document.getElementById('PathSides').onchange = function() {
    compatibilityCheck("PathSides", "PathSidesWarning");
}

//LowerPaths
document.getElementById('LowerPaths').onchange = function() {
    compatibilityCheck("LowerPaths", "LowerPathsWarning");
}

//PodzolSides
document.getElementById('PodzolSides').onchange = function() {
    compatibilityCheck("PodzolSides", "PodzolSidesWarning");
}

//LowerPodzol
document.getElementById('LowerPodzol').onchange = function() {
    compatibilityCheck("LowerPodzol", "LowerPodzolWarning");
}

//SnowSides
document.getElementById('SnowSides').onchange = function() {
    compatibilityCheck("SnowSides", "SnowSidesWarning");
}

//LowerSnow
document.getElementById('LowerSnow').onchange = function() {
    compatibilityCheck("LowerSnow", "LowerSnowWarning");
}

//CrimsonNyliumSides
document.getElementById('CrimsonNyliumSides').onchange = function() {
    compatibilityCheck("CrimsonNyliumSides", "CrimsonNyliumSidesWarning");
}

//LowerCrimsonNylium
document.getElementById('LowerCrimsonNylium').onchange = function() {
    compatibilityCheck("LowerCrimsonNylium", "LowerCrimsonNyliumWarning");
}

//WarpedNyliumSides
document.getElementById('WarpedNyliumSides').onchange = function() {
    compatibilityCheck("WarpedNyliumSides", "WarpedNyliumSidesWarning");
}

//LowerWarpedNylium
document.getElementById('LowerWarpedNylium').onchange = function() {
    compatibilityCheck("LowerWarpedNylium", "LowerWarpedNyliumWarning");
}

//NoBeaconBeam
document.getElementById('NoBeaconBeam').onchange = function() {
    compatibilityCheck("NoBeaconBeam", "NoBeaconBeamWarning");
}

//BaconBeam
document.getElementById('BaconBeam').onchange = function() {
    compatibilityCheck("BaconBeam", "BaconBeamWarning");
}

//StickyPistonSides
document.getElementById('StickyPistonSides').onchange = function() {
    compatibilityCheck("StickyPistonSides", "StickyPistonSidesWarning");
}

//HoneySlime
document.getElementById("HoneySlime").onchange = function() {
    compatibilityCheck("HoneySlime", "HoneySlimeWarning");
}

//Dark Mode
document.getElementById("DarkMode").onchange = function() {
    compatibilityCheck("DarkMode", "DarkModeWarning");
}

//Mobile Export EDU Warning
document.getElementById("MobileExport").onchange = function() {
    compatibilityCheck("MobileExport", "MobileExportWarning");
}

//Classic Panorama
document.getElementById("ClassicPanorama").onchange = function() {
    compatibilityCheck("ClassicPanorama", "ClassicPanoramaWarning");
}

//Ocean Panorama
document.getElementById("OceanPanorama").onchange = function() {
    compatibilityCheck("OceanPanorama", "OceanPanoramaWarning");
}

//Village Panorama
document.getElementById("VillagePanorama").onchange = function() {
    compatibilityCheck("VillagePanorama", "VillagePanoramaWarning");
}

//Bees Panorama
document.getElementById("BeesPanorama").onchange = function() {
    compatibilityCheck("BeesPanorama", "BeesPanoramaWarning");
}

//Nether Panorama
document.getElementById("NetherPanorama").onchange = function() {
    compatibilityCheck("NetherPanorama", "NetherPanoramaWarning");
}

//Amethyst Geode Panorama
document.getElementById("AmethystGeodePanorama").onchange = function() {
    compatibilityCheck("AmethystGeodePanorama", "AmethystGeodePanoramaWarning");
}

//Sunset Valley Panorama
document.getElementById("SunsetValleyPanorama").onchange = function() {
    compatibilityCheck("SunsetValleyPanorama", "SunsetValleyPanoramaWarning");
}

//The End Panorama
document.getElementById("TheEndPanorama").onchange = function() {
    compatibilityCheck("TheEndPanorama", "TheEndPanoramaWarning");
}

//Pack.png Panorama
document.getElementById("Pack.pngPanorama").onchange = function() {
    compatibilityCheck("Pack.pngPanorama", "Pack.pngPanoramaWarning");
}

//NostalgiaPanorama
document.getElementById("NostalgiaPanorama").onchange = function() {
    compatibilityCheck("NostalgiaPanorama", "NostalgiaPanoramaWarning");
}