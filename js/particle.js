
var init = function(){
    var isMobile = navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
    var isSmall = window.innerWidth < 1000;
    
    var ps1 = new ParticleSlider({
      sliderId:"particle-slider1",
      ptlGap: isMobile || isSmall ? 3 : 0,
      ptlSize: isMobile || isSmall ? 3 : 1,
      width: 1e9,
      height: 1e9
    });
    ps1.monochrome = true;
    ps1.setColor("#1E22AA");
    ps1.mouseForce=10;

    var ps2 = new ParticleSlider({
      sliderId:"particle-slider2",
      ptlGap: isMobile || isSmall ? 3 : 0,
      ptlSize: isMobile || isSmall ? 3 : 1,
      width: 1e9,
      height: 1e9
    });
    ps2.monochrome = true;
    ps2.setColor("#8d91a9");
    ps2.mouseForce=10;

    var ps3 = new ParticleSlider({
      sliderId:"particle-slider3",
      ptlGap: isMobile || isSmall ? 3 : 0,
      ptlSize: isMobile || isSmall ? 3 : 1,
      width: 1e9,
      height: 1e9
    });
    ps3.monochrome = true;
    ps3.setColor("#8d91a9");
    ps3.mouseForce=10;

    document.getElementById('tab1').addEventListener('click', function(){
      ps1.monochrome = true;
      ps1.setColor("#1E22AA");
      ps1.init(true);
      ps2.monochrome = true;
      ps2.setColor("#8d91a9");
      ps2.init(true);
      ps3.monochrome = true;
      ps3.setColor("#8d91a9");
      ps3.init(true);
    });
    document.getElementById('tab2').addEventListener('click', function(){
      ps2.monochrome = true;
      ps2.setColor("#1E22AA");
      ps2.init(true);
      ps1.monochrome = true;
      ps1.setColor("#8d91a9");
      ps1.init(true);
      ps3.monochrome = true;
      ps3.setColor("#8d91a9");
      ps3.init(true);
    });
    document.getElementById('tab3').addEventListener('click', function(){
      ps3.monochrome = true;
      ps3.setColor("#1E22AA");
      ps3.init(true);
      ps2.monochrome = true;
      ps2.setColor("#8d91a9");
      ps2.init(true);
      ps1.monochrome = true;
      ps1.setColor("#8d91a9");
      ps1.init(true);
    });
  }
  
  var initParticleSlider = function(){
    var psScript = document.createElement('script');
    (psScript.addEventListener
      ? psScript.addEventListener('load', init, false)
      : psScript.onload = init);
    psScript.src = '/js/particle-animation.js';
    psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
  }
      
  (window.addEventListener
    ? window.addEventListener('load', initParticleSlider, false)
    : window.onload = initParticleSlider);
  