import { Injectable} from '@nestjs/common';
import { v4 } from 'uuid';
import {exec} from 'child_process';
import { FileFunctions } from './utils/FileFunctions';
import fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class OperationService{
  sumar(numero1:number,numero2:number):number{
    return Number(numero1)+Number(numero2);
  }

  restar(numero1:number,numero2:number):number{
    return Number(numero1)-Number(numero2);
  }

  multiplicar(numero1:number,numero2:number):number{
    return numero1*numero2;
  }

  dividir(numero1:number,numero2:number):number{
    if(Number(numero2)===0){
      return null;
    }
    else{
      return numero1/numero2;
    }
  }
}


@Injectable()
export class CompilerService {
  compileWithJava(className,code){
    const extention='java'
    const resultsFolder=`./compilerResults/${v4()}`;
    const javaFileDirectory=`${resultsFolder}/${className}.${extention}`;
    const command=`javac ${javaFileDirectory} && java -cp ${resultsFolder} ${className}`;

    console.log(command);

    const fileFuntcions=new FileFunctions();
    fileFuntcions.CreateDirectory(resultsFolder);
    fileFuntcions.WriteFile(javaFileDirectory,code);

    // exec(command, 
    //   (err, stdout) => {
    //                     if (err) {return;}
    //                     console.log(stdout)
    //                     return(stdout);}
    //     );

  }

}







