/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var welcomecleared = false;
//SetupWelcome
function clearWelcome(){
  //console.log("attempting to clear welcome")
  var welcome = document.querySelector('#welcome');
  if(!welcome == ''){
    welcome.remove();
    //console.log("Cleared welcome")
    welcomecleared = true;
    //setTimeout(function(){ PlayDecorVideos()} , 1000);
  }
  PlayDecorVideos();
}

// Decor Videos will only start autoplaying after the welcome message has been cleared
function PlayDecorVideos(){
  var decorVids = document.querySelectorAll(".decorvideo, .decorvideo960x540");
  decorVids.forEach(element => {
    var node = document.getElementById(element.id);
    node.play();
    //console.log(node);   
     
  });  
  //console.log(decorVids);
}


(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;
  
  // createContactForm();

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  var currentSceneIndex = 0;
  var lastscenceIndex =0;
  var tabNumber =-1;
  var nextTabNumber = 0;
  var lastcount = 0;
  var pasttabbables = false;

  var supertabIndex = -1;
  var focusIsNormal = true;

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addEventListener('change', setMode, {passive:true});
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  }, {passive:true});

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function(data, i) {
    console.log('Scence' , i.toString() , 'Created')
    var curScenceIndex = i;
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);
    
      //zoom
    var fovinner =30*Math.PI/180;
    var fovouter =120*Math.PI/180;
    //var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var limiter = Marzipano.util.compose(Marzipano.RectilinearView.limit.vfov(fovinner, fovouter), Marzipano.RectilinearView.limit.hfov(fovinner, fovouter), Marzipano.RectilinearView.limit.pitch(-Math.PI/2, Math.PI/2));
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create Decor hotspots.
    data.decorHotspots.forEach(function(hotspot, num) {
      var element = createDecorHotspot(hotspot, curScenceIndex, num);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch },
      { perspective: { radius: hotspot.radius, extraTransforms: "rotateX(" + hotspot.rotationX + "deg) rotateY(" + hotspot.rotationY + "deg) rotateZ(" + hotspot.rotationZ + "deg)"}});
    });

    // Create Directory hotspots.
    data.directoryHotspots.forEach(function(hotspot, num) {
      var element = createDirectoryHotspot(hotspot, curScenceIndex, num);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch },
      { perspective: { radius: hotspot.radius, extraTransforms: "rotateX(" + hotspot.rotationX + "deg) rotateY(" + hotspot.rotationY + "deg) rotateZ(" + hotspot.rotationZ + "deg)"}});
    });

    // Create Simple hotspots.
    data.simpleHotspots.forEach(function(hotspot, num) {
      var element = createSimpleHotspot(hotspot, curScenceIndex, num);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch },
      { perspective: { radius: hotspot.radius, extraTransforms: "rotateX(" + hotspot.rotationX + "deg) rotateY(" + hotspot.rotationY + "deg) rotateZ(" + hotspot.rotationZ + "deg)"}});
    });

    lastcount = 0;

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  createStoredHtml();
  function createStoredHtml(){
    nestedmenus.forEach(nestedmenu => {
      var element = document.createElement('div');
      element.innerHTML = nestedmenu;
      document.body.appendChild(element);
    });

  }
  createNavigationMenu(true);
  function createNavigationMenu(create){
    if(!create){
      return;
    }
    var referenceNode = document.querySelector("#pano");

    //create the nav element with the proper role as a container
    var navHolder = document.createElement('nav');
    navHolder.setAttribute("role", "navigation");
    navHolder.classList.add('navmenu');
    navHolder.id = "navHolder";

    //create hamburger menu button for the nav menu
    var navbuttonmain = document.createElement('a');
    navbuttonmain.classList.add('navicon');
    navbuttonmain.href = 'javascript:;';
    navbuttonmain.id = "mainnavbutton";
    navbuttonmain.setAttribute("aria-label", "Navigation Menu")
    //navbuttonmain.ariaExpanded = "false;"
    var emptyspan0 = document.createElement('span');
    var emptyspan1 = document.createElement('span');
    var emptyspan2 = document.createElement('span');

    //add emtpy spans for hamburger
    navbuttonmain.appendChild(emptyspan0);
    navbuttonmain.appendChild(emptyspan1);
    navbuttonmain.appendChild(emptyspan2);

    // // add the icon to the nav menu


    //main nav menu content holder
    var nav0 = document.createElement('div');
    nav0.classList.add('navmainmenu');
    nav0.ariaRoleDescription = "list";
    nav0.ariaExpanded = "false";
    nav0.id = "nav_0";
    
    navbuttonmain.addEventListener('click',
     function() {toggleChildLinks("nav_0");
      checkAriaExpanded(nav0.id, "nav_0");
    }, {passive:true});

    navHolder.appendChild(navbuttonmain);
    navHolder.appendChild(nav0);


    // PER SCENCE
    scenes.forEach(function(scene, i) {

      var tri = document.createElement('div');
      tri.classList.add('triangle-down')
      //create button to show the scene content
      var scenebutton = document.createElement('a');
      scenebutton.href = 'javascript:;';
      scenebutton.innerHTML = scene.data.name + " ";
      scenebutton.appendChild(tri);
      scenebutton.id = "scenebutton" + i.toString();
      //scenebutton.ariaExpanded = "false;"
      //navHolder.appendChild(sceneEl);

      scenebutton.addEventListener('click', function() {
        switchScene(scene);
      }, {passive:true});


      //create a div to hold the scene content
      var submenu01 = document.createElement('div');
      submenu01.classList.add('navsubmenu');
      submenu01.ariaExpanded = "false";
      submenu01.ariaRoleDescription = "list";
      submenu01.id = "scenenav_1_" + i.toString();

      // unfold the scenes links in the nav menu on click
      scenebutton.addEventListener('click', function() {toggleChildLinks(submenu01.id);
        checkAriaExpanded(submenu01.id, submenu01.id);
      }, {passive:true});

      nav0.appendChild(scenebutton);
      nav0.appendChild(submenu01);

      var headernames = [];
      var headerelements = [];
      var num = 0;
      scene.data.simpleHotspots.forEach(function(navObject, j){
        if(navObject.fancyboxtype == "scene"){return;} // if this is a 'ROOM' button end this iteration
        var headername = navObject.navdetailmenu;
        var childcount = navObject.nestedchildlinks.length;
        if(childcount > 0){ // create a nav button for each nested child
          // if there is a faux header name ...
          if(headername != ""){

            if(headernames.includes(headername)) // if there is already a header for this element
            {
              headerelements.forEach(element  => {
                if(element.title == headername){

                  //Setup a new nested menu architecture
                  var tri2 = document.createElement('div');
                  tri2.classList.add('triangle-down')
                  //create a new Button to open a sub menu 3 
                  var submenu03button  = document.createElement('a');
                  submenu03button.innerHTML = navObject.title + " ";
                  submenu03button.appendChild(tri2);
                  submenu03button.href = "javascript:;";
                  submenu03button.id = "submenu03button" + +i.toString()+ "_"+ j.toString();
                  //submenu03button.ariaExpanded = "false;" moved to the list
                  //create the conatainer for menu items
                  var submenu03 = document.createElement('div');
                  submenu03.id = "nav_" +i.toString()+ "_"+ j.toString();
                  submenu03.ariaExpanded = "false";
                  submenu03.ariaRoleDescription = "list";
                  submenu03.title = navObject.navdetailmenu;
                  submenu03.classList.add('navnestedmenu');
                  //add button function to dropdown submenu3
                  submenu03button.addEventListener('click', function(){toggleChildLinks(submenu03.id);
                    checkAriaExpanded(submenu03.id, submenu03.id);
                  }, {passive:true})

                  //add it to its parents in this case: the element that matches the headername
                  element.appendChild(submenu03button);
                  element.appendChild(submenu03);

                  //create the children of the button
                  navObject.nestedchildlinks.forEach(function(item, n) {
                    if(item.fancyboxtype == "external")
                    {
                      var el = document.createElement('a');
                      el.id = String(i.toString() + 'navnum'+ j.toString() + n.toString());
                      el.href = item.fancyboxcontent;
                      el.innerHTML = item.title;
                      el.target="_blank";
                      el.rel="noopener";
                      submenu03.appendChild(el); 
                    }
                    else
                    {
                      var el = document.createElement('a');
                      el.id = String(i.toString() + 'navnum'+ j.toString() + n.toString());
                      el.href = "javascript:;";
                      el.innerHTML = item.title;
                      el.setAttribute("data-fancybox", "");
                      el.setAttribute("data-type", item.fancyboxtype);
                      el.setAttribute("data-src", item.fancyboxcontent);
                      submenu03.appendChild(el);   
                    }

                  });
                }
              });
            }
            else
            {
              headernames.push(headername);
  
              //create a new Button to open a sub menu 1 
              var tri2 = document.createElement('div');
              tri2.classList.add('triangle-down')
  
              var submenu02button  = document.createElement('a');
              submenu02button.innerHTML = navObject.navdetailmenu + " ";
              submenu02button.appendChild(tri2);
              submenu02button.href = "javascript:;";
              submenu02button.id = "submenu02button" + +i.toString()+ "_"+ j.toString();
              //submenu02button.ariaExpanded = "false;"
  
              // add the button for the submenu into the menu
              submenu01.appendChild(submenu02button);
  
              // create the submenu to add to the menu
              var submenu02 = document.createElement('div');
              submenu02.id = "nav_" +i.toString()+ "_"+ j.toString();
              submenu02.ariaExpanded = "false";
              submenu02.ariaRoleDescription = "list";
              submenu02.title = navObject.navdetailmenu;
              submenu02.classList.add('navdetailmenu');

              // add this submenu2 to the list
              headerelements.push(submenu02);

              // add the submenu to the menu
              submenu01.appendChild(submenu02);
              // add click to open the submenu on the submenu button
              submenu02button.addEventListener('click', function() {toggleChildLinks(submenu02.id);
                checkAriaExpanded(submenu02.id, submenu02.id);
              }, {passive:true});
              // create and add the button into the submenu ... click opens content

              // >>>>>>>>>>>>>>>>>>>>>>FINSHED CREATING FAUX MENU - submenu02<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
              // now create a new nested child menu
              //Setup a new nested menu architecture
              var tri2 = document.createElement('div');
              tri2.classList.add('triangle-down')
              //create a new Button to open a sub menu 3 
              var submenu03button  = document.createElement('a');
              submenu03button.innerHTML = navObject.title + " ";
              submenu03button.appendChild(tri2);
              submenu03button.href = "javascript:;";
              submenu03button.id = "submenu03button" + +i.toString()+ "_"+ j.toString();
              //submenu03button.ariaExpanded = "false;"
              //create the conatainer for menu items
              var submenu03 = document.createElement('div');
              submenu03.id = "nav_" +i.toString()+ "_"+ j.toString() +"nested";
              submenu03.ariaExpanded = "false";
              submenu03.ariaRoleDescription = "list";
              submenu03.title = navObject.navdetailmenu;
              submenu03.classList.add('navnestedmenu');
              //add button function to dropdown submenu3
              submenu03button.addEventListener('click', function(){toggleChildLinks(submenu03.id);
                checkAriaExpanded(submenu03.id, submenu03.id);
              }, {passive:true})

              //add it to its parents in this case: the element that matches the headername
              submenu02.appendChild(submenu03button);
              submenu02.appendChild(submenu03);

              //create the children of the button
              navObject.nestedchildlinks.forEach(function(item, n) {
                if(item.fancyboxtype == "external")
                {
                  var el = document.createElement('a');
                  el.id = String(i.toString() + 'navnum'+ j.toString() + n.toString());
                  el.href = item.fancyboxcontent;
                  el.innerHTML = item.title;
                  el.target="_blank";
                  el.rel="noopener";
                  submenu03.appendChild(el); 
                }
                else
                {
                  var el = document.createElement('a');
                  el.id = String(i.toString() + 'navnum'+ j.toString() + n.toString());
                  el.href = "javascript:;";
                  el.innerHTML = item.title;
                  el.setAttribute("data-fancybox", "");
                  el.setAttribute("data-type", item.fancyboxtype);
                  el.setAttribute("data-src", item.fancyboxcontent);
                  submenu03.appendChild(el);   
                }          
              });
            }
          }
          else
          {
            // there is no faux menu header, so create a structure that mimics the faux header
            headernames.push(navObject.title); // create a new header name from out hotspot title MUST BE UNIQUE

            //create a new Button to open a sub menu 1 
            var tri2 = document.createElement('div');
            tri2.classList.add('triangle-down')

            var submenu02button  = document.createElement('a');
            submenu02button.innerHTML = navObject.title + " ";
            submenu02button.appendChild(tri2);
            submenu02button.href = "javascript:;";
            submenu02button.id = "submenu02button" + +i.toString()+ "_"+ j.toString();
            //submenu02button.ariaExpanded = "false;"

            // add the button for the submenu into the menu
            submenu01.appendChild(submenu02button);

            // create the submenu to add to the menu
            var submenu02 = document.createElement('div');
            submenu02.id = "nav_" +i.toString()+ "_"+ j.toString();
            submenu02.ariaExpanded = "false";
            submenu02.ariaRoleDescription = "list";
            submenu02.title = navObject.navdetailmenu;
            submenu02.classList.add('navdetailmenu');
            headerelements.push(submenu02);

            // add the submenu to the menu
            submenu01.appendChild(submenu02);

            // add click to open the submenu on the submenu button
            submenu02button.addEventListener('click', function() {toggleChildLinks(submenu02.id);
              checkAriaExpanded(submenu02.id, submenu02.id);
            }, {passive:true});
            //
            //now add the nested menu
            //create the children of the button
            navObject.nestedchildlinks.forEach(function(item, n) {
              if(item.fancyboxtype == "external")
              {
                var el = document.createElement('a');
                el.id = String(i.toString() + 'navnum'+ j.toString() + n.toString());
                el.href = item.fancyboxcontent;
                el.innerHTML = item.title;
                el.target="_blank";
                el.rel="noopener";
                submenu02.appendChild(el); 
              }
              else
              {
                var el = document.createElement('a');
                el.id = String(i.toString() + 'navnum'+ j.toString() + n.toString());
                el.href = "javascript:;";
                el.innerHTML = item.title;
                el.setAttribute("data-fancybox", "");
                el.setAttribute("data-type", item.fancyboxtype);
                el.setAttribute("data-src", item.fancyboxcontent);
                submenu02.appendChild(el);   
              }        
            });

          }
          console.log("Child Count" + childcount);

        }else
        {
          // Adding Faux header nav menu architecture OR regular architecture
          if(navObject.navdetailmenu != ""){
            if(headernames.includes(headername)) // if there is already a header for this element
            {
              //loop through existing headers to find the one that matches
              headerelements.forEach(element  => {
                if(element.title == headername){
                  //console.log(headername);
                  CreateElement(i,j, element);
                  // var el = document.createElement('a');
                  // el.id = String(i.toString() + 'navnum'+ j.toString());
                  // el.href = "javascript:;";
                  // el.innerHTML = navObject.title;
                  // el.setAttribute("data-fancybox", "");
                  // el.setAttribute("data-type", navObject.fancyboxtype);
                  // el.setAttribute("data-src", navObject.fancyboxcontent);
                  // element.appendChild(el);

                }
              });
            }
            else
            {
              headernames.push(headername); //add the new header to the list

              //create a new Button to open a sub menu 1 
              var tri2 = document.createElement('div');
              tri2.classList.add('triangle-down')

              var submenu02button  = document.createElement('a');
              submenu02button.innerHTML = navObject.navdetailmenu + " ";
              submenu02button.appendChild(tri2);
              submenu02button.href = "javascript:;";
              submenu02button.id = "submenu02button" + +i.toString()+ "_"+ j.toString();
              //submenu02button.ariaExpanded = "false;"

              // add the button for the submenu into the menu
              submenu01.appendChild(submenu02button);

              // create the submenu to add to the menu
              var submenu02 = document.createElement('div');
              submenu02.id = "nav_" +i.toString()+ "_"+ j.toString();
              submenu02.ariaExpanded = "false";
              submenu02.ariaRoleDescription = "list";
              submenu02.title = navObject.navdetailmenu;
              submenu02.classList.add('navdetailmenu');
              headerelements.push(submenu02);

              // add the submenu to the menu
              submenu01.appendChild(submenu02);

              // add click to open the submenu on the submenu button
              submenu02button.addEventListener('click', function() {toggleChildLinks(submenu02.id);
                checkAriaExpanded(submenu02.id, submenu02.id);
              }, {passive:true});
              num = num++;

              // create and add the button into the submenu ... click opens content
              CreateElement(i,j, submenu02);
              // var el = document.createElement('a');
              // el.id = String(i.toString() + 'navnum'+ j.toString());
              // el.href = "javascript:;";
              // el.innerHTML = navObject.title;
              // el.setAttribute("data-fancybox", "");
              // el.setAttribute("data-type", navObject.fancyboxtype);
              // el.setAttribute("data-src", navObject.fancyboxcontent);
              // submenu02.appendChild(el);

            }
          }
          else
          {
            CreateElement(i,j, submenu01);
            // var el = document.createElement('a');
            // el.id = String(i.toString() + 'navnum'+ j.toString());
            // el.href = "javascript:;";
            // el.innerHTML = navObject.title;
            // el.setAttribute("data-fancybox", "");
            // el.setAttribute("data-type", navObject.fancyboxtype);
            // el.setAttribute("data-src", navObject.fancyboxcontent);
            // submenu01.appendChild(el);  
          }
        }
        function CreateElement(sceneNum, navnumber, parent)
        {
          var el = document.createElement('a');
          el.id = String(sceneNum.toString() + 'navnum'+ navnumber.toString());

          if(navObject.fancyboxtype =="external")
          {
            el.href = navObject.fancyboxcontent;
            el.innerHTML = navObject.title;
            el.target="_blank";
          }
          else
          {
            if(navObject.fancyboxtype =="app"){
              el.href = "javascript:;";
              el.innerHTML = navObject.title;
              el.addEventListener('click' , function(){
                var hotspoteleid = String(sceneNum.toString() + navObject.classtype.toString() + j.toString());;
                var hottarget = document.getElementById(hotspoteleid); 
                cameraFocusHotspotwithDelay(hottarget);
              }, {passive:true})
            }else{
              el.href = "javascript:;";
              el.innerHTML = navObject.title;
              el.setAttribute("data-fancybox", "");
              el.setAttribute("data-type", navObject.fancyboxtype);
              el.setAttribute("data-src", navObject.fancyboxcontent);

              el.addEventListener('click' , function(){
                var hotspoteleid = String(sceneNum.toString() + navObject.classtype.toString() + j.toString());;
                var hottarget = document.getElementById(hotspoteleid); 
                cameraFocusHotspot(hottarget);
              }, {passive:true})
              
            }

          }


          parent.appendChild(el); 
        }
      });
    });

    pano.before(navHolder);
    //panoElement.append(navHolder);
    //panoElement.before(navHolder);
    //referenceNode.after(navHolder);
  }
  CreateHeader(!true);
  function CreateHeader(create){

    if(!create){
      return;
    }
    var pano = document.querySelector('#pano');
    //pano.style.display = "none";

    var header = document.createElement('header');
    header.id ="welcomeheader";

    // header.role ="heading";
    var h1 = document.createElement('h1');
    h1.innerHTML = "Thank you for joining us!";
    var h2 = document.createElement('h2');

    h2.innerHTML = "We hope you enjoy our virtual room and find it informative.";

    var h4 = document.createElement('h4')
    h4.innerHTML = "*For best results, please view using Chrome, Edge, or Opera"; 
   

    // var headerimage = document.createElement('img');
    // headerimage.id = "headerbackground";
    // headerimage.src = "img/logoSmall.webp";
    // headerimage.alt = "us forest service"

    // header.appendChild(headerimage);
    header.appendChild(h1);
    header.appendChild(h2);
  
    header.appendChild(h4);


    //var parentnode = referenceNode.parentElement;
    //parentnode.insertBefore(header, referenceNode);
    pano.before(header);

    //Create the CALL TO ACTION BUtton (ENTER)

    var main = document.createElement('div');
    main.id = "enterdiv"

    main.classList.add("main");
    var clickable = document.createElement('a');
    clickable.id = "enterButton";
    clickable.href ="javascript:;";
    clickable.innerHTML = "Enter / Entrar";
    clickable.addEventListener('click', function(){
      ClearHeader();
      // header.style.display = "none";
      // resetCameraToZero();
      // var alerts =  document.getElementById('alert');
      // if(alerts){
      //   alerts.remove();
      // }

      // //pano.focus()
      // welcomecleared = true;
      // //main.remove();
      // main.style.display = "none";
      // PlayDecorVideos();
    }, {passive:true});
    clickable.addEventListener('focusout', function(){ // only happens if we tab past the Enter button
      header.style.display = "none";
      var alerts =  document.getElementById('alert');
      if(alerts){
        alerts.remove();
      }
      welcomecleared = true;
      main.style.display = "none";
      PlayDecorVideos();
    }, {passive:true});

    main.appendChild(clickable);
    // header.after(main);
    header.appendChild(main);

  }
  CreateAlerts(false);
  function CreateAlerts(create){
    if(!create){
      return;
    }
    var placehelp = document.getElementById("logo");
    var alertpopup =  document.createElement('div');
    alertpopup.addEventListener('click', function(){
      alertpopup.remove()
    }, {passive:true})
    alertpopup.id = "alert";
    //alertpopup.classList.add('alerts');
    alertpopup.setAttribute("role", "alert");
    var header = document.createElement('p');
    header.innerHTML = "INFO ALERT!";
    var message = document.createElement('p');
    message.innerHTML = "This site uses analytics to gather statistics for improving user experience.";

    placehelp.after(alertpopup);
    alertpopup.appendChild(header);
    alertpopup.appendChild(message);
  }
  function ClearHeader(){
    supertabIndex = 0;
    var header =  document.getElementById('welcomeheader');
    header.style.display = "none";
    resetCameraToZero();
    var alerts =  document.getElementById('alert');
    if(alerts){
      alerts.remove();
    }

    welcomecleared = true;
    var main =  document.getElementById('enterdiv');
    main.style.display = "none";
    PlayDecorVideos();
  }
  CreateInstructions();
  function CreateInstructions(){
    var placehelp = document.getElementById("logo");

    var popup = document.createElement('div');
    popup.classList.add('instructionPop');
    popup.style.display = "none";

    var popupHeader = document.createElement('p');
    popupHeader.innerHTML = "How to view the room:";
    popup.appendChild(popupHeader);

    var image1 = document.createElement('img');
    image1.classList.add("content_desktop");
    image1.alt = "Visual instructions to change the view with left mouse click and drag."
    image1.src = "img/mouseclick.png"
    popup.appendChild(image1);

    var image1mobile = document.createElement('img');
    image1mobile.classList.add("content_mobile");
    image1mobile.alt = "Visual instructions to change the view by dragging a single finger on screen."
    image1mobile.src = "img/mousedragmobile.png"
    popup.appendChild(image1mobile);

    var popupp1 = document.createElement('p');
    popupp1.classList.add('content_desktop')
    popupp1.innerHTML = "Click and Drag to look around in the room.";
    popup.appendChild(popupp1);

    var popupp1mobile = document.createElement('p');
    popupp1mobile.classList.add('content_mobile')
    popupp1mobile.innerHTML = "Drag to change the view.";
    popup.appendChild(popupp1mobile);

    var image2 = document.createElement('img');
    image2.classList.add("content_desktop");
    image2.alt = "Visual instructions to change the zoom with mouse scroll wheel."
    image2.src = "img/mousezoom.png"
    popup.appendChild(image2);

    var image2mobile = document.createElement('img');
    image2mobile.classList.add('content_mobile');
    image2mobile.alt = "Visual instructions to change zoom with a pinching gesture."
    image2mobile.src = "img/mousezoommobile.png"
    popup.appendChild(image2mobile);

    var popupp2 = document.createElement('p');
    popupp2.classList.add('content_desktop');
    popupp2.innerHTML = "Zoom In and Out using the mouse wheel.";
    popup.appendChild(popupp2);

    var popupp2mobile = document.createElement('p');
    popupp2mobile.classList.add('content_mobile');
    popupp2mobile.innerHTML = "Zoom In and Out with a pinching gesture.";
    popup.appendChild(popupp2mobile);

    
    var popupp3 = document.createElement('p');
    popupp3.innerHTML = "Select each kiosk, LCD Screen, and the wall map to view more information.";
    popup.appendChild(popupp3);

    var closebutton = document.createElement('a');
    closebutton.href = 'javascript:;';
    closebutton.alt = "Close button the visual instructions popup."
    closebutton.classList.add('closebutton');
    closebutton.innerHTML = '<p>close</p>';
    closebutton.addEventListener('click', function(){
      popup.style.display = "none";
    }, {passive:true})

    popup.appendChild(closebutton);

    var instructHolder = document.createElement('div');
    instructHolder.id ="instructions";
    var link = document.createElement('a');
    //link.tabIndex = -1;
    link.id = "helpButton"
    link.href = 'javascript:;';
    link.addEventListener('click', function(){
      popup.style.display = "block";
    }, {passive:true})

    var p1 = document.createElement('p');

    p1.innerHTML = "?";

    link.appendChild(p1);
    instructHolder.appendChild(link);

    placehelp.after(instructHolder);
    instructHolder.after(popup);
  }



  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    }, {passive:true});
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    //updateCurrentSceneIndex(scene.data.id)
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    updateCurrentSceneIndex(scene.data.id)
  }

  function createSimpleHotspot(hotspot, sceneNum, index) {

    if(hotspot.fancyboxtype == "app"){
      var wrapper = document.createElement('a');
      //wrapper.tabIndex = "0"; // so it becomes focusable
      wrapper.classList.add(hotspot.classtype);
      wrapper.id = String( sceneNum.toString() + hotspot.classtype.toString() + index.toString());
      wrapper.classList.add('tabbable');
      wrapper.href = "javascript:;";
      wrapper.target = "_parent";
      wrapper.ariaRoleDescription = "application";

      var appiframe = document.createElement('iframe');
      appiframe.loading = 'lazy';
      //appiframe.setAttribute("sandbox", "allow-scripts");
      //appiframe.setAttribute("SameSite", "None");
      //appiframe.setAttribute("Secure", "");
      appiframe.target = "_parent";
      appiframe.style.display ="none";
      appiframe.src = hotspot.fancyboxcontent;
      appiframe.ariaRoleDescription = "application";
      appiframe.id = String(hotspot.fancyboxtype + hotspot.classtype.toString() + index.toString());
      if (hotspot.allow) {
        appiframe.allow = hotspot.allow;
      }

      appiframe.addEventListener('focusout', function(){
        wrapper.focus(); //when focus is lost from the Iframe it is passed to the parent hotspot
        setCameraFov(100); // zoom out so the user has screen space to navigate around the room
        focusIsNormal = true;
        //appiframe.src = "";
        appiframe.style.display ="none";
        image.style.display ="block";
        console.log("IFRAME SENT FOCUS TO PARENT HOTSPOT ");
      }, {passive:true})

      wrapper.appendChild(appiframe);

      //Create screen img element
      if(!hotspot.imgsrc == ""){
        var image = document.createElement('img');
        image.src = hotspot.imgsrc;
        image.alt = String("");
        wrapper.appendChild(image);
      }

      wrapper.addEventListener('click', function(){
        appiframe.style.display ="block";
        image.style.display ="none";
        //appiframe.src = hotspot.fancyboxcontent;
        appiframe.focus();
        focusIsNormal = false;
        console.log("SENT FOCUS TO IFRAME");
        cameraFocusHotspot(wrapper);
  
        //document.getElementById(appiframe.id).focus();

        //appiframe.contentWindow.document.body.focus();
      }, {passive:true})

      stopTouchAndScrollEventPropagation(wrapper);

      //create title element
      if(!hotspot.title == ""){
        var title = document.createElement('p');
        title.innerHTML = hotspot.title;
        wrapper.appendChild(title);
      }

      //create decription element
      if(!hotspot.description == ""){
        var description = document.createElement('p');
        description.innerHTML = hotspot.description;
        wrapper.appendChild(description);
      }
  
      return wrapper;

    }else
    { 
    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('a');
    wrapper.classList.add(hotspot.classtype);
    wrapper.id = String( sceneNum.toString() + hotspot.classtype.toString() + index.toString());
    wrapper.classList.add('tabbable');

    // check if the Hotspot is an 'external' link
    if(hotspot.fancyboxtype == "external")
    {
      wrapper.href = hotspot.fancyboxcontent;
      wrapper.target="_blank";
    }
    else
    {
      if(hotspot.fancyboxtype == "scene")
      {
        wrapper.addEventListener('click', function() {
          var scene = findSceneById(hotspot.fancyboxcontent)
          switchScene(scene);

          // send focus to the navigation menu when we enter a new scene via hotspot
          var main = document.getElementById("mainnavbutton");
          main.focus();
        }, {passive:true});  
      }
      else
      {
        wrapper.setAttribute("data-fancybox", "");
        wrapper.setAttribute("data-type", hotspot.fancyboxtype);
        if(hotspot.fancyboxtype == "image"){
          wrapper.setAttribute("data-caption", hotspot.description);
        }
        wrapper.setAttribute("data-src", hotspot.fancyboxcontent);
      }

      wrapper.href = "javascript:;";
    }
    // Add click event handler.
    wrapper.addEventListener('click', function() {
      cameraFocusHotspot(wrapper);
      SetTabNumber(wrapper.id);
      }, {passive:true});    
    
    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);


    //Create screen img element
    if(!hotspot.imgsrc == ""){
      var image = document.createElement('img');
      image.src = hotspot.imgsrc;
      image.alt = String("");
      wrapper.appendChild(image);
    }

    //create title element
    if(!hotspot.title == ""){
      var title = document.createElement('p');
      title.innerHTML = hotspot.title;
      wrapper.appendChild(title);
    }

    //create decription element
    if(!hotspot.description == ""){
      var description = document.createElement('p');
      description.innerHTML = hotspot.description;
      wrapper.appendChild(description);
    }

    return wrapper;

    }
  }

  function createDecorHotspot(hotspot, sceneNum, index) {
    var wrapper;
    // Create wrapper element to hold icon and tooltip.
    if(hotspot.fancyboxtype == "video/mp4")
    {
      wrapper = document.createElement('video');
      wrapper.classList.add(hotspot.classtype);
      wrapper.id = String( sceneNum.toString() + hotspot.classtype.toString() + index.toString());
      //wrapper.setAttribute("autoplay", ""); // handed by the 'Welcome' method
      wrapper.setAttribute("muted", "");
      wrapper.setAttribute("loop", "");
      wrapper.setAttribute("oncanplay", "this.muted=true");
      wrapper.setAttribute("webkit-playsinline", "true");
      wrapper.setAttribute("playsinline", "true");
  
      var vsource = document.createElement('source');
      vsource.src = hotspot.fancyboxcontent;
      vsource.type = hotspot.fancyboxtype;
  
      wrapper.appendChild(vsource);
    }
    else{
      if(hotspot.fancyboxtype == "decorheader")
      {
        wrapper = document.createElement('div');
        wrapper.setAttribute("aria-hidden", true);
        wrapper.classList.add(hotspot.classtype);
        wrapper.id = String( sceneNum.toString() + hotspot.classtype.toString() + index.toString());

        var title = document.createElement('p');
        title.innerHTML = hotspot.title;

        wrapper.appendChild(title);

        if(!hotspot.imgsrc == ""){
          //Create screen img element
          var image = document.createElement('img');
          image.src = hotspot.imgsrc;
          image.alt = String("");
          wrapper.appendChild(image);
          }
      }
    }
    stopTouchAndScrollEventPropagation(wrapper);

    wrapper.addEventListener('click', function() {
      cameraFocusHotspot(wrapper);
      }, {passive:true});
    wrapper.tabIndex = -1;
    return wrapper;
  }

  function createDirectoryHotspot(hotspot, sceneNum, index) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add(hotspot.classtype);
    wrapper.id = String( sceneNum.toString() + hotspot.classtype.toString() + index.toString());
    var addition = 0;
    // Add click event handler.
    //Was added to The header
    if(index > 0){addition = lastcount;}
    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    var list = document.createElement('ul');
    //Create Directory links
    hotspot.directorylist.forEach(function(item, j) {
      var listing = document.createElement('li');
      //var index = item.indextocall;
      var calledindex = addition +j;
      var className = item.classToCall;
      var classindex = item.indexnum;
      //var idtoCall = String(sceneNum.toString() + className + calledindex.toString() );
      var idtoCall = String(sceneNum.toString() + className + classindex);
      listing.tabIndex = -1;
      listing.alt = String("");
      //listing.addEventListener('click', function(){cameraLookToIndexed(index); tabNumber = index;});
      listing.addEventListener('click', function(){cameraLookToHotSpotById(idtoCall);}, {passive:true});
      listing.innerHTML = item.name;
      list.appendChild(listing);
      lastcount = ++lastcount;

    });
    console.log(lastcount);


    //create holder div
    var holder = document.createElement('div');
    holder.tabIndex = -1;

    //Create screen img element
    var image = document.createElement('img');
    image.src = hotspot.imgsrc;
    image.alt = String("");

    //create title element
    var title = document.createElement('p');
    title.innerHTML = hotspot.title;
    title.addEventListener('click', function() {
      cameraFocusHotspot(wrapper);
      }, {passive:true});

    holder.appendChild(image);
    holder.appendChild(list);
    holder.appendChild(title);

    wrapper.appendChild(holder);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      }, {passive: true});
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }
 
// CUSTOM CODE START <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function updateCurrentSceneIndex(sceneId){
  tabNumber = -1;
  supertabIndex = -1;
  //document.activeElement.blur();

  currentSceneIndex = sceneId.charAt(0);
  currentSceneIndex = parseInt(currentSceneIndex);
}

// JQUERY FUNCTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// FANCYBOX SETTINGS  
$(function()    // shorthand - if page is ready. then set fancybox options
{
  $('[data-fancybox]').fancybox({
    // Options will go here
    fullScreen: {
      autoStart: false
    },
    smallBtn: true,
    //arrows: true,
    toolbar: false,
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      "fullScreen",
      //"download",
      //"thumbs",
      "close"
    ],
    idleTime: 100
  })
  //focusNextElement();
}
);


//EVENTS

$(document).on('afterClose.fb', function( e, instance, slide ) {
  setCameraFov(100);
	// Your code goes here
});

$(document).on('keydown', function(event) {
  if (event.key == "Tab" ) {   //tab pressed
    if(event.shiftKey){
      SolveFocus(event, false);
      //console.log('SHIFT + TAB PRESSED',  event.target);
      return;
    }else{
      if(!welcomecleared){clearWelcome();}
      SolveFocus(event, true);

      // if(event.target == document.body){
      //   console.log('AT TEH BODY MAIN',  event.target);
      //   $.fancybox.close(true);
      // }

    }
  }

});

$(document).on('mouseover', function(event){
  //console.log("FOCUSIN FROM >>>>>>>>>>>>", event.target.id);
  CreateAudioSourceAndPlay(event.target);
})

$(document).on('focusin', function(event){
  //console.log("FOCUSIN FROM >>>>>>>>>>>>", event.target.id);
})

$(document).on('focusout', function(event){
  //console.log("FOCUSOUT FROM <<<<<<<<<<<", event.target.id);
  //QuickCheck(event);
})

$(document).on('mousedown', function(event)
  {
    if(event.target === pano.childNodes[1]){
      tabNumber = -1;
      supertabIndex = 0;
        //console.log("Mousedown On Target<<<<<<<<<<<", event.target);

      if(!welcomecleared){
        ClearHeader();
      }
    }
  }
)

//SOLVE FOCUS

function SolveFocus(event, forward){
    //add all elements we want to include in our selection
    var focussableElements = 'a:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"]), button:not([disabled])';
    let curTargets = returnTabbables();
  
    var index_this;
    var index_last;
    var index_next;

    if (document.activeElement) {
      var focussable = Array.prototype.filter.call(document.querySelectorAll(focussableElements),
        function (element) {
            //check for visibility while always include the current activeElement 
            return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
        });

        //focussable.forEach(item => console.log(item))
        //get the index of the current focus in the array of all focusable elements
        var index = focussable.indexOf(document.activeElement);

        index_this = index;
        index_last = index_this -1;
        index_next = index_this +1;


        console.log("Index of focusable",index_last, "-", index_this, "-", index_next)
        
        //if current element 
        if(index > -1) {
          supertabIndex = index;
          var prospectiveElement;
          var inx;

          if(forward)
          {
            prospectiveElement = focussable[index + 1];
            inx = Array.prototype.indexOf.call(curTargets, prospectiveElement);
            var atheEnd = (tabNumber + 1) == curTargets.length;
            if(atheEnd){resetCameraToZero(); console.log("AT THE END"); tabNumber=-1; return;}

            if(inx > -1){
              // the current element is in the Tabbablabe array


              console.log("NEXT TABBABLE ELEMENT" , prospectiveElement);
 
              event.preventDefault(); // stops its action
              event.stopPropagation();
              tabNumber = inx;
              cameraFocusHotspotwithDelay(prospectiveElement);
            }

          }
          else
          {
            prospectiveElement = focussable[index - 1];
            inx = Array.prototype.indexOf.call(curTargets, prospectiveElement);
            var atheEnd = (tabNumber + 1) == curTargets.length;

            var tabbableinFocusable = curTargets[tabNumber];
            var compinx = Array.prototype.indexOf.call(focussable, tabbableinFocusable);

            //check the difference between the index number and tab number
            //if the distance is great then
            var diffover = index - compinx;
            if(diffover >= 1){
              pasttabbables = true;
              console.log("PAST TABBABLES -> Diff =" , diffover);
            }else{
              pasttabbables = false;
            }

            if(inx > -1){// the current element is in the Tabbablabe array

              console.log("NEXT TABBABLE ELEMENT" ,prospectiveElement);
 
              event.preventDefault(); // stops its action
              event.stopPropagation();
              tabNumber = inx;
              cameraFocusHotspotwithDelay(prospectiveElement);
            }else{
              //catch case - if shift tabbing back from the first hotspot.. do 1
              //catch case - if shift tabbing back from the another hotspot.. do 2
              if(tabNumber > -1){

                if(tabNumber == 0){
                  resetCameraToZero();
                  tabNumber = inx;
                  return;
                }
                if(atheEnd){
                  if(diffover ==1){
                    event.preventDefault(); // stops its action
                    event.stopPropagation();
                    var target = curTargets[tabNumber];
                    cameraFocusHotspotwithDelay(target);
                  }
                }
                // we are inside an iframe and we need to let it control focus .. do nothing in this instance 

              }else{
                resetCameraToZero();
                //tabNumber = inx; // REDUNDANT both already equal -1 at this point
                return;
              }

            }
          }
        }else{
          // focus was at the webpage start or was lost or
          //focus is inside a fancybox element
          console.log("AT THE BODY <<>> No Focus Defined");
          // now check our index to see if we are at the begining of the page or somewhere inside

          if(forward){

            if(supertabIndex < 0) // if it equals -1
            {
              console.log("SUPERERINDEX =", supertabIndex, "+ TAB NUMBER =" , tabNumber);
              // we are just entering the page
              // focus starts at the body and will move to the first element (the nav menu)
              // then it will move to Enter button.. onclick that will close and the next tab with be to the body again
              // except at that point the supertabindex will be greater then -1 and we will catch those cases
            }
            else
            {
              //after we have entered the site and hit tab we should be on our first hot spot
              //therefore we prevent defaults and send focus to that Hotspot after Panning the camera to see it
              //this also occurs if a user mouse navigates

              //focussable.forEach(item => console.log(item.id));

              //check to see if the focus 
              if(tabNumber < 0){
                var nextfocus = focussable[supertabIndex + 1];
                console.log("SUPERERINDEX FOUND next focus=", nextfocus.id);
                var nextTabbableIndex = Array.prototype.indexOf.call(curTargets, nextfocus);
                console.log("SUPERERINDEX FOUND TABBABLE INDEX =", nextTabbableIndex);
                
                // EDGE CASE (happens when the nav menu is unfolded and the user switches from keyuboard nav to mouse nav and back to keyboard nav .
                // if the nextTabbableIndex is not 0 we have entered the nav menu
                if(nextTabbableIndex != 0){
                  console.log("Passing Focus to Main Navigation Button");
                  var nav =document.getElementById("mainnavbutton");
                  nav.focus();
                  return;
                }
    
                event.preventDefault(); // stops its action
                event.stopPropagation();
                tabNumber = nextTabbableIndex;
                cameraFocusHotspotwithDelay(nextfocus);
              }
              else // also if we are inside a fancybox this will trigger
              {
                // needs to be open ended for dynamic links generated in the iframes
                // one option is to reset the tabNumber to '-1' check if it breaks the system
              }
            }
          }
          else // if Shift Tab has been pressed
            {
              //handling edge case in reverse
              // if hitting shift tab to go back ie !forward
              // and we are beyond the end of the tabbables list
              //supertabindex should be -1 again so we dont have to check .. we are assuming focus is lost
              if(tabNumber > -1){
                //edge case
                event.preventDefault(); // stops its action
                event.stopPropagation();
                var nextfocus = curTargets[tabNumber];
                cameraFocusHotspotwithDelay(nextfocus);
              }
              //
            }
          //this means the next tabbable will be determined by the browsers index
        }                
    }else{
      //  we are on another html body.. tab event in that body does not bubble up to this body
      console.log("OUTSIDE FOCUS ENTRY");
    }
}


function returnTabbables(){
  //get all elements with a tabbable class
  const tabbables = document.querySelectorAll(".tabbable");
  //console.log(tabbables); 

  //make an array to hold the Tabbable in the current scene
  let curTargets = new Array();
  
  //Populate the array of the Tabbables in the Scene
  tabbables.forEach(el => {
    let elId = el.id;
    if(elId.charAt(0).includes(currentSceneIndex)) {curTargets.push(el);}  
  });

  return curTargets;
}



// CAMERA FUNCTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function cameraLookToHotSpotById(id){
  var targetElement = document.getElementById(id);

  if(!targetElement == ''){cameraFocusHotspotwithDelay(targetElement);}
}

function cameraFocusHotspotwithDelay(element){
  var scene = viewer.scene();
  var hotspots = scene.hotspotContainer().listHotspots();
  var hotspotref;
  var newyaw;
  var newpitch;

  for(var i =0; i < hotspots.length; i++){
    if(hotspots[i].domElement() === element)
      {
        hotspotref = hotspots[i];
        newyaw = hotspotref.position().yaw;
        newpitch = hotspotref.position().pitch;

        var destinationViewParameters = {

          fov: 35 * Math.PI/180,
          yaw: newyaw,
          pitch: newpitch
      
        };
      
        var options = {
          transitionDuration: 1000
        }

        scene.lookTo(destinationViewParameters, options, sendDelayFocus(element));        
      }
    }
}

function cameraFocusHotspot(element){
  var scene = viewer.scene();
  var hotspots = scene.hotspotContainer().listHotspots();
  var hotspotref;

  var view = scene.view();
  var yaw = view.yaw();
  var pitch = view.pitch();
  var fov = view.fov();

  var options = {
    transitionDuration: 1000
  }
  for(var i =0; i < hotspots.length; i++){
    if(hotspots[i].domElement() === element)
      {
        hotspotref = hotspots[i];
        var hotspotPitch = Math.round(hotspotref.position().pitch *1000) / 1000;
        pitch = Math.round(pitch*1000) /1000;
        var hotspotYaw = Math.round(hotspotref.position().yaw * 1000) / 1000;
        yaw = Math.round(yaw*1000) /1000;  
        if(pitch != hotspotPitch || yaw != hotspotYaw){
          scene.lookTo(hotspotref.position(), options);  
          // console.log(hotspotPitch.toString() + "-VS-" + pitch);
          // console.log(hotspotYaw.toString() + "-VS-" + yaw);
        }
      }
    }
}

function setCameraFov(fovdegree){

  var scene = viewer.scene();
  var view = scene.view();
  var fovC = view.fov();
  fovdegree *= Math.PI/180;
  console.log(fovC);

  if(fovC < 0.7)
  {
    console.log("fov too small adjusting");
    var destinationViewParameters = {
      fov: fovdegree
    };
  
    var options = {
      transitionDuration: 2000
    }
  
    scene.lookTo(destinationViewParameters, options);

  }else
  {
    console.log("fov is fine");
    return;
  }
}

function resetCameraToZero(){

  var scene = viewer.scene();
  var view = scene.view();
  var yaw = view.yaw();
  var pitch = view.pitch();

  var destinationViewParameters = {
    yaw: 0,
    pitch: 0,
    fov: 60 * Math.PI/180
  };

  var options = {
    transitionDuration: 2000
  }

  if(!pitch == 0 || !yaw == 0){
    scene.lookTo(destinationViewParameters, options);
  }
}

function sendDelayFocus(element){
  setTimeout(function(){ document.getElementById(element.id).focus();}, 900);
}

// from https://github.com/google/marzipano/issues/321 For limiting Iframe interaction while panning with the mouse
const iframes = document.getElementsByTagName('iframe');
const dragCtl = viewer.controls().method('mouseViewDrag').instance;

dragCtl.addEventListener('active', () => {
  for (const el of iframes) {
    el.style.pointerEvents = 'none';
  }
}, {passive:true});

dragCtl.addEventListener('inactive', () => {
  for (const el of iframes) {
    el.style.pointerEvents = 'all';
  }
}, {passive:true});


function toggleChildLinks(id) {
  var x = document.getElementById(id);
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function checkAriaExpanded(b, id){
  var x = document.getElementById(id);
  var y = document.getElementById(b);
  if (x.style.display === "none") {
    y.ariaExpanded = false;
  } else {
    y.ariaExpanded = true;
  }
}

function SetTabNumber(id){
  let curTargets = returnTabbables();
  var el = document.getElementById(id);
  var inx = Array.prototype.indexOf.call(curTargets, el);
  tabNumber = inx;
  console.log("Setting Tab Number to ", inx);

}
// CUSTOM CODE END <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

switchScene(scenes[0]);

})();
var lastElement;
function CreateAudioSourceAndPlay(element){
  if(!welcomecleared){return}
  var eP = element.parentNode;

  if(!eP.classList.contains('tabbable')){
    //console.log(eP);
    if(eP.id == "pano"){
      lastElement = eP;
      return;
    }else
    {
      if(element === lastElement){
        return;
      }else{
        
        lastElement = element;
      }
    }
  }else
  {
    if(eP === lastElement){
      return;
    }
    
    lastElement = eP;
  }
  
}