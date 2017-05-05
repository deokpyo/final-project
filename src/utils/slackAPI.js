import superagent from 'superagent'

export default {
    getStatus: (url, params, callback) => {
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
                //console.log(response)
                const slackMembers = response.body.members
                const users = []
                for (var i in slackMembers) {
                    var user = slackMembers[i]
                    // check for slackbot
                    if (user.id === 'USLACKBOT' || user.is_bot) {
                        continue
                    }
                    //console.log(user.name)
                    // store information to users array
                    users.push({
                        name: user.profile.first_name,
                        title: user.profile.title,
                        image: user.profile.image_48,
                        status: user.profile.status_text,
                    })
                }
                callback(null, users)
            })
    },
}