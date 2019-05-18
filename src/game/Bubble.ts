class Bubble extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        
        this.width = 150;
        this.height = 150;
        
        let texture1 = RES.getRes("bubble_png");
        let config1 = RES.getRes("bubble_json");
        var _particle1 = new particle.GravityParticleSystem(texture1, config1);
        this.addChild(_particle1);
        _particle1.start();
    }
}