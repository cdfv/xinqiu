
cc.Class({
    extends: cc.Component,

    properties: {
       qiuPrefab:cc.Node
    },

    onLoad () 
    {
        cc.director.getCollisionManager().enabled = true;
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    },

    start () {

    },
    onTouchBegan: function (event) {
       cc.log("dddddddd"+event.target.tag);
    },

    // update (dt) {},
    CreateQiu:function(target)
    {
        var scene = cc.director.getScene();
        var obj = cc.instantiate(qiuPrefab);
        obj.postion = target.postion
        scene.addChild(obj);
    }
});
