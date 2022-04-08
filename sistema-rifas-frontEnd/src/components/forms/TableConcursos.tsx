import React, { useEffect } from "react";

function TableConcursos() {
  const [products, setProducts] = React.useState(null);

  useEffect(() => {
    fetch("http://localhost:3333/products/", {
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
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
    <button><a href="/CadUser">Adicionar um Novo Concurso</a></button>
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
          {products?.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.cpf}</td>
                <td>{product.rg}</td>
                <td>{product.email}</td>
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
                <td colSpan="5">Total de Registros: {products?.length}</td>
            </tr>
        </tfoot>
      </table>
    </>
  );
}
export default TableConcursos;
