
const dbUserName = 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword = '3bc2893c0a2a1ec42d9b17840b18447b';
var endpoint = 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/';
const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);


class crud {
    // login user
    static login(email, password) {
alert("hello");
        const url = 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_user/_find';
        let requestData =
        {
            selector: {
                email: email,
                password: password
            },
            fields: ["id", "name", "email","role"]
        };
        axios.post(url, requestData, { headers: { Authorization: basicAuth } })
            .then(res => {
                let data = res.data.docs[0];
                console.log("yesh" + data);

                if (data == undefined) {
                    alert("Invalid credentials");
                }

                else if (data.length == 0) {
                    alert("Invalid credentials");
                    return "Invalid credentials";
                }
                else {
                    const user = data;
                    localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data));
                    alert("login succesful");
                    window.location.href = "index.html";
                }

            }).catch(err => {
                console.log(err.response.data);
                if (err.response.data.errorMessage) {
                    alert(err.response.data.errorMessage);

                }
                else {
                    alert("login failed");
                }
                window.location.href = "login.html";
            });
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
            alert("deleted succesfully");
            window.location.href = succes;

        }).catch(err => {
            alert("error in deleting");
            console.log(err.response.data);

        });
    }

    // getData
    static getData(database) {
        const endUrl = "/_all_docs?include_docs=true";
        const url = endpoint + database + endUrl;
        return axios.get(url, { headers: { Authorization: basicAuth } });

    }

    // find data
    static findData(database, id) {
        const url = endpoint + database + "/" + id;

        return axios.get(url, { headers: { Authorization: basicAuth } });
    }


}