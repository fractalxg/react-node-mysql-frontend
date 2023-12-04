import { toast } from "react-toastify";
import "./Form.css";
import { useRef, useEffect } from "react";
import axios from "axios";

export const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const formRef = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = formRef.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = formRef.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8000/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8000/", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    setOnEdit(null);
    getUsers();
  };

	const resetOnEdit = () => {
		const user = formRef.current;

    user.nome.value = '';
    user.email.value = '';
    user.fone.value = '';
    user.data_nascimento.value = '';

    setOnEdit(null);
	}

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="form">
        <div className="inputArea">
          <label>Nome</label>
          <input type="text" name="nome"></input>
        </div>

        <div className="inputArea">
          <label>E-mail</label>
          <input type="email" name="email"></input>
        </div>

        <div className="inputArea">
          <label>Telefone</label>
          <input type="tel" name="fone"></input>
        </div>

        <div className="inputArea">
          <label>Data de Nascimento</label>
          <input type="date" name="data_nascimento"></input>
        </div>

        <button type="submit">SALVAR</button>
        <button type="button"onClick={resetOnEdit}>LIMPAR</button>
      </div>
    </form>
  );
};
