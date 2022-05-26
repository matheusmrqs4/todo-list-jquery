$(document).ready(function(){
    $('#task').focus()
       $(document).on('keyup', '#task',  function(e){
            let keycode = e.which ? e.which : e.keycode
                if(keycode === 13){
                    let inputval = $('#task').val()

                    if (inputval != ' '){
                        $('ul').append('<li>' + inputval + ' <i class="fas fa-check"></i>  <i class="fas fa-trash"></i>  <i class="fas fa-pencil-alt"></i> </li>')
                        
                    }
                        $('#task').val(' ')

                        $('ul').on('click', '.fa-trash', function(){
                            $(this).parent('li').remove()
                        })

                        $('ul').on('click', '.fa-check', function(){
                            $(this).parent('li').addClass('checked')
                        })

                        $('ul').on('click', '.fa-pencil-alt', function(){
                        
                            let parent = $(this).parent()
                            let oldVal = parent.text()

                            $('.editinput').focus()
                            $('.checked').css("text-decoration", "none")
                            
                            parent.html("<input type='text' class='editinput'>")
                            $('.editinput').keyup(function(e){
                                let keycode = e.which ? e.which : e.keycode
                                    if(keycode === 13){
                                        if($(this).val() === "") {
                                            parent.html(oldVal + ' <i class="fas fa-check"></i>  <i class="fas fa-trash"></i>  <i class="fas fa-pencil-alt"></i>');	
                                        } else {
                                            let newVal = $(this).val();
                                            parent.html(newVal + ' <i class="fas fa-check"></i>  <i class="fas fa-trash"></i>  <i class="fas fa-pencil-alt"></i>');
                                        }
                                    }
                            })

                        })

                       
                }
       })

// setando a Data atual:
       let currentDate = $('#date')

       let today = new Date()
       let day = `${today.getDate() < 10 ? "0" : " "} ${today.getDate()}`

       let month = `${(today.getMonth() + 1) < 10 ? "0" : " "}${today.getMonth() + 1}`
       let year = today.getFullYear()

       $(currentDate).text(`${day}/${month}/${year}`)
   })