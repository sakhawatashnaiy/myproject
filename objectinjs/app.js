// object in js
    //  let addmissionInfo = [
          
    //  {
    //       name :"Ali",
    //       fatherName : "Aftab",
    //       age : 23,
    //       phoneNum : +92300000444090,
    //          courses : {
    //               Wma : "Web Mobile Application",
    //               DM : "Digital Marketing",
    //               AI : "Artificial Intelligence",
    //               Ds : "Data scince",
    //               Ml : "Machine learning",
    //          }    
    //  },
    //     {
    //           name : "Waqar",
    //           fatherName : "Arshad",
    //           age : 36 ,
    //           phoneNum : +923000000,
    //             courses : {
    //                   VD : "Video Ediring",
    //                   AM : "App Marketing",
    //                   AMZ :  "Amazon",
    //             }
    //     },

    //       {
    //             name : "wali khan",
    //             fatherName : "khan bai",
    //             phoneNum  : +920000000393,
    //              age  : 25 ,

    //                courses  :  {
    //                     BSCS : "BS in computer scince ",
    //                     Bba : "Bussiness Administration",

    //                }

    //       }
 
    //     ]  
     
    //   for(let i = 0 ; i<addmissionInfo.length ; i++){
    //       console.log(addmissionInfo[i]);
    //   } 
         

        //   While using only loops with object we prefer to use use for in loops 
        let student = {
              name : "Ahsan sheikh",
              fatherName : "Gulam Ali",
              Age : 22,

        }
                for(let key in student){
                      console.log( key + ":" + student[key]);
                }

       