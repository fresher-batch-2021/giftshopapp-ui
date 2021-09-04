
const dbUserName = 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword = '3bc2893c0a2a1ec42d9b17840b18447b';
var endpoint = 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/';
const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);


class crud {
    // login user------------------------------------------------------------------------couch
    static login(email, password) {
        const url = 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop/_find';
        let requestData =
        {
            selector: {
                email: email,
                password:password,
                type:"user"
            },
            fields: ["id", "name", "email","role"]
        };
        return axios.post(url, requestData, { headers: { Authorization: basicAuth } });
            
    }

    // adding data
    static addData(obj, urlEnd) {
        const url = endpoint + urlEnd;
        console.log(url);
        return axios.post(url, obj, { headers: { Authorization: basicAuth } });
    }



    // delete
    static deleteData(database, id, rev, succes) {
        const url = endpoint + database + '/' + id + '?rev=' + rev;

        axios.delete(url, { headers: { Authorization: basicAuth } }).then(res => {
            
            // alert("deleted succesfully");
            console.log("deleted successfully")
            window.location.href = succes;

        }).catch(err => {
            // alert("error in deleting");
            console.log(err.response.data);

        });
    }

    // getData
    static getData(database) {
        const endUrl = "/_all_docs?include_docs=true";
        const url = endpoint + database + endUrl;
        return axios.get(url, { headers: { Authorization: basicAuth } });
    }

    // getData----------------------------------------------------------couch
    static getDataByType(type) {
        const url = endpoint + 'giftshop/_find';
        let requestObj={
           selector:{
            type:type
        }
        }
        return axios.post(url,requestObj, { headers: { Authorization: basicAuth } });
    }

    // find data
    static findDataById(database, id) {
        const url = endpoint + database + "/" + id;

        return axios.get(url, { headers: { Authorization: basicAuth } });
    }
    static findOrders(email){
        const url=endpoint+'giftshop/_find';
        let requestData =
        {
            selector: {
                email: email,
                type:"orders"
            },
            fields: ["products","totalAmount","status","email","_id","type"]
        };
        return axios.post(url, requestData, { headers: { Authorization: basicAuth } });
    }

/**
 * 
 * @param {*} object it has name of database and updated object 
 * the parameters are database and updateData
 */
    static updateData(object){
        console.table(object.updateData)
        let updateObj=object.updateData;
        let database=object.database;
        const id = updateObj._id;
        const rev = updateObj._rev;
        const url=endpoint+database+'/'+id+'/?rev='+rev;
        return axios.put(url,updateObj,{headers:{Authorization:basicAuth}});
    }
}