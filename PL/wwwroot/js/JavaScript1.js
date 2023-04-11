$(document).ready(function () {
    GetAll();
});

function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api/',
        success: function (results) {
            $('#table_usuario tbody');
            var filas =
                '<tr>' +  //Intsancia de cada una de las entiedades que getall obtiene
                + '<a href="#" onclick="GetById(' + results.results[0].id.value + ')">' + '<i class="bi bi-pencil-square" style="color: black"></i>' + '</a> '
                + "<td class='text-center'>" + "<img src=" + results.results[0].picture.medium + ">" + "</td>"
                + "<td class='text-center'>" + results.results[0].name.first + "</ td>"
                + "<td class='text-center'>" + results.results[0].name.last + "</ td>"
                + "<td class='text-center'>" + results.results[0].email + "</ td>"
                + "<td class='text-center'>" + results.results[0].gender + "</ td>"
               
                // + '<td class="text-center"> <a class="btn btn-danger" href="#" onclick="Eliminar(' + usuario.id.value + ')"><i class="fa-regular fa-trash-can"></i></a></td>'
                + "</tr>";
            $("#table_usuario tbody").append(filas);

        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};


function Borrar() {
    $('#table_usuario tbody').empty();
};