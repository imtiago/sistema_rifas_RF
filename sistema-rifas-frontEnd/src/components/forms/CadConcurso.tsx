import React from "react";

function CadConcurso() {
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
            <form action="http://localhost:3333/products/add" method="POST">
                <h1>Formulario de Cadastramento de Concursos</h1>
                <label>Pesquisar produto a ser sorteado: </label>
                <input type="text" name="name"></input>
                <br/>
                <label>Quantidade de rifas disponiveis: </label>
                <input type="number"></input>
                <br/>
                <label>Possivel data de sorteio: </label>
                <input type="date"></input>
                <br/>
                <input type="submit" value="Cadastrar Sorteio"></input>
            </form>
        </>
    )
  }
  export default CadConcurso
  