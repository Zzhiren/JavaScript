import _ from 'lodash'
import { add } from './common'
export const work = () => {
  console.log(_.join([0, 1, 2], '***'))
}

add(1, 2)
import './test'