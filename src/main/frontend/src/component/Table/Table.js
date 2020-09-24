import React, { useState } from "react";
import MaterialTable from "material-table";

import UserService from "../../service/user.service";

export default function MaterialTableDemo() {
  const usersData = UserService.getUsers();
  const [users, setUsers] = useState({ data: [{ usersData }] });
  const [state, setState] = useState({
    columns: [
      { title: "Username", field: "username" },
      { title: "Email", field: "email" },
      {
        title: "Roles",
        field: "roles",
        render: (rowData) => (rowData.roles ? rowData.roles.join(",") : " "),
      },
    ],
  });

  return (
    <MaterialTable
      title="Users"
      columns={state.columns}
      data={users.data}
      options={{
        selection: true,
        actionsColumnIndex: -1,
      }}
      actions={[
        {
          tooltip: "Remove All",
          icon: "delete",
          onClick: (evt, rowData) =>
            new Promise((resolve) => {
              resolve();
              setUsers((prevState) => {
                let data = [...prevState.data];
                rowData.forEach((rd) => {
                  data = data.filter((t) => t.tableData.id !== rd.tableData.id);
                });
                return { ...prevState, data };
              });
            }),
        },
      ]}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            resolve();
            setUsers((prevState) => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            resolve();
            if (oldData) {
              setUsers((prevState) => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                return { ...prevState, data };
              });
            }
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            resolve();
            setUsers((prevState) => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              return { ...prevState, data };
            });
          }),
      }}
    />
  );
}
