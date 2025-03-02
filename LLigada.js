class Node {
    constructor(value) {
        this.value = value //inicia el valor del nodo
        this.next = null // inicia el sgte nodo como null
    }
}

class linkedlist { 
    constructor() { 
        this.head = null //inicia la lista como null
        this.size = 0 // inici a el tamaño de la lista como 0
    }

    isEmpety(){
        // Devuelve true si la lista esta vacia (tamaño 0)
        return this.size === 0
    }

    getsize () {
        //Devuelve el tamaño actual de la lista
        return this.size
    }

    Prepend(value) {
        //crea un nuevo nodo con el valor proporcionado
        const node = new Node(value)

        // si la lista esta vacia
        if (this.isEmpety()) {
            //.. le nuevo nodo se convierte em la cabeza de la lista
            this.head = node
        } else {
            node.next = this.head; //Apunta al antiguo nodo cabeza
            this.head = node  // La cabeza ahora  es el nuevo nodo
        }
        this.size++ //incrementa el tamaño de la lista en 1
    }

    //Se agrega el nuevo nodo para el final de la lista 
    append(value) {
        const node = new Node (value) // crea un nuevo nodo

        if (this.isEmpety()) {
            this.head = node // si la lista esta vacia sera la cabeza
        } else {
            let curr = this.head
             
            //recorre la lista hasta llegar al ultimo
            while (curr.next !== null) {
                curr = curr.next
            }
            //asigna el nuevo nodo al final de la lista 
            curr.next = node
        }
        this.size++ //incrementa el tamaño
    }

     //insertar
     insert(value, index) {
        //verifica si el indice es invalidado (menor que 0 o(||) mayor qie el tamaño actual de la lista)
        if (index < 0 || index > this.size) {
            
                return; //sale de la función sin hacer nada si el indice es invalido
            }
            
            //si el inidice es 0, usa el metodo prepend para insertar el valor al inicio de la lista.
            if (index === 0) {
                this.prepend(value);
            } else {
                // crea un nuevo nodo con el valor proporcionado 
                const node = new Node (value);

                //comienza en la cabeza de la lista
                let prev = this.head;

                //recoore la lista hasta llegar al nodo anterior a la posicion deseada 
                for (let i = 0; i < index - 1; i++) {
                    prev = prev.next;
                }
                // ajusta los punteros: el nuevo nodo apunta al siguiente del nodo anterior, 
                // y el nuevo nodo ahora apunta al nuevo nodo
                node.next = prev.next;
                prev.next = node;

                //incrementa el tamaño de la lista para reflejar la inserción 
                this.size++; 
            }


        } 

    print() {
        if (this.isEmpety()) {
            console.log(`lista vacia`) //imprime mensaje de que la lista esta vacia 
        } else {
            let curr = this.head //inicia el nodo 
            // variable para almacenar los valores de los nodos 
            let lisvalue = ``

            // recorre la lista hasta que curr (nodo actual) sea null
            while (curr) {
                lisvalue += `${curr.value} `; // agrega el valor del nodo actual a la cadena de valores

                curr = curr.next // avanza al siguiente nodo de la lista

            }

            console.log(lisvalue)
        }
    }

}


const list = new linkedlist()

console.log('¿Esta vacía la lista?', list.isEmpety())
console.log(`Tamaño de la lista`, list.getsize())

list.print()
list.Prepend(6)
list.print()

list.Prepend(10)
list.Prepend(14)
list.Prepend(8)
list.print()

list.append(100)
list.print() 
