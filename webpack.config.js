const path = require('path'); //path module

module.exports = {
    mode: 'development', //use production at the end
//    entry: './src/index.js',  //for test1
    entry: './src/index3.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
		//filename: 'bundle-01.js' //
        filename: 'bundle-03.js'
	},
    module:{ // モジュールプロパティの中に
        rules:[
            { // ルールズを配列で指定
            test: /\.css$/, // 対象の拡張子を正規表現で指定。
            use:[ // どのローダーを使うのか（下から実行されていく）
                'style-loader', //cssをhtmlにstyleタグとして出力
                'css-loader'
            ]
        }
    ]
    }
  };