import React, { Component } from 'react';

class Form extends Component {

  componentDidMount() {
    this.restoreFieldsFromLocalStorage();
  }

  restoreFieldsFromLocalStorage() {
    document.getElementById("id").value = window.localStorage.getItem('id');
    document.getElementById("title-main").value = window.localStorage.getItem('title-main');
    document.getElementById("body").value = window.localStorage.getItem('body');
  }

  onSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:8282/articles/";
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(
      {
        "type": "article",
        "productId": "TN",
        "articleId": document.getElementById("id").value,
        "content": {
          "title": {
            "main": document.getElementById("title-main").value
          },
          "body": [
            {
              "type": "draft",
              "content": document.getElementById("body").value
            }
          ],
          "media": []
        }
      })
    );
    console.log("Articulo guardado correctamente");
  }

  render() {
    return (
      <form>
        <label>ID de Nota:</label><input id="id" title="id" type="text" /><br/>
        <label>Título Principal:</label><input id="title-main" title="title-main" type="text" /><br/>
        <label>Cuerpo de la nota:</label><textarea id="body" title="body" type="text" /><br/>
        <input id="submit" type="button" onClick={(e) => this.onSubmit(e)} value="Enviar" />
      </form>
    );
  }
}

export default Form;
