import { Component } from 'react'
import { navigateTo} from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>index</Text>
        <Button onClick={() => navigateTo({url: '/pages/index2/index'})}>go to index2</Button>
      </View>
    )
  }
}
