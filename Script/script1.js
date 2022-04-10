class Product{
    constructor(){
        this.id=1;
        this.productArray = [];
        this.updateId = null;

    }
//receiving the input from read method and saving it into the productArray and checking the input validation
    save(){
        let product = this.read();

        if(this.validInput(product)){
            if(this.updateId == null){
             //will add the product if the inputs have a values, only then it will be add into the productArray
                this.add(product)
            }else{
                this.update(this.updateId, product)
            }
        };
        this.tableList();
        this.cleanField();
        //this.update();
        
    
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
            let imgEdit = document.createElement("img");
            imgEdit.src= "../img/edit.png";
            imgEdit.setAttribute("onclick", "product.edit("+ JSON.stringify(this.productArray[i]) +")")
            
            
            let imgDelete = document.createElement("img");
            imgDelete.src= "../img/delete.png";
            imgDelete.setAttribute("onclick", "product.delete("+this.productArray[i].id+")");
            
            td_action.appendChild(imgEdit)
            //  <td> <img> </td>
            td_action.appendChild(imgDelete)
            td_action.classList.add("action")
        }
        
    }
    add(product){
        //adding the inpust into the productArray
        product.productPrice = parseFloat(product.productPrice)
        this.productArray.push(product);
        this.id++;
        
    }
    
    edit(data){
        
        this.updateId = data.id
        document.getElementById("product").value = data.productName;
        document.getElementById("price").value = data.productPrice;
        
        document.getElementById("btn-save").innerText = "Update"
            
        
        
    }

    update(id, product){
        for(let i = 0; i < this.productArray.length; i++){
            if(this.productArray[i].id == id){
                this.productArray[i].productName = product.productName
                this.productArray[i].productPrice = product.productPrice
            }
           
        }

    }
    read(){
        
        let product={}
        product.id= this.id
        product.productName= document.getElementById("product").value;            
        product.productPrice= document.getElementById("price").value;
        return product;        
        
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
     // clean up the input field after save the product or clicking on cancel btn
    cleanField(){
        document.getElementById("product").value = "";
        document.getElementById("price").value = "";

        document.getElementById("btn-save").innerText = "Save"

        //seting the id for null after salve 
        this.updateId = null

    }

    delete(id){

        if(confirm("Do you whant to delete product ID " + id )){
            
            //accessing tbody allows us to delete the row
            let tbody = document.getElementById("tbody")  
             
            //checking if the id to be deleted is equal to parameter id 
            for(let i = 0; i< this.productArray.length; i++){
                if(this.productArray[i].id == id){
                    this.productArray.splice(i, 1);
    
                    //deleting Row
                    tbody.deleteRow(i);
                }
        }
        }
        
    }
}


const product = new Product();



