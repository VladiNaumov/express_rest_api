

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('BD.db')


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

add = () => {
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

getAll = () => {

    const sql = `SELECT * FROM people`;

    db.all(sql,function(err,rows){
        if(err){
            console.log(err);
        }
        else{
            console.log(rows);
        }
    });

}


getWhere = ()=> {

    const sql = 'SELECT * FROM people WHERE id=?';
    const id = 1

      db.get(sql, [id],function(err,rows){
            if(err){
               return this.err;
            }
            else{
               return  rows;
            }
        });

}

update = () => {
   db.run('UPDATE people SET AGE = AGE - 3000');
}

del =  () => {
    db.run('DELETE FROM people WHERE ID=1');

}

