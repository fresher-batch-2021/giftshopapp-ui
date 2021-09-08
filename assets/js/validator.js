
export class ValidationService{

    isValidString(value,errMessage){
    if(value==null||value==undefined){
        throw new Error(errMessage)
    }
    }
    
    isValidEmail(value,errMessage){
        this.isValidString(value,"email can't be empty")
        // email validati0on are here
        if(value.trim() == ""){
            throw new Error(errMessage)
        }
    }
    
    isValidPassword(value,errMessage){
        this.isValidString(value,"password can't be empty")
        // password validation are here
        if(value.trim() == ""||value.length<8){
            throw new Error(errMessage)
        }
    }
}