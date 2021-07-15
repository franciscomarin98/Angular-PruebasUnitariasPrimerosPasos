import { FormBuilder } from '@angular/forms';
import { FormularioLogin } from './formulario';



describe('Pruebas de forms', () => {
  let component: FormularioLogin;


  beforeEach(() => {
    component = new FormularioLogin(new FormBuilder());
  });


  it('Debe de crear un formulario con dos campos: email y password', () => {

    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();

  });

  it('El email debe ser obligatorio', () => {
    const control = component.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('El email ingresado deber ser válido', () => {
    const control = component.form.get('email');
    control.setValue('test@test.com');
    console.log(control.valid);
    expect(control.valid).toBeTruthy();
  });

});
