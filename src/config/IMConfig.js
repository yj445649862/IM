function getUrl() {
    const apiUrl = `//a1.easemob.com`;
    const xmppUrl = '//im-api-v2.easemob.com/ws';
    return {
        apiUrl,
        xmppUrl
    };
}


const config = {
    /*
     * XMPP server
     */
    xmppURL: getUrl().xmppUrl,
    /*
     * Backend REST API URL
     */
    apiURL: getUrl().apiUrl,

    /*
     * Application AppKey
     */
    // appkey:"gdpwq123#ceshi",
    appkey: '1102200514019847#uindata',
    /*
     * Application Host
     */
    Host: 'easemob.com',
    /*
     * Whether to use HTTPS
     * @parameter {Boolean} true or false
     */
    https: true,
    isHttpDNS: false,
    /*
     * isMultiLoginSessions
     * true: A visitor can sign in to multiple webpages and receive messages at all the webpages.
     * false: A visitor can sign in to only one webpage and receive messages at the webpage.
     */
    isMultiLoginSessions: true,
    /**
     * Whether to use window.doQuery()
     * @parameter {Boolean} true or false
     */
    isWindowSDK: false,
    /**
     * isSandBox=true:  xmppURL: 'im-api.sandbox.easemob.com',  apiURL: '//a1.sdb.easemob.com',
     * isSandBox=false: xmppURL: 'im-api.easemob.com',          apiURL: '//a1.easemob.com',
     * @parameter {Boolean} true or false
     */
    isSandBox: false,
    /**
     * Whether to console.log in strophe.log()
     * @parameter {Boolean} true or false
     */
    isDebug: true,
    // isDebug: process.env.NODE_ENV !== 'production',
    /**
     * Whether to show logs in strophe
     * @parameter {Boolean} true or false
     */
    isStropheLog: false,
    /**
     * will auto connect the xmpp server autoReconnectNumMax times in background when client is offline.
     * won't auto connect if autoReconnectNumMax=0.
     */
    autoReconnectNumMax: 5,
    /**
     * the interval secons between each atuo reconnectting.
     * works only if autoReconnectMaxNum >= 2.
     */
    autoReconnectInterval: 2,
    /**
     * webrtc supports WebKit and https only
     */
    isWebRTC: true, // window.RTCPeerConnection && /^https\:$/.test(window.location.protocol),
    /**
     *  cn: chinese
     *  us: english
     */
    i18n: 'us',
    /*
     * Set to auto sign-in
     */
    isAutoLogin: true,
    /**
     * Size of message cache for person to person
     */
    p2pMessageCacheSize: 500,
    /**
     * When a message arrived, the receiver send an ack message to the
     * sender, in order to tell the sender the message has delivered.
     * See call back function onReceivedMessage
     */
    delivery: false,
    /**
     * Size of message cache for group chating like group, chatroom etc
     */
    groupMessageCacheSize: 200,
    /**
     * 5 actual logging methods, ordered and available:
     * 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'
     */

    loglevel: 'ERROR',

    /**
     * enable localstorage for history messages
     */
    enableLocalStorage: true
};
export default config;
