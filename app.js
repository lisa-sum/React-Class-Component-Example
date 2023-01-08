class App extends React.Component {
  // 初始化数据
  constructor() {
    super(); // 继承React.Component基类, 可以调用基类的方法
    // 初始化数据
    this.state = {
      // 评论列表
      posts: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ],
      // 过滤之后的评论列表
      filterPosts: [],
    };
  }

  // 类组件的生命周期函数: 组件加载完成之后调用
  componentDidMount() {
    console.log("组件挂载完成");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState((state) => ({
          posts: [...state.posts, ...json],
        }));
      });
  }

  /**
   * @description 根据输入的字符过滤, 返回结果
   * @since 2023/1/9 2:44
   * @param event { string } 输入的字符
   * @return 根据输入的内容组成的数组 { string[] }
   *  */
  filterHandle = (event) => {
    let arr = []; // 声明类型
    // filter 返回值为boolean, 只返回为true的结果
    arr = this.state.posts.filter((item) => {
      console.log(item.title.includes(event)); // 如果posts字符串(String是序列,可以调用Array的includes方法)
      return item.title.includes(event); // 返回为true的结果条目
    });

    // 更新filterPosts过滤之后的评论列表
    this.setState({
      filterPosts: arr,
    });
  };

  // 初始化完成之后调用render渲染方法
  render() {
    return (
      <section>
        <Search posts={this.state.posts} filterHandle={this.filterHandle} />
        <List filterPosts={this.state.filterPosts} />
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
