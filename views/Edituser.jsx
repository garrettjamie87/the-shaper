const React = require("react");



<h2>Edit Profile</h2>

      

function Edituser (props) {
      return(
    
          <form action={`/private/edit-user?user_id=${props.user._id}`}>
    
          <label>Username: </label>
          <br />
          <input type="text" name="username" value={props.user.username}/>
          <br />
    
    
          <label>Password: </label>
          <br />
          <input type="password" name="password" value={props.user.password} />
          <br />
    
    
    
    <label for='level'>Choose Your Level: </label>
          <select id="level" name="level" value={props.user.level}>
          <option value="SchoolBoy">'SchoolBoy'</option>
          <option value="Happy Medium">'Happy Medium'</option>
          <option value="Absolute-boss">'Absolute-boss'</option>
          </select>
    <br/>
     
        
     
          <label for='weight'>Choose Your Weight: </label>
          <select id="weight" name="weight" value={props.user.weight}>
          <option value="60-70">60-70</option>
          <option value="70-80">70-80</option>
          <option value="80-90">80-90</option>
          <option value="90+">90+</option>
          </select>
    
    <br/>
         
    <label for='height'>Choose Your Height: </label>
          <select id="height" name="height" value={props.user.height}>
          <option value="I'm above 160">"I'm above 160"</option>
          <option value="I'm above 170">"I'm above 170"</option>
          <option value="I'm above 180">"I'm above 180"</option>
          <option value="I'm a giant">"I'm a giant"</option>
          </select>
    
    <br/> 
    
          <button type="submit">Edit Profile</button>
    
          {
              props.errorMessage 
                ? <div className="error-message"> {props.errorMessage} </div>
                : null
            }
    
        </form>
    
    )}
            
    
    
    module.exports = Edituser;
          