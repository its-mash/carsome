import sql from '../../db.js';

//Task object constructor
class Inspection {
    constructor(inspection) {
        this.date = inspection.date;
        this.time = inspection.time;
    }
    static createInspection(newInspection, result) {
        sql.query("INSERT INTO inspection set ?", newInspection, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }
    static getNumberOfSlotsBookedAt(date){
        // var sqlDate=date.toJSON().slice(0,10)
        sql.query("SELECT COUNT(id) as count FROM inspection WHERE date = ?", [date], function (err, res) {
            if (err) throw err;
            console.log(date+" "+res[0].count);
            return res;
        });
    }
    static getInspectionsByDate(date, result) {
        sql.query("Select time from inspection where date = ? ", date, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
    }
    
}

export default Inspection;