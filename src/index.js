"use strict";
import _ from 'lodash'
import fetch from 'node-fetch'

export default {
  bind: (fpm) => {
    fpm.registerAction('BEFORE_MODULES_ADDED', (args) => {
      let biz = args[0]
      biz.m = _.assign(biz.m, {
        proxy: {
          forward: async (arg) =>{
            /**
             * arg: {
             * url: '',
             * params:{},
             * resultType: 'j
             * }
             */
            const url = arg.url
            const params = arg.params
            const resultType = arg.resultType || 'json'
            let data = await fetch(url, params)
              .then((rsp)=>{
                if('json' === resultType){
                  return rsp.json();
                }
                return rsp.json();
              })
            return { data }
          }
        }
      })
      
    })
  }
}
