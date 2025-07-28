import { Routes } from '@angular/router';
import { Mmorpg } from './Components/mmorpg/mmorpg';
import { Permadeath } from './Components/permadeath/permadeath';
import { Pixel } from './Components/pixel/pixel';
import { Sailing } from './Components/sailing/sailing';
import { Shooter } from './Components/shooter/shooter';
import { Superhero } from './Components/superhero/superhero';

export const routes: Routes = [
    {path: '' , redirectTo:()=>{
        return 'mmorpg'
    } , pathMatch:"full"},
    {path: 'mmorpg' , component : Mmorpg},
    {path: 'permadeath' , component : Permadeath},
    {path: 'pixel' , component : Pixel},
    {path: 'sailing' , component : Sailing},
    {path: 'shooter' , component : Shooter},
    {path: 'superhero' , component : Superhero},
];
