import { useContext } from "react";
import { AppContext } from "../App";
import { useState } from "react";

import pencil from "../Pencil.svg";
import done from "../Done.svg";

export const ProfilePage = () => {
  const [nameIsEdit, setNameIsEdit] = useState(false);
  const [newName, setNewName] = useState("");
  const { user, setUserName, incrementCash } = useContext(AppContext);

  const handleSwitchNameEdit = () => {
    setNameIsEdit(!nameIsEdit);
    if (
      nameIsEdit &&
      newName !== null &&
      newName.length > 0 &&
      newName !== user.name
    ) {
      setUserName(newName);
    } else {
      setNewName(user.name);
    }
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <div className="card text-center">
        <div className="card-header">Your profile</div>
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <div>
            {nameIsEdit ? (
              <div className="flex">
                <input
                  type="text"
                  defaultValue={user.name}
                  onChange={handleChangeName}
                />
                <img
                  onClick={handleSwitchNameEdit}
                  className="edit"
                  src={done}
                />
              </div>
            ) : (
              <div className="flex">
                <p className="card-text">{user.name}</p>
                <img
                  onClick={handleSwitchNameEdit}
                  className="edit"
                  src={pencil}
                />
              </div>
            )}
          </div>
          <h5 className="card-title">Cash</h5>
          <div className="flex">
            <button
              onClick={() => {
                incrementCash(-10);
              }}
              type="button"
              className="btn btn-danger"
            >
              -10
            </button>
            <p className="card-text">{user.cash}$</p>
            <button
              onClick={() => {
                incrementCash(10);
              }}
              type="button"
              className="btn btn-success"
            >
              +10
            </button>
          </div>
        </div>
        <div className="card-footer text-muted">@defends</div>
      </div>
    </div>
  );
};
