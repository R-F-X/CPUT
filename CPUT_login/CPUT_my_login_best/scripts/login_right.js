/* ************************************************************************
  Program : login_right.js
  Changed : 31-Jul-2008 T151378 Dinong Allow other users to login
          : 17-Nov-2008 DG T154508 Fix spelling mistakes
          : 02-MAR-2011 DG T164475 ATOV - Add alumni login
          : 19-Aug-2013 DG 193114 ATOV for 192099 Change login image button to HTML form submit button
          : 09-Nov-2017 DG 225095 Style adjustments
          : 10-NOV-2017 DG 225957 iEnabler look and feel enhancements
          : 19-Aug-2018 Adele 230500 Forgot Student Number button - add class to all buttons
  X0_VERSION : v04.1.0.1
************************************************************************ 
*/

var S_check=' ';
var P_check=' ';
var O_check=' ';
var A_check=' ';
var Usr_txt='User Number';
var loginLeft;



function chkZero(ctl) {
  if (ctl.value.substr(0,1) == "0") {
    alert("Please do not start the PIN with a 0.");
    ctl.focus();
    ctl.select();
    return false;
  }
  return true;
}


function set_it() {
  Usr_txt = 'Student Number'; 

  for (i=0; i<document.frmLogin.numtype.length; i++) {
    if (document.frmLogin.numtype[i].checked) {
      if (document.frmLogin.numtype[i].value == 'P') { Usr_txt='Personnel Number: '; } 
      
      else if (document.frmLogin.numtype[i].value == 'O') { Usr_txt='External Number: ';  } 
      
      else if (document.frmLogin.numtype[i].value == 'A') { Usr_txt='Alumni Number: ';    }   
      
      else{Usr_txt='Student Number:';   }
    }

    document.getElementById("LogUsr").childNodes[0].nodeValue = Usr_txt;
    document.frmLogin.unum.focus();
  }
}


// var numtype = 'S';
// if (!getAllUrlParams().numtype) numtype ='S'; 
// else numtype=getAllUrlParams().numtype.toUpperCase();
// //document.write('numtype='+numtype);

// if (numtype == 'P') { P_check=' checked'; Usr_txt='Personnel Number: '; } else
// if (numtype == 'O') { O_check=' checked'; Usr_txt='External Number: ';  } else
// if (numtype == 'A') { A_check=' checked'; Usr_txt='Alumni Number: ';    } else
//                     { S_check=' checked'; Usr_txt='Student Number: ';   }

// loginLeft = getStyle('login_left','display');
// //document.write('loginLeft='+loginLeft);

// if (loginLeft=="none") {
//   document.write('<div id="login_right" class="w3-rest w3-padding-16">');
// } else {
//   document.write('<div id="login_right" class="w3-half">');
// }

// document.write(' <div class="w3-card-4 w3-margin-bottom" style="max-width:500px;">'+
// '  <header class="w3-container w3-blue">'+
// '   <h5>Registered Users: Login Credentials</h5>'+
// '  </header>'+
// '  <form class="w3-container" method="post" name="frmLogin" action="w99pkg.mi_validate_user">'+
// '  <input type="radio" name="numtype"'+S_check+' value="S" onClick="set_it();document.frmLogin.unum.focus();" ><label>Student</label> '+
// '  <input type="radio" name="numtype"'+P_check+' value="P" onClick="set_it();document.frmLogin.unum.focus();" ><label>Personnel</label>'+
// '  <input type="radio" name="numtype"'+O_check+' value="O" onClick="set_it();document.frmLogin.unum.focus();" ><label>Other</label>'+
// '  <input type="radio" name="numtype"'+A_check+' value="A" onClick="set_it();document.frmLogin.unum.focus();" ><label>Alumni</label>'+
// '  <br /><br />'+
// '  <label id="LogUsr">'+Usr_txt+':</label><input class="w3-input" type="text" name="unum" size="10" maxlength="9" autofocus>'+
// '  <label>Pin:</label>'+
// '  <input class="w3-input" type="password" name="pin" size=10 maxlength=5 onBlur="return chkZero(this);">'+
// '  <p>(5 numeric digits.Do not start with a 0.)<input type="hidden" name="authorise_function" value="Unknown"></p>'+
// '   <input type="submit" class="w3-button w3-padding-small w3-border" value="Login" alt="Click Here To Login" onMouseOver="javascript:window.status=\'Login\'; return true;" onMouseOut="javascript:window.status=\' \';" onclick="document.frmLogin.authorise_function.value=\'Login\';">'+
// //Forgot Pin
// '   <input type="button" class="w3-button w3-padding-small w3-border" value="Forgot Pin" alt="Click Here IF You Have Forgotten Your PIN" onMouseOver="javascript:window.status=\'Forgot Pin\'; return true;" onMouseOut="javascript:window.status=\' \';" onclick="document.frmLogin.authorise_function.value=\'sendLogin\'; document.frmLogin.submit();">'+
// //Change Pin
// '   <input type="button" class="w3-button w3-padding-small w3-border" value="Change Pin" alt="Click Here TO Change Your PIN" onMouseOver="javascript:window.status=\'Change Pin\'; return true;" onMouseOut="javascript:window.status=\' \';" onclick="document.frmLogin.authorise_function.value=\'changePin\'; document.frmLogin.submit();">'+
// //Request A Pin
// '   <input type="button" class="w3-button w3-padding-small w3-border" value="Request A Pin" alt="Click Here To Request a PIN" onMouseOver="javascript:window.status=\'Request A Pin\'; return true;" onMouseOut="javascript:window.status=\' \';" onclick="document.frmLogin.authorise_function.value=\'requestPin\'; document.frmLogin.submit();">'+
// //Forgot Student Number
// '   <input type="button" class="w3-button w3-padding-small w3-border"  value="Forgot Student Number" alt="Click Here If You Have Forgotten Your Student Number" onMouseOver="javascript:window.status=\'Forgot Student Number\'; return true;" onMouseOut="javascript:window.status=\' \';" onclick="document.frmLogin.authorise_function.value=\'forgotStno\'; document.frmLogin.submit();">'+

// ' </div>'+
// '</div>'+
// '');

// set_it();
// moveTo(0,0);
// resizeTo(screen.availWidth,screen.availHeight-20);