var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// preload images
var preloader = new Array();

function preload() {
    for (var i=0; i<arguments.length; i++) {
        preloader[i] = document.createElement('img');
        preloader[i].setAttribute('src', arguments[i]);
    }
}

// timer for menu
var timer;

function subMenuTimer() {
  // hide submenu after .5 seconds of rolling out
  window.clearTimeout(timer);
  timer = window.setTimeout('hideSubMenu();', '500');
}
function clearSubMenuTimer() {
  window.clearTimeout(timer);
}
// make sure everything is hidden
function menuControl(idName, styleDisplay) {
  document.getElementById(idName).style.display = styleDisplay;
}
// highlight top level
function highlightMenu(menu, highlighted) {
  if (highlighted == true) {
  } else {
    subMenuTimer();
  }
}
// make submenu visible
function hideSubMenu() {
  var menuArray = ['submenu1', 'submenu2', 'submenu4', 'submenu5']; 	// 'submenu3' 
  window.clearTimeout(timer);
  for (var i=0; i<menuArray.length; i++) {
    menuControl(menuArray[i], 'none');
  }
}

}
/*
     FILE ARCHIVED ON 10:59:17 Jul 11, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:35:43 Nov 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.079
  exclusion.robots: 0.046
  exclusion.robots.policy: 0.021
  esindex: 0.018
  cdx.remote: 33.885
  LoadShardBlock: 289.004 (3)
  PetaboxLoader3.datanode: 131.037 (4)
  PetaboxLoader3.resolve: 215.502 (3)
  load_resource: 80.396
*/