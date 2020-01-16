import {web} from "./config.js"
const game_Id = {
	game_id:web.game_id,
	game_area_id:web.game_area_id
}
const serviceModule = {
    getGameSet: {url: web.webUrl+'/api/v1/Game/getGameSet',method: 'post',...game_Id},
}
const ApiSetting = { ...serviceModule}
export default ApiSetting