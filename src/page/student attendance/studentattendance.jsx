import "./studentAttendance.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120,},
    { field: "transaction", headerName: "Transaction Volume", width: 160, },
    { field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
          
    <div className="userList">
        <div>
          <form>
        <div className="addProductItem">
          <label>Class</label>
          <select name="Class" id="Class">
            <option value="yes">10</option>
            <option value="no">9</option>
            <option value="yes">8</option>
            <option value="no">7</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Devision</label>
          <select name="Devision" id="Devision">
            <option value="yes">A</option>
            <option value="no">B</option>
            <option value="yes">C</option>
            <option value="no">D</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
          </form>
        </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
      />
      </div>
  );
}
