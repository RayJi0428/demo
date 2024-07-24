let mp3_list = [
  'buff_1',
  'buff_2',
  'buff_3',
  'charge_1',
  'charge_2',
  'charge_3',
  'charge_4',
  'charge_5',
  'dark_matter_1',
  'dark_matter_2',
  'dash_1',
  'dash_2',
  'debuff_1',
  'debuff_2',
  'debuff_3',
  'herb_1',
  'herb_2',
  'herb_3',
  'page_turn_1',
  'page_turn_2',
  'page_turn_3',
  'page_turn_4',
  'page_turn_5',
  'potion_1',
  'potion_2',
  'potion_3',
];


var sound_list = []

function mainLoad() {

  document.getElementById('title').textContent = 'SoundTest 2.1'

  document.getElementById('play').style.display = "block";
  let select = document.getElementById('soundlist');
  let size = 0;

  mp3_list.forEach((key) => {
    var howl = new Howl(
      {
        src: [`sound2/${key}.mp3`],
        onplayerror: function () {
          sound.once('unlock', function () {
            sound.play();
          });
        }
      });
    sound_list.push(howl);

    //key
    let op = document.createElement('option');
    op.value = key;
    op.text = key;
    select.append(op);
    op.selected = "selected";
    size++;
  })

  select.size = size;
}

Howler.autoSuspend = false;
var select_mp3 = 'ng';
var play_times = 1;
var delta = 100;
var sum = 0;


function playSound() {
  let select = document.getElementById('soundlist');
  select_mp3 = sound_list[select.selectedIndex]
  play_times = parseInt(document.getElementById('times').value);
  delta = parseInt(document.getElementById('delta').value);
  for (let i = 0; i < play_times; ++i) {
    // howl.play(select_mp3);
    setTimeout(() => {
      select_mp3.play();
      sum++;
      document.getElementById('sum').textContent = `total play times:${sum}`;
    }, delta * i);
  }
}