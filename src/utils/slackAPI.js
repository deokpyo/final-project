import request from 'superagent'

const SLACK_TOKEN = 'xoxp-162663636241-162635272656-174645860997-3bdf74d13a594f9b864cd65a66943ef5&pretty=1'

let url = `https://slack.com/api/users.list?token=${SLACK_TOKEN}`

export default {
    getStatus: (callback) => {
        request
            .get(url)
            .end((err, resp) => {
                if (err) {
                    callback(err);
                    return
                }
                const slackMembers = resp.body.members
                const users = []
                for(var i in slackMembers){
                    var user = slackMembers[i]
                    // check for slackbot
                    if(user.id === 'USLACKBOT' || user.is_bot){
                        continue
                    }           
                    console.log(user.name)
                    // store information to users array
                    users.push({
                        name: user.profile.first_name,
                        title: user.profile.title,
                        image: user.profile.image_48,
                        status: user.profile.status_text,
                    })     
                }
                callback(users)
            })
    }
}