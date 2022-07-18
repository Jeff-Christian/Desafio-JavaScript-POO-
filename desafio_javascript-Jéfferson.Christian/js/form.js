
//class contato

class Contato {

    constructor(){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

function Post(form) {

    let data = new Contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value);

}
  
function Enviar() {
    const nome = document.getElementById("name");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    
    if(nome.value === '' || sobrenome.value === '' || email.value === '' || cpf.value === '' || telefone.value === ''){
        alert('Por favor, preencha os campos');
    } else {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}