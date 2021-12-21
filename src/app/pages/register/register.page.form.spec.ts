import { FormBuilder, FormGroup } from "@angular/forms";
import { RegisterPageForm } from "./register.page.form";

describe('LoginPageForm',() =>{

    let registerPageForm: RegisterPageForm;
    let form: FormGroup;

    beforeEach(() =>{
        registerPageForm = new RegisterPageForm(new FormBuilder());
        form = registerPageForm.createForm();
    })

    it('deveria criar um form de login vazio',  () =>{
        expect(form).not.toBeNull();
        expect(form.get('name')).not.toBeNull();
        expect(form.get('name').value).toEqual("");
        expect(form.get('name').valid).toBeFalsy();

        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('email').valid).toBeFalsy();

        expect(form.get('senha')).not.toBeNull();
        expect(form.get('senha').value).toEqual("");
        expect(form.get('senha').valid).toBeFalsy();

        expect(form.get('confirmarSenha')).not.toBeNull();
        expect(form.get('confirmarSenha').value).toEqual("");
        expect(form.get('confirmarSenha').valid).toBeFalsy();

        expect(form.get('telefone')).not.toBeNull();
        expect(form.get('telefone').value).toEqual("");
        expect(form.get('telefone').valid).toBeFalsy();
    })

    it('deveria ter um email inválido caso o email não seja válido', () =>{
        form.get('email').setValue('email inválido');

        expect(form.get('email').valid).toBeFalsy();
    })

    it('deveria ter um email valido se o email for valido', () =>{
        form.get('email').setValue('valid@email.com');

        expect(form.get('email').valid).toBeTruthy();
    })

    it('devveria ter um formulário válido',() =>{
        form.get('email').setValue('valid@email.com');
        form.get('senha').setValue("anyPassword");

        expect(form.valid).toBeTruthy();
    })
})