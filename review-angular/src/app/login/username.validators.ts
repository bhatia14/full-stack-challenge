import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "../../../node_modules/@angular/forms/forms";

export class UsernameValidators{
    static connotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            return {
                connotContainSpace: true
            };
        }
        return null;
    }
}