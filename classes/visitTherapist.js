import Visit from "./visit.js";

class VisitTherapist extends Visit{
    constructor(){
        super()
       
    }
    createElements(){
        super.createElements()
       
       this.form.insertAdjacentHTML('beforeend',`
       <label for="age">Возраст</label><br>
       <input id ="age" type ="text" value=""><br>
      
       `)
       this.submitBtn.addEventListener('click',()=>{


        
    })
    }
    render(selector){
        this.createElements()
        document.querySelector(selector).append(this.form);
    }
    
    }
    
    export default VisitTherapist;