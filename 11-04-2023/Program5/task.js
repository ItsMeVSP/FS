function todo() 
    {
        const btn=document.getElementById("addBtn");
        const showBtn=document.getElementById("showBtn");
        btn.addEventListener('click',function handleClick()
        {
            var actual_text=document.getElementById("addTask").value;
            var processed_text=actual_text+"\r\n";
            document.getElementById("list").value+=processed_text;
            document.getElementById("addTask").value="";
            console.log(actual_text,processed_text);
        });

        showBtn.addEventListener('click',function()
        {
            let showTask=document.getElementById("showTask");
            if(showTask.value!='') 
            {
                showTask.value='';
            }
            let textArea=document.getElementById("list");
            let lines=textArea.value.split("\n");
            let text;
            for (let i= 0;i<lines.length;i++) 
            {  
                text=lines[0];
            }
            showTask.value=showTask.value+text;
            textArea.value='';
            for (let i= 0;i<lines.length;i++) 
            {  
                document.getElementById("list").value+=lines[i]+"\n";
            }
        });
}