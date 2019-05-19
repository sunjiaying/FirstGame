class FormScene extends Scene {

	private btnTest: eui.Label;
	private btnCapture: eui.Label;
	private urlloader: egret.URLLoader;
	private txtTest: EditableText;

	public constructor() {
		super();
		this.skinName = "resource/game/FormScene.exml";
	}

	protected onComplete() {
		this.btnTest.touchEnabled = true;
		this.btnTest.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTest, this);
		this.btnCapture.touchEnabled = true;
		this.btnCapture.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCapture, this);
	}

	private onTest() {
		egret.log("onTest");
		this.urlloader = new egret.URLLoader();
		var urlreq: egret.URLRequest = new egret.URLRequest();
		urlreq.url = "http://httpbin.org/user-agent";
		urlreq.method = egret.URLRequestMethod.GET;
		this.urlloader.addEventListener(egret.Event.COMPLETE, this.onResult, this);
		this.urlloader.load(urlreq);
	}

	private onResult(event: egret.Event): void {
		let r = JSON.parse(this.urlloader.data);
		this.txtTest.text = r["user-agent"];
		egret.log(this.urlloader.data);
	}

	public shareImage(target: egret.DisplayObject): void {
		var renderTexture = new egret.RenderTexture();
		renderTexture.drawToTexture(target);//渲染到临时画布
		var divImage = document.getElementById("divImage");//获取DIV
		var shareImage: HTMLImageElement = document.getElementById("shareImage") as HTMLImageElement;//获取Image标签
		shareImage.src = renderTexture.toDataURL('image/jpeg');//把数据赋值给Image
		divImage.style.display = "block";//显示DIV
	}

	private onCapture() {
		this.shareImage(this);
	}
}