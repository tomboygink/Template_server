const path = require("path");

module.exports = {
    mode: "development",
    entry: "./source/client/src/.index.tsx", // входная точка - исходный файл
    module: {
        rules: [   //загрузчик для tsx
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            //загрузчик стилей SASS
            {
                test: /\.css$/,
                use: [
                    // Загрузчик стилей в строку JS
                    "style-loader",
                    // Трансляция CSS по типу CommonJS
                    "css-loader",
                    
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, "../../public/public"),     // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "app.js"       // название создаваемого файла
    }
}