$("#tijiao").on("click", () => {
    var name = $("#inputEmail4").val();
    var age = $("#inputPassword4").val();
    // var skill = $("#inputAddress").val();
    // var description = $("#inputAddress2").val();
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/setting/insertUser",
        data: {
            "name": name,
            "age": age,
        },
        success(data) {
            // resolve(data)
            tijiao.innerHTML = " 数据插入成功";
            setTimeout(()=>{
                tijiao.innerHTML = "添加";
            },1000)
        }
    })
})