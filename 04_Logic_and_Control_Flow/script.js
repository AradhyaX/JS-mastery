 /*
 const age = 17;

 if (age > 18){
     console.log('you may enter!');
 }else if(age === 18){
  console.log('you just turned 18, Welcome');
 }else{
  console.log('Grow up!')
 }
 */


                //! TRUTHY-FALSY VALUES

  // if (0){
  //    console.log('IN HERE');
  // } else {
  //  console.log('NO, IN HERE');
  // }

         // FALSY VALUES - These are all the falsy value
// false
// 0
// ''
// null
// undefined
// Nan

                //! LOGICAL OPERATOR

      // const age = 19;
      // const isCool = true;

      // is cool and is above the age of 18

    //   console.log ('truthy' && 1 && 'test' && 999); //999
        
    //   console.log('truthy' || 1  ||'test' || 999);

      // JavaScript is lazy language in AND OPERATOR it returns the first false value and if there is no false value it returns the last true value

      // In OR operator it returns the first true value and does not care about the rest of value

      // In NOT operator it just gives opposite value


               //! SWITCH STATEMENT   
    
    // const superhero = 'Iron Man';

    // switch(superhero) {
    //     case 'Iron Man':
    //         console.log('I am Iron man..');
    //         break;

    //     case 'Thor':
    //         console.log('That is my hammer!');
    //         break;

    //     case 'Captain America':
    //         console.log('Never give up');
    //         break;
        
    //     case 'Black Widow':
    //         console.log('One shot, one kill!');
    //         break;
    //     default:
    //         console.log('Enter a valid superhero name'); 
    // }

             //! TERNARY OPERATOR
    
    if (condition) {
        // block of code if true
    } else {
        // block of code if false
    }
     
     //* condition ? block of code if true : block of code if false

     //* condition ? true : false

     const age = 18;
     if (age >= 18) {
        console.log('You can drive.');
     } else {
        console.log('You can not drive yet.')
     }

    age >= 18 ? console.log('You can drive.') : console.log('You can not drive yet.')



                  //! LOOPING WHILE AND FOR-LOOP

    //?  The "while" loop

    while (condition) {
        //code
    }

    let i = 0 ;
    while (i < 10) {
        console.log(i);
        i++;
    }


    //? The "for" loop

    for([initialization];[condition]; [final-expression]){

    }

    for(let i = 0; i < 10; i++){
        console.log(i);

    }