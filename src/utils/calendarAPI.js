import superagent from 'superagent'

export default {
    getEvents: (url, params, callback) => {
        superagent
            .get(url).query(params)
            // type of data we're getting
            .set('Accept', 'application/json')
            // call back
            .end((err, resp) => {
                if (err) {
                    callback(err, null);
                    return
                }
                //console.log(resp)
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary,
                    })
                })
                callback(null, events)
            })
    },
}