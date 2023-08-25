import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {
  reactiveMenu: MenuItem[] = [
    { title: 'Básicos', route: './reactive/basic'},
    { title: 'Dynamics', route: './reactive/dynamic'},
    { title: 'Switches', route: './reactive/switches'},
  ]
  
  authMenu: MenuItem[] = [
    { title: 'Sign-up', route: './auth/sign-up'},
  ]
}
