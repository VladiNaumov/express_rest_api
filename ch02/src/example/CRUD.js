const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db.db')


const init =() => {
    const people =
        `
        CREATE TABLE IF NOT EXISTS people(
             ID INTEGER PRIMARY KEY   AUTOINCREMENT,
             NAME           TEXT      NOT NULL,
             AGE            INT       NOT NULL,
             ADDRESS        CHAR(50)

        );

    `
    db.run(people)
}

exports.add = () => {

const people = [
    ` INSERT INTO people (NAME, AGE, ADDRESS) VALUES ('Tom', 37, 'Lahti');`,
    ` INSERT INTO people (NAME, AGE, ADDRESS) VALUES ('Kari', 23, 'Lahti'); `,
    ` INSERT INTO people (NAME, AGE, ADDRESS) VALUES ('Elma', 43, 'Lahti');`,


]

    for (const person of people) {
        console.log(person)
        db.run(person)
    }

};

exports.getAll = () => {
    db.serialize(() => {
      db.all('SELECT * FROM people',function(err,rows){
          if(err){
              console.log(err);
          }
          else{
              console.log(rows);
          }
        });
    });
}

exports.getWhere = ()=> {
    db.serialize(() => {
      db.get('SELECT * FROM people WHERE ID=3',function(err,rows){
            if(err){
                console.log(err);
            }
            else{
                console.log(rows);
            }
        });
    });

}

exports.update = () => {
   db.run('UPDATE people SET AGE = AGE - 3000');
}


exports.del =  () => {
    db.run('DELETE FROM people WHERE ID=1');

}
