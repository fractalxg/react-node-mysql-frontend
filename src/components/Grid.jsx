import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Grid.css";

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8000/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
  };
	
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Fone</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.fone}</td>
              <td width="5%">
                <FaEdit onClick={() => handleEdit(item)} />
              </td>
              <td width="5%">
                <FaTrash onClick={() => handleDelete(item.id)} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Grid;
