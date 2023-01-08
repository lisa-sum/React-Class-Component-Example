class List extends React.Component {
  constructor(props) {
    console.log("list", props); // 查看父组件发送的props内容
    super(props);
  }

  // 类组件的生命周期函数: 组件加载完成之后调用
  componentDidMount() {
    // 查看父组件发送的props内容
    console.log(this.props);
  }

  // 类组件的生命周期函数: 组件销毁之后调用
  componentWillUnmount() {
    console.log("List组件销毁");
  }

  // 渲染
  render() {
    return (
      <section>
        <p>length: {this.props.filterPosts.length || 'Please type other keywords'}</p>
        <ul>
          {this.props.filterPosts.map((item, index) => (
            <li key={index}>{item.body}</li>
          ))}
        </ul>
      </section>
    );
  }
}
