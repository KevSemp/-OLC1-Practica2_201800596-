var Tipo = {
    Reservada_Int:1,
    Reservada_Double:2,
    Cadena_char:3,
    Reservada_Char:4,
    Reservada_String:5,
    Reservada_Bool:6,
    Reservada_Class:7,
    Reservada_Graficar:8,
    Reservada_Static:9,
    Reservada_Void:10,
    Reservada_Main:11,
    Reservada_Console:13,
    Reservada_WriteLine:14,
    Reservada_If:15,
    Reservada_Else:16,
    Reservada_Switch:17,
    Reservada_Case:18,
    Reservada_Break:19,
    Reservada_Default:20,
    Reservada_For:21,
    Reservada_While:22,
    Reservada_New:23,
    Reservada_Continue:24,
    Reservada_Return:25,
    Cadena_Texo:26,
    Numero:27,
    Decimal:28,
    Identificador:29,
    Comentarios:30,
    Signo_Llave_izq:31,
    Signo_Llave_der:32,
    Signo_Corchete_izq:33,
    Signo_Corchete_der:34,
    Signo_Parentesis_izq:35,
    Signo_Parentesis_der:36,
    Signo_ComentarioLinea:37,
    Signo_ComentarioParrafo:38,
    Dos_Puntos:39,
    Punto_Coma:40,
    Punto:41,
    Coma:42,
    Operador_Suma:43,
    Operador_Resta:44,
    Operador_Multi:45,
    Operador_Division:46,
    Operador_Diferencia:47,
    Operador_Igual:48,
    Operador_MayorQue:49,
    Operador_MenorQue:50,
    Operador_IgualIgual:51,
    Operador_Aumento:52,
    Operador_MenosMenos:53,
    Operador_MenorIgual:54,
    Operador_MayorIgual:55,
    Signo_Comentario:56,
    Reservada_Do:57,
    Signo_Not:58,
    Comparador_And:59,
    Comparador_Or:60,
    ULTIMO:61,

    properties: {
      1: {name: "Reservada int", value: 1, code: "int"},
      2: {name: "Reservada Double", value: 2, code: "double"},
      3: {name: "Cadena Char", value: 3, code: "cadena char"},
      4: {name: "Reservada Char", value: 4, code: "char"},
      5: {name: "Reservada String", value: 5, code: "string "},
      6: {name: "Reservada Bool", value: 6, code: "bool"},
      7: {name: "Reservada Class", value: 7, code: "class"},
      8: {name: "Reservada Graficar", value: 8, code: "fff"},
      9: {name: "Reservada Static", value: 9, code: "static"},
      10: {name: "Reservada Void", value: 10, code: "void"},
      11: {name: "Reservada Main", value: 11, code: "main"},
      13: {name: "Reservada Console", value: 13, code: "Console"},
      14: {name: "Reservada WriteLine", value: 14, code: "WriteLine"},
      15: {name: "Reservada IF", value: 15, code: "if"},
      16: {name: "Reservada else", value: 16, code: "else"},
      17: {name: "Reservada Switch", value: 17, code: "switch"},
      18: {name: "Reservada Case", value: 18, code: "case"},
      19: {name: "Reservada Break", value: 19, code: "break"},
      20: {name: "Reservada Default", value: 20, code: "default"},
      21: {name: "Reservada For", value: 21, code: "for"},
      22: {name: "Reservada While", value: 22, code: "while"},
      23: {name: "Reservada New", value: 23, code: "new"},
      24: {name: "Reservada Continue", value: 24, code: "continue"},
      25: {name: "Reservada Return", value: 25, code: "return"},
      26: {name: "Cadena Texto", value: 26, code: "cadena"},
      27: {name: "Numero", value: 27, code: "numero"},
      28: {name: "Decimal", value: 28, code: "decimal"},
      29: {name: "Identificador", value: 29, code: "identificador"},
      30: {name: "Comentario", value: 30, code: "comentario"},
      31: {name: "Llave Izquierda", value: 31, code: "["},
      32: {name: "Llave Derecha", value: 32, code: "]"},
      33: {name: "Corchete Izquierdo", value: 33, code: "{"},
      34: {name: "Corchete Derecho", value: 34, code: "}"},
      35: {name: "Parentesis Izquierdo", value: 35, code: "("},
      36: {name: "Paretesis Derecho", value: 36, code: ")"},
      37: {name: "Comentario Linea", value: 37, code: "comentario L"},
      38: {name: "Comentario Parrafo", value: 38, code: "comentario P"},
      39: {name: "Dos Puntos", value: 39, code: ":"},
      40: {name: "Punto y Coma", value: 40, code: ";"},
      41: {name: "Punto", value: 41, code: "."},
      42: {name: "Coma", value: 42, code: ","},
      43: {name: "Suma", value: 43, code: "+"},
      44: {name: "Resta", value: 44, code: "-"},
      45: {name: "Multiplicacion", value: 45, code: "*"},
      46: {name: "Division", value: 46, code: "/"},
      47: {name: "Diferencia", value: 47, code: "!="},
      48: {name: "Igual", value: 48, code: "="},
      49: {name: "Mayor que", value: 49, code: ">"},
      50: {name: "Menor que", value: 50, code: "<"},
      51: {name: "Igual Igual", value: 51, code: "=="},
      52: {name: "Aumento", value: 52, code: "++"},
      53: {name: "Menos Menos", value: 53, code: "--"},
      54: {name: "Menor Igual", value: 54, code: "<="},
      55: {name: "Mayor Igual", value: 55, code: ">="},
      56: {name: "Comentario", value: 56, code: "/"},
      57: {name: "Reservada Do", value: 57, code: "do"},
      58: {name: "Signo Not", value: 58, code: "!"},
      59: {name: "Comparador and", value: 59, code: "&&"},
      60: {name: "Comparador or", value: 60, code: "||"},
      61: {name: "ultimo", value: 61, code: "ultimo"}
    
    }
  };


  var TipoH = {
    Etiqueta_Html:1,
    Etiqueta_Head:2,
    Etiqueta_Body:3,
    Etiqueta_Title:4,
    Etiqueta_Div:5,
    Etiqueta_Br:6,
    Etiqueta_P:7,
    Etiqueta_H1:8,
    Etiqueta_Button:9,
    Etiqueta_Label:10,
    Etiqueta_Input:11,
    texto:12,
    Style:13,
    Igual:14,
    Definicion:15,
    SignoCierre:16,
    SignoAbre:17,
    Signo_Fin:19,
    ULTIMO:20,

 

    properties: {
      1: {name: "Etiqueta html", value: 1, code: "int"},
      2: {name: "Etiqueta head", value: 2, code: "double"},
      3: {name: "Etiqueta body", value: 3, code: "cadena char"},
      4: {name: "Etiqueta title", value: 4, code: "char"},
      5: {name: "Etiqueta div", value: 5, code: "string "},
      6: {name: "Etiqueta br", value: 6, code: "bool"},
      7: {name: "Etiqueta p", value: 7, code: "class"},
      8: {name: "Etiqueta h1", value: 8, code: "fff"},
      9: {name: "Etiqueta button", value: 9, code: "static"},
      10: {name: "Etiqueta Label", value: 10, code: "void"},
      11: {name: "Etiqueta Input", value: 11, code: "main"},
      12: {name: "Texto", value: 23, code: "Console"},
      
      
    
    }
  };



var Error = class {
    Numero;
    TIP;
   // tipotOKEN=TIPO;
    Fila;
    Columna;
    Descripcion;


    constructor(Numero,TIP,Fila,Columna,Descripcion) {
      
      this.Numero = Numero;
      this.TIP = TIP;
      this.Fila = Fila;
      this.Columna = Columna;
      this.Descripcion = Descripcion;
    
     
    }
  }

var Token = class {
    TIPO = Tipo;
    Valor;
    Numero;
    id;
    Fila;
    Columna;
    

    constructor(TIPO,Valor,Numero,id,Fila,Columna) {
      this.TIPO = TIPO;
      this.Valor = Valor;
      this.Numero = Numero;;
      this.id = id;
      this.Fila = Fila;
      this.Columna = Columna;
     
    }
  }



  var TokenH = class {
    TIPOH = TipoH;
    Valor;


    constructor(TIPOH,Valor) {
      this.TIPOH = TIPOH;
      this.Valor = Valor;

    }
  }

  
  var Variable = class
  {
    TIPODATO;
    Nombre; 
    Fila;

     constructor(TIPODATO,Nombre,Fila){
          this.TIPODATO=TIPODATO;
          this.Nombre=Nombre;
          this.Fila=Fila;
     }
  }
  
  var Html = class
  {
    Codigo;
    

     constructor(Codigo){
          this.Codigo=Codigo;

     }
  }


//Datos analizador
var cadena = "";
var estado;
var auxLex;
var id = 1;
var linea=1;
var contCol = 0;
var contId = 1;
var auxCol = 0;
var contEr = 0;
var pasada=0;
var errorId = true;
var i;
var f; 
Salida = new Array();
Errores =  new Array();
Variables =  new Array();
Codigos = new Array();
SalidaH = new Array();


function scanneardos(entrada){
    entrada = entrada + "#";
    auxLex="";
    f="";
    estado=0;
    id = 1;
    linea=1;
    contEr = 0;
    contCol = 0;
    contId = 1;
    auxCol = 0;
    
  
    console.log(entrada);
    for(i=0;i<entrada.length;i++){
        
        f = entrada.charAt(i)
      
        switch (estado) {
            case 0:
              if(isLetter(f)){               
                estado = 1;
                auxLex += f;
              }else if(isDigit(f)){
                estado = 3;
                auxLex += f;

              }else if(f=="\""){
                  console.log("entroComillas");
                estado = 2;
              }
              else if (f=="\n")
              {
                  estado = 0;

                  linea = linea + 1;
                  if (linea > 1)
                  {
                      auxCol = (i - 1);

                  }

              }
              else if (f ==" ")
              {
                  estado = 0;

              }
              else if (f=="\r")
              {

                  estado = 0;

              }
              else if (f=="\t")
              {
                  estado = 0;

              }
              else if (f=="\b")
              {
                  estado = 0;

              }
              else if (f=="\f")
              {
                  estado = 0;

              }
                
              else if (f =="(")
              {
                  console.log("entro");
                  auxLex += f;
                  agregarToken(Tipo.Signo_Parentesis_izq, contId, 22, linea);
                  contId = contId + 1;
              }
              else if (f ==")")
              {
                  auxLex += f;
                  agregarToken(Tipo.Signo_Parentesis_der, contId, 23, linea);
                  contId = contId + 1;
              }
              else if (f =="[")
              {
                  auxLex += f;
                  agregarToken(Tipo.Signo_Llave_izq, contId, 24, linea);
                  contId = contId + 1;
              }
              else if (f =="]")
              {
                  auxLex += f;
                  agregarToken(Tipo.Signo_Llave_der, contId, 25, linea);
                  contId = contId + 1;
              }

              else if (f =="{")
              {
                  auxLex += f;
                  agregarToken(Tipo.Signo_Corchete_izq, contId, 26, linea);
                  contId = contId + 1;
              }
              else if (f =="}")
              {
                  auxLex += f;
                  agregarToken(Tipo.Signo_Corchete_der, contId, 27, linea);
                  contId = contId + 1;
              }

              //Operadores aritmeticos
              else if (f =="+")
              {
                  estado = 4;
                  auxLex += f;

              }
              else if (f =="-")
              {
                  estado = 5;
                  auxLex += f;
              }
              else if (f =="*")
              {
                  auxLex += f;
                  agregarToken(Tipo.Operador_Multi, contId, 30, linea);
                  contId = contId + 1;
              }
              else if (f =="/")
              {
                  estado = 6;
                  auxLex += f;
              }
              else if (f =="=")
              {
                  estado = 7;
                  auxLex += f;
              }
              //otros operadores
              else if (f =="<")
              {
                  estado = 8;
                  auxLex += f;
              }
              else if (f ==">")
              {
                  estado = 9;
                  auxLex += f;
              }


              else if (f =="!")
              {
                  estado = 10;
                  auxLex += f;
              }
              
              else if (f =="&")
              {
                  estado = 16;
                  auxLex += f;
              }
              
              else if (f =="|")
              {
                  estado = 17;
                  auxLex += f;
              }
              else if (f ==":")
              {
                  auxLex += f;
                  agregarToken(Tipo.Dos_Puntos, contId, 0, linea);
                  contCol = contCol + 1;
                  contId = contId + 1;
              }
              else if (f ==".")
              {
                  auxLex += f;
                  agregarToken(Tipo.Punto, contId, 0, linea);
                  contCol = contCol + 1;
                  contId = contId + 1;
              }
              else if (f ==";")
              {
                  auxLex += f;
                  agregarToken(Tipo.Punto_Coma, contId, 0, linea);
                  contId = contId + 1;
              }
              else if (f =="\'")
              {
                  estado = 15;
                  
              }
              else if (f ==",")
              {
                  auxLex += f;
                  agregarToken(Tipo.Coma, contId, 0, linea);
                  contId = contId + 1;
              }else{
               
                
                if (f == "#" && i == entrada.length - 1)
                {
                    console.log("El analisis ha termiando");

                }
                else
                {
            
                if (linea > 1)
                {
                    contCol = (i - 1) - auxCol;
                }
                contEr = contEr + 1;

                Errores.push(new Error(contEr,"Error Lexico", linea, contCol, "el caracter " +"'"+f+"'"+" no pertenece al lenguaje"));
                estado = 0;
                crear = false;

            }
              }
             
              break;
            case 1:
                    if (isLetter(f) || isDigit(f) || f == "_")

                        {

                            if (f == "\n")
                            {

                                linea = linea + 1;
                            }
                            auxLex += f;

                        }
                        else
                        {


                            auxDatos = auxLex;
                            if (auxLex == "int" || auxLex == "double" || auxLex == "char" || auxLex == "string" || auxLex == "String"
                                || auxLex == "bool" || auxLex == "class" || auxLex == "static" || auxLex == "void"
                                || auxLex == "return" || auxLex == "Console" || auxLex == "Write"
                                || auxLex == "if" || auxLex == "else" || auxLex == "switch" || auxLex == "case"
                                || auxLex == "break" || auxLex == "default" || auxLex == "case" || auxLex == "for"
                                || auxLex == "while" || auxLex == "new" || auxLex == "continue" || auxLex == "do" 
                                )
                            {
                                if (auxLex == "int")
                                {
                                    agregarToken(Tipo.Reservada_Int, contId, 1, linea);
                                    contId = contId + 1;
                                    i = i - 1;

                                }
                                if (auxLex == "double")
                                {
                                    agregarToken(Tipo.Reservada_Double, contId, 2, linea);
                                    contId = contId + 1;
                                    i = i - 1;

                                }
                                if (auxLex == "continue")
                                {
                                    agregarToken(Tipo.Reservada_Continue, contId, 2, linea);
                                    contId = contId + 1;
                                    i = i - 1;

                                }
                                if (auxLex == "do")
                                {
                                    agregarToken(Tipo.Reservada_Do, contId, 2, linea);
                                    contId = contId + 1;
                                    i = i - 1;

                                }
                                if (auxLex == "char")
                                {
                                    agregarToken(Tipo.Reservada_Char, contId, 3, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "string" || auxLex == "String")
                                {
                                    agregarToken( Tipo.Reservada_String, contId, 4, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "bool")
                                {
                                    agregarToken(Tipo.Reservada_Bool , contId, 5, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "class")
                                {
                                    agregarToken(Tipo.Reservada_Class, contId, 6, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "new")
                                {
                                    agregarToken(Tipo.Reservada_New, contId, 6, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "static")
                                {
                                    agregarToken(Tipo.Reservada_Static, contId, 7, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "void")
                                {
                                    agregarToken(Tipo.Reservada_Void, contId, 8, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                         
                                if (auxLex == "return")
                                {
                                    agregarToken(Tipo.Reservada_Return, contId, 10, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "Console")
                                {
                                    agregarToken(Tipo.Reservada_Console, contId, 11, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "Write")
                                {
                                    agregarToken(Tipo.Reservada_WriteLine, contId, 12, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "if")
                                {
                                    agregarToken(Tipo.Reservada_If, contId, 13, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "else")
                                {
                                    agregarToken(Tipo.Reservada_Else, contId, 14, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "switch")
                                {
                                    agregarToken(Tipo.Reservada_Switch, contId, 15, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "case")
                                {
                                    agregarToken(Tipo.Reservada_Case, contId, 16, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "break")
                                {
                                    agregarToken(Tipo.Reservada_Break, contId, 17, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "default")
                                {
                                    agregarToken(Tipo.Reservada_Default, contId, 18, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "for")
                                {
                                    agregarToken(Tipo.Reservada_For, contId, 19, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                                if (auxLex == "while")
                                {
                                    agregarToken(Tipo.Reservada_While, contId, 20, linea);
                                    contId = contId + 1;
                                    i = i - 1;
                                }
                            }
                            else
                            {
                                agregarToken(Tipo.Identificador, contId, 21, linea);
                                contId = contId + 1;
                                i = i - 1;
                            }









                        }
                
              break;
              case 2:
                    if (f=="\"")
                    {
        
                        auxDatos = auxLex;
                        agregarToken(Tipo.Cadena_Texo, contId, 0, linea);
                        contId = contId + 1;

                    }
                    else
                    {
                        if (f=="\n")
                        {

                            linea = linea + 1;
                        }
                        auxLex += f;


                    }

                    break;


                case 3:
                    if (isDigit(f))
                    {
                        estado = 3;
                        auxLex += f;
                    }else if (f==".")
                    {
                        estado = 14;
                        auxLex += f;
                    }
                    else
                    {
                       // num = auxLex;
                        //auxNumero = Convert.ToInt32(num);

                        agregarToken(Tipo.Numero, contId, 0, linea);
                        contId = contId + 1;
                        i -= 1;
                    }
                    break;

                case 4:
                    if (f=="+")
                    {
                        auxDatos = auxLex;
                        auxLex += f;
                        agregarToken(Tipo.Operador_Aumento, contId, 32, linea);
                        contId = contId + 1;
                    }
                    else
                    {
                        agregarToken(Tipo.Operador_Suma, contId, 28, linea);
                        contId = contId + 1;
                        i -= 1;
                    }


                    break;

                //Estado para --
                case 5:
                    if (f=="-")
                    {
                        auxDatos = auxLex;
                        auxLex += f;
                        agregarToken(Tipo.Operador_MenosMenos, contId, 33, linea);
                        contId = contId + 1;
                    }
                    else
                    {
                        agregarToken(Tipo.Operador_Resta, contId, 29, linea);
                        contId = contId + 1;
                        i -= 1;
                    }


                    break;

                //Estados para / 
                case 6:
                    if (f== "/")
                    {
                        estado = 11;
                        auxLex = "";

                    }
                    else if (f=="*")
                    {
                        estado = 12;
                        auxLex = "";
                    
                    }
                    else
                    {
                        agregarToken(Tipo.Operador_Division, contId, 31, linea);
                        contId = contId + 1;
                        i -= 1;
                    }




                    break;

                //Operador ==
                case 7:
                    if (f=="=")
                    {
                        auxDatos = auxLex;
                        auxLex += f;
                        agregarToken(Tipo.Operador_IgualIgual, contId, 0, linea);
                        contId = contId + 1;
                    }
                    else
                    {
                        agregarToken(Tipo.Operador_Igual, contId, 0, linea);
                        contId = contId + 1;
                        i -= 1;
                    }




                    break;

                //Estado para las variantes de <
                case 8:
                    if (f== "=")
                    {
                        auxDatos = auxLex;
                        auxLex += f;
                        agregarToken(Tipo.Operador_MenorIgual, contId, 0, linea);
                        contId = contId + 1;
                    }
                    else
                    {
                        agregarToken(Tipo.Operador_MenorQue, contId, 0, linea);
                        contId = contId + 1;
                        i -= 1;
                    }
                    break;


                case 9:
                    if (f=="=")
                    {
                        auxDatos = auxLex;
                        auxLex += f;
                        agregarToken(Tipo.Operador_MayorIgual, contId, 0, linea);
                        contId = contId + 1;
                    }
                    else
                    {
                        agregarToken(Tipo.Operador_MayorQue, contId, 0, linea);
                        contId = contId + 1;
                        i -= 1;
                    }




                    break;

                case 10:
                    if (f=="=")
                    {
                        auxDatos = auxLex;
                        auxLex += f;
                        agregarToken(Tipo.Operador_Diferencia, contId, 0, linea);
                        contId = contId + 1;
                    }
                    else
                    {
                        //errorId = false;
                        agregarToken(Tipo.Signo_Not, contId, 0, linea);
                        //agregarError(contE, linea, 2);
                        contId = contId + 1;
                        i -= 1;
                    }




                    break;

                case 11:

                    if (f=="\n")
                    {
                        if (f == "\n")
                        {

                            linea = linea + 1;
                        }

                        auxDatos = auxLex;
                        agregarToken(Tipo.Comentarios, contId, 0, linea);
                        contId = contId + 1;

                    }
                    else
                    {
                  
                        auxLex += f;

                    }

                    break;

                case 12:
                 
                   
                    if (f=="*" && entrada.charAt(i+1) == "/")
                    {
                        estado = 13; 
                    }
                    else
                    {
                        if (f == "\n")
                        {

                            linea = linea + 1;
                        }
                        auxLex += f;
                        pasada = pasada+1;

                    }

                    break;


                case 13:

                    if (f=="/")
                    {
                        auxDatos = auxLex;
                        agregarToken(Tipo.Signo_ComentarioParrafo, contId, 0, linea);
                        contId = contId + 1;

                    }
                    else
                    {

                        errorId = false;
                       // Console.WriteLine("error con" + auxLex);
                        agregarError(contE, linea, 2);
                        i -= 1;

                    }

                    break;


                case 14:
                    if (isDigit(f))
                    {
                        estado = 14;
                        auxLex += f;
                    }
                  
                    else
                    {
                        
                       

                        agregarToken(Tipo.Decimal, contId, 0, linea);
                        contId = contId + 1;
                        i -= 1;
                    }
                    break;

                case 15:
                    if (f=="'")
                    {

                        auxDatos = auxLex;
                        agregarToken(Tipo.Cadena_char, contId, 0, linea);
                        contId = contId + 1;

                    }
                    else
                    {
                        if (f=="\n")
                        {

                            linea = linea + 1;
                        }
                        auxLex += f;


                    }

                    break;
                    
                case 16:

                    if (f=="&")
                    {
                        auxDatos = auxLex;
                        agregarToken(Tipo.Comparador_And, contId, 0, linea);
                        contId = contId + 1;

                    }
                    else
                    {

                        errorId = false;
                       // Console.WriteLine("error con" + auxLex);
                        agregarError(contE, linea, 2);
                        i -= 1;

                    }

                    break;

                    
                case 17:

                    if (f=="|")
                    {
                        auxLex += f;
                        auxDatos = auxLex;
                        agregarToken(Tipo.Comparador_Or, contId, 0, linea);
                        contId = contId + 1;

                    }
                    else
                    {

                        errorId = false;
                       // Console.WriteLine("error con" + auxLex);
                        agregarError(contE, linea, 2);
                        i -= 1;

                    }

                    break;
         
          }
      
  }
}


function scannearHTMLP(entrada){
    entrada = entrada + "#";
    auxLex="";
    f="";
    estado=0;
    id = 1;
    linea=1;
    contEr = 1;
    contCol = 0;
    contId = 1;
    auxCol = 0;
    
  
    console.log(entrada);
}


function scannearHTML(entrada){
    entrada = entrada + "#";
    auxLex="";
    f="";
    estado=0;
    id = 1;
    linea=1;
    contEr = 1;
    contCol = 0;
    contId = 1;
    auxCol = 0;
    
  
    console.log(entrada);
    for(i=0;i<entrada.length;i++){
        
        f = entrada.charAt(i)
        
        switch (estado) {
            case 0:
              if(f =="<"){
                auxLex += f;             
                estado = 3;  
                //agregarTokenH(tipo.SignoAbre);
                 
              }
              else if(f == ">")
              {
                auxLex += f;
                agregarTokenH(TipoH.SignoCierre);
              }
              else  if(isLetter(f))
              {               
                estado = 1;
                auxLex += f;
              }
              else if(f == "="){
                  auxLex += f;
                  agregarTokenH(TipoH.Igual)
              }
              else if(f == "\"")
              {
                auxLex += f;
                estado = 2;
                //agregarTokenH(TipoH.Igual)
              }
              else if (f=="\n")
              {
                  estado = 0;

              }
              else if (f ==" ")
              {
                  estado = 0;

              }
              else if (f=="\r")
              {

                  estado = 0;

              }
              else if (f=="\t")
              {
                  estado = 0;

              }
              else if (f=="\b")
              {
                  estado = 0;

              }
              else if (f=="\f")
              {
                  estado = 0;

              }
              else{
               
                
                if (f == "#" && i == entrada.length - 1)
                {
                    console.log("El analisis ha termiando");

                }else{
                    //auxLex += f;
                    estado = 1;
                    i = i -1;
                   // agregarTokenH(TipoH.texto, contId, 21, linea);
                          ///         contId = contId + 1;
                                
                }
               
              }
             
              break;
            case 1:
            
                if (f == "<" || f == ">"){
                   
                    if (auxLex == "html")
                    {
                        agregarTokenH(TipoH.Etiqueta_Html);
                        contId = contId + 1;
                        
                        i = i - 1; 
                    }
                    else if (auxLex == "head")
                    {
                        agregarTokenH(TipoH.Etiqueta_Head);
                        contId = contId + 1;
                        i = i - 1; 
                    }
                    else if (auxLex == "body")
                    {
                        agregarTokenH(TipoH.Etiqueta_Body);
                        contId = contId + 1;
                        i = i - 1; 
                    } 
                    else if (auxLex == "title")
                    {
                        agregarTokenH(TipoH.Etiqueta_Title);
                        contId = contId + 1;
                        i = i - 1; 
                    }
                    else if (auxLex == "div")
                    {
                        agregarTokenH(TipoH.Etiqueta_Div);
                        contId = contId + 1;
                        i = i - 1; 
                    }
                   
                    else if (auxLex == "br")
                    {
                        agregarTokenH(TipoH.Etiqueta_Br);
                        contId = contId + 1;
                        i = i - 1; 
                    }
                    else if (auxLex == "p")
                    {
                        agregarTokenH(TipoH.Etiqueta_P);
                        contId = contId + 1;
                        i = i - 1; 
                    }
                    else if (auxLex == "h1" || auxLex == "h2" || auxLex == "h3" || auxLex == "h4")
                    {
                        agregarTokenH(TipoH.Etiqueta_H1);
                        contId = contId + 1;
                        i = i - 1; 
                    }
                    else if (auxLex == "button")
                    {
                        agregarTokenH(TipoH.Etiqueta_Button);
                        contId = contId + 1;
                        i = i - 1; 
                    }
                    else if (auxLex == "label")
                    {
                        agregarTokenH(TipoH.Etiqueta_Label);
                        contId = contId + 1;
                        i = i - 1; 
                    }
                    else if (auxLex == "input")
                    {
                        agregarTokenH(TipoH.Etiqueta_Input);
                        contId = contId + 1;
                        i = i - 1; 
                        
                    }else if (auxLex == "style"){
                        agregarTokenH(TipoH.Style);
                        i = i - 1; 
                    }

                                                   
                else
                {
                    agregarTokenH(TipoH.texto, contId, 21, linea);
                    contId = contId + 1;
                    i = i - 1; 
                }


                }else{
                    if (f == "\n")
                    {

                        linea = linea + 1;
                    }
                    
                    auxLex += f;
                  
                }

               
                
              break;
              case 2:
                if (f=="\"")
                {
    
                    auxDatos = auxLex;
                    agregarTokenH(TipoH.Definicion);
                    

                }
                else
                {
                    if (f=="\n")
                    {

                        linea = linea + 1;
                    }
                    auxLex += f;
                    estado = 2;

                }

                break;

                case 3:
                    if(f=="/"){
                        auxLex += f;
                        agregarTokenH(TipoH.Signo_Fin);
                    }
                    else{
                        agregarTokenH(TipoH.SignoAbre);
                        i = i -1;
                    }
                    break;
         
          }
      
  }
}



function resultadoAnalisis(){
    var myMsg="";
    var boton="";
    if(Errores.length == 0){
       myMsg +=  "<label for=\"lfname\" value=\"correct value\" class=\"form-control is-valid\">Analisis Exitoso</label>" 
    
    }else if(Errores.length > 0){
        myMsg +=  "<label for=\"lfname\" value=\"correct value\" class=\"form-control is-invalid\">El codigo contiene errores</label>" 
        myMsg +=  "<a class=\"nav-link\" href=\"reportetokens.html\">Reporte Errores</a>"
        //document.getElementById('botonError').innerHTML = boton;
    }
    document.getElementById('mensaje').innerHTML = myMsg;
    
}

function llenarTABLA(){
    var i;
    var tipoDatos = "";
    var identifi;
    var filas;
    var encontrado = false;
    for(i=0;i<Salida.length;i++){
            if(Salida[i].TIPO=Tipo.Identificador){
                  if(Salida[i+1].TIPO=Tipo.Operador_Igual){
                        identifi = Salida[i].Valor;
                          filas = Salida[i].Fila;
                          encontrado= true;
                  }else if(Salida[i+1].TIPO = Tipo.Coma){
                        var b;
                        b = i+1;
                       while(Salida[b].TIPO == Tipo.Punto_Coma){
                           if(Salida[b].TIPO == Tipo.Operador_Igual){
                            identifi = Salida[i].Valor;       
                            break;
                           }
                       }
                  }
                  if (Salida[i-1].TIPO == Tipo.Reservada_Int || Salida[i-1].TIPO == Tipo.Reservada_Double || Salida[i-1].TIPO== Tipo.Reservada_String || Salida[i-1].TIPO == Tipo.Reservada_Bool || Salida[i-1].TIPO == Tipo.Reservada_Char)
                  {
                         tipoDatos = Salida[i-1].Valor; 
                  }else{
                      tipo = "desconocido";
                  }
            }
          if(encontrado == true){
            Variables.push(new Variable(tipoDatos,identifi,filas));
          }
    }
}


function CodigosHtml(){
    for(var i=0;i<Codigos.length;i++){
        console.log(Codigos[i].Codigo);
        SalidaH = [];
        scannearHTML(Codigos[i].Codigo);        
        parsearHtml();
      }
}

function tablaVariables(){
    var i;
    for(i=0;i<Variables.length;i++){
      console.log(Variables[i].TIPODATO+" "+Variables[i].Nombre+"  "+Variables[i].Fila);
    }

    var myTable="";

   

   for (let i = 0; i < Variables.length; i++) {
    myTable +="<tr class=\"table-primary\"> <th scope=\"row\">"+  Variables[i].TIPODATO + "</th>";        
    myTable+="<td>" +  Variables[i].Nombre + "</td>";    
    myTable+="<td>" +   Variables[i].Fila + "</td>";    
    myTable+="</tr>";

      //console.log(Salida[i].Numero + Salida[i].Valor + Salida[i].Tipo + Salida[i].Fila)
   }
   myTable+="</table>";
   console.log(myTable);
   document.getElementById('tablaVar').innerHTML = myTable;
}


function insertarTabla(tipodelDato,nuevoIden,nuevaFila){
    var i;
    var verificacion=false;
    for(i=0;i<Variables.length;i++){
        if(nuevoIden==Variables[i].Nombre){
            verificacion = true;
            break;

        }
    }
    if(verificacion == false){
        Variables.push(new Variable(tipodelDato,nuevoIden,nuevaFila));   
    }
    

}






   



function prueba(){
    Salida = [];
    Errores = [];
    SalidaH = [];
    document.getElementById("traduccionH").value = "";
    document.getElementById("traduccionJ").value = "";
    var p1 = document.getElementById("entrada").value;
    alert(p1);
    scanneardos(p1);
    sumador = contEr+1;
    mostrarTokens();
    //imprimirdesde();
    parsear();
    resultadoAnalisis()
    console.log(cadena);
    document.getElementById("traduccionP").value = cadena;
    console.log(Errores.length+"cantidad de errores");
    Tabla_Errores();
    tablaVariables();
    CodigosHtml();
    mostrarTokensH();
    document.getElementById("traduccionH").value = myHtml;
    document.getElementById("traduccionJ").value = myJson
    ;
    
    
}

function mostrarMensaje1(){
    alert('Bienvenido al curso JavaScript de aprenderaprogramar.com');
    }

    

    
   function agregarToken(tipo,numero,id,fila){
    if (linea > 1)
    {
        contCol = (i - 1) - auxCol;
    }

   // console.log(tipo+"  "+ numero +"  "+ id+"  "+fila);

    Salida.push(new Token(tipo,auxLex,numero,id,fila,contCol));

    auxLex = "";
    estado = 0;
   }


  function agregarError(numero, fila, columna)
   {
    if (auxLex != " ")
    {
        if (linea > 1)
        {
            contCol = (i - 1) - auxCol;
        }
        contEr = contEr + 1;
        Errores.push(new Error(contEr,"Error Lexico", fila, contCol - 1, "el caracter " +"'"+auxLex+"'"+" no pertenece al lenguaje"));



    }
    if (linea > 1)
    {
        contCol = (i - 1) - auxCol;
    }

    contEr = contEr + 1;
    if (errorId == true)
    {
        Errores.push(new Error(contEr,"Error Lexico", fila, contCol,"el caracter " +"'"+f+"'"+" no pertenece al lenguaje"));
    }

    estado = 0;
    crear = false;
    errorId = true;
    auxLex = " ";


    // console.log("hubo error que te pele");



   }


   function agregarTokenH(tipo){
   

    console.log(tipo);
    SalidaH.push(new TokenH(tipo,auxLex));

    auxLex = "";
    estado = 0;
   }


function mostrarTokens(){
    for (let i = 0; i < Salida.length; i++) {
      
          console.log(Salida[i].Numero + Salida[i].Valor + Tipo.properties[Salida[i].TIPO].name + Salida[i].Fila)
       }
}

function mostrarTokensH(){
    for (let i = 0; i < SalidaH.length; i++) {
      
          console.log(SalidaH[i].Valor + SalidaH[i].TIPOH)
       }
}

   function WriteFile() 
{
    var myTable;
    myTable= "<table class=\"table table-hover\"><tr><td style='width: 100px; color: red;'>No</td>";
       myTable+= "<td style='width: 100px; color: red; text-align: right;'>Lexema</td>";
       myTable+="<td style='width: 100px; color: red; text-align: right;'>Tipo</td>";
       myTable+="<td style='width: 100px; color: red; text-align: right;'>Fila</td></tr>";
   

   for (let i = 0; i < Salida.length; i++) {
    myTable+="<tr><td style='width: 100px;text-align: right;'>" + Salida[i].Numero + "</td>";        
    myTable+="<td style='width: 100px;text-align: right;'>" + Salida[i].Valor + "</td>";    
    myTable+="<td style='width: 100px;text-align: right;'>" +  Salida[i].Tipo + "</td>";    
    myTable+="<td style='width: 100px;text-align: right;'>" +  Salida[i].Fila + "</td>";    
    myTable+="</tr>";

      console.log(Salida[i].Numero + Salida[i].Valor + Salida[i].Tipo + Salida[i].Fila)
   }
   myTable+="</table>";
   
localStorage.setItem("table",myTable);
console.log(localStorage.getItem('table'))
    //var blob = new Blob([myTable], {type: "text/plain;charset=utf-8"});
    //saveAs(blob, "testfile1.txt");
}

function Tabla_Errores() 
{
    var myTable;
    myTable= "<table class=\"table table-hover\"><tr><td style='width: 100px; color: red;'>No</td>";
       myTable+= "<td style='width: 100px; color: red; text-align: right;'>Tipo</td>";
       myTable+="<td style='width: 100px; color: red; text-align: right;'>Fila</td>";
       myTable+="<td style='width: 100px; color: red; text-align: right;'>Columna</td>";
       myTable+="<td style='width: 100px; color: red; text-align: right;'>Descripcion</td></tr>";
   

   for (let i = 0; i < Errores.length; i++) {
    myTable+="<tr><td style='width: 100px;text-align: right;'>" + Errores[i].Numero + "</td>";        
    myTable+="<td style='width: 100px;text-align: right;'>" + Errores[i].TIP + "</td>";    
    myTable+="<td style='width: 100px;text-align: right;'>" +  Errores[i].Fila + "</td>";    
    myTable+="<td style='width: 100px;text-align: right;'>" +  Errores[i].Columna + "</td>";    
    myTable+="<td style='width: 100px;text-align: right;'>" +  Errores[i].Descripcion + "</td>";    
    myTable+="</tr>";

      //console.log(Salida[i].Numero + Salida[i].Valor + Salida[i].Tipo + Salida[i].Fila)
   }
   myTable+="</table>";
   
   
localStorage.setItem("table",myTable);
console.log(localStorage.getItem('table'))
    //var blob = new Blob([myTable], {type: "text/plain;charset=utf-8"});
    //saveAs(blob, "testfile1.txt");
}

   function generar_tabla(){
       console.log("este es el reporte");
   
       let myTable= "<table><tr><td style='width: 100px; color: red;'>No</td>";
       myTable+= "<td style='width: 100px; color: red; text-align: right;'>Lexema</td>";
       myTable+="<td style='width: 100px; color: red; text-align: right;'>Tipo</td>";
       myTable+="<td style='width: 100px; color: red; text-align: right;'>Fila</td></tr>";
   

   for (let i = 0; i < Salida.length; i++) {
    myTable+="<tr><td style='width: 100px;text-align: right;'>" + Salida[i].Numero + "</td>";        
    myTable+="<td style='width: 100px;text-align: right;'>" + Salida[i].Valor + "</td>";    
    myTable+="<td style='width: 100px;text-align: right;'>" +  Salida[i].Tipo + "</td>";    
    myTable+="<td style='width: 100px;text-align: right;'>" +  Salida[i].Fila + "</td>";    
    myTable+="</tr>";

      console.log(Salida[i].Numero + Salida[i].Valor + Salida[i].Tipo + Salida[i].Fila)
   }
   myTable+="</table>";
   document.getElementById('tablePrint').innerHTML = myTable;
 
 }




function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  function isDigit(str) {
    return str.length === 1 && str.match(/[0-9]/i);
  }
  


  //Analisis Sintactico
  
     
   function first_token(){
      var tokenActual=Token;
      tokenActual=Salida[0];
      console.log(tokenActual.Valor);
   }


   var tokenActual=Token;
   var controlToken;
   var errorSintactico = false;  
   var funContinue = false; 
   var funBreak = false;
   var funReturn = false;
   var funReturnF = false;
   var tab = "";
   var tipoDatos = "";
   var identifi;
   var filas;
   var existeHtml = false;
   var sumador;
  

function parsear()
   {
    tokenActual=Token;
    cadena = "";
    myHtml = "";
    myJson = "";
    controlToken;
    errorSintactico = false;  
    funContinue = false; 
    funBreak = false;
    funReturn = false;
    funReturnF = false;
    tab = "";
    tipoDatos = "";
    identifi;
    filas;
    existeHtml = false;
    
       Salida.push(new Token(Tipo.ULTIMO,"0","0","0","0","0"));
    
       controlToken = 0;
       tokenActual=Salida[controlToken];
       console.log(tokenActual.Valor);
       //Llamada al no terminal inicial
       Start();
   }

   
   function Start()
   {
       comentarioss();
       emparejar(Tipo.Reservada_Class);
       emparejar(Tipo.Identificador);
       emparejar(Tipo.Signo_Corchete_izq);
       body();
       emparejar(Tipo.Signo_Corchete_der);
       comentarioss();
      

  
   }


   function comentarioss(){
    if (tokenActual.TIPO == Tipo.Signo_ComentarioParrafo)
    {
        cadena += "\"'" + tokenActual.Valor + "\"'";
        cadena += "\r\n"; 
        //cadena += "#" + tokenActual.Valor;
        controlToken += 1;
        tokenActual = Salida[controlToken];
        comentarioss();
    }
    else if (tokenActual.TIPO == Tipo.Comentarios)
    {
        cadena += "#" + tokenActual.Valor;
        cadena += "\r\n"; 
        controlToken += 1;
        tokenActual = Salida[controlToken];
         comentarioss();
    }else{


    }  
   }


  
   function body()
   {

   
          
    if (tokenActual.TIPO == Tipo.Reservada_Int || tokenActual.TIPO == Tipo.Reservada_Double || tokenActual.TIPO == Tipo.Reservada_String || tokenActual.TIPO == Tipo.Reservada_Bool || tokenActual.TIPO == Tipo.Reservada_Char)
    {
        declaracion();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Console)
    {
        existeHtml = true;
        Instruccion();
        existeHtml = false;
    }else if (tokenActual.TIPO == Tipo.Reservada_If)
    {
        C_if();
        bodyP();
    }else if (tokenActual.TIPO == Tipo.Reservada_While)
    {
        C_While();
    }else if (tokenActual.TIPO == Tipo.Reservada_For)
    {
        C_for();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Switch)
    {
        Swiitch();
    }
    else if (tokenActual.TIPO == Tipo.Identificador)
    {
        Asignacion();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Do)
    {
        C_do();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Void)
    {
        Metodo();
    }
    else if (tokenActual.TIPO == Tipo.Signo_ComentarioParrafo)
    {
        cadena += "\"'" + tokenActual.Valor + "\"'";
        cadena += "\r\n"; 
        //cadena += "#" + tokenActual.Valor;
        controlToken += 1;
        tokenActual = Salida[controlToken];
        bodyP();
    }
    else if (tokenActual.TIPO == Tipo.Comentarios)
    {
        cadena += "#" + tokenActual.Valor;
        cadena += "\r\n"; 
        controlToken += 1;
        tokenActual = Salida[controlToken];
        bodyP();
    }

       
       
        else  {
         

       }



   }



   function bodyP()
   {



    if (tokenActual.TIPO == Tipo.Reservada_Int || tokenActual.TIPO == Tipo.Reservada_Double || tokenActual.TIPO == Tipo.Reservada_String || tokenActual.TIPO == Tipo.Reservada_Bool || tokenActual.TIPO == Tipo.Reservada_Char)
    {
        declaracion();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Console)
    {
        existeHtml = true;
        Instruccion();
        existeHtml = false;
    }else if (tokenActual.TIPO == Tipo.Reservada_If)
    {
        C_if();
        bodyP();
    }else if (tokenActual.TIPO == Tipo.Reservada_While)
    {
        C_While();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Do)
    {
        C_do();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_For)
    {
        C_for();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Switch)
    {
        Swiitch();
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Void)
    {
        Metodo();
    }
    else if (tokenActual.TIPO == Tipo.Identificador)
    {
        Asignacion();
    }
    else if (tokenActual.TIPO == Tipo.Signo_ComentarioParrafo)
    {
        cadena += "\"'" + tokenActual.Valor + "\"'";
        cadena += "\r\n"; 
        //cadena += "#" + tokenActual.Valor;
        controlToken += 1;
        tokenActual = Salida[controlToken];
        bodyP();
    }
    else if (tokenActual.TIPO == Tipo.Comentarios)
    {
        cadena += "#" + tokenActual.Valor;
        cadena += "\r\n"; 
        controlToken += 1;
        tokenActual = Salida[controlToken];
        bodyP();
    }
    else if(funContinue == true &&  tokenActual.TIPO == Tipo.Reservada_Continue){
        Continue();
       
        bodyP();
    }
    else if( funBreak == true &&  tokenActual.TIPO == Tipo.Reservada_Break){
       
        Break();
        bodyP();
    }
    else if(funReturn == true  && tokenActual.TIPO == Tipo.Reservada_Return){
         ReturnM();
         bodyP();
    }else if(funReturnF == true && tokenActual.TIPO == Tipo.Reservada_Return){
        ReturnF();
        bodyP();
   }
   else if(funContinue == false &&  tokenActual.TIPO == Tipo.Reservada_Continue &&  switchC == false){
    Errores.push(new Error(tokenActual.Numero,"Error sintactico",tokenActual.Fila, tokenActual.Columna, "continue no deberia de ir aca"));              
    errorSintactico = true;
    controlToken++;
    tokenActual = Salida[controlToken];
    errorExp = false;
    bodyP();
}
else if(funContinue == false &&  tokenActual.TIPO == Tipo.Reservada_Break && switchC == false){
    Errores.push(new Error(tokenActual.Numero,"Error sintactico",tokenActual.Fila, tokenActual.Columna, "break no deberia de ir aca"));              
                errorSintactico = true;
                controlToken++;
                tokenActual = Salida[controlToken];
                errorExp = false;
    bodyP();
}
else if(funReturn == false  && tokenActual.TIPO == Tipo.Reservada_Return && switchC == false){
    Errores.push(new Error(tokenActual.Numero,"Error sintactico",tokenActual.Fila, tokenActual.Columna, "return no deberia de ir aca"));              
    errorSintactico = true;
    controlToken++;
    tokenActual = Salida[controlToken];
    errorExp = false;
     bodyP();
}else if(funReturnF == false && tokenActual.TIPO == Tipo.Reservada_Return && switchC == false){
    Errores.push(new Error(tokenActual.Numero,"Error sintactico",tokenActual.Fila, tokenActual.Columna, "return no deberia de ir aca"));              
    errorSintactico = true;
    controlToken++;
    tokenActual = Salida[controlToken];
    errorExp = false;
    bodyP();
}          

        else  {
         

       }





   }

   //Gramatica para delcaracion de variables

   function declaracion()
   {
       TipoDato();
       
       
           if(Salida[controlToken+1].TIPO==Tipo.Signo_Parentesis_izq){
            cadena += tab +"def "+ tokenActual.Valor;
           }
        else {cadena += tab +"var "+ tokenActual.Valor;}
           identifi = tokenActual.Valor;
           filas = tokenActual.Fila;
           emparejar(Tipo.Identificador);
           if(tokenActual.TIPO == Tipo.Signo_Parentesis_izq){
                   
                  Funcion();
                   
                }else{
          // Variables.push(new Variable(tipoDatos,identifi,filas))
           AsignacionP();
           emparejar(Tipo.Punto_Coma);
           cadena += "\r\n"; 
           bodyP();
        }
       

   }

   function TipoDato()
   {
      
           if (tokenActual.TIPO == Tipo.Reservada_Int)
           {
               tipoDatos = tokenActual.Valor;
               emparejar(Tipo.Reservada_Int);
           }
           else if (tokenActual.TIPO == Tipo.Reservada_Double)
           {
               tipoDatos = tokenActual.Valor;
               emparejar(Tipo.Reservada_Double);
           }
           else if (tokenActual.TIPO == Tipo.Reservada_String)
           {
               tipoDatos = tokenActual.Valor;
               emparejar(Tipo.Reservada_String);
           }
           else if (tokenActual.TIPO == Tipo.Reservada_Bool)
           {
               tipoDatos = tokenActual.Valor;
               emparejar(Tipo.Reservada_Bool);
           }
       else if (tokenActual.TIPO == Tipo.Reservada_Char)
       {
           tipoDatos = tokenActual.Valor;
           emparejar(Tipo.Reservada_Char);
       }
       else {
             tipoDatos = "desconocido";
               }

   }

    function Asignacion() {
        if(Salida[controlToken+1].TIPO == Tipo.Signo_Parentesis_izq){
            cadena += tab+tokenActual.Valor;
            emparejar(Tipo.Identificador);
           Expres();
           cadena += "\r\n"; 
           emparejar(Tipo.Punto_Coma);
           
           bodyP();
        }else{
        tipoDatos = "desconocido";
        identifi = tokenActual.Valor;
        filas = tokenActual.Fila;
        cadena += tab+tokenActual.Valor;
        emparejar(Tipo.Identificador);
    
    insertarTabla(tipoDatos,identifi,filas)
    AsignacionP();
    emparejar(Tipo.Punto_Coma);
    cadena += "\r\n"; 
    bodyP();
}
}

var errorExp=false;
 function AsignacionP()
{
    if (tokenActual.TIPO == Tipo.Operador_Igual || tokenActual.TIPO == Tipo.Coma)
    {
        if (tokenActual.TIPO == Tipo.Operador_Igual)
        {
            insertarTabla(tipoDatos,identifi,filas)
            cadena += tokenActual.Valor;
            
            emparejar(Tipo.Operador_Igual);
            if(tokenActual.TIPO == Tipo.Punto_Coma){
                Errores.push(new Error(tokenActual.Numero,"Error sintactico",tokenActual.Fila, tokenActual.Columna, "Error se esperaba una expresion"));              
                errorSintactico = true;
                tokenActual = Salida[controlToken];
                errorExp = false;
                }
            Expres();
           
        }
        if (tokenActual.TIPO == Tipo.Coma)
        {
            insertarTabla(tipoDatos,identifi,filas)
            cadena += tokenActual.Valor;
            emparejar(Tipo.Coma);
            identifi = tokenActual.Valor;
            filas = tokenActual.Fila;
            insertarTabla(tipoDatos,identifi,filas)
            cadena += tokenActual.Valor;
            emparejar(Tipo.Identificador);
         //   Expres();
            AsignacionP();
        }
    }else
    {
        //emparejar(Tipo.Identificador);
        //insertarTabla(tipoDatos,identifi,filas)
    }
}

//Gramatica para imprimir
function Instruccion()
{
    emparejar(Tipo.Reservada_Console);
    emparejar(Tipo.Punto);
 
    cadena += tab + "print(";
    emparejar(Tipo.Reservada_WriteLine);
   
    emparejar(Tipo.Signo_Parentesis_izq);
    Imprimir();
    cadena += ")";
    emparejar(Tipo.Signo_Parentesis_der);
    emparejar(Tipo.Punto_Coma);
    cadena += "\r\n";
    bodyP();

}


function Imprimir()
{
    if(tokenActual.TIPO == Tipo.Cadena_char){
        cadena +=  tokenActual.Valor;
        Codigos.push(new Html(tokenActual.Valor));
        emparejar(Tipo.Cadena_char);
    }else{
    Expres();
    }
     
}


//DECISION
function C_if()
{
   
    if(elseIF ==true){
        cadena += tokenActual.Valor + " ";
        elseIF = false;
    }else{
    cadena += tab + tokenActual.Valor + " ";
    }
    emparejar(Tipo.Reservada_If);
    emparejar(Tipo.Signo_Parentesis_izq);
    Expres(); 
    cadena += ":";
    cadena += "\r\n"; 
    emparejar(Tipo.Signo_Parentesis_der);
    emparejar(Tipo.Signo_Corchete_izq);
    AumentarTab();
    bodyP();
    DisminuirTab();
    emparejar(Tipo.Signo_Corchete_der);
    Else();
    bodyP();   


}
var elseIF = false;

function Else()
{

    if (tokenActual.TIPO == Tipo.Reservada_Else) {
       
        //cadena += tab + tokenActual.Valor + ":";
        //cadena += "\r\n";
        
        emparejar(Tipo.Reservada_Else);
        if(tokenActual.TIPO == Tipo.Reservada_If){
            elseIF=true;
            cadena += tab +"else ";
            
            C_if();
        }else{
        cadena += tab + "else" + ":";
        cadena += "\r\n";
        emparejar(Tipo.Signo_Corchete_izq);
        AumentarTab();
        bodyP();
        DisminuirTab();
        
        emparejar(Tipo.Signo_Corchete_der);
    }
    }
    else
    {

    }

}

//Sentencias de repeticion

//Ciclo While
function C_While()
{
    funBreak= true;
    funContinue= true;
    cadena += tab + tokenActual.Valor+" ";
    emparejar(Tipo.Reservada_While);
    emparejar(Tipo.Signo_Parentesis_izq);
    Expres();
    cadena += ":";
    cadena += "\r\n";
    emparejar(Tipo.Signo_Parentesis_der);
    emparejar(Tipo.Signo_Corchete_izq);
    AumentarTab();
    bodyP();
    DisminuirTab();
    emparejar(Tipo.Signo_Corchete_der);
    funBreak= false;
    funContinue= false;
    bodyP();
}

function C_do()
{

    funBreak= true;
    funContinue= true;
    cadena += tab + "while True:";
    cadena += "\r\n";
    emparejar(Tipo.Reservada_Do)
    emparejar(Tipo.Signo_Corchete_izq);
    AumentarTab();
    bodyP();  
    emparejar(Tipo.Signo_Corchete_der);
    emparejar(Tipo.Reservada_While);
    emparejar(Tipo.Signo_Parentesis_izq);
    cadena += tab+tokenActual.Valor+" = "+tokenActual.Valor+" + "+" 1";
    cadena += "\r\n";
    cadena += tab+"if (";
    Expres();
    cadena += "):";
    cadena += "\r\n";
    AumentarTab();
    cadena += tab+"break";
    cadena += "\r\n";
    DisminuirTab();
    DisminuirTab();
    emparejar(Tipo.Signo_Parentesis_der);
    emparejar(Tipo.Punto_Coma);
    funBreak= false;
    funContinue= false;
  
    bodyP();
}
var num1;
var num2;
var forr = false;
function C_for() {
    funBreak= true;
    funContinue= true;
    forr = true;
    emparejar(Tipo.Reservada_For);
    emparejar(Tipo.Signo_Parentesis_izq);
    TipoDato();
    emparejar(Tipo.Identificador);
    emparejar(Tipo.Operador_Igual);
    cadena += tab+"for in a range("
    Expres();
    cadena += ","
    emparejar(Tipo.Punto_Coma);
    emparejar(Tipo.Identificador);
    Operador_for();
    Expres();

    emparejar(Tipo.Punto_Coma);
    emparejar(Tipo.Identificador);
    Instru();
    emparejar(Tipo.Signo_Parentesis_der);
    emparejar(Tipo.Signo_Corchete_izq);
    if (decremento == true){
        cadena += ",-1):";
    }else{
    cadena += "):";
     }
    cadena += "\r\n";
    AumentarTab();
    bodyP();
    DisminuirTab();
    emparejar(Tipo.Signo_Corchete_der);
    
    
    funBreak= false;
    funContinue= false;
    bodyP();
}

function Operador_for()
{
  
        if (tokenActual.TIPO == Tipo.Operador_MenorQue)
        {
            emparejar(Tipo.Operador_MenorQue);
        }
        else if (tokenActual.TIPO == Tipo.Operador_MayorQue)
        {
            emparejar(Tipo.Operador_MayorQue);
        }
        else if (tokenActual.TIPO == Tipo.Operador_IgualIgual)
        {
            emparejar(Tipo.Operador_IgualIgual);
        }
        else if (tokenActual.TIPO == Tipo.Operador_Diferencia)
        {
            emparejar(Tipo.Operador_Diferencia);
        }
        else if (tokenActual.TIPO == Tipo.Operador_MayorIgual)
        {
            //cadena += tokenActual.GetVal() + " ";
            emparejar(Tipo.Operador_Diferencia);
        }
        else if (tokenActual.TIPO == Tipo.Operador_MenorIgual)
        {
            //cadena += tokenActual.GetVal() + " ";
            emparejar(Tipo.Operador_Diferencia);
        }
    
    else
    {
        console.log("Error se esperaba un Operador");
        controlToken += 1;
        tokenActual = Salida[controlToken];
    }
}

function valor_for()
{

    if (tokenActual.TIPO == Tipo.Cadena_Texo)
    {
        //cadena += tokenActual.GetVal();
        num1 = tokenActual.Valor;
        emparejar(Tipo.Cadena_Texo);
    }
    if (tokenActual.TIPO == Tipo.Numero)
    {
        //cadena += tokenActual.GetVal();
        num1 = tokenActual.Valor;
        emparejar(Tipo.Numero);
    }
    if (tokenActual.TIPO == Tipo.Identificador)
    {
        //cadena += tokenActual.GetVal();
        num1 = tokenActual.Valor;
        emparejar(Tipo.Identificador);
    }

}
var decremento =false;
function Instru() {

        if (tokenActual.TIPO == Tipo.Operador_Aumento)
        {
            emparejar(Tipo.Operador_Aumento);
        }
        else if (tokenActual.TIPO == Tipo.Operador_MenosMenos)
        {
            
            emparejar(Tipo.Operador_MenosMenos);
            decremento = true;
        }
    
    else
    {
        console.log("se esperaba una instruccion de aumento o disminucion");
    }


}

//Fin sentencias de repeticion
var switchC = false;
function Swiitch() {
    switchC= true;
    cadena += tab+"def switch(case,";
    emparejar(Tipo.Reservada_Switch);
    emparejar(Tipo.Signo_Parentesis_izq);
    Expres();
    cadena += "):";
    cadena += "\r\n";
    AumentarTab();
   
  
    cadena += tab+"switcher = {";
    cadena += "\r\n";
    
    emparejar(Tipo.Signo_Parentesis_der);
    emparejar(Tipo.Signo_Corchete_izq);
    AumentarTab();
    Case();
    
    Default();
    DisminuirTab();
    cadena += tab+"}";
    emparejar(Tipo.Signo_Corchete_der);
    DisminuirTab();
    switchC = false;
    bodyP();
}



function Case() {
    if(tokenActual.TIPO == Tipo.Reservada_Case) { 
    emparejar(Tipo.Reservada_Case);
    cadena += tab;
   
    Expres()
    cadena += ":";
     cadena += "\r\n";
    emparejar(Tipo.Dos_Puntos);
    AumentarTab();
    bodyP();
    BreakS();
    DisminuirTab();
    
    Case();
    }
    else
    {

    }
}

function BreakS(){
    if(tokenActual.TIPO == Tipo.Reservada_Break){
        cadena += tab+tokenActual.Valor;
        cadena += "\r\n";   
    emparejar(Tipo.Reservada_Break);
    emparejar(Tipo.Punto_Coma);
}else{

}
}

function Default()
{
    if (tokenActual.TIPO == Tipo.Reservada_Default)
    {
        cadena += tab+tokenActual.Valor+":";
        cadena += "\r\n";   
        emparejar(Tipo.Reservada_Default);
        emparejar(Tipo.Dos_Puntos);
        AumentarTab();
        bodyP();
        DisminuirTab();
        BreakS();
    }
    else {
    }

}

function Continue(){
    if (tokenActual.TIPO == Tipo.Reservada_Continue)
    {
        cadena += tab+tokenActual.Valor;
        emparejar(Tipo.Reservada_Continue);
        emparejar(Tipo.Punto_Coma);
        cadena += "\r\n";
    }
    else {

    }
}

function Break(){
    if (tokenActual.TIPO == Tipo.Reservada_Break)
    {
        cadena += tab + tokenActual.Valor;
        emparejar(Tipo.Reservada_Break);
        
        emparejar(Tipo.Punto_Coma);
        cadena += "\r\n";
    }
    else {

    }
}

function ReturnM(){
    if (tokenActual.TIPO == Tipo.Reservada_Return)
    {
        cadena += tab+"return;";
        cadena += "\r\n";
        emparejar(Tipo.Reservada_Return);
        emparejar(Tipo.Punto_Coma);
    }
    else {

    }
}

//Gramatica metodos

function Metodo(){
    funReturn = true;
    
    emparejar(Tipo.Reservada_Void);
    cadena += "def " + tokenActual.Valor+"(";
    emparejar(Tipo.Identificador);
    emparejar(Tipo.Signo_Parentesis_izq);
    Parametross();
    cadena += tokenActual.Valor+":";
    cadena += "\r\n";
    emparejar(Tipo.Signo_Parentesis_der);
    emparejar(Tipo.Signo_Corchete_izq);
    AumentarTab();
    bodyP();
    DisminuirTab();
    emparejar(Tipo.Signo_Corchete_der);
    funReturn= false;
    bodyP();

}

function Parametross(){
    if (tokenActual.TIPO == Tipo.Reservada_Int || tokenActual.TIPO == Tipo.Reservada_Double || tokenActual.TIPO == Tipo.Reservada_String || tokenActual.TIPO == Tipo.Reservada_Bool || tokenActual.TIPO == Tipo.Reservada_Char)
    {
   TipoDato();
   iden();
    }else{

    }
}

function iden(){
    if (tokenActual.TIPO == Tipo.Identificador)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Identificador);
        idenP();
        
    }
    else {

    }
}

function idenP(){
        
         if (tokenActual.TIPO == Tipo.Coma)
        {
            cadena += tokenActual.Valor;
            emparejar(Tipo.Coma);
            TipoDato();
            cadena += tokenActual.Valor;
            emparejar(Tipo.Identificador);
            idenP();
        }
      else
    {

    }
}


function ReturnF(){
    if (tokenActual.TIPO == Tipo.Reservada_Return)
    {
        cadena += tab+"return ";
        emparejar(Tipo.Reservada_Return);
        Expres();
        cadena += tokenActual.Valor;
        cadena += "\r\n";
        emparejar(Tipo.Punto_Coma);
    }
    else {

    }
}

function Funcion(){
     funReturnF = true;
     cadena += tokenActual.Valor;
     emparejar(Tipo.Signo_Parentesis_izq);
     Parametross();
     emparejar(Tipo.Signo_Parentesis_der);
     cadena += "):";
     cadena += "\r\n";
     //emparejar(Tipo.Signo_Parentesis_der);
     emparejar(Tipo.Signo_Corchete_izq);
     AumentarTab();
     bodyP();
     DisminuirTab();
     emparejar(Tipo.Signo_Corchete_der);
     funReturnF= false;
     bodyP();


}

//Expresion

function Expres()
{
    llamadaMetodo();
    E();
    SimboloComparacion();
     

}

function llamadaMetodo(){
    if(tokenActual.TIPO == Tipo.Identificador)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Identificador);
        E();
    }else
    {

    }
}

function llamadaMetodoP(){
    if(tokenActual.TIPO == Tipo.Signo_Parentesis_izq)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_IgualIgual);
        E();
    }else{
        
    }

}

function SimboloComparacion()
{
    if(tokenActual.TIPO == Tipo.Operador_IgualIgual)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_IgualIgual);
        E();
    }
    else if (tokenActual.TIPO == Tipo.Operador_MenorQue)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_MenorQue);
        E();
    }
    else if (tokenActual.TIPO == Tipo.Operador_MayorQue)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_MayorQue);
        E();
    }
    else if (tokenActual.TIPO == Tipo.Operador_MayorIgual)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_MayorIgual);
        E();
    }
    else if (tokenActual.TIPO == Tipo.Operador_MenorIgual)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_MenorIgual);
        E();
    }
    else if (tokenActual.TIPO == Tipo.Operador_Diferencia)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_Diferencia);
        E();
    }
    else
    {

    }


}

function  E()
{
    T();
    EP();
}

function EP()
{
    if (tokenActual.TIPO == Tipo.Operador_Suma)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_Suma);
        T();
        EP();
    }
    else if (tokenActual.TIPO == Tipo.Operador_Resta)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_Resta);
        T();
        EP();
    }
    else{

    }
   
}

function T()
{
    F();
    TP();
}

function TP()
{
    if (tokenActual.TIPO == Tipo.Operador_Multi)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_Multi);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Coma)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Coma);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Comparador_Or)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Comparador_Or);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Comparador_And)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Comparador_And);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Operador_IgualIgual)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_IgualIgual);
        F();
        TP();
    }
  
    else if (tokenActual.TIPO == Tipo.Operador_Division)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_Division);
        F();
        TP();
    }
    if(tokenActual.TIPO == Tipo.Operador_IgualIgual)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_IgualIgual);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Operador_MenorQue)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_MenorQue);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Operador_MayorQue)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_MayorQue);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Operador_MayorIgual)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_MayorIgual);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Operador_MenorIgual)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_MenorIgual);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Operador_Diferencia)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Operador_Diferencia);
        F();
        TP();
    }
    else if (tokenActual.TIPO == Tipo.Signo_Not)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Signo_Not);
        F();
        TP();
    }
    else
    {
       errorExp = true;
    }

}

function F()
{
    if (tokenActual.TIPO == Tipo.Identificador)
    {
        num2 = tokenActual.Valor;
        cadena += tokenActual.Valor;
        emparejar(Tipo.Identificador);
    }
    else if (tokenActual.TIPO == Tipo.Signo_Parentesis_izq)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Signo_Parentesis_izq);
        Expres();
        cadena += tokenActual.Valor;
        emparejar(Tipo.Signo_Parentesis_der);
    }
    else if (tokenActual.TIPO == Tipo.Signo_Llave_izq)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Signo_Llave_izq);
        Expres();
        cadena += tokenActual.Valor;
        emparejar(Tipo.Signo_Llave_der);
    }
    else if (tokenActual.TIPO == Tipo.Numero)
    {
        num2 = tokenActual.Valor;
        cadena += tokenActual.Valor;
        emparejar(Tipo.Numero);
    }
    else if (tokenActual.TIPO == Tipo.Cadena_Texo)
    {
        cadena += "\""+tokenActual.Valor+ "\"";
        
        emparejar(Tipo.Cadena_Texo);
    }
    else if (tokenActual.TIPO == Tipo.Reservada_Float)
    {
        cadena += "\""+tokenActual.Valor+ "\"";
        emparejar(Tipo.Reservada_Float);
    }
   else if (tokenActual.TIPO == Tipo.Cadena_char)
    {
       
        cadena += tokenActual.Valor;
        emparejar(Tipo.Cadena_char);
    }
    else if (tokenActual.TIPO == Tipo.Decimal)
    {
        cadena += tokenActual.Valor;
        emparejar(Tipo.Decimal);
    }else{

    }




}

   


   function emparejar(tip)
   {
       if (errorSintactico == true)
       {
           console.log(tokenActual.TIPO);
           if (tokenActual.TIPO == Tipo.Punto_Coma)
           {
               errorSintactico = false;
           }
           if (tokenActual.TIPO != Tipo.ULTIMO)
           {
               controlToken += 1;
               tokenActual = Salida[controlToken];
           }
       }
       else
       {
        console.log("comparacion");
        console.log(tokenActual.TIPO + Tipo.properties[tokenActual.TIPO].code);
        console.log(tip+Tipo.properties[tip].code);
           if (tokenActual.TIPO != tip)
           {
               console.log("Error se esperaba " + Tipo.properties[tip].name);             
               var tokenSiguiente = Token;
               tokenSiguiente = Salida[controlToken - 1];
               Errores.push(new Error(sumador,"Error sintactico",tokenSiguiente.Fila, tokenSiguiente.Columna, "Error se esperaba " +" "+ Tipo.properties[tip].name +" "+ Tipo.properties[tip].code));              
               errorSintactico = true;
               sumador++;
           }

           if (tokenActual.TIPO != Tipo.ULTIMO && errorSintactico == true)
           {
               
               tokenActual = Salida[controlToken];
           }

           if (tokenActual.TIPO != Tipo.ULTIMO && errorSintactico == false)
           {
               controlToken += 1;
               tokenActual = Salida[controlToken];
           }
       }
   }

 

   function imprimirdesde(){
        imprimirDesdeB();
   }

   function DisminuirTab() {
    var tamanio = tab.length;
    tab = "";
    var i;
    for (i = 0; i < tamanio-1; i++)
    {
        tab += "\t";
    }
}

function AumentarTab() {
    tab += "\t";
}


function obtenerC(){
    var p1 = document.getElementById("entrada").value;
    saveDocument(p1,"reporteC.cs");
}

function obtenerPY(){
    var p1 = document.getElementById("traduccionP").value;
    saveDocument(p1,"reportePY.py");
}

function obtenerHT(){
    var p1 = document.getElementById("traduccionH").value;
    saveDocument(p1,"reporteHT.html");
}

function obtenerJS(){
    var p1 = document.getElementById("traduccionJ").value;
    saveDocument(p1,"reporteJS.json");
}


function saveDocument(value_Txt, aux_Nombre) {
    let file = new File([value_Txt], aux_Nombre, {
      type: "text/plain;charset=utf-8",
    });
    // obtienes una URL para el fichero que acabas de crear
    var url = window.URL.createObjectURL(file);
    // creas un enlace y lo añades al documento
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
  
    // actualizas los parámetros del enlace para descargar el fichero creado
    a.href = url;
    a.download = file.name;
    a.onclick = destroyClickedElement;
    a.click();
    window.URL.revokeObjectURL(url);
  }


  function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
  }
   
  function openFiles(file) {
    // obtienes una URL para el fichero que acabas de crear
    var url = window.URL.createObjectURL(file);
    window.open(url, "Download");
  }


  //analisis sintactico html

  var tokenActualH=TokenH;
  var controlTokenH;
  var errorSintacticoH = false;  
  var tabH = "";
  var myHtml = "";
  var myJson = "";
  var tabH = "";
  var tabJ = "";


  function parsearHtml()
  {
    tokenActualH=TokenH;
    controlTokenH;
    errorSintacticoH = false;  
    tabH = "";
  
    tabH = "";
    tabJ = "";
      SalidaH.push(new TokenH(TipoH.ULTIMO,"ULTIMO"));
   
      controlTokenH = 0;
      tokenActualH=SalidaH[controlTokenH];
      console.log(tokenActualH.Valor);
      //Llamada al no terminal inicial
      bodyH();

  }

  function bodyH()
  {
    if (tokenActualH.TIPOH == TipoH.SignoAbre)
    {
    myHtml += tabH+tokenActualH.Valor;
    emparejarH(TipoH.SignoAbre);
    }
    TipoEtiqueta();

  }


  function TipoEtiqueta()
   {
      
           if (tokenActualH.TIPOH == TipoH.Etiqueta_Html)
           {
               myHtml += tokenActualH.Valor;
               myJson += "\""+tokenActualH.Valor+"\""+":{"; 
               myJson += "\r\n";
               emparejarH(TipoH.Etiqueta_Html);
               myHtml += tokenActualH.Valor;
               myHtml += "\r\n";
               emparejarH(TipoH.SignoCierre);
               AumentarTabH();
               AumentarTabJ();
               bodyH();
               DisminuirTabH();
               DisminuirTabJ();
               myHtml += tabH+tokenActualH.Valor;
               emparejarH(TipoH.Signo_Fin);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Etiqueta_Html);
               myHtml += tokenActualH.Valor;
               myHtml += "\r\n";
               emparejarH(TipoH.SignoCierre);
               myJson += "}";
           }
           else if (tokenActualH.TIPOH == TipoH.Etiqueta_Head)
           {
               myHtml += tokenActualH.Valor;
               myJson += tabJ+"\""+tokenActualH.Valor+"\""+":{"; 
               myJson += "\r\n";
               emparejarH(TipoH.Etiqueta_Head);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.SignoCierre);
               myHtml += "\r\n";
               AumentarTabH();
               AumentarTabJ();
               bodyH();
               DisminuirTabH();
               DisminuirTabJ();
               myHtml += tabH+tokenActualH.Valor;
               emparejarH(TipoH.Signo_Fin);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Etiqueta_Head);
               myHtml += tokenActualH.Valor;
               myHtml += "\r\n";
               emparejarH(TipoH.SignoCierre);
               myJson +=tabJ+ "}";
               myJson += "\r\n";
               bodyH();
           }
           else if (tokenActualH.TIPOH == TipoH.Etiqueta_Body||tokenActualH.TIPOH == TipoH.texto)
           {
            
            myJson += tabJ+"\""+"body"+"\""+":{"; 
               myJson += "\r\n";
               if(tokenActualH.TIPOH == TipoH.Etiqueta_Body){  
                myHtml += tokenActualH.Valor;
            emparejarH(TipoH.Etiqueta_Body);
               }else{
            AumentarTabJ();
            stilo();
            DisminuirTabJ();
               }
            myHtml += tokenActualH.Valor;
            emparejarH(TipoH.SignoCierre);
            myHtml += "\r\n";
            AumentarTabH();
            AumentarTabJ();
            bodyH();
            DisminuirTabH();
            DisminuirTabJ();
            myHtml += tabH+tokenActualH.Valor;
            emparejarH(TipoH.Signo_Fin);
            myHtml += tokenActualH.Valor;
            emparejarH(TipoH.Etiqueta_Body);
            myHtml += tokenActualH.Valor;
            myHtml += "\r\n";
            myJson +=tabJ+ "}";
            myJson += "\r\n";
            emparejarH(TipoH.SignoCierre);
            

           }
           else if (tokenActualH.TIPOH == TipoH.Etiqueta_Title)
           {
               myHtml += tokenActualH.Valor;
               myJson += tabJ+"\""+tokenActualH.Valor+"\""+":{"; 
               myJson += "\r\n";
               emparejarH(TipoH.Etiqueta_Title);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.SignoCierre);
               AumentarTabJ();
               TextoH();
               DisminuirTabJ();
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Signo_Fin);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Etiqueta_Title);
               myHtml += tokenActualH.Valor;
               myHtml += "\r\n";
               emparejarH(TipoH.SignoCierre);
               myJson +=tabJ+ "}";
               myJson += "\r\n";
               bodyH();

           }
       else if (tokenActualH.TIPOH == TipoH.Etiqueta_Div || tokenActualH.TIPOH == TipoH.texto)
       {
      
        myJson += tabJ+"\""+"div"+"\""+":{"; 
        myJson += "\r\n";
        if(tokenActualH.TIPOH == TipoH.Etiqueta_Div){
            myHtml += tokenActualH.Valor;       
             emparejarH(TipoH.Etiqueta_Div);
        }else{
        AumentarTabJ();
        stilo();
        DisminuirTabJ();
        }
        myHtml += tokenActualH.Valor;
        emparejarH(TipoH.SignoCierre);
        myHtml += "\r\n";
        AumentarTabH();
        AumentarTabJ();
        bodyH();
        DisminuirTabH();
        DisminuirTabJ();
        myHtml += tabH+tokenActualH.Valor;
        emparejarH(TipoH.Signo_Fin);
        myHtml += tokenActualH.Valor;
        emparejarH(TipoH.Etiqueta_Div);
        myHtml += tokenActualH.Valor;
        myHtml += "\r\n";
        emparejarH(TipoH.SignoCierre);
        myJson +=tabJ+ "}";
        myJson += "\r\n";
        bodyH();
       }
       else if (tokenActualH.TIPOH == TipoH.Etiqueta_Br)
       {
            myJson += tabJ+"\""+tokenActualH.Valor+"\""; 
            myJson += "\r\n";
           myHtml += tokenActualH.Valor;
           emparejarH(TipoH.Etiqueta_Br);
           myHtml += tokenActualH.Valor;
           myHtml += "\r\n";
           emparejarH(TipoH.SignoCierre);
           bodyH();

       }
       else if (tokenActualH.TIPOH == TipoH.Etiqueta_P)
       {
        myHtml += tokenActualH.Valor;
        myJson += tabJ+"\""+tokenActualH.Valor+"\""+":{"; 
        myJson += "\r\n";
               emparejarH(TipoH.Etiqueta_P);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.SignoCierre);
               myHtml += "\r\n";
               AumentarTabJ();
              
               AumentarTabH();
               TextoHH();
               DisminuirTabH();
          
               DisminuirTabJ();
               myHtml += "\r\n";
               myHtml += tabH+tokenActualH.Valor;
               emparejarH(TipoH.Signo_Fin);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Etiqueta_P);
               myHtml += tokenActualH.Valor;
               myHtml += "\r\n";
               myJson +=tabJ+ "}";
               myJson += "\r\n";
               emparejarH(TipoH.SignoCierre);
               bodyH();
       }
       else if (tokenActualH.TIPOH == TipoH.Etiqueta_H1)
       {
       
               myHtml += tokenActualH.Valor;
               myJson += tabJ+"\""+tokenActualH.Valor+"\""+":{"; 
               myJson += "\r\n";
               emparejarH(TipoH.Etiqueta_H1);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.SignoCierre);
               AumentarTabJ();
               TextoH();
               DisminuirTabJ();
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Signo_Fin);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Etiqueta_H1);
               myHtml += tokenActualH.Valor;
               myHtml += "\r\n";
               myJson +=tabJ+ "}";
               myJson += "\r\n";
               emparejarH(TipoH.SignoCierre);
               bodyH();
       }
       else if (tokenActualH.TIPOH == TipoH.Etiqueta_Button)
       {
               myHtml += tokenActualH.Valor;
               myJson += tabJ+"\""+tokenActualH.Valor+"\""+":{"; 
               myJson += "\r\n";
               emparejarH(TipoH.Etiqueta_Button);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.SignoCierre);
               AumentarTabJ();
               TextoH();
               DisminuirTabJ();
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Signo_Fin);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Etiqueta_Button);
               myHtml += tokenActualH.Valor;
               myHtml += "\r\n";
               myJson +=tabJ+ "}";
               myJson += "\r\n";
               emparejarH(TipoH.SignoCierre);
               bodyH();
       }
       else if (tokenActualH.TIPOH == TipoH.Etiqueta_Label)
       {
        myHtml +=  tabH+tokenActualH.Valor;
               emparejarH(TipoH.Etiqueta_Label);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.SignoCierre);
               TextoH();
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Signo_Fin);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.Etiqueta_Label);
               myHtml += tokenActualH.Valor;
               emparejarH(TipoH.SignoCierre);
               bodyH();
       }
       else if (tokenActualH.TIPOH == TipoH.Etiqueta_Input)
       {
           myHtml += tokenActualH.Valor; 
           
           myJson += tabJ+"\""+tokenActualH.Valor+"\""; 
           myJson += "\r\n";
           emparejarH(TipoH.Etiqueta_Input);
           myHtml += tokenActualH.Valor;
           myHtml += "\r\n";
           emparejarH(TipoH.SignoCierre);
           bodyH();
       }
       else {
            
               }

   }

   function etiquetaBR(){
    if (tokenActualH.TIPOH == TipoH.TipoH.SignoAbre)
    {
         myHtml += tabH+tokenActualH.Valor;
        emparejarH(TipoH.SignoAbre);
         myJson += tabJ+"\""+tokenActualH.Valor+"\""; 
         myJson += "\r\n";
        myHtml += tokenActualH.Valor;
        emparejarH(TipoH.Etiqueta_Br);
        myHtml += tokenActualH.Valor;
        myHtml += "\r\n";
        emparejarH(TipoH.SignoCierre);
        

    }else{

    }
   }

   var textoM;
   var vinoTexto=false;
   function TextoH(){
       
    if (tokenActualH.TIPOH == TipoH.texto)
    {    
        vinoTexto = true;
        myHtml += tabH+tokenActualH.Valor+" ";
        textoM += tokenActualH.Valor+" ";
        //myJson += tabJ+"texto"+":"+"\""+tokenActualH.Valor+"\""; 
        //myJson += "\r\n";
        emparejarH(TipoH.texto);
        TextoH();
        
       
    }
    else if (tokenActualH.TIPOH == TipoH.SignoAbre || SalidaH[controlTokenH+1].TIPO == TipoH.Etiqueta_Br)
    {
        myHtml += tokenActualH.Valor;
        emparejarH(TipoH.SignoAbre);
        
        myJson += tabJ+"\""+tokenActualH.Valor+"\""; 
        myJson += "\r\n";
        myHtml += tokenActualH.Valor;
        emparejarH(TipoH.Etiqueta_Br);
        myHtml += tokenActualH.Valor;
        
        emparejarH(TipoH.SignoCierre);
        TextoH();

    }
    else{

    }
   }


   function TextoHH(){

 if (tokenActualH.TIPOH == TipoH.texto)
 {    
     vinoTexto = true;
     myHtml += tabH+tokenActualH.Valor+" ";
     //textoM += tokenActualH.Valor+" ";
     myJson += tabJ+"texto"+":"+"\""+tokenActualH.Valor+"\""; 
     myJson += "\r\n";
     //myJson += tabJ+"texto"+":"+"\""+tokenActualH.Valor+"\""; 
     //myJson += "\r\n";
     emparejarH(TipoH.texto);
     TextoHH();
     
    
 }
 else if (tokenActualH.TIPOH == TipoH.SignoAbre || SalidaH[controlTokenH+1].TIPO == TipoH.Etiqueta_Br)
 {
     myHtml += tokenActualH.Valor;
     emparejarH(TipoH.SignoAbre);
     
     myJson += tabJ+"\""+tokenActualH.Valor+"\""; 
     myJson += "\r\n";
     myHtml += tokenActualH.Valor;
     emparejarH(TipoH.Etiqueta_Br);
     myHtml += tokenActualH.Valor;
     
     emparejarH(TipoH.SignoCierre);
     myHtml += "\r\n";
     TextoHH();

 }
 else{

 }
}



function TextoH(){
    if (tokenActualH.TIPOH == TipoH.texto)
    {    
        myHtml += tokenActualH.Valor;
       
        myJson += tabJ+"texto"+":"+"\""+tokenActualH.Valor+"\""; 
        myJson += "\r\n";
        emparejarH(TipoH.texto);
        
       
    }else{

    }
   }

   function stilo(){
    if (tokenActualH.TIPOH == TipoH.texto)
    {   

        var stilot;
        stilot = tokenActualH.Valor;
        stilot.split("\"");
        var jsonText="";
        myHtml += tokenActualH.Valor;
        emparejarH(TipoH.Texto);
        console.log("cadenotaaaaaaa");
        for (var i=0; i < stilot.length; i++) {
            if(stilot[i]=="\""){
                 for ( var b = i+1; b<stilot.length;b++){
                        if(stilot[b]=="\""){
                            break;
                        }
                        else{

                             jsonText += stilot[b];
                        }
                 }
                 break;
            }
            console.log(stilot[i] + " / ");
         }
        
        myJson += tabJ+"style"+":"+"\""+jsonText+"\","
        myJson += "\r\n";
        
       
    }else{

    }
   }

  function emparejarH(tipo)
   {
     
               controlTokenH += 1;
               tokenActualH = SalidaH[controlTokenH];
           
       
   }


   function DisminuirTabH() {
    var tamanio = tabH.length;
    tabH = "";
    var i;
    for (i = 0; i < tamanio-1; i++)
    {
        tabH += "\t";
    }
}

function AumentarTabH() {
    tabH += "\t";
}



function DisminuirTabJ() {
    var tamanio = tabJ.length;
    tabJ = "";
    var i;
    for (i = 0; i < tamanio-1; i++)
    {
        tabJ += "\t";
    }
}

function AumentarTabJ() {
    tabJ += "\t";
}