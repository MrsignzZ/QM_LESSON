import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };
  constructor(props) {
    super(props);
    this.state = {
      list: ['起床', '吃饭', '打农药'],
      inputValue: ''
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnMount() {}
  addItem() {
    let { list } = this.state;
    const inputValue = this.inputValue;
    if (inputValue == '') return;
    list.push(inputValue);

    this.setState({
      list,
      inputValue: ''
    });
  }
  inputHandler(e) {
    this.inputValue = e.target.value;
  }
  delItem(index) {
    let { list } = this.state;
    list.splice(index, 1)
    this.setState({
      list
    });
  }
  // delItem() {
  //   let { list } = this.state;
  //   const inputValue = this.inputValue;
  //   list.pop(inputValue)
  //   this.setState({
  //     list,
  //     inputValue: ''
  //   })
  // }
  render() {
    const { list, inputValue } = this.state;
    return (
      <View className="index">
        <View className="list_wrap">
          <Text>Todo List</Text>

          <Input
            className="input"
            type="text"
            value={inputValue}
            onInput={this.inputHandler.bind(this)}
          />
          <Text className="add" onClick={this.addItem.bind(this, index)}>
            添加
          </Text>
          {list.map((item, index) => {
            return (
              <View>
                <Text>
                  {index + 1}.{item}
                </Text>
                <Text className="del" onClick={this.delItem.bind(this)}>
                  删除
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
