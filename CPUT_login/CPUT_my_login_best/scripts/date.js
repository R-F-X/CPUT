/* 
***************************************************************************
  Program : its_scripts.js
  Version : 
  Changed : 31-MAR-2005 Ollie T119686 Add errReportBack logic
          : 07-JUL-2005 Ollie T121995 Add forceUpper logic    
          : 13-Sep-2005 Els t117575 No change - entry for bookpgm
          : 01-Feb-2006 Asit F128105 in isnumber use parseFloat iso parseInt
          : 14-NOV-2006 MUK T135979 added function run_LOV
          : 13-Feb-2007 VD  T124686 Add textLimit
          :                         Add imposeMaxLength
          : 19-Feb-2007 Els f139903 merged V13 and Int1 its_scripts.js as 
          :             changes from 31-Mar-2005 to 1-Feb-2006 was not on Int1
          : 06-Jun-2007 Adele T142258 Create a secure generic global LOV 
          : running mechanism - run_lov_secure.  
          : 21-Aug-2007 Jan t140791 Also check for 'P' when collecting data
          :                         for RC
          : 18-Feb-2008 Adele 148155(147116) Added X_SEARCH_BY_CODE parameter 
          : to Javascript function run_lov_secure. 
          : 28-Feb-2008 Sonja T147569 Comment out ITSinit (right click)
          : 05-Mar-2008 DG T148854 Added focus to LOV window
          : 24-Feb-2009 Dinong T155997 Add run_lov_bind
          : 30-Mar-2009 Dinong T156750 Add LOV headings
          : 18-May-2009 Dinong T156757 Add run_lov_bind_jsp
          : 09-Nov-2017 DG 225095 Style adjustments
          : 10-NOV-2017 DG 225957/231429 iEnabler look and feel enhancements
          : 02-Oct-2020 Adele T246328 - calldynBGProc - call new hopper
          : w01_setHeader.
  X0_VERSION : v04.1.0.2
***************************************************************************
*/


// Script: Setup Datestamp for printing in Header of all pages
function header_datestamp() {
   days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
   months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
   
   var today = new Date();
   todayYear = today.getYear();
   todayMonth = months[today.getMonth()];
   todayDay = days[today.getDay()];
   todayDate = today.getDate();


   // Add to end of day number
   if (todayDate == 1 || todayDate == 21 || todayDate == 31) {
      todayDate += "st";
   }

   else if (todayDate == 2 || todayDate == 22) {
         todayDate += "nd";
   }

   else if (todayDate == 3 || todayDate == 23) {
         todayDate += "rd";
   }

   else {
      todayDate += "th";
   }

   
   // else {
   //    if (todayDate == 2 || todayDate == 22) {
   //       todayDate += "nd";
   //    }

   //    else {
   //       if (todayDate == 3 || todayDate == 23) {
   //          todayDate += "rd";
   //       }
   //       else {
   //          todayDate += "th";
   //       }
   //    }
   // }


   // Define print format and write to screen.
   var dsString = todayDay + ", " + 
                  todayDate + " " + 
                  todayMonth + " " + 
                  ((today.getFullYear() < 100) ? "19" : "") + 
                  today.getFullYear();

   // document.getElementById("print-date").innerHTML = dsString;
   document.write(dsString);
   // return(' ');
} 
// end header_datestamp
header_datestamp();

