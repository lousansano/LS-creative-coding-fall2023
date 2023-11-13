const int headPin = 4; // pin connected to my head button
const int restLED = 21; // rest status LED light
const int headLED = 2; // button press confirmation LED

int headState = 0; // setting the default position of the button to off

void setup() {

  pinMode(restLED, OUTPUT); // setting rest and head status LEDs to output
  pinMode(headLED, OUTPUT);
  pinMode(headPin, INPUT); // reading from button

  //Serial.begin(9600);

}

void loop() {

  headState = digitalRead(headPin); //setting headState int to read state of the button pin

  if (headState == HIGH){ // if high, illuminate the rest LED
    digitalWrite(restLED, HIGH);
    digitalWrite(headLED, LOW);

  }else if (headState == LOW){ // if low, illuminate the button confirmation LED
    digitalWrite(headLED, HIGH);
    digitalWrite(restLED, LOW);
  }

}
