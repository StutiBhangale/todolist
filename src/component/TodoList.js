import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    if (activity.trim() === "") {
      return;
    }

    setListData((prevListData) => {
      const updatedList = [...prevListData, activity];
      setActivity("");
      return updatedList;
    });
  }

  function deleteActivity(i) {
    const updatedListData = listData.filter((_, id) => i !== id);
    setListData(updatedListData);
  }

  function deleteAll() {
    setListData([]);
  }

  return (
    <>
      <div>
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="Add Task Here"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button className="but" onClick={addActivity}>
            Add
          </button>
          {listData.map((data, i) => (
            <div className="listData" key={i}>
              <div>{data}</div>
              <div>
                <button className="btn1" onClick={() => deleteActivity(i)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            {listData.length >= 1 && (
              <button className="Delete-all" onClick={deleteAll}>
                Delete All
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
