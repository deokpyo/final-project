import superagent from 'superagent';

export default {
    // get route to find all
    get: (url, params, callback) => {
        superagent
            .get(url).query(params)
            // type of data we're getting
            .set('Accept', 'application/json')
            // call back
            .end((err, response) => {
                if (err) {
                    callback(err, null);
                    return
                }
                // API failures
                const confirmation = response.body.confirmation;
                if (confirmation !== 'success') {
                    callback({
                        message: response.body.message
                    }, null);
                    return
                }
                callback(null, response.body);
            })
    },
    // post route to create a new data
    post: (url, body, callback) => {
        superagent
            .post(url).send(body)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    callback(err, null);
                    return
                }
                // API failures
                const confirmation = response.body.confirmation;
                if (confirmation !== 'success') {
                    callback({
                        message: response.body.message
                    }, null);
                    return
                }
                callback(null, response.body);
            })
    },
    // delete route to delete by id
    delete: (url, params, callback) => {
        superagent
            .del(url + params)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    callback(err, null);
                    return
                }
                const confirmation = response.body.confirmation;
                if (confirmation !== 'success') {
                    callback({
                        message: response.body.message
                    }, null);
                    return
                }
                callback(null, response.body);
            })
    },
    // put route to update by id
    put: () => {

    },

}