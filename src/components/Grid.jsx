import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Grid.css";

const Grid = () => {
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
					
				</tbody>
      </table>
  )
}

export default Grid;
