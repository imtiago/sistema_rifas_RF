import React from "react";

function CadAddress() {
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

      async function FindCep() {
        console.log(await fetch('http://correiosapi.apphb.com/cep/69901728'))
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
            <form action="http://localhost:3333/address/add" method="POST">
                <h1>Formulario de Cadastramento de endereço</h1>
                <label>Cep: </label>
                <input type="text" name="cep"></input>
                <button onClick={FindCep} >Buscar</button>
                <br/>
                <label>logradouro: </label>
                <input type="text" name="logradouro"></input>
                <br/>
                <label>Numero: </label>
                <input type="number" name="number"></input>
                <br/>
                <label>Bairro: </label>
                <input name="neighborhood"></input>
                <br/>
                <label>Cidade: </label>
                <input name="city"></input>
                <br/>
                <label>UF: </label>
                <input type="text" name="uf"></input>
                <br/>
                <label>Complemento: </label>
                <input type="text" name="complement"></input>
                <br/>
                <input type="submit" value="Cadastrar Endereço"></input>
            </form>
        </>
    )
  }
  export default CadAddress
  