import React from "react";

function CadProduct() {
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
                <h1>Formulario de Cadastramento de Produtos</h1>
                <label>Nome: </label>
                <input type="text" name="name"></input>
                <br/>
                <label>detalhes: </label>
                <input type="text"></input>
                <br/>
                <label>preço: </label>
                <input type="number"></input>
                <br/>
                <label>novo: </label>
                <input type="checkbox" name="cpf"></input>
                <br/>
                <input type="submit" value="Cadastrar Produto"></input>
            </form>
        </>
    )
  }
  export default CadProduct
  