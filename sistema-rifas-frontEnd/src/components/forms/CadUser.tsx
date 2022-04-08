import React from "react";

function CadUser() {
    // const [name, setEmail] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");

    async function handleLogin() {
        // if(email.trim() === "" || password.trim() === "") {
        //   alert("Informe email e senha.");
        //   return false;
        // }
    
        // const canLogin = await loginUser(email, password);
    
        // if(canLogin)
        //   document.location.reload();
        // else
        //   alert("Usuário ou senha invalidos.")
    
      }

    return (
        <>
            <form action="http://localhost:3333/users/add" method="POST">
                <h1>Formulario de Cadastramento de Usuário</h1>
                <label>Nome Completo: </label>
                <input type="text" name="name"></input>
                <br/>
                <label>Como gostaria de ser chamado: </label>
                <input type="text"></input>
                <br/>
                <label>Data de Nascimento: </label>
                <input type="date"></input>
                <br/>
                <label>CPF: </label>
                <input name="cpf"></input>
                <br/>
                <label>RG: </label>
                <input name="rg"></input>
                <br/>
                <label>E-mail: </label>
                <input type="email" name="email"></input>
                <br/>
                <label>Senha: </label>
                <input type="password" name="password"></input>
                <br/>
                <label>Confirme sua Senha: </label>
                <input type="password" name="password_confirmation"></input>
                <br/>
                <input type="submit" value="Cadastrar Usuário"></input>
            </form>
        </>
    )
  }
  export default CadUser
  