import websdk from 'easemob-websdk';
import config from './IMConfig';
// 初始化IM SDK
let WebIM = {};
// eslint-disable-next-line no-multi-assign
WebIM = window.WebIM = websdk;
WebIM.config = config;
// eslint-disable-next-line new-cap
WebIM.conn = new WebIM.connection({
    appKey: WebIM.config.appkey,
    isHttpDNS: WebIM.config.isHttpDNS,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    https: WebIM.config.https,
    url: WebIM.config.xmppURL,
    apiUrl: WebIM.config.apiURL,
    isAutoLogin: true,
    heartBeatWait: WebIM.config.heartBeatWait,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    isStropheLog: WebIM.config.isStropheLog,
    delivery: WebIM.config.delivery
});
if (!WebIM.conn.apiUrl) {
    WebIM.conn.apiUrl = WebIM.config.apiURL;
}
// function ack(message) {
//     const bodyId = message.id; // 需要发送已读回执的消息id
//     // eslint-disable-next-line new-cap
//     const msg = new WebIM.message('read', WebIM.conn.getUniqueId());
//     msg.set({
//         id: bodyId,
//         to: message.from
//     });
//     WebIM.conn.send(msg.body);
// }
export const chartType = 'contact'; // 默认当前为点对点通讯
export const chatroom = false; // 默认当前消息类型不是聊天室形式
export const contactType = 'singleChart'; // 默认是单聊
// 注册监听回调
WebIM.conn.listen({
    onOpened(message) { // 连接成功回调
        console.log('登录成功',message);
    },
    onClosed(message) {
        console.log('退出',message);
        // Vue.$router.push({ path: '/login' });
    }, // 连接关闭回调
    onTextMessage(message) {
        console.log('receive text message', message)
        // eslint-disable-next-line no-unused-expressions
        // type === 'chat' && ack(message);
        // if (WebIM && WebIM.call && message && message.ext && message.ext.msg_extension) {
        //     const msgExtension = message.ext.msg_extension && JSON.parse(message.ext.msg_extension);
        //     const options = {
        //         confrId: message.ext.conferenceId,
        //         password: message.ext.password || '',
        //         gid: msgExtension.group_id,
        //         inviter: msgExtension.inviter
        //     };
        //     WebIM.call.listener.onInvite(message.from, options);
        // }
    }, // 收到文本消息
    onOnline() {
        console.log('onOnline 网络已连接');
    }, // 本机网络连接成功
    onOffline() {
        console.log('offline')
        // console.log('onOffline 网络已断开');
    }, // 本机网络掉线
    onError(message) {
        if (message.type === 0) {
            console.log('请输入账号密码');
        } else if (message.type === 28) {
            console.log('未登陆');
        } else if (message.type === '504') {
            console.error('消息撤回失败');
        } else if (message.type === '503') {
            console.error('请登录');
        } else {
            console.error(message,'环信异常');
        }
        // Toast.fail('无法进行聊天');
        // 报错返回到登录页面
        // Vue.$router.push({ path: '/login' });
    }, // 失败回调
});
export default WebIM;
