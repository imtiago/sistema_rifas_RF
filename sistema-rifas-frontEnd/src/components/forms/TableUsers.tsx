import React, { useEffect } from "react";

function TableUsers() {
  const [users, setUsers] = React.useState(null);

  useEffect(() => {
    fetch("http://localhost:3333/users/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //   body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
    <button><a href="/CadUser">Adicionar um Novo usuário</a></button>
      <table>
      <caption>Lista de usuários</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>cpf</th>
            <th>rg</th>
            <th>email</th>
            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.cpf}</td>
                <td>{user.rg}</td>
                <td>{user.email}</td>
                <td>
                    <button>Editar</button>
                    <button>Excluir</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="5">Total de Registros: {users?.length}</td>
            </tr>
        </tfoot>
      </table>
    </>
  );
}
export default TableUsers;
