class Metronome {
  constructor(tempo = 120) {
    this.audioContext = null;
    this.notesInQueue = [];
    this.currentQuarterNote = 0;
    //store tempo in function
    this.tempo = tempo;
    //setting how frequently to call scheduling funtion in milliseconds
    this.lookahead = 25;
    //schedule audio ahead in seconds
    this.scheduleAheadTime = 0.1;
    //set next note due time
    this.nextNoteTime = 0.0;
    //load function without audio running
    this.isRunning = false;
    this.intervalID = null;
  }

  nextNote() {
    //divide 60 seconds by current tempo
    let secondsPerBeat = 60.0 / this.tempo;
    //add beat length to the last beat time
    this.nextNoteTime += secondsPerBeat;
    //increment the beat number, use if to wrap back to 0
    this.currentQuarterNote++;
    if (this.currentQuarterNote == 4) {
      this.currentQuarterNote == 0;
    }
  }

  scheduleNote(beatNumber, time) {
    //load note in queue even if it's not running
    this.notesInQueue.push({ note: beatNumber, time: time });
    //create an oscillator
    const osc = this.audioContext.createOscillator();
    const envelope = this.audioContext.createGain();

    osc.frequency.value = beatNumber % 4 == 0 ? 1000 : 800;
    envelope.gain.value = 1;
    envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);

    osc.connect(envelope);
    envelope.connect(this.audioContext.destination);

    osc.start(time);
    osc.stop(time + 0.03);
  }

  scheduler() {
    // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
    while (
      this.nextNoteTime <
      this.audioContext.currentTime + this.scheduleAheadTime
    ) {
      this.scheduleNote(this.currentQuarterNote, this.nextNoteTime);
      this.nextNote();
    }
  }

  start() {
    if (this.isRunning) return;

    if (this.audioContext == null) {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
    }

    this.isRunning = true;

    this.currentQuarterNote = 0;
    this.nextNoteTime = this.audioContext.currentTime + 0.05;

    this.intervalID = setInterval(() => this.scheduler(), this.lookahead);
  }

  stop() {
    this.isRunning = false;

    clearInterval(this.intervalID);
  }

  startStop() {
    if (this.isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }
}
