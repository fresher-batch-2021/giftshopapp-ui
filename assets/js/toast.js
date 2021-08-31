const toast={
    init(){
        this.hideTimeout = null;
        this.element= document.createElement('div');
        this.element.className='toast';
        document.body.appendChild(this.element); 
    },
    show(message,state){
        clearTimeout(this.hideTimeout);
        if(this.element==null){
            this.init();
        }
        this.element.textContent=message;
        this.element.className='toast toast--visible'
        if(state){
            this.element.classList.add(`toast--${state}`)
        }
        this.hideTimeout = setTimeout(()=>{this.element.classList.remove('toast--visible')},1000);
    }
    };
    document.addEventListener('DOMContentLoaded',()=>toast.init());
    
    // -------toast css
    // .toast{
    //     text-align: center;
    //     position: fixed;
    //     top: 0px;
    //     left: 0;
    //     right: 0;
    //     margin: auto;
    //     max-width: 400px;
    //     z-index: 3;
    //     background-color: burlywood;
    //     background-color: cornsilk;
    //     font-family: sans-serif;
    //     border: 1px solid gray;
    //     border-radius: 5px;
    //     box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    //     height: 40px;
    //     visibility: hidden;
    //     opacity: 0;
    //     transition: opacity 0.2s , top 0.2s,visibility 0.2s;
    // }
    // .toast--visible{
    //     top: 20px;
    //     visibility: visible;
    //     opacity: 1;
    // }
    // .toast--sucess{
    //     background-color: #00c02b;
    //     border-color: #009d23;
    //     color: #fff;
    // }
    // .toast--error{
    //     background-color: #d50000;
    //     border-color: #ba0000;
    //     color: #fff;
    // }