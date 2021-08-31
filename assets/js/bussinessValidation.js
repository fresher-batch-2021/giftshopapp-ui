function bussinessValidation(email){
    const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
var   endpoint='https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/';
const basicAuth='Basic '+btoa(dbUserName+':'+dbPassword);
    
const url=endpoint+"giftshop_user/_find";
// ===
let requestData =
{
    selector: {
        email: email
    },
    fields: ["email"]
};
  return axios.post(url,requestData,{headers:{Authorization:basicAuth}});
}