//var stomp=require('stomp');
 var client ;
 var userInfo;
cc.Class({
    extends: cc.Component,
    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        testLabel:cc.Label
    },

    // use this for initialization
    onLoad: function () {
        let self = this;

        if (Global.userInfo == null || Global.userInfo == undefined) {
            var userInfo = require("userInfoDomain").userInfoDomain;
            //window.io = SocketIO.connect;
            //var p2psocket =  window.io.connect("");
            //var p2p = new P2P(p2psocket);
            // console.log("io instals");
            //var shaObj = new jsSHA("SHA-1", "TEXT");
            //shaObj.update("This is a test");
            // var hash = shaObj.getHash("HEX");
            // console.log("hash sha1:"+hash);
            var socket = new SockJS("http://localhost:8080/stomp");
            //io.connect
            //var socket=window.io('http://localhost:8080/stomp');
            //var allowedOrigins = "http://localhost:* http://127.0.0.1:*";
            //var path = '/stomp';
            // var socket = window.io.connect('http://localhost:8080/stomp');
            console.log("conect to server");
            client = Stomp.over(socket);
            client.connect({}, function () {
                client.subscribe("/queue/pusmicGamePushLoginUserInfoChanle", function (message) {
                    var bodyStr = message.body;
                    var obj = JSON.parse(bodyStr);
                    if (obj != undefined && obj != null) {
                        for (var p in obj) {
                            userInfo[p] = obj[p]
                        }
                        console.log("userInfo.nickname:" + userInfo.nickName);
                        Global.userInfo = userInfo;
                        //user login success ,go to game main sence
                        cc.director.loadScene('gameMain2');
                    } else {

                        console.log("No found correct user info return from server ,please check .");
                    }

                    //self.testLabel.string = message.body;
                    //$("#helloDiv").append(message.body);

                    //cc.director.loadScene('gameMain2');
                });
            });
        } else {
             //Gobal userInfo already get the value ,drictly to to gameMain2
             cc.director.loadScene('gameMain2');

        }


    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    sendWebSokectMessageToServer: function () {
        var o = new Object();
        o.token = "test word"
        client.send("/app/resiveAllUserChanle", {}, JSON.stringify(o));
    },
    loginUserToServerByToken: function () {
        var o = new Object();
        o.token = "test word"
        client.send("/app/pusmicGameLoginUserChanle", {}, JSON.stringify(o));

    },
     //-----------------------------------------------------------------------------
    onDestroy : function(){
        //colse the websokect
        client.disconnect();
    }

});
