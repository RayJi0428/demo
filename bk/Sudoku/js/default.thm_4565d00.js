window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Grid":"resource/eui_skins/Grid.exml","SudokuScene":"resource/eui_skins/SudokuScene.exml","NineGrid":"resource/eui_skins/NineGrid.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Grid.exml'] = window.GridSkin = (function (_super) {
	__extends(GridSkin, _super);
	function GridSkin() {
		_super.call(this);
		this.skinParts = ["hint_0","hint_1","hint_2","hint_3","hint_4","hint_5","hint_6","hint_7","hint_8","hint","ans","default"];
		
		this.height = 45;
		this.width = 45;
		this.elementsContent = [this._Rect1_i(),this.hint_i(),this.ans_i(),this.default_i()];
	}
	var _proto = GridSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xeeeeee;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hint_i = function () {
		var t = new eui.Group();
		this.hint = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.hint_0_i(),this.hint_1_i(),this.hint_2_i(),this.hint_3_i(),this.hint_4_i(),this.hint_5_i(),this.hint_6_i(),this.hint_7_i(),this.hint_8_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 0;
		t.verticalGap = 0;
		return t;
	};
	_proto.hint_0_i = function () {
		var t = new eui.Label();
		this.hint_0 = t;
		t.height = 15;
		t.size = 12;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.hint_1_i = function () {
		var t = new eui.Label();
		this.hint_1 = t;
		t.height = 15;
		t.size = 12;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.hint_2_i = function () {
		var t = new eui.Label();
		this.hint_2 = t;
		t.height = 15;
		t.size = 12;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.hint_3_i = function () {
		var t = new eui.Label();
		this.hint_3 = t;
		t.height = 15;
		t.size = 12;
		t.text = "4";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.hint_4_i = function () {
		var t = new eui.Label();
		this.hint_4 = t;
		t.height = 15;
		t.size = 12;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.hint_5_i = function () {
		var t = new eui.Label();
		this.hint_5 = t;
		t.height = 15;
		t.size = 12;
		t.text = "6";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.hint_6_i = function () {
		var t = new eui.Label();
		this.hint_6 = t;
		t.height = 15;
		t.size = 12;
		t.text = "7";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.hint_7_i = function () {
		var t = new eui.Label();
		this.hint_7 = t;
		t.height = 15;
		t.size = 12;
		t.text = "8";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto.hint_8_i = function () {
		var t = new eui.Label();
		this.hint_8 = t;
		t.height = 15;
		t.size = 12;
		t.text = "9";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 15;
		t.x = 90;
		t.y = 90;
		return t;
	};
	_proto.ans_i = function () {
		var t = new eui.Label();
		this.ans = t;
		t.fontFamily = "Arial";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.restrict = "1-9";
		t.size = 35;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x0077ff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.wordWrap = false;
		return t;
	};
	_proto.default_i = function () {
		var t = new eui.Label();
		this.default = t;
		t.fontFamily = "Arial";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.restrict = "1-9";
		t.size = 35;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.wordWrap = false;
		return t;
	};
	return GridSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/NineGrid.exml'] = window.NineGridSkin = (function (_super) {
	__extends(NineGridSkin, _super);
	function NineGridSkin() {
		_super.call(this);
		this.skinParts = ["grid_0","grid_1","grid_2","grid_3","grid_4","grid_5","grid_6","grid_7","grid_8"];
		
		this.height = 137;
		this.width = 137;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = NineGridSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xaaaaaa;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.grid_0_i(),this.grid_1_i(),this.grid_2_i(),this.grid_3_i(),this.grid_4_i(),this.grid_5_i(),this.grid_6_i(),this.grid_7_i(),this.grid_8_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_0_i = function () {
		var t = new Grid();
		this.grid_0 = t;
		t.x = 46;
		t.y = 94;
		return t;
	};
	_proto.grid_1_i = function () {
		var t = new Grid();
		this.grid_1 = t;
		t.x = 56;
		t.y = 104;
		return t;
	};
	_proto.grid_2_i = function () {
		var t = new Grid();
		this.grid_2 = t;
		t.x = 66;
		t.y = 114;
		return t;
	};
	_proto.grid_3_i = function () {
		var t = new Grid();
		this.grid_3 = t;
		t.x = 76;
		t.y = 124;
		return t;
	};
	_proto.grid_4_i = function () {
		var t = new Grid();
		this.grid_4 = t;
		t.x = 86;
		t.y = 134;
		return t;
	};
	_proto.grid_5_i = function () {
		var t = new Grid();
		this.grid_5 = t;
		t.x = 96;
		t.y = 144;
		return t;
	};
	_proto.grid_6_i = function () {
		var t = new Grid();
		this.grid_6 = t;
		t.x = 106;
		t.y = 154;
		return t;
	};
	_proto.grid_7_i = function () {
		var t = new Grid();
		this.grid_7 = t;
		t.x = 116;
		t.y = 164;
		return t;
	};
	_proto.grid_8_i = function () {
		var t = new Grid();
		this.grid_8 = t;
		t.x = 126;
		t.y = 174;
		return t;
	};
	return NineGridSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SudokuScene.exml'] = window.SudokuSceneSkin = (function (_super) {
	__extends(SudokuSceneSkin, _super);
	function SudokuSceneSkin() {
		_super.call(this);
		this.skinParts = ["grid_0_0","grid_0_1","grid_0_2","grid_0_3","grid_0_4","grid_0_5","grid_0_6","grid_0_7","grid_0_8","grid_1_0","grid_1_1","grid_1_2","grid_1_3","grid_1_4","grid_1_5","grid_1_6","grid_1_7","grid_1_8","grid_2_0","grid_2_1","grid_2_2","grid_2_3","grid_2_4","grid_2_5","grid_2_6","grid_2_7","grid_2_8","grid_3_0","grid_3_1","grid_3_2","grid_3_3","grid_3_4","grid_3_5","grid_3_6","grid_3_7","grid_3_8","grid_4_0","grid_4_1","grid_4_2","grid_4_3","grid_4_4","grid_4_5","grid_4_6","grid_4_7","grid_4_8","grid_5_0","grid_5_1","grid_5_2","grid_5_3","grid_5_4","grid_5_5","grid_5_6","grid_5_7","grid_5_8","grid_6_0","grid_6_1","grid_6_2","grid_6_3","grid_6_4","grid_6_5","grid_6_6","grid_6_7","grid_6_8","grid_7_0","grid_7_1","grid_7_2","grid_7_3","grid_7_4","grid_7_5","grid_7_6","grid_7_7","grid_7_8","grid_8_0","grid_8_1","grid_8_2","grid_8_3","grid_8_4","grid_8_5","grid_8_6","grid_8_7","grid_8_8","startBtn","btn_0","btn_1","btn_2","btn_3","btn_4","btn_5","btn_6","btn_7","btn_8","stateTf","block"];
		
		this.height = 517;
		this.width = 500;
		this.elementsContent = [this._Rect1_i(),this._Group10_i(),this.startBtn_i(),this._Group11_i(),this.stateTf_i(),this.block_i()];
	}
	var _proto = SudokuSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 419;
		t.horizontalCenter = 30;
		t.top = 10;
		t.width = 419;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 2;
		t.verticalGap = 2;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 0;
		t.y = 606;
		t.layout = this._TileLayout2_i();
		t.elementsContent = [this.grid_0_0_i(),this.grid_0_1_i(),this.grid_0_2_i(),this.grid_0_3_i(),this.grid_0_4_i(),this.grid_0_5_i(),this.grid_0_6_i(),this.grid_0_7_i(),this.grid_0_8_i()];
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_0_0_i = function () {
		var t = new Grid();
		this.grid_0_0 = t;
		return t;
	};
	_proto.grid_0_1_i = function () {
		var t = new Grid();
		this.grid_0_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_0_2_i = function () {
		var t = new Grid();
		this.grid_0_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_0_3_i = function () {
		var t = new Grid();
		this.grid_0_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_0_4_i = function () {
		var t = new Grid();
		this.grid_0_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_0_5_i = function () {
		var t = new Grid();
		this.grid_0_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_0_6_i = function () {
		var t = new Grid();
		this.grid_0_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_0_7_i = function () {
		var t = new Grid();
		this.grid_0_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_0_8_i = function () {
		var t = new Grid();
		this.grid_0_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 10;
		t.y = 616;
		t.layout = this._TileLayout3_i();
		t.elementsContent = [this.grid_1_0_i(),this.grid_1_1_i(),this.grid_1_2_i(),this.grid_1_3_i(),this.grid_1_4_i(),this.grid_1_5_i(),this.grid_1_6_i(),this.grid_1_7_i(),this.grid_1_8_i()];
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_1_0_i = function () {
		var t = new Grid();
		this.grid_1_0 = t;
		return t;
	};
	_proto.grid_1_1_i = function () {
		var t = new Grid();
		this.grid_1_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_1_2_i = function () {
		var t = new Grid();
		this.grid_1_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_1_3_i = function () {
		var t = new Grid();
		this.grid_1_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_1_4_i = function () {
		var t = new Grid();
		this.grid_1_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_1_5_i = function () {
		var t = new Grid();
		this.grid_1_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_1_6_i = function () {
		var t = new Grid();
		this.grid_1_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_1_7_i = function () {
		var t = new Grid();
		this.grid_1_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_1_8_i = function () {
		var t = new Grid();
		this.grid_1_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 20;
		t.y = 626;
		t.layout = this._TileLayout4_i();
		t.elementsContent = [this.grid_2_0_i(),this.grid_2_1_i(),this.grid_2_2_i(),this.grid_2_3_i(),this.grid_2_4_i(),this.grid_2_5_i(),this.grid_2_6_i(),this.grid_2_7_i(),this.grid_2_8_i()];
		return t;
	};
	_proto._TileLayout4_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_2_0_i = function () {
		var t = new Grid();
		this.grid_2_0 = t;
		return t;
	};
	_proto.grid_2_1_i = function () {
		var t = new Grid();
		this.grid_2_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_2_2_i = function () {
		var t = new Grid();
		this.grid_2_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_2_3_i = function () {
		var t = new Grid();
		this.grid_2_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_2_4_i = function () {
		var t = new Grid();
		this.grid_2_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_2_5_i = function () {
		var t = new Grid();
		this.grid_2_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_2_6_i = function () {
		var t = new Grid();
		this.grid_2_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_2_7_i = function () {
		var t = new Grid();
		this.grid_2_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_2_8_i = function () {
		var t = new Grid();
		this.grid_2_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 30;
		t.y = 636;
		t.layout = this._TileLayout5_i();
		t.elementsContent = [this.grid_3_0_i(),this.grid_3_1_i(),this.grid_3_2_i(),this.grid_3_3_i(),this.grid_3_4_i(),this.grid_3_5_i(),this.grid_3_6_i(),this.grid_3_7_i(),this.grid_3_8_i()];
		return t;
	};
	_proto._TileLayout5_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_3_0_i = function () {
		var t = new Grid();
		this.grid_3_0 = t;
		return t;
	};
	_proto.grid_3_1_i = function () {
		var t = new Grid();
		this.grid_3_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_3_2_i = function () {
		var t = new Grid();
		this.grid_3_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_3_3_i = function () {
		var t = new Grid();
		this.grid_3_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_3_4_i = function () {
		var t = new Grid();
		this.grid_3_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_3_5_i = function () {
		var t = new Grid();
		this.grid_3_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_3_6_i = function () {
		var t = new Grid();
		this.grid_3_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_3_7_i = function () {
		var t = new Grid();
		this.grid_3_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_3_8_i = function () {
		var t = new Grid();
		this.grid_3_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 40;
		t.y = 646;
		t.layout = this._TileLayout6_i();
		t.elementsContent = [this.grid_4_0_i(),this.grid_4_1_i(),this.grid_4_2_i(),this.grid_4_3_i(),this.grid_4_4_i(),this.grid_4_5_i(),this.grid_4_6_i(),this.grid_4_7_i(),this.grid_4_8_i()];
		return t;
	};
	_proto._TileLayout6_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_4_0_i = function () {
		var t = new Grid();
		this.grid_4_0 = t;
		return t;
	};
	_proto.grid_4_1_i = function () {
		var t = new Grid();
		this.grid_4_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_4_2_i = function () {
		var t = new Grid();
		this.grid_4_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_4_3_i = function () {
		var t = new Grid();
		this.grid_4_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_4_4_i = function () {
		var t = new Grid();
		this.grid_4_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_4_5_i = function () {
		var t = new Grid();
		this.grid_4_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_4_6_i = function () {
		var t = new Grid();
		this.grid_4_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_4_7_i = function () {
		var t = new Grid();
		this.grid_4_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_4_8_i = function () {
		var t = new Grid();
		this.grid_4_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 50;
		t.y = 656;
		t.layout = this._TileLayout7_i();
		t.elementsContent = [this.grid_5_0_i(),this.grid_5_1_i(),this.grid_5_2_i(),this.grid_5_3_i(),this.grid_5_4_i(),this.grid_5_5_i(),this.grid_5_6_i(),this.grid_5_7_i(),this.grid_5_8_i()];
		return t;
	};
	_proto._TileLayout7_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_5_0_i = function () {
		var t = new Grid();
		this.grid_5_0 = t;
		return t;
	};
	_proto.grid_5_1_i = function () {
		var t = new Grid();
		this.grid_5_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_5_2_i = function () {
		var t = new Grid();
		this.grid_5_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_5_3_i = function () {
		var t = new Grid();
		this.grid_5_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_5_4_i = function () {
		var t = new Grid();
		this.grid_5_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_5_5_i = function () {
		var t = new Grid();
		this.grid_5_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_5_6_i = function () {
		var t = new Grid();
		this.grid_5_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_5_7_i = function () {
		var t = new Grid();
		this.grid_5_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_5_8_i = function () {
		var t = new Grid();
		this.grid_5_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 60;
		t.y = 666;
		t.layout = this._TileLayout8_i();
		t.elementsContent = [this.grid_6_0_i(),this.grid_6_1_i(),this.grid_6_2_i(),this.grid_6_3_i(),this.grid_6_4_i(),this.grid_6_5_i(),this.grid_6_6_i(),this.grid_6_7_i(),this.grid_6_8_i()];
		return t;
	};
	_proto._TileLayout8_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_6_0_i = function () {
		var t = new Grid();
		this.grid_6_0 = t;
		return t;
	};
	_proto.grid_6_1_i = function () {
		var t = new Grid();
		this.grid_6_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_6_2_i = function () {
		var t = new Grid();
		this.grid_6_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_6_3_i = function () {
		var t = new Grid();
		this.grid_6_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_6_4_i = function () {
		var t = new Grid();
		this.grid_6_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_6_5_i = function () {
		var t = new Grid();
		this.grid_6_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_6_6_i = function () {
		var t = new Grid();
		this.grid_6_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_6_7_i = function () {
		var t = new Grid();
		this.grid_6_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_6_8_i = function () {
		var t = new Grid();
		this.grid_6_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 70;
		t.y = 676;
		t.layout = this._TileLayout9_i();
		t.elementsContent = [this.grid_7_0_i(),this.grid_7_1_i(),this.grid_7_2_i(),this.grid_7_3_i(),this.grid_7_4_i(),this.grid_7_5_i(),this.grid_7_6_i(),this.grid_7_7_i(),this.grid_7_8_i()];
		return t;
	};
	_proto._TileLayout9_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_7_0_i = function () {
		var t = new Grid();
		this.grid_7_0 = t;
		return t;
	};
	_proto.grid_7_1_i = function () {
		var t = new Grid();
		this.grid_7_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_7_2_i = function () {
		var t = new Grid();
		this.grid_7_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_7_3_i = function () {
		var t = new Grid();
		this.grid_7_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_7_4_i = function () {
		var t = new Grid();
		this.grid_7_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_7_5_i = function () {
		var t = new Grid();
		this.grid_7_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_7_6_i = function () {
		var t = new Grid();
		this.grid_7_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_7_7_i = function () {
		var t = new Grid();
		this.grid_7_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_7_8_i = function () {
		var t = new Grid();
		this.grid_7_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 137;
		t.x = 80;
		t.y = 686;
		t.layout = this._TileLayout10_i();
		t.elementsContent = [this.grid_8_0_i(),this.grid_8_1_i(),this.grid_8_2_i(),this.grid_8_3_i(),this.grid_8_4_i(),this.grid_8_5_i(),this.grid_8_6_i(),this.grid_8_7_i(),this.grid_8_8_i()];
		return t;
	};
	_proto._TileLayout10_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 1;
		t.verticalGap = 1;
		return t;
	};
	_proto.grid_8_0_i = function () {
		var t = new Grid();
		this.grid_8_0 = t;
		return t;
	};
	_proto.grid_8_1_i = function () {
		var t = new Grid();
		this.grid_8_1 = t;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grid_8_2_i = function () {
		var t = new Grid();
		this.grid_8_2 = t;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grid_8_3_i = function () {
		var t = new Grid();
		this.grid_8_3 = t;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.grid_8_4_i = function () {
		var t = new Grid();
		this.grid_8_4 = t;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.grid_8_5_i = function () {
		var t = new Grid();
		this.grid_8_5 = t;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.grid_8_6_i = function () {
		var t = new Grid();
		this.grid_8_6 = t;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.grid_8_7_i = function () {
		var t = new Grid();
		this.grid_8_7 = t;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.grid_8_8_i = function () {
		var t = new Grid();
		this.grid_8_8 = t;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.bottom = 11;
		t.horizontalCenter = 191;
		t.label = "Start";
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -217;
		t.top = 10;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.btn_0_i(),this.btn_1_i(),this.btn_2_i(),this.btn_3_i(),this.btn_4_i(),this.btn_5_i(),this.btn_6_i(),this.btn_7_i(),this.btn_8_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.btn_0_i = function () {
		var t = new eui.Button();
		this.btn_0 = t;
		t.label = "1";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_1_i = function () {
		var t = new eui.Button();
		this.btn_1 = t;
		t.label = "2";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_2_i = function () {
		var t = new eui.Button();
		this.btn_2 = t;
		t.label = "3";
		t.width = 50;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.btn_3_i = function () {
		var t = new eui.Button();
		this.btn_3 = t;
		t.label = "4";
		t.width = 50;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.btn_4_i = function () {
		var t = new eui.Button();
		this.btn_4 = t;
		t.label = "5";
		t.width = 50;
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.btn_5_i = function () {
		var t = new eui.Button();
		this.btn_5 = t;
		t.label = "6";
		t.width = 50;
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.btn_6_i = function () {
		var t = new eui.Button();
		this.btn_6 = t;
		t.label = "7";
		t.width = 50;
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.btn_7_i = function () {
		var t = new eui.Button();
		this.btn_7 = t;
		t.label = "8";
		t.width = 50;
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.btn_8_i = function () {
		var t = new eui.Button();
		this.btn_8 = t;
		t.label = "9";
		t.width = 50;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.stateTf_i = function () {
		var t = new eui.Label();
		this.stateTf = t;
		t.bottom = 15;
		t.fontFamily = "Microsoft YaHei";
		t.text = "";
		t.x = 74;
		return t;
	};
	_proto.block_i = function () {
		var t = new eui.Rect();
		this.block = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return SudokuSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.text = "";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);