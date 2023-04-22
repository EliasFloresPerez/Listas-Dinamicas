


//Objeto lista 
const Lista = {
    lista:[],


    
    add(num){
        let i = 0;
        while(i < this.lista.length){
            i++;
        }
        //En esa posicion final añadimos
        //Se que existe la funcion push , pero eso no es infancia
        //Ademas de que quiero complicarlo un poco mas para darle animacion.
        //console.log(i);
        this.lista.splice(i,0,num);
        

    },
    insert(num,index){

        this.lista.splice(index,0,num);

    },
    set(num,index){
        this.lista[index] = num;
    },
    deleteIndex(index){
        this.lista.splice(index,1);
    },
    deleteNum(num){
        //Filter hace el trabajo mas rapido pero no es infancia
        for(let i = 0; i < this.lista.length ; i++){

            if(this.lista[i] === num){
                this.lista.splice(i,1);
                i--;
            }
            
        }
    },
    show(){
        
        console.log(`[${this.lista}]`);
        
    }

}

let objeto =  Lista;
/*
objeto.add(5);
objeto.add(6);
objeto.add(1);
objeto.insert(9,1);
objeto.set(8,2);
objeto.deleteIndex(3);
objeto.add(4);
objeto.add(4);
objeto.add(4);
objeto.deleteNum(4);
objeto.show();
 */