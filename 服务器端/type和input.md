1. type 定义类型，为output 输出类型，

        type user{
            name:String
            id:ID!
        }

    type 定义的类型作为query 查询输出，或者作为mutation 输出返回值

2. input 定义的类型为输入类型

    GraphQL 模式中的input类型是一种特殊的对象类型，它将一组参数组合在一起，然后可以用作另一个字段的参数

    使用input类型有助于我们对参数进行分组和理解，尤其是对于mutation

        input user{
            name:String
        }
    
    input 类型作为mutation 参数输入类型