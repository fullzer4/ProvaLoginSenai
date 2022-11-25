const Logar = () => {
    const idemail = document.getElementById("email").value
    const idpass = document.getElementById("senha").value

    if(!idemail || !idpass ){
        alert("algum campo vazio")
    }else{
        const email = localStorage.getItem("email")
        const senha = localStorage.getItem("senha")
        console.log(email);
        console.log(senha);
        if(idemail === email && idpass === senha){
            window.location.href = "/home.html"  
        }else{
            window.location.href = "/home.html"  
        }
    }

}

const Cadastrar = () => {
    const idnome = document.getElementById("nome").value
    const idemail = document.getElementById("email").value
    const idpass = document.getElementById("senha").value
    const idsobrenome = document.getElementById("sobrenome").value
    const iddata = document.getElementById("data").value
    const idserie  = document.getElementById("serie").value
    const idindereco  = document.getElementById("endereco").value

    if(!idemail || !idpass || !idnome || !idsobrenome || !iddata || !idserie || !idindereco){
        alert("algum campo vazio")
    }else{
        localStorage.setItem("nome", JSON.stringify(idnome))
        localStorage.setItem("email", JSON.stringify(idemail))
        localStorage.setItem("senha", JSON.stringify(idpass))
        localStorage.setItem("nome", JSON.stringify(idsobrenome))
        localStorage.setItem("email", JSON.stringify(iddata))
        localStorage.setItem("senha", JSON.stringify(idserie))
        localStorage.setItem("nome", JSON.stringify(idindereco))
        window.location.href = "/login.html"
    }

}