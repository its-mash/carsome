import Task from '../model/appModel.js';

export function list_all_tasks(req, res) {
    Task.getAllTask(function (err, task) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', task);
        res.send(task);
    });
}



export function create_a_task(req, res) {
    var new_task = new Task(req.body);

    //handles null error 
    if (!new_task.task || !new_task.status) {

        res.status(400).send({ error: true, message: 'Please provide task/status' });

    }
    else {

        createTask(new_task, function (err, task) {

            if (err)
                res.send(err);
            res.json(task);
        });
    }
}


export function read_a_task(req, res) {
    Task.getTaskById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
}


export function update_a_task(req, res) {
    Task.updateById(req.params.taskId, new Task(req.body), function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
}


export function delete_a_task(req, res) {


    Task.remove(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
}