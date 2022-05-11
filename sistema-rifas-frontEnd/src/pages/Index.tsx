import React from "react";

function Index() {
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
    <div className="header">
      <button> Login </button>
    </div>
    <div>
        <a href="/usersList">
        Listar os usuarios
        </a>
    <div>
    </div>
        <a href="/productsList">
        Produtos
        </a>
    </div>
    <div>
        <a href="/concursos">
        Concursos
        </a>
    </div>
    </>
)
}
export default Index;
