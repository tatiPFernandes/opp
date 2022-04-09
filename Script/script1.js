class Product{
    constructor(){
        this.id=1;
        this.productArray = []

    }
//receiving the input from read method and saving it into the productArray and checking the input validation
    save(){
        let product = this.read();

        if(this.validInput(product)){
            alert('save')
        };
        console.log(product)
        
    
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

    cancel(){
        alert("Cancelled")
    }
}


const product = new Product();



