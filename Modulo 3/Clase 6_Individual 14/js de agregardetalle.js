
        function contar() {
                var productos = document.getElementById("producto").value; //Array que contiene los checkbox
                var cantidad = parseInt(document.getElementById("txtcantidad").value);
                
                if (productos == "elige"){
                    alert("no ha seleccionado producto")
                } else {
                    if (cantidad<1 || cantidad>1001){
                        alert("ingrese una cantidad valida")
                    } else{
                        // if (productos == document.getElementById("demo").value){
                        //     alert("ya ingresaste este producto")
                        // }else{
                            document.getElementById("demo").innerHTML += "<li>" + productos+ " n° de articulos "+ cantidad + "</li>";
                        }
                    }
                }
    