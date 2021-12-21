import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm',() =>{

    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach(() =>{
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    })

    it('deveria criar um form de login vazio',  () =>{
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('email').valid).toBeFalsy();
        expect(form.get('senha')).not.toBeNull();
        expect(form.get('senha').value).toEqual("");
        expect(form.get('senha').valid).toBeFalsy();
    })

    it('deveria ter um email inválido caso o email não seja válido', () =>{
        form.get('email').setValue('email inválido');

        expect(form.get('email').valid).toBeFalsy();
    })

    it('deveria ter um email vvalido se o email for valido', () =>{
        form.get('email').setValue('valid@email.com');

        expect(form.get('email').valid).toBeTruthy();
    })

    it('devveria ter um formulário válido',() =>{
        form.get('email').setValue('valid@email.com');
        form.get('senha').setValue("anyPassword");

        expect(form.valid).toBeTruthy();
    })
})