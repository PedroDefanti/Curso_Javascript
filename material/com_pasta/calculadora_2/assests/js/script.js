function Calculadora(){
    this.display=document.querySelector('.display')
    this.inicia=()=> {
        this.capturaCliques()
        this.capturaEnter()}

        this.capturaCliques=()=>{
            document.addEventListener('click',event =>{
                const element =event.target
                if(element.classList.contains('btn-num'))this.addNumDisplay(element)
                if(element.classList.contains('btn-clear'))this.clear()
                if(element.classList.contains('btn-del'))this.del()
                if(element.classList.contains('btn-eq'))this.RealizaConta()
            })
        }
    
        this.capturaEnter= ()=>{
            document.addEventListener('keyup',e=>{
                if(e.key !=='Enter') return
                this.RealizaConta()
            })
        }

    this.addNumDisplay=el => {
        this.display.value+=el.innerText
        this.display.focus()


    }


    this.clear=()=> this.display.value=''
    


    this.del=()=> this.display.value=this.display.value.slice(0,-1)

    this.RealizaConta=()=>{
        try{
            const conta=eval(this.display.value)

            if(!conta){
                alert('INVÁLIDA')
            }
            this.display.value=conta
        } catch(e){
            alert('CONTA INVÁLIDA')
            return
        }
    }
    
    
}

const calc=new Calculadora()

calc.inicia()