// cards format app
const body = document.querySelector('body');
const UserNameContainer = document.getElementById('UserName');
const UserName = 'Christian Daniel La Cruz'; //Se coloca esta variable para colocar el nombre de usuario. Se sacaria de una base de datos existentey y se colocaria en el h3
UserNameContainer.textContent = `${UserName}`;
//Cards Names
const inputCard = document.getElementById('inputCard');
const inputDate = document.getElementById('inputDate');
const inputCVV = document.getElementById('inputCVV');

const maskNumber = '####-####-####-###';
 //estrucutra de las cards predefinidas que se va a colocar
 const maskDate = '##/#';
 const maskCVV = '##';

 //variable para almacenar las actualizaciones de numeros
 let current = '';
 
//arreglos para almacenar la informacion de los datos del usuario
 let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

//el evento keydown hace que suceda algo cada vez que una telca es tocada o procesada
inputCard.addEventListener('keydown', (e)=> {
          if(e.key == 'tab'){
                  //cambiar de sitio el teclado con solo colocar 'tab'
                
                  return;
          }
          e.preventDefault;
          //funcion para unir toda la informacion con los inputs
          handleInput(maskNumber, e.key, cardNumber);
          inputCard.value = cardNumber.join('');
});
inputDate.addEventListener('keydown', (e)=> {
    if(e.key == 'tab'){
            //cambiar de sitio el teclado con solo colocar 'tab'
          
            return;
    }
    e.preventDefault;
    //funcion para unir toda la informacion con los inputs
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join('');
});
inputCVV.addEventListener('keydown', (e)=> {
    if(e.key == 'tab'){
            //cambiar de sitio el teclado con solo colocar 'tab'
          
            return;
    }
    e.preventDefault;
    //funcion para unir toda la informacion con los inputs
    handleInput(maskCVV, e.key, cvvNumber);
    inputCVV.value = cvvNumber.join('');
});
function rellenarInputs(input, masks, arrs){
    input.addEventListener('keydown', (e)=> {
        if(e.key == 'tab'){
                //cambiar de sitio el teclado con solo colocar 'tab'
              
                return;
        }
        e.preventDefault;
        //funcion para unir toda la informacion con los inputs
        handleInput(masks, e.key, arrs);
        input.value = cardNumber.join('');
})
};

function handleInput(mask, key, arr){
          //validar que los datos sean solo numeros sin necesidad de que el usuario coloque un input tipo number
          let numbers = ['0','1','2', '3', '4', '5', '6', '7', '8', '9'];
          //para borrar digitos del array se utiliza este condicional
          if(key == 'Backspace' && arr.length > 0){
                    arr.pop();
                    return
          }
          if(numbers.includes(key) && (arr.length) < mask.length){
                    if(mask[arr.length] == '-' || mask[arr.length] == '/'){
                              arr.push(mask[arr.length], key);
                    }else{
                        arr.push(key);
                    }
          }
}

// rellenarInputs(inputCard,maskNumber,cardNumber);
