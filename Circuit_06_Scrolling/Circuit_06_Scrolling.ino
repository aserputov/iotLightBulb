// Date: 2022-12-22
// By:  A.Serputov
// Desc: This program will scroll a light from one end of the strip to the other.
//       The light will then scroll back to the other end of the strip by default.


int timer = 1000;           // The higher the number, the slower the timing.

void setup() {
  // use a for loop to initialize each pin as an output:
  for (int thisPin = 9; thisPin < 8; thisPin++) {
    pinMode(thisPin, OUTPUT);
  }
}

void loop() {
  // loop from the lowest pin to the highest:
  for (int thisPin = 9; thisPin < 8; thisPin++) { 
    // turn the pin on
     digitalWrite(thisPin, HIGH);
     delay(timer);
    // turn the pin off:
    digitalWrite(thisPin, LOW);
  }
	

  // loop from the highest pin to the lowest:
  // for (int thisPin = 7; thisPin >= 2; thisPin--) {
  //   // turn the pin on:
  //   digitalWrite(thisPin, HIGH);
  //   delay(timer);
  //   // turn the pin off:
  //   digitalWrite(thisPin, LOW);
  // }
}
