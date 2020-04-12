{
    console.log('script loaded');
    $('#form-id').submit(function(e)
    {
        e.preventDefault();
        $.ajax(
            {
                type:'post',
                url:'/task/create',
                data:$('#form-id').serialize(),
                success:function(data)
                {
                    console.log('data from ajax received:',data);
                    let newtask=newtaskdom(data.task);
                    $('#task-container').append(newtask);
                },
                error:function(err)
                {
                    console.log(err.responseText);
                }

            }
        );
        
    });

    $('#delete-button').click(function(e)
    {
        var checkboxes=document.querySelectorAll('#to-delete');
        checkboxes.forEach(deletetask);

    });
    function deletetask(checkbox)
    {
        if(checkbox.checked)
        {
            console.log(checkbox.value);
            $(`#task-${checkbox.value}`).remove();
            $.ajax(
                {
                    type:'get',
                    url:`/task/delete?id=${checkbox.value}`,
                    
                    success:function(data)
                    {
                      console.log('task deleted');
                    },
                    error:function(err)
                    {
                        console.log(err.responseText);
                    }
    
                }
            );
        }
    }
    let newtaskdom=function(task)
    {
        return $(`<div class="task-card" id="task-${task._id}">
    <h5 class="card-Desc">${task.Desc}</h5>
      <div class="card-body">
      <input id="to-delete" type="checkbox" value="${ task._id }">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text">${task.Date }</p>
        <button class="btn btn-primary ${task.priority}">${task.priority}</button>
      </div>
    </div>`);
    }

}