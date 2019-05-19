class EditableText extends eui.Group {

    //新建一个背景图片
    private background: eui.Image = new eui.Image();
    //新建一个输入框
    private myEditableText: eui.EditableText = new eui.EditableText();

    set width(val: number) {
        this.background.width = val;
        this.myEditableText.width = val - 8;
    }

    set height(val: number) {
        this.background.height = val;
        this.myEditableText.height = val - 8;
    }

    get text() {
        return this.myEditableText.text;
    }

    set text(val: string) {
        egret.log(val);
        egret.log(this.myEditableText);
        this.myEditableText.text = val;
    }

    public constructor() {
        super();

        this.background.source = "resource/assets/input.png";
        this.background.scale9Grid = new egret.Rectangle(1.5, 1.5, 20, 20);
        this.background.width = this.width;
        this.background.height = this.height;
        this.addChild(this.background);
        this.myEditableText.text = "";
        this.myEditableText.x = 4;
        this.myEditableText.y = 4;
        this.myEditableText.textColor = 0x000000;
        //指定我们的文本输入框的宽和高    
        this.myEditableText.width = this.background.width - 8;
        this.myEditableText.height = this.background.height - 8;
        //设置我们的文本左边距为零
        this.myEditableText.left = 4;
        //将他添加到显示列表
        this.addChild(this.myEditableText);
    }

    
}