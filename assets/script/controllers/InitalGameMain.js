var userInfo;
var userInfoLayer;
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
    },

    // use this for initialization
    onLoad: function () {
        //inital user info in the gameMain sence
        if (Global.userInfo == undefined || Global.userInfo == null) {
           console.log("Error: no found correct user ,please check server or network.");
        } else {
            userInfo = Global.userInfo;
            //intal the user info text 
            userInfoLayer=cc.find("Canvas/topInfoLayer/userInfoLayout/userInfoTxtLayout");

        }

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
