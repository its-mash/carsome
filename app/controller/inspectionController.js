import Inspection from '../model/inspectionModel.js';

export function isUnavailablTime(inspection,response){
    
    getAvailableTime(new Date(inspection.date),(err,available_time)=>{
        console.log("Available times:")
        console.log(available_time+"\n")
        // console.log("ff "+available_time.includes(inspection.time))
        response(!available_time.includes(inspection.time))
    })
}   

export function create_inspection(req, res) {
    var new_inspection = new Inspection(req.body);

    if (!new_inspection.date || !new_inspection.time) {

        res.status(400).send({ error: true, message: 'Please provide date/time' });

    }
    else {
        isUnavailablTime(new_inspection,(flag)=>{
            // console.log("sss "+flag)
            if(isDisabledDate(new Date(new_inspection.date)) || flag){
                return res.send("Slots not available at "+new_inspection.time+", "+new_inspection.date)
            }
            Inspection.createInspection(new_inspection, function (err, inspection) {

                if (err)
                    res.send(err);
                res.json(inspection);
            });
        })

    }
}
export function getSqlDate(date){
    return date.toJSON().slice(0,10)
}
export function isDisabledDate(date){
    var daysOfWeek=date.getDay()
    var sqlDate=getSqlDate(date)
    var slot_booked_all_day=Inspection.getNumberOfSlotsBookedAt(sqlDate); 
    var now=new Date()

    var next=new Date()
    next.setDate(next.getDate()+23)

    return date < now || date> next || daysOfWeek==0 || (daysOfWeek==6 && slot_booked_all_day>=72) || (daysOfWeek!=6 && slot_booked_all_day>=36)
}

export function disabled_dates(req,res){
    var today=new Date()
    var disabledDates=[]
    for(var i=0;i<21;i++){
        if(isDisabledDate(new Date(today)))
            disabledDates.push(getSqlDate(today))
        today.setDate(today.getDate()+1)
    }
    res.json(disabledDates)

}

export async function getAvailableTime(date,response){
       Inspection.getInspectionsByDate(getSqlDate(date), function (err, inspections) {
        if (err)
            response(err,null);
        var timeMap=new Map(
            [
                ['9 AM',0],
                ['9.30 AM',0],
                ['10 AM',0],
                ['10.30 AM',0],
                ['11 AM',0],
                ['11.30 AM',0],
                ['12 PM',0],
                ['12.30 PM',0],
                ['1 PM',0],
                ['1.30 PM',0],
                ['2 PM',0],
                ['2.30 PM',0],
                ['3 PM',0],
                ['3.30 PM',0],
                ['4 PM',0],
                ['4.30 PM',0],
                ['5 PM',0],
                ['5.30 PM',0]
            ]
        )

        inspections.forEach(element => {
            timeMap.set(element.time,timeMap.get(element.time)+1)
        });
        console.log("timeMap data:")
        console.log(JSON.stringify( [...timeMap])+"\n")

        var maxPerSlots=date.getDay()==6?4:2;
        // console.log(maxPerSlots)
        var available_time=[]
        timeMap.forEach((value,key)=>{
            if(value<maxPerSlots)available_time.push(key)
         }
        )
        response(null,available_time)
    }); 
}


export function available_slots(req, res) {
    var date=req.params.date
    try{
        date=new Date(date)
    }
    catch (err){
        return res.send(err)
    }
    if(isDisabledDate(date)){
        return res.send("Inspection slots aren not available on given day")
    }
    getAvailableTime(date,(err,available_time)=>{
        if(err)
            return res.send(err)
        console.log("Available times:")
        console.log(available_time+"\n")
        res.json(available_time)
    })

}

