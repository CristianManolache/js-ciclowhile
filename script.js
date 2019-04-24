// array contenente cognomi random
var cognomi = ['Manolache', 'Jebali', 'Lanzone', 'Puccetti','Turcan','Icardi','Lisa','Arcangeli','Ronaldo'];

// cognome preso in input
var nuovoCognome = prompt('Inserisci il tuo cognome');

// dicchiaro variabili globali
var trovato;

trovato = false;
i = 0;
while (i < cognomi.length && !trovato) {
  if (nuovoCognome === cognomi[i]) {
    trovato = true;
  }
  console.log(trovato);
  console.log(i);
  i++;
}
if (trovato == true) {
  console.log("Il cognome e presente nella lista");
} else {
  console.log("Il cognome non e presente nella lista");
  console.log('Abbiamo inserito il tuo nome nell database');
  cognomi.push(nuovoCognome);
}
cognomi.sort();
console.log(cognomi);

var position = cognomi.indexOf(nuovoCognome);
console.log('La posizione del nome si trova:');
console.log(position);
