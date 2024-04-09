let config = {
    "src": [
        "sound\\all_music.ogg?1712681804652",
        "sound\\all_music.mp3?1712681804652"
    ],
    "sprite": {
        "mixkit-classic-click-1117": [
            0,
            287.98185941043084
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