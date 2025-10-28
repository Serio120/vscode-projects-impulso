
    const string1 = "Una cadena primitiva";
    console.log(string1);
    const string2 = 'También una cadena primitiva';
    console.log(string2);
    const string3 = `Otra cadena primitiva más con un ${"template"}`;
    console.log(string3);
    const string4 = new String("Un objeto String");
    console.log(string4);
    console.log(string4.valueOf);
    console.log(string4["valueOf"]);
    const nombreF = "valueOf";
    console.log(string4[nombreF]);
    console.log(string4.valueOf()); 
    console.log(typeof(string1));
    console.log(typeof(string4));
    console.log(typeof(string4[nombreF]));
