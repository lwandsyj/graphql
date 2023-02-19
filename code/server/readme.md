1. 在使用ts-node 时，要移除package.json 中的 type 选项,不然会报Unknown file extension ".ts"

        "type":"module"

2. 当您通过 Ajax 使用 API 时，主要问题是 API 需要发送正确的 Access-Control-Allow-Origin 标头。
    