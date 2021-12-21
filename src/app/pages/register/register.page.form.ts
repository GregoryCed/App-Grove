import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class RegisterPageForm{
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm() : FormGroup {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            senha: ['', [Validators.required]],
            confirmarSenha: ['', [Validators.required]],
            telefone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
            ocupacao: ['', [Validators.required]]
            
        });
    } 
}