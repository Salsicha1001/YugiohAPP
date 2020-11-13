import { UserService } from './../Services/User/user.service';
import { UserModel } from './../Model/User.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';
import { LoadingController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  dateBr: any
  constructor(private fb: FormBuilder,
    private validateBrService: ValidateBrService,
    private userService: UserService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertController: AlertController) { }
  form: FormGroup = this.fb.group({
    'firstName': ['', [Validators.required]],
    'lastName': ['', [Validators.required]],
    'cpf': ['', [this.validateBrService.cpf]],
    'birthday': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'phone': ['', [Validators.required]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', [Validators.required, Validators.minLength(6)]],

  }, {
    validators: this.matchingPasswords
  })
  ngOnInit() {
  }
  matchingPasswords(group: FormGroup) {
    if (group) {
      const password = group.controls['password'].value;
      const password2 = group.controls['password2'].value;
      if (password == password2) {
        return null;
      }
    }
    return { macthing: false }
  }
 async signupUser() {
   let loader = await this.presentLoading();
   delete this.form.value['password2']
    console.log(this.form.value.birthday)
    let a = this.form.value.birthday.slice(0, 10)
    this.convertDataBr(a)
    console.log(this.dateBr)
    this.form.value.birthday = this.dateBr
    this.userService.addUser(this.form.value).subscribe((u) => {
      if (u != false) {
        loader.dismiss()
        this.alert()
        this.navCtrl.navigateRoot('login')
      } else {
        this.alertErro()
      }
    })


  }

  convertDataBr(a) {
    a = a.replaceAll("-", "/")
    let year = a.slice(0, 4)
    let monty = a.slice(5, 7)
    let day = a.slice(8, 10)
    this.dateBr = day + '/' + monty + '/' + year
  }
  async presentLoading() {
    let loader = await this.loadingCtrl.create({
      message: "Criando Usuario"
    });
    await loader.present();
    return loader;
  }
  async alert() {
    const alert = await this.alertController.create({
     
      header: 'Sucesso',
      message: 'Usuario criado com sucesso, ja pode logar.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async alertErro() {
    const alert = await this.alertController.create({
     
      header: 'Houve um erro ao criar o usuario',
      message: 'Tente novamente daqui uns minutos',
      buttons: ['OK']
    });

    await alert.present();
  }
}
