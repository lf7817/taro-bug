import { Component } from "react";
import { navigateTo} from '@tarojs/taro'
import { View, Text, Button } from "@tarojs/components";

export default class Index extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidShow() {
    console.log("componentDidShow");
  }

  render() {
    return (
      <View>
        <Text>index2</Text>
        <Button onClick={() => navigateTo({url: '/pages/index2/index'})}>go to index2</Button>
      </View>
    );
  }
}
