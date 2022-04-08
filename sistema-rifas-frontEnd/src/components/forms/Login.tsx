import React from "react";

function Login() {
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
            <form action="http://localhost:3333/users/login" method="POST">
                <h1>Login</h1>
                <label>E-mail: </label>
                <input type="email" name="email"></input>
                <br/>
                <label>Senha: </label>
                <input type="password" name="password"></input>
                <br/>
                <input type="submit" value="Entrar"></input>
            </form>
        </>
    )
  }
  export default Login
  