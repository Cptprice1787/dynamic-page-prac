const Mock = require("../Mock/dist/mock");
let data = Mock.mock({
  "data|100": [ //生成100条数据 数组
    {
      "Id|+1": 1,//生成商品id，自增1
      "name": "@ctitle(4,23)", //生成电影名，长度为4-5个汉字
      "director": "@ctitle(2,3)", //导演名替代，长度为2-3个汉字
      "actors": "@ctitle(8,20)", //演员，长度为8-20个汉字
      //"director": "@cname",//生成导演名， 都是中国人的名字 spilt方法被误读为属性
      "rating|5-9.2": 2, //随机生成评分 在0-10之间
      "year|1990-2020": 1990, //随机生成评分 在30-1000之间
      "logo": "@Image(‘128x128‘,‘#c33‘, ‘‘,‘‘)", //生成随机图片，大小/背景色/字体颜色/文字信息
    }
  ]
})
// Mock.mock(/goods\/goodAll/, ‘post‘, () => { //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
//   return data
// })

module.exports = {data};