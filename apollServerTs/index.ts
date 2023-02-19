import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';


// Apollo Server 可以从您连接的任何源（包括数据库、REST API、静态对象存储服务，甚至另一个 GraphQL 服务器）获取数据
// 模拟数据
let books = [
  { 
      id:1,
      title: 'The Awakening',
      author: 'Kate Chopin',
  },
  {
      id:2,
      title: 'City of Glass',
      author: 'Paul Auster',
  },
];
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// schema 是类型定义的集合，他们共同定义针对您的数据执行的查询形状
// # 开始的是graphql 中的注释
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id:ID!
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    book(id:ID!):Book
  }

  input inputBook{
    id:ID!
    title:String
    author:String
  }

  type Mutation{
    addBook(book:inputBook!):Book
  }
`;

// 解析器解析数据，主要分为对应三种操作，Query, mutation, 订阅
const resolvers = {
    // Query 是对客户端访问所有查询的入口，他要为Query 类型中每个字段添加解析函数
    Query: {
        // 这里的key 的名称必须是上面Query定义过的字段
        books: () => books,
        book:(parent:any,args:any,context:any,info:any)=>{
          console.log("parent",parent)
          console.log("args",args)
          console.log("context",context)
          console.log("info",info)
          return books[0]
        }
    },
    Mutation:{
      addBook(_:any,args:any){
        console.log(args)
        console.log(args)
        return args.book
      }
    }
}

// 创建Apollo Server 实例
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  startStandaloneServer(server, {
    listen: { port: 4001 },
  }).then(({url})=>{
    console.log(`🚀  Server ready at: ${url}`);
  });
  
  