import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { OptimizacionRutasComponent } from "./optimizacion-rutas/optimizacion-rutas.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-tracking',
    standalone: true,
    templateUrl: './tracking.component.html',
    styleUrl: './tracking.component.css',
    imports: [HeaderComponent, OptimizacionRutasComponent, FooterComponent]
})
export class TrackingComponent {

}
