function User(props) {
    return (
            <span className="user">
              <span className="name">{props.user.name}</span>
              <span className="handle">@{props.user.name}</span>
            </span>
    );
  }
  
  export default User;