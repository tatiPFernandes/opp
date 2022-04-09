class Product{
    constructor(){
        this.id=1;
        this.productArray = []

    }
//receiving the input from read method and saving it into the productArray and checking the input validation
    save(){
        let product = this.read();

        if(this.validInput(product)){
            //will add the product if the inputs have a values, only then it will be add into the productArray
            this.add(product)
        };
        this.tableList();
        this.cancel();
        
    
    }

    add(product){
        //adding the inpust into the productArray
        this.productArray.push(product);
        this.id++;

    }

    read(){
        let product={}
        product.id= this.id
        product.productName= document.getElementById("product").value;            
        product.productPrice= document.getElementById("price").value;
        return product;        

    }

    tableList(){
        let tbody = document.getElementById("tbody");
        //avoid data duplication
        tbody.innerText=""
        
        //it dynamically crates table row, cell and insert the data input into the table 
        for(let i = 0; i < this.productArray.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_product = tr.insertCell();
            let td_price = tr.insertCell();
            let td_action = tr.insertCell();

            td_id.innerText = this.productArray[i].id;
            td_product.innerText = this.productArray[i].productName;
            td_price.innerText = this.productArray[i].productPrice;
            
            //adding a class to center the id
            td_id.classList.add("center")

            //adding the edit and delete imgs
            let imgEdit = document.createElement("img")
            imgEdit.src= "../img/edit.png"

            td_action.appendChild(imgEdit)
            //  <td> <img> </td>

            let imgDelete = document.createElement("img")
            imgDelete.src= "../img/delete.png"

            td_action.appendChild(imgDelete)

            td_action.classList.add("action")
        }

    }

    validInput(product){

        let msg = "";
        if(product.productName == ""){
            msg += "Please, inform the product. \n"
        }

        if(product.productPrice == ""){
            msg += "Please, inform the price.\n"
        }

        //it won't show the alert if msg is not empty
        if(msg != ""){
            alert(msg);
            return false;
        }
        //it will show the alert if one of the statement is true
        return true;

    }
     // clean up the input field after save the product
    cancel(){
        document.getElementById("product").value = "";
        document.getElementById("price").value = "";

    }
}


const product = new Product();



