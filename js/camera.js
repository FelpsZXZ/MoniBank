const botaoInicarCamera = document.querySelector("[data-video-botao]"); 
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

botaoInicarCamera.addEventListener("click", async function () {
    const inciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    botaoInicarCamera.style.display = "none";
    campoCamera.style.display = "block";
    video.srcObject = inciarVideo;

})

botaoTirarFoto.addEventListener("click", function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imagemBase64 = canvas.toDataURL("image/jpeg");
    campoCamera.style.display = "none";
    mensagem.style.display = "block";
    botaoInicarCamera.style.display = "block";
    video.srcObject = null;
    console.log(imagemBase64)
    })

botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converterRetorno = JSON.parse(receberDadosExistentes);

    converterRetorno.imagem = imagemBase64;

    localStorage.setItem("cadastro", JSON.stringify(converterRetorno));

    window.location.href = "./abrir-conta-form-3.html";
})
