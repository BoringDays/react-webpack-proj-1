import http from 'http';
import Express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

// 需要在node环境下使用import和export，请使用babel-node运行脚本；注意，命令最好写在npm scripts里面，直接在命令行执行会提示找不到babel-node
// 前后端用同一接口会冲突，需要设置不同端口并跨域
const port = process.env.PORT || 3000;
const app = new Express();
const router = Express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // 这样就只处理键值对
app.use(cookieParser());
app.use(morgan('dev')); // 在控制台打印请求明细

router.get('/', (req, res) => {
    res.status(200).json({
        text: 'hello world'
    });
});

router.get('/product', (req, res) => {
    res.status(200).json({
        list: [{
            id: 1,
            name: 'Product A',
            type: 'A'
        }, {
            id: 2,
            name: 'Product B',
            type: 'B'
        }]
    });
});

app.use('/api', router);
app.listen(port);

// export default app;