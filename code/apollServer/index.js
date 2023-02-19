const {ApolloServer,gql} = require('apollo-server')

// 0.必须先定义类型
const typeDefs = gql`

    type Message{
        text:String!
    }

    type Query{
        welcomeMessage:Message!
    }

    type user{
        id:ID!
        name:String
    }
    type QueryName{
        user:user!
    }
`
// 1. 创建解析器
const resolvers ={
    Query:{
        welcomeMessage:()=>{
            return {
                text:'Hello World'
            }
        }
    },
    QueryName:{
        user:()=>{
            return {
                id:1,
                name:"张三"
            }
        }
    }
}

// 初始化服务器
const server = new ApolloServer({
    typeDefs,
    resolvers:{
        
    }
})

server.listen().then(({url})=>{
    console.log(`🚀 Server ready at ${url}`)
})