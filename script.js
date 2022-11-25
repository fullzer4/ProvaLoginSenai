const Logar = () => {
    const idemail = document.getElementById("email").value
    const idpass = document.getElementById("senha").value

    if(!idemail || !idpass ){
        alert("algum campo vazio")
    }else{

    }

}

const Cadastrar = () => {
    const idnome = document.getElementById("nome").value
    const idemail = document.getElementById("email").value
    const idpass = document.getElementById("senha").value

    if(!idemail || !idpass || !idnome){
        alert("algum campo vazio")
    }else{
        localStorage.setItem("nome", JSON.stringify(idnome))
        localStorage.setItem("email", JSON.stringify(idemail))
        localStorage.setItem("senha", JSON.stringify(idpass))
        window.location.href = "/login"
    }

}