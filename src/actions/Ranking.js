import request from 'superagent';
import { replace } from 'react-router-redux';

const API_URL = 'http://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking'

// リクエスト開始
const startRequest = category => ({
    type: 'START_REQUEST',
    payload: { category },
})
// レスポンス受信
const receiveData = (category, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: { category, error, response },
})
// リクエスト完了
const finishRequest = category => ({
    type: 'FINISH_REQUEST',
    payload: { category },
})

// ランキングを取得
export const fetchRanking = categoryId => {
    return async (dispatch, getState) => {
        const categories = getState().shopping.categories
        const category = categories.find(category => (category.id === categoryId))
        if (typeof category === 'undefined') {
            // 対応するデータがない場合はトップページへリダイレクト
            dispatch(replace('/'))
            return
        }

        dispatch(startRequest(category))

        const apiUrl = `${API_URL}?appid=${process.env.REACT_APP_YAHOO_CLIENT_ID}&category_id=${categoryId}`
        const call = async () => {
            try {
                const response = await request.get(apiUrl)
                dispatch(receiveData(category, null, response.body));
            } catch (e) {
                console.error(e)
                dispatch(receiveData(category, e));
            }
            dispatch(finishRequest(category));
        };
        call();
    }
}