






    let page  = document.querySelector('.page-2');

    let old = document.querySelector('.old');
    let classic = document.querySelector('.classic');
    let city = document.querySelector('.city');
    let ne = document.querySelector('.ne');
    let smart = document.querySelector('.smart');
    let peace = document.querySelector('.peace');
    let smile = document.querySelector('.smile');
    let petAnimal = document.querySelector('.pet-animal');
    let predatory = document.querySelector('.predatory');
    let fighting = document.querySelector('.fighting');
    let sport = document.querySelector('.sport');
    let voi = document.querySelector('.voi');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    if (value < 400 ){
        page.style.backgroundImage = 'url()';
    }if (value > 550){
        page.style.backgroundImage = 'url(img/old.jpeg)';
        old.style.color = '#fff';
        old.style.borderColor = "#fff";
    }if (value > 678.5){
        page.style.backgroundImage = 'url(img/classic.jpeg)';
        classic.style.color = '#fff';
        classic.style.borderColor = "#fff";
        old.style.color = '#ffffffa4';
        old.style.borderColor = "#ffffffa4";
    }if (value > 861.5 ){
        page.style.backgroundImage = 'url(img/city.jpeg)';
        city.style.color = '#fff';
        city.style.borderColor = "#fff";
        classic.style.color = '#ffffffa4';
        classic.style.borderColor = "#ffffffa4";
    }if (value > 1007 ){
        page.style.backgroundImage = 'url(img/new.jpeg)';
        ne.style.color = '#fff';
        ne.style.borderColor = "#fff";
        city.style.color = '#ffffffa4';
        city.style.borderColor = "#ffffffa4";
    }if (value > 1190 ){
        page.style.backgroundImage = 'url(img/smart.png)';
        smart.style.color = '#fff';
        smart.style.borderColor = "#fff";
        ne.style.color = '#ffffffa4';
        ne.style.borderColor = "#ffffffa4";
    }if (value > 1373 ){
        page.style.backgroundImage = 'url(img/peace.png)';
        peace.style.color = '#fff';
        peace.style.borderColor = "#fff";
        smart.style.color = '#ffffffa4';
        smart.style.borderColor = "#ffffffa4";
    }if (value > 1503 ){
        page.style.backgroundImage = 'url(img/smile.jpeg)';
        smile.style.color = '#fff';
        smile.style.borderColor = "#fff";
        peace.style.color = '#ffffffa4';
        peace.style.borderColor = "#ffffffa4";
    }if (value > 1655 ){
        page.style.backgroundImage = 'url(img/pet-animal.jpeg)';
        petAnimal.style.color = '#fff';
        petAnimal.style.borderColor = "#fff";
        smile.style.color = '#ffffffa4';
        smile.style.borderColor = "#ffffffa4";
    }if (value > 1823 ){
        page.style.backgroundImage = 'url(img/predatory.jpeg)';
        predatory.style.color = '#fff';
        predatory.style.borderColor = "#fff";
        petAnimal.style.color = '#ffffffa4';
        petAnimal.style.borderColor = "#ffffffa4";
    }if (value > 1963.5 ){
        page.style.backgroundImage = 'url(img/fighting.png)';
        fighting.style.color = '#fff';
        fighting.style.borderColor = "#fff";
        predatory.style.color = '#ffffffa4';
        predatory.style.borderColor = "#ffffffa4";
    } if (value > 2134 ){
        page.style.backgroundImage = 'url(img/sport.jpeg)';
        sport.style.color = '#fff';
        sport.style.borderColor = "#fff";
        fighting.style.color = '#ffffffa4';
        fighting.style.borderColor = "#ffffffa4";
    }if (value > 2262 ){
        page.style.backgroundImage = 'url(img/void.png)';
        voi.style.color = '#fff';
        voi.style.borderColor = "#fff";
        sport.style.color = '#ffffffa4';
        sport.style.borderColor = "#ffffffa4";
    }

});