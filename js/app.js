const useNames = []// Array para almacenar los nombre de los usuarios registrados
const useLastNames = []; // Array para almacenar los apellidos
const rolPosition = []; //Array para almacenar los nombres de las vacanes registradas

// Funcion para crear la ficha de usuario registrado
function fichaUsuario() { //genera la ficha del usuario para agregar sus datos
    var uName = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var positionTitle = document.getElementById("positionTitle").value;
    var createFicha = Object.create;
    useNames.push(uName);
    useLastNames.push(lastName);
    rolPosition.push(positionTitle);
    
    //Funcion de creacion de tablas de datos
    function createTablesData() {
        var getDataBox = document.getElementById("dataBox");
        var tableStructure = {
        tRow: document.createElement("tr"),
        tCell1: document.createElement("td"),
        tCell2: document.createElement("td"),
        tCell3: document.createElement("td"),
        sDataName: document.createTextNode(uName),
        sDataLastName: document.createTextNode(lastName),
        sDataTitle: document.createTextNode(positionTitle),
    }
    
    getDataBox.appendChild(tableStructure.tRow);
    tableStructure.tRow.appendChild(tableStructure.tCell1);
    tableStructure.tCell1.appendChild(tableStructure.sDataName);
        tableStructure.tRow.appendChild(tableStructure.tCell2);
    tableStructure.tCell2.appendChild(tableStructure.sDataLastName);
        tableStructure.tRow.appendChild(tableStructure.tCell3);
    tableStructure.tCell3.appendChild(tableStructure.sDataTitle);
} // TErmina la funcion para crear tablas de datos
    //--
    //Validacion de datos Ingresados de la funcion fichaUsuario();
    if (uName == "" && lastName == "") {
        alert("Need to add a name and lastname");
        
    }
    else {
        createTablesData();
    }
    console.log(useNames);
    console.log(useLastNames);
    console.log(rolPosition);
}

function buscadorWorkers() {
    var buscador = document.getElementById("buscador").value;
    var uNameDataFound = useNames.find(function(uNameData) {
             return uNameData === buscador;
             });
    if(buscador == "") {
        alert("Intenta Ingresando algun datos para la busqueda");
    }
    else {
        console.log(uNameDataFound);
    }
}