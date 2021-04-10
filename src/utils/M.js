import axios from 'axios'
import createStore from '../store/index'
import Vue from 'vue'


export default async (routine, data) => {
  const store = typeof createStore === 'function'
    ? createStore({ Vue })
    : createStore
    const result = await axios({
      url: 'http://127.0.0.1:7777/app/api',
      method: 'post',
      headers: {
        auth: '',
        jwt: '' // store.state.app.session.jwt
      },
      data: { routine, data }
    })
    return result.data && result.data.data
}
