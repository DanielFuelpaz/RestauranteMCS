let buttonActivator  = document.getElementById('buttonActivator');
let sideBar  = document.getElementById('sideBar');
let closeButton = document.getElementById('closeButton');
let activatorContainer = document.getElementById('activatorContainer');
let spanAlert = document.getElementById('activatorSpan');

buttonActivator.addEventListener('click', function() {
          sideBar.style.display = 'grid';
          activatorContainer.style.display='none';
      });
buttonActivator.addEventListener('mouseover',function(){
    spanAlert.style.display='inline-block';    
});
buttonActivator.addEventListener('mouseout',function(){
    spanAlert.style.display='none';    
});
closeButton.addEventListener('click',function(){
    sideBar.style.display='none';
    activatorContainer.style.display='inline-block';
});
