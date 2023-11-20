const int potPin = A6;
const int photoPin = A5;


const int photoLED = 2;
const int potLED = A7;
const int confirmLED = 3;

void setup() {
  // put your setup code here, to run once:
 pinMode(potLED, OUTPUT);
  pinMode(photoLED, OUTPUT);
  pinMode(confirmLED, OUTPUT);

 Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:

int potValue = analogRead(potPin);
int potledvalue = map(potValue, 0, 1023, 0, 255);

int photoValue = analogRead(photoPin);
//int photoledValue = map(photoValue, 0, 1023, 0, 255);

 Serial.print("pot value map: ");
  Serial.println(potledvalue);  

  //Serial.print("photo value map: ");
  //Serial.println(photoledValue);

Serial.println(photoValue);

if(potledvalue >= 190 && potledvalue <= 200){
digitalWrite(potLED, HIGH);
}
else{
digitalWrite(potLED, LOW);
}

if(photoValue >= 700 && photoValue <= 800){
  digitalWrite(photoLED, HIGH);
}
else{
  digitalWrite(photoLED, LOW);
}

if (potledvalue >= 190 && potledvalue <= 200 && photoValue >= 700 && photoValue <= 800){
  digitalWrite(confirmLED, HIGH);
}
else{
  digitalWrite(confirmLED, LOW);
}

delay(25);

}
