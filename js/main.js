
//Aqui se respondera a los botones y sus llamadas

document.addEventListener("DOMContentLoaded", function() {
    // tu código JavaScript aquí
    const container = document.getElementById('circles-container');
    const setBtn = document.querySelector('#setBtn');


    setBtn.addEventListener('click', () => {
      let total = container.children;
      const index =  setBtn.nextElementSibling;
      const input =  setBtn.nextElementSibling.nextElementSibling; // xd
      console.log(index,input);
      animar(index.value);

      console.log(total[index.value]);
      setTimeout(() => {
        
        total[index.value].textContent = input.value;
        const img = document.createElement('img');


        total[index.value].classList.add('animate__heartBeat');


        setTimeout(()=>{
          total[index.value].classList.remove('animate__heartBeat');
          img.src = 'imagenes/arrow.png';
          total[index.value].appendChild(img);
        },2000);
        
        

      }, index.value * 500);


    });
    
    const insertBtn = document.querySelector('#insertBtn');
    insertBtn.addEventListener('click', () => {
      alert('Botón Insert presionado');
    });
    


    const addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', () => {
      let total = container.children;

      const hermano =  addBtn.nextElementSibling;

      animar();
      setTimeout(() => {
        addCircle(hermano.value);
        hermano.value = "";
      }, total.length * 500);

      
    });
    
    const deleteBtn = document.querySelector('#deleteBtn');
    deleteBtn.addEventListener('click', () => {
      alert('Botón Delete presionado');
    });



    //Funcion de los circulos 
    

    function addCircle(number = 0) {
      const caja = document.createElement('div');
      const circle = document.createElement('div');
      const img = document.createElement('img');
      //img.src = 'imagenes/arrow.png';
    
      circle.className = 'circle';
      
    
      circle.textContent = number;
      circle.appendChild(img);
      container.appendChild(circle);

      
      setTimeout(() => {
        circle.classList.add('animate__heartBeat');
      }, 100);
      setTimeout(()=>{
        circle.classList.remove('animate__heartBeat');
      },2000);

      //Asignando la imagen al penultimo circulo
      let elementos = container.children;
      let penultimo ;
      

      if (elementos.length > 1 ){
        penultimo = elementos[elementos.length - 2];
        let hijo =  penultimo.children[0];
        hijo.src = 'imagenes/arrow.png';
       
       
      }
    }
    
    function animar(total = container.children.length) {
      let elementos = container.children;
      
      for (let i = 0; i < total; i++) {

        let circle = elementos[i];
        setTimeout(() => {

          //Circulo 
          circle.classList.add('highlight');
          setTimeout(() => {
            circle.classList.remove('highlight');
          }, 500);


          //Imagen de flecha
        

          let flecha = circle.children[0];
      
          flecha.classList.add('animate__animated','animate__headShake');
          
          
          setTimeout(() => {
            flecha.classList.remove('animate__animated','animate__headShake');
          }, 500);
          
        }, i * 500);


      }
    }
    

    function resizeContainer() {
      if (container.offsetWidth > window.innerWidth) {
        container.style.flexDirection = 'column';
      } else {
        container.style.flexDirection = 'row';
      }
    }

    window.addEventListener('resize', resizeContainer);
    
});
