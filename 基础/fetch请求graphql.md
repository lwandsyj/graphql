1. 前端javascript 使用fetch 请求graphql 

   graphql 是一个application/json 请求的post 的请求

        {
            query: "query MyQuery { viewer {name} }", // 查询或者mutation 语句

            variables: {},// 查询参数

            operationName: "MyQuery" // 查询名称
        }


   fetch 发送请求

        fetch("https://github.com/graphql", {

            method: "POST", // graphql 是post 请求

            credentials: "include",

            mode: "cors",

            headers: {

              Authorization: `Bearer ${AuthToken}`, // token 认证

              “Content-Type": "application/json" // graphql 基于json 传送数据

            },

            body: JSON.stringify(data) // 上面的请求数据 {query:"",variables:{},operationName:""}
        });


