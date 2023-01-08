class Search extends React.Component {
  constructor(props) {
    console.log("search", props); // 查看父组件发送的props内容
    super(props);
  }

  // 类组件的生命周期函数: 组件加载完成之后调用
  componentDidMount() {
    console.log("Search组件挂载完成");
  }

  // 类组件的生命周期函数: 组件销毁之后调用
  componentWillUnmount() {
    console.log("Search组件销毁");
  }

  // 初始化完成之后调用render渲染方法
  render() {
    return (
      <section>
        <label htmlFor="">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="enter an arbitrary content"
            onChange={(event) => this.props.filterHandle(event.target.value)}
          />
        </label>

      </section>
    );
  }
}
