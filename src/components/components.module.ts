import { NgModule } from '@angular/core';
import { PerguntasComponent } from './perguntas/perguntas';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil';
@NgModule({
	declarations: [PerguntasComponent,
    MeuPerfilComponent],
	imports: [],
	exports: [PerguntasComponent,
    MeuPerfilComponent]
})
export class ComponentsModule {}
