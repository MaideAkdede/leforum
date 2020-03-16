console.log('test');

const button = document.querySelector("input[type='button']");

const name = document.querySelector("#name");
const mail = document.querySelector("#email");
const obj = document.querySelector("#object");
const msg = document.querySelector("#message");

button.addEventListener('click', ()=>{
    if(name.value === "" || name.value === null){
        name.classList.add("error");
        name.insertAdjacentHTML("afterend", `<p class="error">Veuillez écrire votre Nom et Prénom</p>`);
    }
   if(mail.value === "" || mail.value === null){
        mail.classList.add("error");
        mail.insertAdjacentHTML("afterend", `<p class="error">Veuillez écrire votre adresse mail</p>`);
    }
    if(obj.value === "" || obj.value === null){
        obj.classList.add("error");
        obj.insertAdjacentHTML("afterend", `<p class="error">Veuillez écrire un objet</p>`);
    }
    if(msg.value === "" ||  msg.value === null){
        msg.classList.add("error");
        msg.insertAdjacentHTML("afterend", `<p class="error">Veuillez écrire votre message</p>`);
    }
    else {
        return;
    }
});

/* B U R G E R  M E N U*/
const burger = document.querySelector('.burger');
const nav = document.querySelector('ul');
burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
})