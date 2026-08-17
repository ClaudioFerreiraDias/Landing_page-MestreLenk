const btnwhatsapp = document.getElementById("btnwhatsapp");
const btnwhatsappsec = document.getElementById("btnwhatsapp2");

//mobile
const btnMenu = document.getElementById("btnMenu");
const navMobile = document.querySelector("#nav_mobile");

//evento de click da navbar mobile
btnMenu.addEventListener("click",()=>{
    navMobile.classList.toggle("aberto");
});

//abrir whatsapp
function abrirWhatsapp() {
    const numero = "5511963320006";
    const mensagem = "Olá, Mestre Lenk 👋 Cheguei até você pelo site e quero solicitar um orçamento de cobertura de tatuagem. Pode me informar os próximos passos?";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

// Aplica o evento nos dois botões
[btnwhatsapp, btnwhatsappsec].forEach(btn => {
    if (btn) {
        btn.addEventListener("click", abrirWhatsapp);
    }
});

document.addEventListener("DOMContentLoaded", () =>{
    const msg = document.querySelector(".help");
    
    // Exibir a mensagem após 5 segundos
    setTimeout(() =>{
        msg.classList.add("show");
    }, 5000);
});