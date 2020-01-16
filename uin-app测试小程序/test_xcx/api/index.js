const httpServer = (opts, data) => {
// 固定参数
const game_id = opts.game_id
const game_area_id = opts.game_area_id
    let httpDefaultOpts = {
        url: opts.url,
        data: {...data,game_id,game_area_id},
        method: opts.method,
        header: opts.method == 'post' ? {
        'X-Requested-With': 'XMLHttpRequest',
        "Accept": "application/json",
        "Content-Type": "application/json; charset=UTF-8",
	
    } : {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	
    },
        dataType: 'json',
    }

    let promise = new Promise(function(resolve, reject) {
        uni.request(httpDefaultOpts).then(
            (res) => {
                resolve(res[1].data)
            }
        ).catch(
            (response) => {
                reject(response)
            }
        )
    })

    return promise

}

export default httpServer
