const path=require("path");
module.exports={
    //建置的模式
    mode:"development", //預設 production(上線模式)
    //入口
    entry:"./src/index.js",
    //輸出，__dirname表示現在檔案的工作路徑，後面接想讓輸出的檔案放到哪個資料夾
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    },
    //DevServer 設定
    devServer:{
        //實際執行檔的根目錄
        static:{
            directory: path.join(__dirname, "./dist")
        }
    },
    //模組載入規則
    module:{
        rules:[
            //CSS 樣式表檔案名稱符合載入規則(test)，則使用style-loader/css-loader載入器(use)
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"]
            },
            //SASS 樣式表檔案名稱符合載入規則(test)，則使用style-loader/css-loader/sass-loader載入器(use)
            {
                test:/\.scss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,//排除node
                loader: "babel-loader",//只有一個loader，所以不用use
            }
        ]   
    }
};