$("#form").validate({
    rules:{
        name:{
            minlength: 2,
        },
        email:{
            minlength: 2,
            email: true
        },
        subject:{
            minlength: 4
        },
        message:{
            minlength: 10
        }
    },
    message:{
        name:{
            minlength: "Harus lebih dari 3 huruf"
        },
        email:{
            minlength: "Harus lebih dari 2 huruf"
        },
        subject:{
            minlength: "Harus lebih dari 4 huruf"
        },
        message:{
            minlength: "Harus lebih dari 10 huruf"
        },
    },

    submitHandler: function(form) {
      form.submit();
    }
   });