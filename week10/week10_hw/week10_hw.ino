int const photoPin = A4;
int const potPin = A6;

int const photoLED = 2;
int const potLED = 21;
int const confirmLED = 3;

int photoValue = 0;
int potValue = 0;

void setup() {
  // put your setup code here, to run once:

  pinMode(photoLED, OUTPUT);
  pinMode(potLED, OUTPUT);
  pinMode(confirmLED, OUTPUT);

  pinMode(photoPin, INPUT);
  pinMode(potPin, INPUT);

  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:

int potValue = analogRead(potPin);
int photoValue = analogRead(photoPin);

int potLightup = map(potValue, 0, 1023, 0, 255);
int photoLightup = map(photoValue, 0, 1023, 0, 255);

analogWrite(potLED, potLightup);
analogWrite(photoLED, photoLightup);
delay(10);

if (potLightup == photoLightup){
  digitalWrite(confirmLED, HIGH);
}

Serial.print("pot value: ");
Serial.println(potValue);

Serial.print("mapped value pot: ");
Serial.println(potLightup);

Serial.print("mapped value photo: ");
Serial.println(photoLightup);

Serial.print("photo value: ");
Serial.println(photoValue);

}
