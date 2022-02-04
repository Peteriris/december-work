import "./newTeacheruser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Teacher </h1>
      <form className="newUserForm">
      <div className="newUserItem">
          <label>Techer's id</label>
          <input type="text" placeholder="Teachers id" />
        </div>
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="Enter First name" />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Enter Last name" />
        </div>
        
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Address" />
        </div>
        <div className="newUserItem">
          <label>User name</label>
          <input type="text" placeholder="User name" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input type="number" placeholder="Teacher Age" />
        </div> 
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Joined date</label>
          <input type="date" placeholder="Joined year" />
        </div> 
        <div className="newUserItem">
          <label>Subject</label>
          <input type="text" placeholder="subject" />
        </div>
        <button type ="submit" className="newUserButton">Add</button>
      </form>
    </div>
  );
}






