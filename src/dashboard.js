import 'core-js';
import React, { Component } from 'react';
import './Login.css';
    import {withRouter} from 'react-router-dom';

class dashboard extends Component {

  handleClick(event, history) {



  }

  edit_row = (event) => {

   var no = event.target.id;
   document.getElementById("edit_button"+no).style.display="none";
   document.getElementById("save_button"+no).style.display="block";

   var name=document.getElementById("name_row"+no);
   var country=document.getElementById("country_row"+no);
   var age=document.getElementById("age_row"+no);

   var name_data=name.innerHTML;
   var country_data=country.innerHTML;
   var age_data=age.innerHTML;

   name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
   country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
   age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
  }

save_row = (event) => {

   var no = event.target.id;

   var name_val=document.getElementById("name_text"+no).value;
   var country_val=document.getElementById("country_text"+no).value;
   var age_val=document.getElementById("age_text"+no).value;

   document.getElementById("name_row"+no).innerHTML=name_val;
   document.getElementById("country_row"+no).innerHTML=country_val;
   document.getElementById("age_row"+no).innerHTML=age_val;

   document.getElementById("edit_button"+no).style.display="block";
   document.getElementById("save_button"+no).style.display="none";
  }

   delete_row = (event) => {
    var val = event.target.id;
   document.getElementById("row"+val+"").outerHTML="";
  }

add_row = (event) => {


   var new_name=document.getElementById("new_name").value;
   var new_country=document.getElementById("new_country").value;
   var new_age=document.getElementById("new_age").value;

   var table=document.getElementById("data_table");
   var table_len=(table.rows.length);
   var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

   document.getElementById("new_name").value="";
   document.getElementById("new_country").value="";
   document.getElementById("new_age").value="";
  }


  render() {

    const buttonStyle = {
            color: '#000'
          };

    return (
      <div className="relcaldashboard">
         Welcome {this.props.location.state.username},
         <div id="empform">
             <table align='center' >
                  <tr> <td>Name</td> <td><input type="text" id="new_name"/></td> </tr>
                  <tr> <td>Country</td> <td><input type="text" id="new_country"/></td> </tr>
                  <tr> <td>Age</td> <td><input type="text" id="new_age"/></td> </tr>
                  <tr> <td><input type="button" class="add" onClick={(event) => this.add_row(event)} value="Add Employee"/></td> </tr>
             </table>
         </div>


         <div id="wrapper">
         <table align='center' cellspacing="2" cellpadding="5" id="data_table" border="1">
         <tr>
         <th>Name</th>
         <th>Country</th>
         <th>Age</th>
         </tr>

         <tr id="row1">
         <td id="name_row1">Ankit</td>
         <td id="country_row1">India</td>
         <td id="age_row1">20</td>
         <td>
         <input type="button" id="edit_button1" value="Edit" class="edit" onClick="edit_row('1')"/>
         <input type="button" id="save_button1" value="Save" class="save" onClick="save_row('1')"/>
         <input type="button" value="Delete" class="delete" onClick="delete_row('1')"/>
         </td>
         </tr>

         <tr id="row2">
         <td id="name_row2">Shawn</td>
         <td id="country_row2">Canada</td>
         <td id="age_row2">26</td>
         <td>
         <input type="button" id="edit_button2" value="Edit" class="edit" onClick="edit_row('2')"/>
         <input type="button" id="save_button2" value="Save" class="save" onClick="save_row('2')"/>
         <input type="button" value="Delete" class="delete" onClick="delete_row('2')"/>
         </td>
         </tr>

         <tr id="row3">
         <td id="name_row3">Rahul</td>
         <td id="country_row3">India</td>
         <td id="age_row3">19</td>
         <td>
         <input type="button" id="edit_button3" value="Edit" class="edit" onClick="edit_row('3')"/>
         <input type="button" id="save_button3" value="Save" class="save" onClick="save_row('3')"/>
         <input type="button" value="Delete" id="3" class="delete" onClick={(event) => this.delete_row(event)}/>
         </td>
         </tr>



         </table>
         </div>



      </div>
    );
  }
}


export default withRouter(dashboard);