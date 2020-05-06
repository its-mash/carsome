import * as inspection from '../controller/inspectionController.js'

export default function(app) {


  app.route('/inspection')
    .post(inspection.create_inspection);
    
  app.route('/disabled-dates')
    .get(inspection.disabled_dates)
    
  app.route('/available-slots/:date')
    .get(inspection.available_slots)
};