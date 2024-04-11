let config = {
  "src": [
    "sound\\all_music.ogg?1712812594256",
    "sound\\all_music.mp3?1712812594256"
  ],
  "sprite": {
    "buff_1": [
      0,
      2063.673469387755
    ],
    "buff_2": [
      4000,
      1306.1224489795916
    ],
    "buff_3": [
      7000,
      1306.1224489795916
    ],
    "charge_1": [
      10000,
      2063.673469387755
    ],
    "charge_2": [
      14000,
      2063.673469387755
    ],
    "charge_3": [
      18000,
      2063.673469387755
    ],
    "charge_4": [
      22000,
      2063.673469387755
    ],
    "charge_5": [
      26000,
      1933.0612244897977
    ],
    "dark_matter_1": [
      29000,
      2559.9999999999986
    ],
    "dark_matter_2": [
      33000,
      2821.2244897959167
    ],
    "dash_1": [
      37000,
      1697.9591836734685
    ],
    "dash_2": [
      40000,
      1697.9591836734685
    ],
    "debuff_1": [
      43000,
      1933.0612244897977
    ],
    "Debuff_2": [
      46000,
      1306.1224489795932
    ],
    "Debuff_3": [
      49000,
      1306.1224489795932
    ],
    "herb_1": [
      52000,
      2063.6734693877515
    ],
    "herb_2": [
      56000,
      2063.6734693877515
    ],
    "herb_3": [
      60000,
      1567.3469387755076
    ],
    "page_turn_1": [
      63000,
      1567.346938775515
    ],
    "page_turn_2": [
      66000,
      1567.346938775515
    ],
    "page_turn_3": [
      69000,
      1201.6326530612246
    ],
    "page_turn_4": [
      72000,
      679.1836734693817
    ],
    "page_turn_5": [
      74000,
      679.1836734693817
    ],
    "potion_1": [
      76000,
      1802.4489795918298
    ],
    "potion_2": [
      79000,
      1802.4489795918298
    ],
    "potion_3": [
      82000,
      4075.1020408163326
    ]
  }
}
let howl = new Howl(config);
Howler.autoSuspend = false;
howl.once('load', () => { this.onConfigLoadComplete(); });
function onConfigLoadComplete() {
  document.getElementById('play').style.display = "block";
  let select = document.getElementById('soundlist');
  let size = 0;
  var aa = {}
  for (let key in config.sprite) {
    let op = document.createElement('option');
    op.value = key;
    op.text = key;
    select.append(op);
    op.selected = "selected";
    size++;
  }

  select.size = size;
}
var select_mp3 = 'ng';
var play_times = 1;
var delta = 100;
var sum = 0;
function playSound() {
  let select = document.getElementById('soundlist');
  select_mp3 = select.options[select.selectedIndex].value;
  play_times = parseInt(document.getElementById('times').value);
  delta = parseInt(document.getElementById('delta').value);
  for (let i = 0; i < play_times; ++i) {
    // howl.play(select_mp3);
    setTimeout(() => {
      howl.play(select_mp3);
      sum++;
      document.getElementById('sum').textContent = `total play times:${sum}`;
    }, delta * i);
    console.error(`play ${i}`);
  }
}