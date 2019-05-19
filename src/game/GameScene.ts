class GameScene extends Scene {
	public btn_qh3: eui.Label;
	public text_tip: eui.BitmapLabel;

	public l1: eui.Button;
	
	private isComplete: boolean;
	private sound: egret.Sound;
    private soundchannel: egret.SoundChannel;

	public constructor() {
		super();
		this.skinName = "resource/game/GameScene.exml";
	}
	protected onComplete() {
		this.btn_qh3.touchEnabled = true;
		this.isComplete = true;
		this.btn_qh3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBegin, this);
		if (this.isComplete){
			this.isComplete = false;
			this.text_tip.text = "";
			this.typerEffect(this.text_tip, "你的爱，由你定义。\n点击右侧容器，拿起爱的试剂，用心调用你独家秘制的爱，并把它传递给你所爱的人吧！", 250, this.typeFinished);
			this.sound = new egret.Sound();
			this.sound = RES.getRes("type_mp3");
			this.soundchannel = this.sound.play(0, 1);

			let heart: Heart = new Heart();
			heart.x = 190;
			heart.y = 800;
			this.addChild(heart);

			let bubble1: Bubble = new Bubble();
			bubble1.x = 457;
			bubble1.y = 600;
			bubble1.scaleX = 2;
			bubble1.scaleY = 2;
			this.addChild(bubble1);

			let bubble2: Bubble = new Bubble();
			bubble2.x = 537;
			bubble2.y = 936;
			bubble2.scaleX = 2;
			bubble2.scaleY = 2;
			this.addChild(bubble2);
		}
	}

	private onBegin() {
		// let s1:StartScene =  new StartScene();
		// ScreenMovies.MovieStart(4);
        // SceneManager.Instance.changeScene(s1);

		let s1:FormScene =  new FormScene();
		ScreenMovies.MovieStart(4);
        SceneManager.Instance.changeScene(s1);
	}

	/**
    * 文字打字机效果
    * obj           文本对象
    * content       文字
    * interval      打字间隔 毫秒
    */    
    private typerEffect(obj, content:string = "", interval:number = 200, typeFinished:Function = null):void{
        var strArr:Array<any> = content.split("");
        var len:number = strArr.length;
        for (var i = 0; i < len; i++){
            egret.setTimeout(function () {
				obj.text = obj.text + strArr[Number(this)];
                // obj.appendText(strArr[Number(this)]);
                if ((Number(this) >= len - 1) && (typeFinished != null)) {
                    typeFinished();
                }
            }, i, interval*i);              
        }
    }

	private typeFinished() {
		// this.soundchannel.stop();
		// this.isComplete = true;
		// let s1:StartScene =  new StartScene();
		// ScreenMovies.MovieStart(4);
        // SceneManager.Instance.changeScene(s1);
	};

}