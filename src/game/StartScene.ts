class StartScene extends Scene {
		public btnBegin: eui.Label;//切换场景
		public pic: eui.Image;
		public loading1: egret.tween.TweenGroup;
		
		public constructor() {
			super();
			this.skinName = "resource/game/StartScene.exml";
		}
		
		protected onComplete() {
			this.btnBegin.touchEnabled = true;
			this.btnBegin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapqiehuan, this);

			this.loading1.play(0);
		}

		private onTapqiehuan(){
			let sound:egret.Sound = RES.getRes("click_mp3");
        	sound.play(0, 1);
			let s1:GameScene =  new GameScene();
			// //切换到第二个场景
			ScreenMovies.MovieStart(2);
        	SceneManager.Instance.changeScene(s1);
		}
}