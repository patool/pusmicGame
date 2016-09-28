
var topInfoLayer;
cc.Class({
    extends: cc.Component,

    properties: {
       creatRoomNode: cc.Node,
       mainNodeList: cc.Node
    },

    // use this for initialization
    onLoad: function () {
         //init();
          //this.creatRoomNode.enabled = false;
          //this.creatRoomNode.opacity = 0;
          this.creatRoomNode.active= false;
         topInfoLayer=cc.find("Canvas/topInfoLayer");
          //console.log("onLoad starting 11");
          
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
   init: function (betDuration) {
        
        //this.creatRoomNode.enabled = false;
        console.log("initl starting");
    },

   showGameModeNode: function () {
        this.creatRoomNode.active= true;
        topInfoLayer.active=false;
        this.mainNodeList.opacity=0;
    },
    hideGameModeNode: function () {
       this.creatRoomNode.active= false;
        topInfoLayer.active=true;
       this.mainNodeList.opacity=255;
    },
});
