import React from "react";
class TaskList extends React.Component {
  state = { tasks: [] };
  componentDidMount() {
    const { tasks } = this.props;
    this.setState({
      tasks
    });
  }
  onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };
  onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };
  onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };
  onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };
  onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };
  onDrop = (evt, value, status) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let tasks = this.state.tasks;
    console.log("data", data, status);
    let updated = tasks.map((task) => {
      if (task.id.toString() === data.toString()) {
        task.status = status;
      }
      return task;
    });
    this.setState({ tasks: updated });
  };

  render() {
    const { tasks } = this.state;
    console.log("tasks", tasks);
    let pending = tasks.filter((data) => data.status === "In Progress");
    let done = tasks.filter((data) => data.status === "Completed");
    let newOrder = tasks.filter((data) => data.status === "New Order");
    let waiting = tasks.filter((data) => data.status === "Delivered");

    return (
      <>
      <div className="navbar-wrapper">
        <ul>
          <li className="first">Welcome User</li>
          <li className="second">Login</li>
        </ul>
      </div>
      <div className="container">
      
        <div
          className="order small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, "New Order")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                <div className="list">
                <p>List 1</p>
                </div>
                  
                  {/* <button>+</button> */}
                  {newOrder.map((task) => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                     <label className="form-controll">
                    <input type="checkbox" className="largercheckbox"/>
                    </label>
                      <div className="img">
                        {/* <img src={task.image} alt="box" /> */}
                        
                        <p>{task.Text}</p>
                        
                      </div>
                     
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="pending small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, "In Progress")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  
                  <div className="list">
                <p>List 2</p>
                </div>
                  {pending.map((task) => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                   
                    <label className="form-controll">
                    <input type="checkbox" className="largercheckbox"/>
                    </label>
                      <div className="img">
                        {/* <img src={task.image} alt="box" /> */}
                        <p>{task.Text}</p>
                      </div>
                     
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="waiting small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, true, "Delivered")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  
                  <div className="list">
                <p>List 3</p>
                </div>
                  {waiting.map((task) => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                   
                    <label className="form-controll">
                    <input type="checkbox" className="largercheckbox"/>
                    </label>
                      <div className="img">
                        {/* <img src={task.Text} alt="box" /> */}
                        <p>{task.Text}</p>
                      </div>
                    
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="done small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, true, "Completed")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  
                  <div className="list">
                <p>Create New List</p>
                </div>
                  {done.map((task) => (
                    <div
                      className="card"
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                    <label className="form-controll">
                    <input type="checkbox" className="largercheckbox"/>
                    </label>
                    
                      <div className="img">
                        {/* <img src={task.image} alt="box" /> */}
                        <p>{task.Text}</p>
                      </div>
                     
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </>
    );
  }
}

export default TaskList;
